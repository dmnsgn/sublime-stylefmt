import sublime
import sublime_plugin
import json
from os.path import dirname, realpath, join, splitext

try:
	# Python 2
	from node_bridge import node_bridge
except:
	from .node_bridge import node_bridge

BIN_PATH = join(dirname(realpath(__file__)), 'cssfmt.js')

class CssfmtCommand(sublime_plugin.TextCommand):
	def run(self, edit):

		if int(sublime.version()) >= 3080:
			self.sublime_vars = self.view.window().extract_variables()
		else:
			file = self.view.file_name()
			self.sublime_vars = {
				'file': file,
				'file_path': dirname(file)
			}

		if not self.has_selection():
			sublime.status_message('CSSfmt: format file ' + self.sublime_vars['file'])
			region = sublime.Region(0, self.view.size())
			originalBuffer = self.view.substr(region)
			formatted = self.format(originalBuffer)
			if formatted:
				self.view.replace(edit, region, formatted)
			return

		for region in self.view.sel():
			sublime.status_message('CSSfmt: format region(s) in ' + self.sublime_vars['file'])
			if region.empty():
				continue
			originalBuffer = self.view.substr(region)
			formatted = self.format(originalBuffer)
			if formatted:
				self.view.replace(edit, region, formatted)

	def format(self, data):
		try:
			return node_bridge(data, BIN_PATH, [json.dumps({
					'file_path': self.sublime_vars['file_path']
				})])
		except Exception as e:
			sublime.error_message('CSSfmt\n%s' % e)
			raise

	def has_selection(self):
		return any(not region.empty() for region in self.view.sel())

	@staticmethod
	def get_setting(view, key):
		settings = view.settings().get('CSSfmt')
		if settings is None:
			settings = sublime.load_settings('CSSfmt.sublime-settings')
		return settings.get(key)

class CssfmtPreSaveCommand(sublime_plugin.EventListener):
	def on_pre_save(self, view):

		if CssfmtCommand.get_setting(view, 'formatOnSave') is False:
			return

		if int(sublime.version()) >= 3080:
			self.sublime_vars = view.window().extract_variables()
		else:
			self.sublime_vars = {
				'file_extension': splitext(view.file_name())[1][1:]
			}

		if self.sublime_vars['file_extension'] in ('css', 'scss'):
			view.run_command('cssfmt')

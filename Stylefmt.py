import sublime
import sublime_plugin
import json
from os.path import dirname, realpath, join, splitext, basename

try:
	# Python 2
	from node_bridge import node_bridge
except:
	from .node_bridge import node_bridge

BIN_PATH = join(sublime.packages_path(), dirname(realpath(__file__)), 'stylefmt.js')


def get_setting(view, key):
	settings = view.settings().get('Stylefmt')
	if settings is None:
		settings = sublime.load_settings('Stylefmt.sublime-settings')
	return settings.get(key)


def is_valid_syntax(view):
	return splitext(basename(view.settings().get('syntax')))[0] in ('CSS', 'SCSS')


class StylefmtCommand(sublime_plugin.TextCommand):

	def run(self, edit):
		if int(sublime.version()) >= 3080:
			self.sublime_vars = self.view.window().extract_variables()
		else:
			file = self.view.file_name()
			self.sublime_vars = {
				'file': file,
				'file_path': dirname(file)
			}

		file_name = self.sublime_vars['file'] if 'file' in self.sublime_vars else 'unsaved buffer'

		if not self.has_selection():
			sublime.status_message('Stylefmt: format ' + file_name)
			region = sublime.Region(0, self.view.size())
			originalBuffer = self.view.substr(region)
			formatted = self.format(originalBuffer)
			if formatted:
				self.view.replace(edit, region, formatted)
			return

		for region in self.view.sel():
			sublime.status_message('Stylefmt: format region(s) in ' + file_name)
			if region.empty():
				continue
			originalBuffer = self.view.substr(region)
			formatted = self.format(originalBuffer)
			if formatted:
				self.view.replace(edit, region, formatted)

	def format(self, data):
		try:
			if 'file_path' in self.sublime_vars:
				return node_bridge(data, BIN_PATH, [json.dumps({
					'file_path': self.sublime_vars['file_path']
					})])
			else:
				return node_bridge(data, BIN_PATH)

		except Exception as e:
			sublime.error_message('Stylefmt\n%s' % e)
			raise

	def has_selection(self):
		return any(not region.empty() for region in self.view.sel())


class StylefmtPreSaveCommand(sublime_plugin.EventListener):

	def on_pre_save(self, view):
		if get_setting(view, 'formatOnSave') is True and is_valid_syntax(view):
			view.run_command('stylefmt')

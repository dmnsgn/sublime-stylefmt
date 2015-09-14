import sublime
import sublime_plugin
import json
from os.path import dirname, realpath, join

try:
	# Python 2
	from node_bridge import node_bridge
except:
	from .node_bridge import node_bridge

BIN_PATH = join(dirname(realpath(__file__)), 'cssfmt.js')

class CssfmtCommand(sublime_plugin.TextCommand):
	def run(self, edit):

		if not self.has_selection():
			sublime.status_message('CSSfmt: format file')
			region = sublime.Region(0, self.view.size())
			originalBuffer = self.view.substr(region)
			formatted = self.format(originalBuffer)
			if formatted:
				self.view.replace(edit, region, formatted)
			return

		for region in self.view.sel():
			sublime.status_message('CSSfmt: format region(s)')
			if region.empty():
				continue
			originalBuffer = self.view.substr(region)
			formatted = self.format(originalBuffer)
			if formatted:
				self.view.replace(edit, region, formatted)

	def format(self, data):
		try:
			return node_bridge(data, BIN_PATH)
		except Exception as e:
			sublime.error_message('CSSfmt\n%s' % e)
			raise

	def has_selection(self):
		return any(not region.empty() for region in self.view.sel())

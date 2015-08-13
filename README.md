# sublime-cssfmt
Sublime Text plugin for CSSfmt

## Install

### Package Control

Install `CSSfmt` with [Package Control](https://sublime.wbond.net) and restart Sublime.

**You need to have [Node.js](http://nodejs.org) installed.**  
Make sure it's in your $PATH by running `node -v` in your command-line.

> Note: On OS X it's expected that Node resides in the /usr/local/bin/ folder, which it does when installed with the default installer. If this is not the case, symlink your Node binary to this location:  
`ln -s /full/path/to/your/node /usr/local/bin/node`

### Install

1) Open the Command Palette *(Cmd+Shift+P)*

2) Select Package Control > Add Repository

3) Paste in https://github.com/dmnsgn/sublime-cssfmt


### Keyboard shortcut

You can also set up a keyboard shortcut to run the command by opening up "Preferences > Key Bindings - User" and adding your shortcut with the `cssfmt` command.

Example:

```json
[
	{ "keys": ["alt+super+f"], "command": "cssfmt" }
]
```

## License

Based on [FixMyJS plugin](https://github.com/addyosmani/sublime-fixmyjs) by Addy Osmani.

ISC © [Damien Seguin](http://dmnsgn.me)

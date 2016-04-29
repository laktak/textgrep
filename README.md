# textgrep

[![NPM version](https://img.shields.io/npm/v/textgrep.svg?style=flat-square)](http://www.npmjs.com/package/textgrep)

# Usage

```
usage: textgrep [OPTIONS] PATTERN [FORMAT] [FLAGS]

  textgrep can be used to extract regex matches from a string.

  Unless -f is specified the text will be read from stdin.

  PATTERN
  Specifies the regex you wish to match and capture.
  Follows the JavaScript RegExp syntax, see
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  Use [^]*? to match any character over multiple lines.

  FORMAT
  Specifies the format to output the captured groups.
  You can use {#} to reference a group where # is the index.
  Escapes (like \n, \t) are allowed.
  Default: {1}\n

  FLAGS
  Specifies the regex flags (see MDN).
  Default: gm

  OPTIONS
  -f=FILE:     will read the text from the given file.
  --:          stops evaluation of options
               (allows the PATTERN to start with -)
  --?|--help:  shows this help screen.

Sample:
  man ls | col -bx | textgrep '^     -(\w+)\s+([^]*?)^$' '   -{1} means: {2}\n\n'
```

# Install from npm

```
npm install textgrep -g
```

# API

[see lib/textgrep.js](lib/textgrep.js)

/*! @preserve
 * textgrep
 *
 * Copyright 2016 Christian Zangl, MIT license
 * Details and documentation:
 * https://github.com/laktak/textgrep
 */

function grep(text, pattern, format, flags) {

  var re=new RegExp(pattern, flags||"gm"), match;
  var res="";
  format=unescapeStr(format||"{1}\\n");

  while ((match=re.exec(text))!==null) {
    res+=sformat(format, match);
  }

  return res;
}

var reFormat=[];

function sformat(format, args) {
  for (var i=0; i<args.length; i++) {
    var re=reFormat[i], arg=args[i];
    if (!re) re=reFormat[i]=new RegExp("\\{"+i+"\\}", "gi");
    format=format.replace(re, args[i]);
  }
  return format;
};

function unescapeStr(text) {
  // replace escaped chars like \n \u....
  return unescape(JSON.parse('"'+text.replace('"', '\\"')+'"') );
}

module.exports={
  grep: grep,
  format: sformat,
};

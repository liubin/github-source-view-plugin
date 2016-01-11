var color, space_ch, tab_str, enter_ch;

function initConfig(){
  chrome.runtime.sendMessage({action: "get_conf"}, function(response) {
    color = response.color;
    space_ch = response.space_ch;
    tab_str = response.tab_str;
    enter_ch = response.enter_ch;
    showSpaces();
  });
}

function replaceChar(s){
  var b = s.replace(/&nbsp;/g, "<span style='color:" + color + ";'>" + space_ch + "</span>");
  b = b.replace(/ /g, "<span style='color:" + color + ";'>" + space_ch + "</span>");
  b = b.replace(/\t/g, "<span style='color:" + color + ";'>" + tab_str + "</span>");
  return b;
}

function replaceLine(line){
  var len = line.length;
  var inTag = false;
  var start = 0;
  var ret = '';

  for(i = 0; i < len; i++){
    if(line.charAt(i) == '<'){
      inTag = true;
      if(i > start){
        ret = ret + replaceChar(line.substr(start, i - start));
      }
      start = i;
    } else if(line.charAt(i) == '>' && inTag){
      inTag = false;
      ret = ret + line.substr(start, i - start + 1);
      start = i + 1;
    }
  }

  if(start <= len -1){
    ret = ret + replaceChar(line.substr(start));
  }
  return ret;
}

function showSpaces(){

  var a = $('table.js-file-line-container')[0];

  if (a == undefined) return;

  $(a).find("td.blob-code").each(function(i){
    var e = $(this);
    e.html(replaceLine(e.html()));
    e.append("<span style='color:" + color + ";'>" + enter_ch + "</span>");
  })

}

initConfig();



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

function showSpaces(){

  var a = $('div.code-body')[0];

  if (a == undefined) return;

  $(a).find("div.line").each(function( index ) {
    if ($(this).html() != '<br>'){
      $(this).append("<span style='color:" + color + ";'>" + enter_ch + "</span>");
    }
  });

  var b = $(a).html();
  b = b.replace(/&nbsp;/g, "<span style='color:" + color + ";'>" + space_ch + "</span>");
  b = b.replace(/> </g, "><span style='color:" + color + ";'>" + space_ch + "</span><");
  b = b.replace(/\t/g, "<span style='color:" + color + ";'>" + tab_str + "</span>");
  $(a).html(b);
}

initConfig();

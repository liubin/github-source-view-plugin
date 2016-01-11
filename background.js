function initMessage(){
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action == "get_conf"){
        var conf = getConf();
        sendResponse(conf);
      }
    });
}

function getConf(){
  var color = localStorage['color'];
  if (color == undefined ){
    color = '#f90';
  }

  var space_ch = localStorage['space_ch'];
  if (space_ch == undefined ){
    space_ch = '.';
  }

  var tab_ch = localStorage['tab_ch'];
  if (tab_ch == undefined ){
    // tab_ch = '﹏';
    tab_ch = '░░';
  }
  var tab_str = tab_ch;
  for(i = 0; i< 3; i ++){
    tab_str = tab_str + tab_ch;
  }

  var enter_ch = localStorage['enter_ch'];
  if (enter_ch == undefined ){
    enter_ch = '↙';
  }
  var conf = {color: color, space_ch: space_ch, tab_str: tab_str, enter_ch: enter_ch};
  return conf;
}

initMessage();

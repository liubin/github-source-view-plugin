function showSpaces(){
  var a = $('div.code-body')[0];

  $(a).find("div.line").each(function( index ) {
    if ($(this).html() != '<br>'){
      $(this).append("<span style='color:#f90;'>↙</span>");
    }
  });

  var b = $(a).html();
  b = b.replace(/&nbsp;/g,"<span style='color:#f90;'>.</span>");
  b = b.replace(/> </g,"><span style='color:#f90;'>.</span><");
  b = b.replace(/\t/g,"<span style='color:#f90;'>﹏﹏﹏﹏</span>");
  $(a).html(b);
}

showSpaces();

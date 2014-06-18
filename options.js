var keys = ['color', 'space_ch', 'tab_ch', 'enter_ch'];

function save_options() {

  $.each(keys, function(index, val){
    save_1option(val);
  });

  $("#status").html("Options Saved.");
  setTimeout(function() {
    $("#status").html("");
  }, 1500);
}

function save_1option(k){
  var v = $("#" + k).val();
  localStorage[k] = v;
}

function restore_options() {
  $.each(keys, function(index, val){
    restore_1option(val);
  });
}

function restore_1option(k) {
  var v = localStorage[k];
  if (v == undefined) {
    return;
  }
  $("#" + k).val(v);
}

$(function(){
  $( "#save" ).on( "click", save_options);
  restore_options();
});

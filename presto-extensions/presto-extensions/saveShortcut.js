$(document).bind('keydown', function(e) {
  if(e.ctrlKey && (e.which == 83)) {
    e.preventDefault();
    $("#dnn_ctr628_Edit_btnSaveDraft2").click();
    alert('Ctrl+S');
    return false;
  }
});
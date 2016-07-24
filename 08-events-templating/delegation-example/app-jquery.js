$(function() {
  var $delegate = $('#two')
  $delegate.on('click', 'button', function(e) {
    alert(e.target.id + ' clicked');
  });
});

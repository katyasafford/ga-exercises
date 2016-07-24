window.addEventListener('load', function() {
  var delegate = document.getElementById('two');
  delegate.addEventListener('click', function(e) {
    if(e.target.nodeName === 'BUTTON') {
      alert(e.target.id + ' clicked');
    }
  })
});

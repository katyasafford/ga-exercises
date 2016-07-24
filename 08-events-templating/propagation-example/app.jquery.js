$(function() {
  var $divs = $('div');

  $divs.on('click', 'button',  alertCurrentElement);

  function alertCurrentElement(event) {
    alert(event.delegateTarget.id);

    // if you want the event to stop bubbling/capturing
    // event.stopPropagation();
  }
});

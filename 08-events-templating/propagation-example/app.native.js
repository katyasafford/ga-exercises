window.addEventListener('load', function() {

  var divs = document.getElementsByTagName('div');

  // add an event listener to each div to capture a click event.
  divs.forEach(function(div) {

    // Bubbling Event Handler
    //
    // Since we didn't provider a a third argument to addEventListener, it will
    // default to bubbling mode. You can also set the third argument to `false`
    div.addEventListener('click', alertCurrentElement)

    // Capturing Event Handler
    //
    // To run event handlers during the capture phase, set the third argument to `true`
    // div.addEventListener('click', alertCurrentElement, true)
  });

  function alertCurrentElement(event) {
    alert(event.currentTarget.id);

    // if you want the event to stop bubbling/capturing
    // event.stopPropagation();
  }
});

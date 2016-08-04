/**
 * Independent Practice
 *
 * Making a to do list: event delegation
 *
 * Currently, each $completeTaskLink has an event listener attached to it. Update
 * the code to use event delegation. Instead of one event handler for each
 * $completeTaskLink, there should be a single event handler on the $todoList.
 * When additional items are added the list the event handler should just work.
 *
 * Bonus: When the user mouses over each item, the item should turn grey.
 *        Don't use CSS hovering for this.
 *
 * Bonus: Add a link after each item that allows you to delete the item.
 */

$(document).ready(function() {

  var $todoList = $('#todo-list');
  var $items = $('.todo-item');
  var $button = $('#new-item-button');
  var $newItemInput = $('#new-item');

  //add a few items to the list by default
  addItem('Buy Milk');
  addItem('Pay Bills');
  addItem('Feed the dog');
  addItem('Water the plants');

  // var myHTML      = $("#todo-item-template").html();
  // var itemTemplate = Handlebars.compile(myHTML);
  // var itemHTML     = itemTemplate({item: 'Buy some milk!'});
  // $myList.append(itemHTML);


  $todoList.on('click', ".complete-task", function(e) {
      $(this).parent().addClass('completed');
      $(this).remove();
  });

  // add a click handler for the button, which adds an item to the todo list
  $button.on('click', function (event) {
    event.preventDefault();

    var itemText = $newItemInput.val();
    if (!itemText) {
      alert('You must type in a value!');
      return;
    }

    clearInput();
    addItem(itemText);
  });

  /**
   * addItem creates a new list item (li) for the given string. It also adds a
   * 'complete task' link to the end of the item.
   *
   * @param {String} todp A string of the to do item to add. ex: 'Feed the dog'
   */
  function addItem(todo) {
    var source = $("#todo-item-template").html()
    var todoTemplate = Handlebars.compile(source);
    var itemObject = {
      item: todo // item is what we have in html doc
    }
    var liHtml = todoTemplate(itemObject);
    console.log(liHtml);
    $todoList.append(liHtml);
  }

  /**
   * clearInput clears the input field
   */
  function clearInput() {
    $newItemInput.val('');
  }
});

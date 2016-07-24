/**
 * ToDoList is the underlying data structure that lets me manage todo tasks. This
 * will let me separate the business logic from my view logic. Notice that nothing
 * in this ToDoList object touches or manipulates the DOM.
 *
 * This means that no matter how I choose to show these items to the user, the
 * data structure stays the same.
 *
 * @type {Object}
 */
var ToDoList = {
  items: [
    {task: 'Buy Milk', status: 'incomplete'},
    {task: 'Pay Bills', status: 'incomplete'},
    {task: 'Feed the dog', status: 'incomplete'},
    {task: 'Water the plants', status: 'incomplete'}
  ],

  addItem: function(item) {
    this.items.push(item);
  },

  completeTask: function(taskName) {
    var item = this.getItemByTaskName(taskName);
    item.status = 'complete';
  },

  removeItem: function(taskName) {
    var item = this.getItemByTaskName(taskName)

    // if we got an item back from find
    if(item) {
      // figure out when index it has in our items array
      var idx = this.items.indexOf(item);
      // use splice to delete it from the array
      this.items.splice(idx, 1);
    }
  },

  getItemByTaskName: function(taskName) {
    // this uses the array.find method, read about it in the docs
    return this.items.find(function(item, currentIndex) {
      return item.task === taskName;
    });
  }
};


/**
 * This code handles DOM interaction, using the underlying ToDoList object.
 */
$(function() {

  var $todoList = $('#todo-list');
  var $items = $('.todo-item');
  var $button = $('#new-item-button');
  var $newItemInput = $('#new-item');

  $button.on('click', addTaskHandler);
  $todoList.on('click', '.todo-item .complete-task', completeTaskHandler);
  $todoList.on('click', '.todo-item .delete-task', deleteTaskHandler);
  $todoList.on('mouseenter mouseleave', '.todo-item', hoverHandler);

  // renders the initial list of data
  render();

  function addTaskHandler(event) {
    event.preventDefault(); // stops the form submission

    var itemText = $newItemInput.val();
    if (!itemText) {
      alert('You must type in a value!');
      return;
    }

    ToDoList.addItem({
      task: itemText,
      state: 'incomplete'
    });

    render();
    clearInput();
  }

  function render() {
    $todoList.empty()

    ToDoList.items.forEach(function(item) {
      var li = t('#item-template', item)
      $todoList.append(li);
    });
  }

  function completeTaskHandler() {
    var taskName = $(this).parent().find('.task-name').text();
    ToDoList.completeTask(taskName);
    render();
  }

  function deleteTaskHandler(event) {
    var taskName = $(this).parent().find('.task-name').text();
    ToDoList.removeItem(taskName);
    render();
  }

  function hoverHandler(event) {
    var $li = $(this);
    switch(event.type) {
      case 'mouseenter':
        $li.addClass('hover');
        break;
      case 'mouseleave':
        $li.removeClass('hover');
        break;
    }
  }

  function clearInput() {
    $newItemInput.val('');
  }

  /**
   * t helper function to make using handle bars so much easier!
   * @param  {String} templateSelector jquery CSS selector to get the template
   * @param  {Object} obj              The object to use for handlerbar context
   * @return {String}                  compiled HTML string
   */
  function t(templateSelector, obj) {
    var source   = $(templateSelector).html();
    var template = Handlebars.compile(source);
    return template(obj);
  }
});

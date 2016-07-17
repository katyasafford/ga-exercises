var inputField = document.getElementById("new-thing");
var btn = document.getElementById("new-thing-button");
var list = document.getElementById("fav-list");
var imgContainer = document.getElementById('img')

btn.onclick = function(e) {
  e.preventDefault();
  var newListItem = document.createElement('li');
  newListItem.innerHTML = inputField.value;

  var url = imgContainer.value;

  var newImageItem = document.createElement('img');
  newListItem.appendChild(newImageItem);

  newImageItem.setAttribute("src", url);

  if (inputField.value !== "") {
    list.appendChild(newListItem);
  }
  inputField.value="";
}

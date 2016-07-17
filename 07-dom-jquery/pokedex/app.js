var pokemonNameField = document.getElementById("pokemon-name");
var addBtn = document.getElementById("add-pokemon");
var pokemonList = document.getElementById("pokemon-list");

addBtn.onclick = function() {
  var newListItem = document.createElement('li');
  //innerHTML - do add something to the tag
  newListItem.innerHTML = pokemonNameField.value;
  pokemonList.appendChild(newListItem);
};

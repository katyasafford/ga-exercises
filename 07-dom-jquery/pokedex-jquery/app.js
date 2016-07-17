$(function() {
  var $pokemonNameField = $("#pokemon-name");
  var $addBtn = $("#add-pokemon");
  var $pokemonList = $("#pokemon-list");

  $addBtn.on('click', function() {
    $pokemonList.append('<li>' + $pokemonNameField.val() + '</li>');
  });
});
//   addBtn.onclick = function() {
//     var newListItem = document.createElement('li');
//     //innerHTML - do add something to the tag
//     newListItem.innerHTML = pokemonNameField.value;
//     pokemonList.appendChild(newListItem);
//     pokemonNameField.value = "";
//   };
// })

var github_url = 'https://api.github.com/users/katyasafford';
var random_name_url = 'http://randomword.setgetgo.com/get.php';

//always use this, so that code will run only after page has loaded
window.addEventListener('load', function() {
  var github_btn = document.getElementById("github-button");
  var random_name_btn = document.getElementById('random-name');

  github_btn.onclick = function() {
    get_api(github_url);
  }

  random_name_btn.onclick = function() {
    get_api(random_name_url);
  }

});

function get_api(url) {

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE) {
      if(this.status === 200) {
        // or var data = JSON.parse(this.responseText) if need to parse response otherwise it's just a string
        // it you parse json, then you get can get Json lines later!
        var data = this.responseText;
        console.log(data);
      }
      else {
        console.log(this.status + " Something went wrong");
      }
    }
  }

  xhr.open('GET', url);
  xhr.send();

}

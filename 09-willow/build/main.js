// Generated by CoffeeScript 1.6.3
var req;

req = new XMLHttpRequest;

req.open('GET', './content/willow.txt');

req.send();

req.onload = function(data) {
  var text;
  text = data.target.responseText;
  return document.querySelector('#page').innerText = text;
};

/*
//@ sourceMappingURL=main.map
*/

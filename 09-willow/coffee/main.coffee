

req = new XMLHttpRequest
req.open 'GET', './content/willow.txt'
req.send()
req.onload = (data) ->
  text = data.target.responseText
  document.querySelector('#page').innerText = text
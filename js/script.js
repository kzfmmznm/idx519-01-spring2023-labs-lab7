function init() {
  //add your javascript between these two lines of code
  var center = document.getElementsByClassName('center')
  var input = document.getElementById('entryinput')
  var btn = document.getElementById('entrybutton')
  btn.addEventListener('click', btnClick)

  function btnClick() {
    var text
    var content = input.value
    text = center[1].textContent + ': ' + content
    alert(text)
  }
}

window.addEventListener('load', init)

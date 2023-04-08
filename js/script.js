function init() {
  //add your javascript between these two lines of code
  var input = document.getElementById('entryinput')
  var btn = document.getElementById('entrybutton')
  btn.addEventListener('click', btnClick)

  function btnClick() {
    var content = input.value
    alert(content)
  }
}

window.addEventListener('load', init)

function init() {
  //add your javascript between these two lines of code
  var center = document.getElementsByClassName('center')
  var input = document.getElementById('entryinput')
  var btn = document.getElementById('entrybutton')
  btn.addEventListener('click', btnClick)

  function btnClick() {
    // var text
    // var content = input.value
    // text = alert(content)
    alert(center[1].textContent)
    alert(center[2].textContent)
  }
}

window.addEventListener('load', init)

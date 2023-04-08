function init() {
  //add your javascript between these two lines of code
  var btn = document.getElementById('entrybutton')
  btn.addEventListener('click', btnClick)
  function btnClick() {
    alert('Good!')
  }
}

window.addEventListener('load', init)

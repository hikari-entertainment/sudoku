//Showing the rules of the game
function show() {
  var inst = document.getElementById('back')
  var foggy = document.getElementById('foggy')
  inst.setAttribute('style',' visibility: visible; opacity: 1; transition: opacity 1s');
  foggy.setAttribute('style',' opacity:0.7; transition: opacity 1s');
}
var visible = document.getElementById('visible')
visible.addEventListener('click', show)

//Hiding the rules 
function hide() {
  var inst = document.getElementById('back');
  var foggy = document.getElementById('foggy');
  inst.setAttribute('style','opacity:0; transition: opacity 1s; z-index:0');
  foggy.setAttribute('style','opacity:0; transition: opacity 1s; z-index:0');
}
var hidden = document.getElementById('hide')
hidden.addEventListener('click', hide)

let menu = document.getElementsByClassName("menu-btn")[0];
let sideMenu = document.getElementById('sideMenu');

menu.onclick = function() {
  sideMenu.classList.toggle('active');
};

menu.onblur = function() {
  sideMenu.classList.remove('active');
};

document.addEventListener('click', function(event) {
  if (!sideMenu.contains(event.target) && !menu.contains(event.target)) {
    sideMenu.classList.remove('active');
  }
});
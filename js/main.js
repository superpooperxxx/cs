const menu_icon = document.querySelector('.menu-icon');
const mobile_menu = document.querySelector('.mobile-menu');
var menu_pressed = false
menu_icon.addEventListener('click', function(e) {
  if(!menu_pressed){
    mobile_menu.style.transform = 'translateY(0%)';
    menu_pressed = true;
  }else{
    mobile_menu.style.transform = 'translateY(-100%)';
    menu_pressed = false;
  }
});

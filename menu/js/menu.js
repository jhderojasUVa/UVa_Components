// JS for the menu element

function createMenuNavigation() {
  var elementsMenu = document.querySelectorAll('.menu .menu_group');
  for (let i = 0; i<elementsMenu.length; i++) {
    elementsMenu[i].querySelector('h2').addEventListener('click', function(event){
      for (let i = 0; i<elementsMenu.length; i++) {
        elementsMenu[i].querySelector('ul').classList.remove('show_element');
        elementsMenu[i].querySelector('ul').classList.add('hide_element');
      }
      elementsMenu[i].querySelector('ul').classList.remove('hide_element');
      elementsMenu[i].querySelector('ul').classList.add('show_element');
    });
  }
}

createMenuNavigation();

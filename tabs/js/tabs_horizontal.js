// JS para los tabs horizontales

// Variables globales para el touch
var touchStartX = 0;
var touchStartY = 0;
var touchEndX = 0;
var touchEndY = 0;

/*
/* DEPRECIATED
/*

var screen_width = document.documentElement.clientWidth;
// Cambia tabs de forma
window.addEventListener('resize', resizeTabs);
window.addEventListener('load', resizeTabs);
*/
function Create_Events_Tab(id_element) {
  var screen_width = document.documentElement.clientWidth
  // Funcion para el funcionamiento de los tabs
  // id_element: identificador del elemento tab
  var tabs = document.querySelectorAll('.'+id_element+' ul li');
  for (var i = 0; i < tabs.length; i++) {

    tabs[i].addEventListener('click', function(event) {
      // Cual tab hemos pulsado para añadir el active y eliminamos que funcione el enlace
      var clickedTab = event.currentTarget;
      clickedTab.classList.add('active');
      event.preventDefault();

      // Buscamos todos los contenidos para hacer como antes
      var mycontentPanes = document.querySelectorAll('.'+id_element+' .contenido div');
      for (i = 0; i < mycontentPanes.length; i++) {
        // Quitamos el active a todos, por si acaso
        mycontentPanes[i].classList.remove('active');
      }
      // Sacamos a donde iba el tab que hemos pulsado para ponerle el active
      var anchorReference = event.target;
      var activePanedId = anchorReference.getAttribute('href');
      var activePane = document.querySelector('.'+id_element+' '+activePanedId);
      activePane.classList.add('active');
    });
  }

  // Parte del evento touch para movil

  // Recogemos el elemento para añadirle los eventos
  var gesturedZone = document.querySelectorAll('.'+id_element+' ul');

  for (i = 0; i <  gesturedZone.length; i++) {
    // Añadimos los listeners
    gesturedZone[0].addEventListener('touchstart', function(event) {
      // Listener de evento de inicio de toque
      event.preventDefault;
      touchStartX = event.changedTouches[0].screenX;
      touchStartY = event.changedTouches[0].screenY;
    }, false);

    gesturedZone[0].addEventListener('touchmove', function(event) {
      // listener de movimiento
      event.preventDefault;
      touchEndX = event.changedTouches[0].screenX;
      touchEndY = event.changedTouches[0].screenY;
      var distanceX = touchEndX - touchStartX;
      this.style.left = distanceX + "px";
    }, false);

  }
}

/*
/*  DEPRECIATED
/*

function resizeTabs() {
  var screen_width = document.documentElement.clientWidth;
  var id_element = 'identificador123';
  var tabs = document.querySelectorAll('.tab_horizontal_left ul li');

  if (screen_width < 800 && screen_width > 400)  {
    transformTab(id_element, 'xl', 'md');
    for (var i = 0; i < tabs.length; i++) {
      // Quitamos el active
      tabs[i].classList.remove('active');
    }
  } else {
    transformTab(id_element, 'md', 'xl');
  }
}

function transformTab(id_element, sizeO, sizeD) {
  // Funcion que transforma los tabs de una forma u otra para que el evento 'click'
  // funcione correctamente
  // sizeO = tamaño origen (xl, md)
  // sized = tamaño destino (xl, md)
  // Devuelve true si todo va bien y false si algo no ha hecho nada

  if (sizeO == 'xl' && sizeD == 'md') {
    // PC/TV -> Tablet

    // Cogemos todas las tabs y el contenido
    var tabs_a = document.querySelectorAll('.'+id_element+' ul li a');
    var mycontentPanes = document.querySelectorAll('.'+id_element+' .contenido div');

    // Las recorremos
    for (var i = 0; i < tabs_a.length; i++) {
      var indice = tabs_a[i].hash;
      moveElementInDOM('.'+id_element+' ul li a[href="'+indice+'"]', '.'+id_element+' '+indice);
    }
    return true;
  } else if (sizeO == 'md' && sizeD == 'xl') {
    // Tablet -> PC/TV

    // Cogemos las tabs y el contenido
    var tabs_a = document.querySelectorAll('.'+id_element+' ul li a');

    // Las recorremos
    for (var i = 0; i < tabs_a.length; i++) {
      var indice = tabs_a[i].hash;
      //moveElementInDOM('', '');
    }
    return true;
  } else {
    // Tamaños iguales o vete a saber
    return false;
  }
}

function moveElementInDOM(elementOrigin, elementDestination) {
  // Facil, movemos el elemento y listo de un plumazo
  // Hacemos un try/catch para soltar un error en caso de problema
  try {
    // Suena estupido, que lo es pero estan al reves
    var origen = document.querySelector(elementDestination);
    var destino = document.querySelector(elementOrigin);

    // Movemos
    destino.parentElement.appendChild(origen);

    // Hacemos que se vean
    origen.classList.add('hide_element');
  } catch (err) {
    // Lo mostramos por pantalla aunque... no se
    alert('Ha habido un error moviendo el elemento '+elementOrigin+' al elemento '+elementDestination+'\r\nError: '+err.message);
    throw 'Ha habido un error moviendo el elemento '+elementOrigin+' al elemento '+elementDestination+'\r\nError: '+err.message;
  }
}

function TabShow(id_element, tab) {
  // Esconde todas las tabs y muestra solo la seleccionada
  // Hecho para tamaño tablet
  var tabs = document.querySelectorAll('.'+id_element+' ul li div');
  // Escondemos todas y elminamos los rastros
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.add('hide_element');
    tabs[i].classList.remove('active');
    tabs[i].classList.remove('show_element');
  }
  var activePane = document.querySelector('.'+id_element+' ul li div'+tab);
  // Activamos y mostramos la seleccionada
  activePane.classList.remove('hide_element');
  activePane.classList.add('active');
  activePane.classList.add('show_element');
}
*/

// Ejemplo de uso
Create_Events_Tab('identificador123');
Create_Events_Tab('identificador1234');
Create_Events_Tab('identificador12345');

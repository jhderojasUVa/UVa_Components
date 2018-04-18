// JS para los tabs horizontales

// Variables globales para el touch
var touchStartX = 0;
var touchStartY = 0;
var touchEndX = 0;
var touchEndY = 0;

function Create_Events_Tab(id_element) {
  // Funcion para el funcionamiento de los tabs
  // id_element: identificador del elemento tab
  var tabs = document.querySelectorAll('.'+id_element+' ul li');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function(event) {
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
      }
      var clickedTab = event.currentTarget;
      clickedTab.classList.add('active');
      event.preventDefault();

      var mycontentPanes = document.querySelectorAll('.'+id_element+' .contenido div');
      for (i = 0; i < mycontentPanes.length; i++) {
        mycontentPanes[i].classList.remove('active');
      }
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
      //console.log('Distancia que muevo: '+distanceX);
      this.style.left = distanceX + "px";
    }, false);

    /*gesturedZone[0].addEventListener('touchend', function(event){
      // listener de evento de finalizacion de toque
      event.preventDefault;
      touchEndX = event.changedTouches[0].screenX;
      touchEndY = event.changedTouches[0].screenY;
      // Cuando acabamos realizamos la acción
      handleGesture();
      var distanceX = touchEndX - touchStartX;
      this.style.left = distanceX + "px";
    }, false);*/

  }
}

function handleGesture() {
  // Que hacer con los gestos
  if (touchEndX < touchStartX) {
    console.log('izquierda');
  }
  if (touchEndX > touchStartX) {
    console.log('derecha');
  }
  if (touchEndY == touchStartY & touchEndX == touchStartX) {
    alert('tap');
  }
}

Create_Events_Tab('identificador123');
Create_Events_Tab('identificador1234');
Create_Events_Tab('identificador12345');

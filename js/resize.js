// Javascript que testea y cambia el tamaño de la ventana en la Variable

// Primero la variable global que, en principio esto nos lo podriamos saltar
// pero mejor asi
var screen_width = document.documentElement.clientWidth;

window.addEventListener('resize', function(){
  // Listener que escucha cuando cambia el tamaño y
  // cambia el valor de la variable global
  screen_width = document.documentElement.clientWidth;
});

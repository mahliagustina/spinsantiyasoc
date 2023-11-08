const acordeon = document.getElementsByClassName('contenedor');

for (i=0; i<acordeon.length; i++) {
  acordeon[i].addEventListener('click', function () {
    this.classList.toggle('activa')
  })
}
//  Este código utiliza jQuery para manejar el evento de 
// clic en los elementos con clase label dentro de los contenedores con clase acordeon.
//  Cuando se hace clic en un elemento label, se toglea la clase activa en su elemento padre
//   y se muestra u oculta el contenido del acordeón usando slideToggle('fast').
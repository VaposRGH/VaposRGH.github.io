const menu = document.getElementById('menu');
const close = document.getElementById('close');
const menuIcon = document.querySelector('.navegador-menu');

// Mostrar el menú al hacer clic en el ícono del menú
menuIcon.addEventListener('click', function() {
    menu.classList.add('show');
    menu.classList.remove('hide'); // Asegúrate de que la clase hide no esté presente
});

// Cerrar el menú al hacer clic en el botón de cerrar
close.addEventListener('click', function() {
    menu.classList.remove('show');
    menu.classList.add('hide'); // Agregar la clase hide
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const isClickInsideMenu = menu.contains(event.target) || menuIcon.contains(event.target);
    
    if (!isClickInsideMenu) {
        // Si el clic está fuera del menú y del ícono del menú, cierra el menú
        menu.classList.remove('show');
        menu.classList.add('hide'); // Agregar la clase hide
    }
});

// Opcional: Si deseas asegurarte de que el menú esté completamente oculto antes de eliminar la clase
menu.addEventListener('transitionend', function() {
    if (!menu.classList.contains('show')) {
        menu.classList.remove('hide'); // Eliminar la clase hide después de que la transición haya terminado
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('btnSHOW');
    const tabla1 = document.getElementById('TABLA1');
    const tabla2 = document.getElementById('TABLA2');

    boton.addEventListener('click', function() {
        // Alternar la clase 'oculto' para mostrar/ocultar tablas
        tabla1.classList.toggle('oculto');
        tabla2.classList.toggle('oculto');

        // Opcional: Cambiar el texto del botón
        if (tabla1.classList.contains('oculto')) {
            boton.textContent = 'Mostrar Tabla 1';
        } else {
            boton.textContent = 'Mostrar Tabla 2';
        }
    });
});

let equalsClicked = false;

// Obtener referencias a los elementos HTML
const display = document.querySelector('#display');
const numericButtons = document.querySelectorAll('.num');
const buttonEqual = document.querySelector('#equal');
const buttonOperators = document.querySelectorAll('.operator');
const buttonClear = document.querySelector('#clear');
const buttonDelete = document.querySelector('#delete');

numericButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Agregar el número seleccionado a la pantalla
        display.value += button.textContent;
        // Actualizar la pantalla
        display.innerHTML = display.value;
        // Si el botón igual fue presionado, limpiar la pantalla
        if (equalsClicked) {
            display.value = '';
            display.innerHTML = display.value;
            equalsClicked = false;
            // Agregar el número seleccionado a la pantalla
            display.value += button.textContent;
            // Actualizar la pantalla
            display.innerHTML = display.value;
        }
    });
});

// Agregar event listeners a los botones numéricos y operadores
buttonOperators.forEach(button => {
    button.addEventListener('click', () => {
        // Agregar el operador seleccionado a la pantalla
        display.value += button.textContent;
        // Actualizar la pantalla
        display.innerHTML = display.value;
        // Indicar que el botón igual no fue presionado
        equalsClicked = false;
    });
});

// Agregar event listener al botón igual
buttonEqual.addEventListener('click', () => {
    // Evaluar la expresión en la pantalla
    number = eval(display.value);
    // Mostrar el resultado en la pantalla
    display.value = number;
    // Actualizar la pantalla
    display.innerHTML = display.value;
    // Indicar que el botón igual fue presionado
    equalsClicked = true;
});

// Agregar event listener al botón clear
buttonClear.addEventListener('click', () => {
    // Limpiar la pantalla
    display.value = '';
    // Actualizar la pantalla
    display.innerHTML = display.value;
});

// Agregar event listener al botón delete
buttonDelete.addEventListener('click', () => {
    // Eliminar el último caracter de la pantalla
    display.value = display.value.slice(0, -1);
    // Actualizar la pantalla
    display.innerHTML = display.value;
});
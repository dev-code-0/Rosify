let selectedRose; 
// Declara la variable que almacenará la rosa seleccionada.

let modal = document.getElementById("myModal"); 
// Obtiene el modal con el id "myModal" para mostrar la ventana emergente.

let closeBtn = document.getElementsByClassName("close")[0]; 
// Obtiene el botón de cerrar del modal, seleccionado por la clase "close".

let confirmBtn = document.getElementById("confirmBtn"); 
// Obtiene el botón de confirmación del modal, usando el id "confirmBtn".

function selectRose(element) {
    document.querySelectorAll('.rose').forEach(r => r.classList.remove('selected')); 
    // Quita la clase "selected" de todas las rosas para que ninguna quede seleccionada.

    element.classList.add('selected'); 
    // Añade la clase "selected" a la rosa seleccionada.

    selectedRose = element.src; 
    // Guarda la URL de la imagen de la rosa seleccionada en la variable `selectedRose`.

    const color = element.getAttribute('data-color'); 
    // Obtiene el valor del atributo "data-color" de la rosa seleccionada.

    document.getElementById('amigos').style.color = color;
    document.getElementById('parejas').style.color = color;
    document.getElementById('icono').style.color = color;
    document.getElementById('selectedRoseColor').style.color = color;
    document.getElementById('rosa').style.color = color;
    document.getElementById('boton').style.backgroundColor = color;
    document.getElementById('confirmBtn').style.backgroundColor = color;
    // Cambia el color de los elementos 'amigos', 'parejas', 'icono', 'rosa', y los botones, 
    // usando el color seleccionado de la rosa.
}

document.querySelectorAll('.rose').forEach(rose => {
    rose.addEventListener('click', function() {
        selectRose(this);
    });
});
// Agrega un evento "click" a cada elemento con la clase "rose" que ejecuta la función selectRose
// al hacer clic sobre una rosa, pasándole el elemento clickeado.

document.querySelectorAll('.rose').forEach(rose => {
    rose.addEventListener('click', function() {
        let src = this.getAttribute('src'); 
        // Obtiene el atributo "src" de la imagen de la rosa seleccionada.

        selectedRose = src.split('/').pop().split('-')[1].split('.')[0]; 
        // Procesa la URL de la imagen para extraer el color desde el nombre del archivo.
    });
});
// Agrega otro evento "click" a cada rosa, para actualizar la variable `selectedRose` con el color extraído
// de la URL de la imagen de la rosa seleccionada.

var swiper = new Swiper('.mySwiper', {
    loop: false,
    centeredSlides: true,
    slidesPerView: 4,
    initialSlide: 0,
    effect: 'slide',
    speed: 1000,
    grabCursor: true,
    allowTouchMove: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            const rose = document.querySelectorAll('.rose')[index]; 
            // Obtiene la rosa correspondiente a la posición del "bullet" del paginador.

            const roseColor = rose.dataset.color; 
            // Obtiene el color de la rosa de su atributo "data-color".

            return '<span class="' + className + '" style="background-color:' + roseColor + '"></span>'; 
            // Renderiza el bullet (punto de la paginación) con el color de la rosa.
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: { slidesPerView: 'auto', spaceBetween: 10 }, 
        480: { slidesPerView: 'auto', spaceBetween: 20 }, 
        640: { slidesPerView: 'auto', spaceBetween: 30 } 
        // Configura cómo se verá el slider en diferentes anchos de pantalla.
    },
    initialSlide: 0, 
    // Inicia el slider en la primera diapositiva.

    on: {
        slideChange: function () {
            const activeIndex = this.realIndex; 
            // Obtiene el índice de la diapositiva activa.

            const activeRose = document.querySelectorAll('.rose')[activeIndex]; 
            // Selecciona la rosa activa en el índice actual del slider.

            const activeColor = activeRose.dataset.color; 
            // Obtiene el color de la rosa activa desde el atributo "data-color".

            // Mapa de colores con los nombres en español.
            

            document.getElementById('amigos').style.color = activeColor;
            document.getElementById('parejas').style.color = activeColor;
            document.getElementById('icono').style.color = activeColor;
            document.getElementById('selectedRoseColor').style.color = activeColor;
            document.getElementById('rosa').style.color = activeColor;
            document.getElementById('boton').style.backgroundColor = activeColor;
            document.getElementById('confirmBtn').style.backgroundColor = activeColor;
            // Actualiza el color de los elementos según el color de la rosa activa.
            
        }
    }
});
// Configura el slider Swiper, incluyendo la lógica para cambiar el color de los elementos cuando cambia la diapositiva activa.

function startAnimation() {
    let slideOrder = [0, 1, 2, 3, 2]; 
    

    let currentSlide = 0; 
    // Inicia en la primera diapositiva.

    function animateSlide() {
        if (currentSlide < slideOrder.length) {
            swiper.slideTo(slideOrder[currentSlide]); 
            // Mueve el slider a la diapositiva en la posición actual.


            
            currentSlide++; 
            // Avanza a la siguiente diapositiva.

            setTimeout(animateSlide, 700); 
            // Ejecuta la siguiente animación después de 700 ms.
        }
    }

    animateSlide();
}
// Define una animación automática para el slider, que cicla entre las diapositivas según el orden definido en slideOrder.

swiper.on('touchStart', function() {
    swiper.autoplay.stop(); 
    // Detiene la animación si el usuario interactúa manualmente con el slider.
});

startAnimation(); 
// Inicia la animación al cargar la página.

document.getElementById("boton").onclick = function() {
    let colorMap = {
        'red': 'Rojo',
        'orange' : 'Anaranjado',
        'violet': 'Violeta',
        'yellow': 'Amarillo',
        'lightblue' : 'Celeste',
        'white' : 'Blanca',
        'pink' : 'Rosada'
    }; 
    // Define un mapa de colores para convertir los nombres en inglés a español.

    

    modal.style.display = "block"; 
    // Muestra el modal cuando el botón es clickeado.
}

closeBtn.onclick = function() {
    modal.style.display = "none"; 
    // Cierra el modal cuando se hace clic en el botón de cerrar.
}

confirmBtn.onclick = function() {
    modal.style.display = "none"; 
    // Cierra el modal cuando se hace clic en el botón de confirmación.

    nextStep(); 
    // Llama a la función nextStep para avanzar en el proceso.
}

function nextStep() {
    console.log("Pasando al siguiente paso"); 
    // Imprime un mensaje en la consola que indica que se está avanzando al siguiente paso.
}
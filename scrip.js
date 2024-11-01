

        let selectedRose;
        // Declara la variable que almacenará la rosa seleccionada.

        let modal = document.getElementById("myModal");
        // Obtiene el modal con el id "myModal" para mostrar la ventana emergente.

        let closeBtn = document.getElementsByClassName("close")[0];
        // Obtiene el botón de cerrar del modal, seleccionado por la clase "close".

        let confirmBtn = document.getElementById("confirmBtn");
        // Obtiene el botón de confirmación del modal, usando el id "confirmBtn".


        document.querySelectorAll('.rose').forEach(rose => {
            rose.addEventListener('click', function () {

                selectRose(this);
                // Agrega un evento "click" a cada elemento con la clase "rose" que ejecuta la función selectRose
                // al hacer clic sobre una rosa, pasándole el elemento clickeado.

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

                    console.log('Rosa en el centro :', activeRose.src); // Verifica en consola la rosa activa

                    const activeColor = activeRose.dataset.color;
                    // Obtiene el color de la rosa activa desde el atributo "data-color".

                    // Mapa de colores con los nombres en español.


                    document.getElementById('amigos').style.color = activeColor;
                    document.getElementById('parejas').style.color = activeColor;
                    document.getElementById('icono').style.color = activeColor;
                    document.getElementById('selectedRoseColor').style.color = activeColor;
                    document.getElementById('rosa').style.color = activeColor;
                    document.getElementById('su').style.color = activeColor;
                    document.getElementById('boton').style.backgroundColor = activeColor;
                    document.getElementById('savenamesbtn').style.backgroundColor = activeColor;
                    document.getElementById('backBtn').style.color = activeColor;
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

        swiper.on('touchStart', function () {
            swiper.autoplay.stop();
            // Detiene la animación si el usuario interactúa manualmente con el slider.
        });

        startAnimation();
        // Inicia la animación al cargar la página.

        document.getElementById("boton").onclick = function () {
            let colorMap = {
                'red': 'Rojo',
                'orange': 'Anaranjado',
                'violet': 'Violeta',
                'yellow': 'Amarillo',
                'lightblue': 'Celeste',
                'white': 'Blanca',
                'pink': 'Rosada'
            };
            // Define un mapa de colores para convertir los nombres en inglés a español.


            modal.style.display = "block";
            // Muestra el modal cuando el botón es clickeado.
        }

        closeBtn.onclick = closeModal;
        confirmBtn.onclick = function () {
            closeModal();
            nextStep();
        }


        // Función para mostrar el modal de confirmación
        function openModal() {
            document.getElementById('myModal').style.display = 'block';
        }

        // Función para cerrar el modal
        function closeModal() {
            document.getElementById('myModal').style.display = 'none';
        }

        // Función para cambiar de la primera pestaña a la segunda
        document.getElementById('confirmBtn').addEventListener('click', function () {
            const selectedColor = 'rosa'; // Reemplaza esto con la lógica de selección del color real
            localStorage.setItem('selectedRoseColor', selectedColor); // Guardar color en localStorage

            // Ocultar la primera pestaña y mostrar la segunda
            document.getElementById('firstTab').style.display = 'none';
            document.getElementById('secondTab').style.display = 'block';

            closeModal(); // Cerrar el modal
        });


        // Cuando el usuario haga clic en "Personalizar"
        document.getElementById("myModal").onclick = function () {
            // Obtener la rosa activa en el centro del Swiper
            const activeIndex = swiper.realIndex;
            const activeRose = document.querySelectorAll('.rose')[activeIndex]; // La rosa que está en el centro
            const activeRoseSrc = activeRose.getAttribute('src'); // Obtiene la URL de la rosa

            // Cambiar a la segunda pestaña
            document.getElementById('firstTab').style.display = 'none';
            document.getElementById('secondTab').style.display = 'block';

            // Mostrar solo la rosa que estaba en el centro
            let secondPageImageContainer = document.getElementById('integer-rosa');
            secondPageImageContainer.innerHTML = '';  // Limpia las otras rosas


            let selectedRoseImg = document.createElement('img');
            selectedRoseImg.src = activeRoseSrc;  // Usa la imagen de la rosa en el centro
            selectedRoseImg.classList.add('s-1');  // Añade la clase 's-1' para aplicar los estilos desde CSS

            secondPageImageContainer.appendChild(selectedRoseImg);  // Muestra la rosa
        };

        // Función para regresar a la primera pestaña
        document.getElementById('backBtn').addEventListener('click', function () {
            // Ocultar la segunda pestaña y mostrar la primera
            document.getElementById('secondTab').style.display = 'none';
            document.getElementById('firstTab').style.display = 'block';

            // Restaurar el estado de la primera pestaña
            closeModal(); // Asegúrate de cerrar el modal
            document.getElementById('boton').style.display = 'block'; // Mostrar el botón "Personalizar"
            document.getElementById('myModal').style.display = 'none'; // Asegúrate de ocultar el modal

            // Reiniciar el estado de selección de rosa
            document.getElementById('selectedRose').innerText = ''; // Reinicia el texto de la rosa seleccionada

            // Aquí puedes agregar más lógica si es necesario para restablecer el estado de selección
        });

        // Cargar el color seleccionado en la segunda pestaña
        window.addEventListener('load', function () {
            const selectedColor = localStorage.getItem('selectedRoseColor');
            if (selectedColor) {
                document.getElementById('selectedRose').innerText = selectedColor;
                document.getElementById('selectedRose').style.color = selectedColor;
                document.getElementById('nameInput').style.borderColor = selectedColor;
                document.getElementById('savenamesbtn').style.backgroundColor = selectedColor;

            }
        });



        const customizeButton = document.getElementById('highlight-box');
        const customizeButton1 = document.getElementById('integer-rosa');

        swiper.on('slideChange', function () {
            // Obtiene la rosa en el centro
            const activeIndex = this.realIndex;
            const activeRose = document.querySelectorAll('.swiper-slide')[activeIndex];

            // Mueve el cuadro de resalte detrás de la rosa activa
            const highlightBox = document.getElementById('highlight-box');
            const page2 = document.getElementById('page-2-image-container');

            // Cambia el color del cuadro según la rosa seleccionada
            let roseName = activeRose.querySelector('img').alt; // Obtiene el nombre de la rosa del atributo alt
            switch (roseName) {
                case 'Rosa roja':
                    highlightBox.style.backgroundColor = '#ffdada'; // Rojo claro
                    page2.style.backgroundColor = '#ffdada'; // Rojo claro
                    break;
                case 'Rosa naranja':
                    highlightBox.style.backgroundColor = '#ffe3c1'; // Naranja claro
                    page2.style.backgroundColor = '#ffe3c1'; // Naranja claro
                    break;
                case 'Rosa violeta':
                    highlightBox.style.backgroundColor = '#cfcee7'; // Violeta claro
                    page2.style.backgroundColor = '#cfcee7'; // Violeta claro
                    break;
                case 'Rosa amarilla':
                    highlightBox.style.backgroundColor = '#fef4a7'; // Amarillo claro
                    page2.style.backgroundColor = '#fef4a7'; // Amarillo claro
                    break;
                case 'Rosa azul':
                    highlightBox.style.backgroundColor = '#d3ebff'; // Azul claro
                    page2.style.backgroundColor = '#d3ebff'; // Azul claro
                    break;
                case 'Rosa blanca':
                    highlightBox.style.backgroundColor = '#dcdcdc'; // Blanco
                    page2.style.backgroundColor = '#dcdcdc'; // Blanco
                    break;
                case 'Rosa rosada':
                    highlightBox.style.backgroundColor = '#f0c9dc'; // Rosa claro
                    page2.style.backgroundColor = '#f0c9dc'; // Rosa claro
                    break;
                default:
                    highlightBox.style.backgroundColor = '#ffebee'; // Color por defecto
                    page2.style.backgroundColor = '#ffebee'; // Color por defecto
                    break;
            }
        });

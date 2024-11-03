let selectedRose;
// Declara la variable que almacenará la rosa seleccionada.

let modal = document.getElementById("myModal");
// Obtiene el modal con el id "myModal" para mostrar la ventana emergente.

let closeBtn = document.getElementsByClassName("close")[0];
// Obtiene el botón de cerrar del modal, seleccionado por la clase "close".

let confirmBtn = document.getElementById("confirmBtn");
// Obtiene el botón de confirmación del modal, usando el id "confirmBtn".
// Obtener elementos necesarios
let inputName = document.getElementById("name_gift");
let previewText = document.querySelector(".preview-text");
let previewLabel = document.querySelector(".preview-label");
let selectedRoseContainer = document.getElementById("integer-rosa");

document.querySelectorAll(".rose").forEach((rose) => {
  rose.addEventListener("click", function () {
    selectRose(this);
    // Agrega un evento "click" a cada elemento con la clase "rose" que ejecuta la función selectRose
    // al hacer clic sobre una rosa, pasándole el elemento clickeado.

    let src = this.getAttribute("src");
    // Obtiene el atributo "src" de la imagen de la rosa seleccionada.

    selectedRose = src.split("/").pop().split("-")[1].split(".")[0];
    // Procesa la URL de la imagen para extraer el color desde el nombre del archivo.
  });
});
// Agrega otro evento "click" a cada rosa, para actualizar la variable `selectedRose` con el color extraído
// de la URL de la imagen de la rosa seleccionada.

var swiper = new Swiper(".mySwiper", {
  loop: false,
  centeredSlides: true,
  slidesPerView: 4,
  initialSlide: 0,
  effect: "slide",
  speed: 1000,
  grabCursor: true,
  allowTouchMove: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      const rose = document.querySelectorAll(".rose")[index];
      // Obtiene la rosa correspondiente a la posición del "bullet" del paginador.

      const roseColor = rose.dataset.color;
      // Obtiene el color de la rosa de su atributo "data-color".

      return (
        '<span class="' +
        className +
        '" style="background-color:' +
        roseColor +
        '"></span>'
      );
      // Renderiza el bullet (punto de la paginación) con el color de la rosa.
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: "auto", spaceBetween: 10 },
    480: { slidesPerView: "auto", spaceBetween: 20 },
    640: { slidesPerView: "auto", spaceBetween: 30 },
    // Configura cómo se verá el slider en diferentes anchos de pantalla.
  },
  initialSlide: 0,
  // Inicia el slider en la primera diapositiva.

  on: {
    slideChange: function () {
      const activeIndex = this.realIndex;
      // Obtiene el índice de la diapositiva activa.

      const activeRose = document.querySelectorAll(".rose")[activeIndex];
      // Selecciona la rosa activa en el índice actual del slider.

      console.log("Rosa en el centro :", activeRose.src); // Verifica en consola la rosa activa

      const activeColor = activeRose.dataset.color;
       // Guardamos el color actual de la rosa en una variable global
    window.currentRoseColor = activeColor;
      // Obtiene el color de la rosa activa desde el atributo "data-color".

      // Mapa de colores con los nombres en español.

      document.getElementById("amigos").style.color = activeColor;
      document.getElementById("parejas").style.color = activeColor;
      document.getElementById("icono").style.color = activeColor;
      document.getElementById("selectedRoseColor").style.color = activeColor;
      document.getElementById("rosa").style.color = activeColor;
      document.getElementById("su").style.color = activeColor;
      document.getElementById("boton").style.backgroundColor = activeColor;
      document.getElementById("savenamesbtn").style.backgroundColor = activeColor;
      document.getElementById("backBtn").style.color = activeColor;
      document.getElementById("confirmBtn").style.backgroundColor = activeColor;
      document.getElementById("vista-previa").style.backgroundColor = activeColor;
      document.getElementById("name-vista-previa").style.color = activeColor;
      document.getElementById("elige-intencion").style.color = activeColor;
      document.getElementById("agregar-video").style.backgroundColor = activeColor;
      document.getElementById("btn-letter").style.backgroundColor = activeColor;
      
      for( let i = 0; i <=15; i++){
        document.getElementById(`s${i}`).style.color = activeColor;
      }
      // Actualiza el color de los elementos según el color de la rosa activa.
      
    },
  },
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

swiper.on("touchStart", function () {
  swiper.autoplay.stop();
  // Detiene la animación si el usuario interactúa manualmente con el slider.
});

startAnimation();
// Inicia la animación al cargar la página.

document.getElementById("boton").onclick = function () {
    let colorMap = {
        red: "Rojo",
        orange: "Anaranjado",
        violet: "Violeta",
        yellow: "Amarillo",
        lightblue: "Celeste",
        white: "Blanca",
        pink: "Rosada",
    };

    // Muestra el modal con la clase de animación
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    
    const modalContent = document.querySelector(".modal-content");
    modalContent.classList.add("animated"); // Agrega la clase para iniciar la animación

    // Quitar la clase de animación después de que termine para que esté lista para reutilizarse
    setTimeout(() => {
        modalContent.classList.remove("animated");
    }, 500); // Tiempo de la animación en milisegundos
};



// Función para mostrar el modal de confirmación
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

document.getElementById("confirmBtn").addEventListener("click", function () {
    const selectedColor = "rosa"; // Reemplaza esto con la lógica de selección del color real
    localStorage.setItem("selectedRoseColor", selectedColor); // Guardar color en localStorage

    // Ocultar la primera pestaña
    document.getElementById("firstTab").style.display = "none";

    // Mostrar la segunda pestaña con animación
    const secondTab = document.getElementById("secondTab");
    secondTab.style.display = "block";
    secondTab.classList.add("animated"); // Agrega la clase para la animación

    // Quitar la clase de animación después de que termine
    setTimeout(() => {
        secondTab.classList.remove("animated");
    }, 900); // Tiempo de la animación en milisegundos

    closeModal(); // Cerrar el modal
});

// Agregar evento de clic en la "X" para regresar a la primera pestaña
document.getElementById("close-modal").addEventListener("click", function () {
  closeModal(); // Cerrar el modal

  // Mostrar la primera pestaña nuevamente
  document.getElementById("secondTab").style.display = "none";
  document.getElementById("firstTab").style.display = "block";
});

// Cuando el usuario haga clic en "Personalizar"
document.getElementById("confirmBtn").onclick = function () {
  // Obtener la rosa activa en el centro del Swiper
  const activeIndex = swiper.realIndex;
  const activeRose = document.querySelectorAll(".rose")[activeIndex]; // La rosa que está en el centro
  const activeRoseSrc = activeRose.getAttribute("src"); // Obtiene la URL de la rosa

  // Cambiar a la segunda pestaña
  document.getElementById("firstTab").style.display = "none";
  document.getElementById("secondTab").style.display = "block";

  // Mostrar solo la rosa que estaba en el centro
  let secondPageImageContainer = document.getElementById("integer-rosa");
  secondPageImageContainer.innerHTML = ""; // Limpia las otras rosas

  let selectedRoseImg = document.createElement("img");
  selectedRoseImg.src = activeRoseSrc; // Usa la imagen de la rosa en el centro
  selectedRoseImg.classList.add("s-1"); // Añade la clase 's-1' para aplicar los estilos desde CSS

  secondPageImageContainer.appendChild(selectedRoseImg); // Muestra la rosa
};

// Función para regresar a la primera pestaña
document.getElementById("backBtn").addEventListener("click", function () {
    // Ocultar la segunda pestaña y mostrar la primera
    document.getElementById("secondTab").style.display = "none";
    document.getElementById("firstTab").style.display = "block";


    // Mostrar la segunda pestaña con animación
    const firstTab = document.getElementById("firstTab");
    firstTab.style.display = "block";
    firstTab.classList.add("animated"); // Agrega la clase para la animación

    // Quitar la clase de animación después de que termine
    setTimeout(() => {
        secondTab.classList.remove("animated");
    }, 900); // Tiempo de la animación en milisegundos


  
    // Restaurar el estado de la segunda pestaña para que parezca nueva
    // Limpiar el campo de entrada de nombre
    document.getElementById("name_gift").value = "";
  
    // Reiniciar la vista previa del nombre
    document.getElementById("name-vista-previa").textContent = "";
  
    // Ocultar el texto de intención (si-x) y la vista previa
    const previewText = document.querySelector('.preview-text');
    const previewLabel = document.querySelector('.preview-label');
    previewText.style.opacity = "0";
    previewText.querySelector('.si-x').style.display = "none";
    previewLabel.style.opacity = "0";
  
    // Resetear la posición de la rosa seleccionada
    const selectedRoseContainer = document.getElementById('integer-rosa');
    selectedRoseContainer.innerHTML = ""; // Eliminar cualquier imagen de rosa
    selectedRoseContainer.style.transform = "translateX(0%)"; // Resetear la posición de la rosa
  
    // Asegurarse de que todos los estilos y contenidos vuelvan a su estado inicial
    previewText.style.transition = "none"; // Quitar transición para evitar parpadeos
    previewLabel.style.transition = "none";
    setTimeout(() => {
      previewText.style.transition = "opacity 0.7s ease"; // Reestablecer transición
      previewLabel.style.transition = "opacity 0.7s ease";
    }, 10);
  });
  

// Cargar el color seleccionado en la segunda pestaña
window.addEventListener("load", function () {
  const selectedColor = localStorage.getItem("selectedRoseColor");
  if (selectedColor) {
    document.getElementById("selectedRose").innerText = selectedColor;
    document.getElementById("selectedRose").style.color = selectedColor;
    document.getElementById("nameInput").style.borderColor = selectedColor;
    document.getElementById("savenamesbtn").style.backgroundColor =
      selectedColor;
  }
});

const customizeButton = document.getElementById("highlight-box");
const customizeButton1 = document.getElementById("integer-rosa");

swiper.on("slideChange", function () {
  // Obtiene la rosa en el centro
  const activeIndex = this.realIndex;
  const activeRose = document.querySelectorAll(".swiper-slide")[activeIndex];

  // Mueve el cuadro de resalte detrás de la rosa activa
  const highlightBox = document.getElementById("highlight-box");
  const page2 = document.getElementById("page-2-image-container");
  const labelImage = document.getElementById("label-image");

  // Cambia el color del cuadro según la rosa seleccionada
  let roseName = activeRose.querySelector("img").alt; // Obtiene el nombre de la rosa del atributo alt
  switch (roseName) {
    case "Rosa roja":
      highlightBox.style.backgroundColor = "#ffdada"; // Rojo claro
      page2.style.backgroundColor = "#ffdada"; // Rojo claro
      labelImage.style.backgroundColor = "#ffdada"; // Rojo claro
      break;
    case "Rosa naranja":
      highlightBox.style.backgroundColor = "#ffe3c1"; // Naranja claro
      page2.style.backgroundColor = "#ffe3c1"; // Naranja claro
      labelImage.style.backgroundColor = "#ffe3c1"; // Naranja claro
      break;
    case "Rosa violeta":
      highlightBox.style.backgroundColor = "#cfcee7"; // Violeta claro
      page2.style.backgroundColor = "#cfcee7"; // Violeta claro
      labelImage.style.backgroundColor = "#cfcee7"; // Violeta claro
      break;
    case "Rosa amarilla":
      highlightBox.style.backgroundColor = "#fef4a7"; // Amarillo claro
      page2.style.backgroundColor = "#fcf7d1"; // Amarillo claro
      labelImage.style.backgroundColor = "#fcf7d1"; // Amarillo claro
      break;
    case "Rosa azul":
      highlightBox.style.backgroundColor = "#d3ebff"; // Azul claro
      page2.style.backgroundColor = "#d3ebff"; // Azul claro
      labelImage.style.backgroundColor = "#d3ebff"; // Azul claro
      break;
    case "Rosa blanca":
      highlightBox.style.backgroundColor = "#dcdcdc"; // Blanco
      page2.style.backgroundColor = "#dcdcdc"; // Blanco
      labelImage.style.backgroundColor = "#dcdcdc"; // Blanco
      break;
    case "Rosa rosada":
      highlightBox.style.backgroundColor = "#f0c9dc"; // Rosa claro
      page2.style.backgroundColor = "#f0c9dc"; // Rosa claro
      labelImage.style.backgroundColor = "#f0c9dc"; // Rosa claro
      break;
    default:
      highlightBox.style.backgroundColor = "#ffebee"; // Color por defecto
      page2.style.backgroundColor = "#ffebee"; // Color por defecto
      labelImage.style.backgroundColor = "#ffebee"; // Color por defecto
      break;
  }
});


// Evento para cuando el input de nombre obtiene el foco
inputName.addEventListener('focus', function () {
    // Mueve la rosa a la izquierda con una transición suave
    selectedRoseContainer.style.transform = 'translateX(-32%)';
    selectedRoseContainer.style.transition = 'transform 0.7s ease';

    // Mostrar el texto de vista previa y el mensaje de intención con efectos de aparición
    previewLabel.style.opacity = '1'; // Mostrar "Vista previa"
    previewLabel.style.transition = 'opacity 0.7s ease';
    
    previewText.style.opacity = '1'; // Mostrar la intención
    previewText.style.transition = 'opacity 0.7s ease';
    previewText.querySelector('.si-x').style.display = 'inline'; // Mostrar el texto de intención (siguiente)
});

// Evento para actualizar el nombre en la vista previa mientras se escribe
inputName.addEventListener('input', function () {
    let enteredName = inputName.value;
    let namePlaceholder = document.getElementById('name-vista-previa');
    namePlaceholder.textContent = enteredName; // Actualizar el nombre en la vista previa
});

function showIntentionSection() {
    // Obtén el valor del campo de entrada
    const nameInput = document.getElementById("name_gift").value.trim();
    
    // Verifica si el campo está vacío
    if (nameInput === "") {
        alert("Por favor, ingresa un nombre o apodo antes de continuar.");
    } else {
        // Guardar el nombre en localStorage
        localStorage.setItem("selectedName", nameInput);

        // Oculta el primer div
        const sectionName = document.getElementById("section-name");
        sectionName.style.display = "none";

        // Muestra el segundo div con animación
        const sectionIntention = document.getElementById("section-intention");
        sectionIntention.style.display = "block";
        sectionIntention.classList.add("animated"); // Agrega la clase de animación

        // Quitar la clase de animación después de que termine
        setTimeout(() => {
            sectionIntention.classList.remove("animated");
        }, 900); // Tiempo de la animación en milisegundos
    }
}


// Asigna el evento de clic al botón "Continuar"
document.getElementById("savenamesbtn").addEventListener("click", showIntentionSection);


function ChangeIntention(intentionIndex, intentionId) {
    // Ocultar todos los mensajes de intención primero
    const allMessages = document.querySelectorAll('#page-2-image-container .preview-text span');
    allMessages.forEach(message => message.style.display = 'none');
    
    // Mostrar el mensaje correspondiente a la intención seleccionada
    const selectedMessage = document.querySelector(`.si-${intentionIndex}`);
    if (selectedMessage) {
        selectedMessage.style.display = 'inline';
    }
    
    // Mantener el nombre en la vista previa
    const nameInput = document.getElementById("name_gift").value.trim();
    if (nameInput) {
        document.getElementById("name-vista-previa").textContent = nameInput;
        document.getElementById("name-vista-previa").style.display = 'inline';
    }

    // Quitar la clase de borde de color de todas las intenciones
    document.querySelectorAll('.select-intention').forEach(intention => {
        intention.classList.remove('selected-intention');
        intention.style.borderColor = ""; // Limpiar el color de borde
    });

    // Guardar la intención seleccionada en localStorage
    localStorage.setItem("selectedIntention", intentionId);

    document.querySelectorAll('.select-intention').forEach(intention => {
        intention.classList.remove('selected-intention');
        intention.style.borderColor = ""; 
    });



    // Agregar la clase de borde de color solo a la intención seleccionada
    const selectedIntention = document.getElementById(intentionId);
    selectedIntention.classList.add('selected-intention');
    
    // Aplicar el color de la rosa seleccionada al borde de la intención
    if (window.currentRoseColor) {
        selectedIntention.style.borderColor = window.currentRoseColor; // Usa el color de la rosa actual
    } else {
        selectedIntention.style.borderColor = "#FF5733"; // Color predeterminado si no hay rosa seleccionada
    }
}


const storedName = localStorage.getItem("selectedName");
const storedIntention = localStorage.getItem("selectedIntention");

if (storedName) {
    console.log("Nombre guardado:", storedName);
}
if (storedIntention) {
    console.log("Intención guardada:", storedIntention);
}




// Agregar eventos de clic a cada intención con su id correspondiente
document.getElementById("intention1").addEventListener("click", () => ChangeIntention(0, "intention1"));
document.getElementById("intention3").addEventListener("click", () => ChangeIntention(2, "intention3"));
document.getElementById("intention12").addEventListener("click", () => ChangeIntention(11, "intention12"));
document.getElementById("intention13").addEventListener("click", () => ChangeIntention(12, "intention13"));
document.getElementById("intention11").addEventListener("click", () => ChangeIntention(10, "intention11"));
document.getElementById("intention10").addEventListener("click", () => ChangeIntention(9, "intention10"));
document.getElementById("intention4").addEventListener("click", () => ChangeIntention(3, "intention4"));
document.getElementById("intention2").addEventListener("click", () => ChangeIntention(1, "intention2"));
document.getElementById("intention6").addEventListener("click", () => ChangeIntention(5, "intention6"));
document.getElementById("intention7").addEventListener("click", () => ChangeIntention(6, "intention7"));
document.getElementById("intention8").addEventListener("click", () => ChangeIntention(7, "intention8"));
document.getElementById("intention9").addEventListener("click", () => ChangeIntention(8, "intention9"));
document.getElementById("intention14").addEventListener("click", () => ChangeIntention(13, "intention14"));
document.getElementById("intention15").addEventListener("click", () => ChangeIntention(14, "intention15"));
document.getElementById("intention16").addEventListener("click", () => ChangeIntention(15, "intention16"));


document.getElementById("nextBtnPag2").addEventListener("click", function () {
    // Ocultar la segunda pestaña
   
    document.getElementById("secondTab").style.display = "none";

    // Mostrar la tercera pestaña con animación
    const thirdTab = document.getElementById("thirdTab");
    thirdTab.style.display = "block";
    thirdTab.classList.add("animated");

    // Quitar la clase de animación después de que termine
    setTimeout(() => {
        thirdTab.classList.remove("animated");
    }, 900);

    // Cargar el resumen de la selección en la tercera pestaña
    const name = localStorage.getItem("selectedName") || "Nombre no ingresado";
    const intention = localStorage.getItem("selectedIntention") || "Intención no seleccionada";
    document.getElementById("summaryText").textContent = `Has ingresado el nombre: ${name} y has seleccionado la intención: ${intention}.`;
});


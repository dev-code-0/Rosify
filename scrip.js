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
// Variable para verificar si una intención ha sido seleccionada
let isIntentionSelected = false;


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
      document.getElementById("name_gift").style.borderColor = activeColor;
      document.getElementById("name_gift").style.caretColor = activeColor;
      document.getElementById("name-vista-previa").style.color = activeColor;
      document.getElementById("elige-intencion").style.color = activeColor;
      document.getElementById("agregar-video").style.backgroundColor = activeColor;
      document.getElementById("btn-letter").style.backgroundColor = activeColor;
      document.getElementById("continuarPag3").style.backgroundColor = activeColor;
      document.getElementById("modal-video").style.borderColor = activeColor;
      document.getElementById("url-video").style.color = activeColor;
      document.getElementById("pegarlinkvideo").style.backgroundColor = activeColor;
      document.getElementById("guardarlinkvideo").style.backgroundColor = activeColor;
      document.getElementById("borrarlinkvideo").style.backgroundColor = activeColor;
      document.getElementById("salirlinkvideo").style.backgroundColor = activeColor;
      document.getElementById("youtube_url").style.borderColor = activeColor;
      document.getElementById("message").style.borderColor = activeColor;
      document.getElementById("message").style.caretColor = activeColor;
      document.getElementById("btn-si").style.backgroundColor = activeColor;
      document.getElementById("btn-no").style.backgroundColor = activeColor;
      document.getElementById("finishBtn").style.backgroundColor = activeColor;
      document.getElementById("resumen").style.color = activeColor;
      


      for( let i = 0; i <=20; i++){
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









function showIntentionSection() {
  // Obtén el valor del campo de entrada
  const nameInput = document.getElementById("name_gift").value.trim();
  
  // Verifica si el campo está vacío
  if (nameInput === "") {
      alert("Por favor, ingresa un nombre o apodo antes de continuar.");
  } else {

      // ========================
      // Guardar el nombre en localStorage
      // ========================
      localStorage.setItem("selectedName", nameInput);

      // Oculta el primer div
      const sectionName = document.getElementById("section-name");
      sectionName.style.display = "none";

      // Muestra el segundo div con animación
      const sectionIntention = document.getElementById("section-intention");
      sectionIntention.style.display = "block";
      sectionIntention.classList.add("animated"); // Agrega la clase de animación

      // Oculta el botón "savenamesbtn" y muestra el botón "continuarPag3" con animación
      const saveNamesBtn = document.getElementById("savenamesbtn");
      const continuarPag3 = document.getElementById("continuarPag3");

      saveNamesBtn.style.display = "none";
      continuarPag3.style.display = "block";
      continuarPag3.classList.add("animated"); // Agrega la clase de animación al nuevo botón

      // Quitar la clase de animación después de que termine
      setTimeout(() => {
          sectionIntention.classList.remove("animated");
          continuarPag3.classList.remove("animated");
      }, 900); // Tiempo de la animación en milisegundos
  }
}

// Asigna el evento de clic al botón "savenamesbtn"
document.getElementById("savenamesbtn").addEventListener("click", showIntentionSection);




// Función para guardar la intención seleccionada y actualizar la vista previa
function ChangeIntention(intentionIndex, intentionId) {
  // Ocultar todos los mensajes de intención primero
  const allMessages = document.querySelectorAll('#page-2-image-container .preview-text span');
  allMessages.forEach(message => message.style.display = 'none');
  
  // Mostrar el mensaje correspondiente a la intención seleccionada
  const selectedMessage = document.querySelector(`.si-${intentionIndex}`);
  if (selectedMessage) {
      selectedMessage.style.display = 'inline';
      
      // Mostrar el mensaje de intención en el resumen (id="summaryIntention")
      const summaryIntention = document.getElementById("summaryIntention");
      summaryIntention.textContent = selectedMessage.textContent;

      // Guardar el mensaje completo en una variable para expandir
      let fullMessage = summaryIntention.textContent;

      // Función para mostrar solo la parte del mensaje después de la coma
      function showPartialMessage() {
        const commaIndex = fullMessage.indexOf(",");
        if (commaIndex !== -2) {
          summaryIntention.textContent = fullMessage.substring(commaIndex + 2).trim();
        }
      }

      // Función para alternar entre el mensaje parcial y el completo
      function toggleMessage() {
        if (summaryIntention.textContent === fullMessage) {
          showPartialMessage(); // Mostrar solo la parte del mensaje
        } else {
          summaryIntention.textContent = fullMessage; // Mostrar el mensaje completo
        }
      }

      // Mostrar el mensaje parcial al inicio
      showPartialMessage();

      // Agregar el evento de clic para expandir el mensaje
      summaryIntention.addEventListener("click", toggleMessage);
  }
  
  // Mantener el nombre en la vista previa
  const nameInput = document.getElementById("name_gift").value.trim();
  if (nameInput) {
      document.getElementById("name-vista-previa").textContent = nameInput;
      document.getElementById("name-vista-previa").style.display = 'inline';

      document.getElementById("summaryName").textContent = nameInput;
      document.getElementById("summaryName").style.display = 'inline';
  }

  // Quitar la clase de borde de color de todas las intenciones
  document.querySelectorAll('.select-intention').forEach(intention => {
      intention.classList.remove('selected-intention');
      intention.style.borderColor = ""; // Limpiar el color de borde
  });
  
  // Guardar la intención seleccionada en localStorage
  localStorage.setItem("selectedIntention", intentionId);
  isIntentionSelected = true; // Marcar que se ha seleccionado una intención
  
  // Agregar la clase de borde de color solo a la intención seleccionada
  const selectedIntention = document.getElementById(intentionId);
  selectedIntention.classList.add('selected-intention');
  
  // Aplicar el color de la rosa seleccionada al borde de la intención
  if (window.currentRoseColor) {
      selectedIntention.style.borderColor = window.currentRoseColor;
  } else {
      selectedIntention.style.borderColor = "#FF5733"; // Color predeterminado si no hay rosa seleccionada
  }
}



// Función para avanzar a la tercera página
function goToThirdPage() {
  // Verifica si hay una intención seleccionada
  if (!isIntentionSelected) {
      alert("Por favor, selecciona una intención antes de continuar.");
      return;
  }

  // Oculta la segunda página y muestra la tercera con animación
  const secondTab = document.getElementById("secondTab");
  const thirdTab = document.getElementById("thirdTab");

  secondTab.style.display = "none";
  thirdTab.style.display = "block";
  thirdTab.classList.add("animated"); // Agrega una clase de animación a la tercera página
  
  // Quitar la clase de animación después de que termine
  setTimeout(() => {
      thirdTab.classList.remove("animated");
  }, 900); // Tiempo de la animación en milisegundos
}

// Asigna el evento de clic al botón "continuarPag3"
document.getElementById("continuarPag3").addEventListener("click", goToThirdPage);












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
  const activeColor = activeRose.dataset.color;

  // ========================
  // Guardar la URL y el color de la rosa en el centro en localStorage
  // ========================
  localStorage.setItem("selectedRoseSrc", activeRoseSrc);
  localStorage.setItem("selectedRoseColor", activeColor);

  // Cambiar a la segunda pestaña
  document.getElementById("firstTab").style.display = "none";
  document.getElementById("secondTab").style.display = "block";

  // Mostrar solo la rosa que estaba en el centro en el segundo contenedor
  let secondPageImageContainer = document.getElementById("integer-rosa");
  secondPageImageContainer.innerHTML = ""; // Limpia las otras rosas

  let selectedRoseImg = document.createElement("img");
  selectedRoseImg.src = activeRoseSrc; // Usa la imagen de la rosa en el centro
  selectedRoseImg.classList.add("s-1"); // Clase específica para el segundo contenedor

  secondPageImageContainer.appendChild(selectedRoseImg); // Muestra la rosa en el segundo contenedor

  
};




// Función para regresar a la primera pestaña
document.getElementById("backBtn").addEventListener("click", function () {
    // Ocultar la segunda pestaña y mostrar la primera
    document.getElementById("secondTab").style.display = "none";
    document.getElementById("firstTab").style.display = "block";


    // Mostrar la segunda pestaña con animación
    const firstTab = document.getElementById("firstTab");
    firstTab.style.display = "block";
    firstTab.classList.add("animated-1"); // Agrega la clase para la animación

    // Quitar la clase de animación después de que termine
    setTimeout(() => {
        secondTab.classList.remove("animated-1");
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
    document.getElementById("savenamesbtn").style.backgroundColor = selectedColor;
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
  const colorRamos = document.getElementById("color-ramos");

  // Cambia el color del cuadro según la rosa seleccionada
  let roseName = activeRose.querySelector("img").alt; // Obtiene el nombre de la rosa del atributo alt
  switch (roseName) {
    case "Rosa roja":
      highlightBox.style.backgroundColor = "#ffdada"; // Rojo claro
      page2.style.backgroundColor = "#ffdada"; // Rojo claro
      labelImage.style.backgroundColor = "#ffdada"; // Rojo claro
      colorRamos.style.backgroundColor = "#ffdada"; // Rojo claro
      break;
    case "Rosa naranja":
      highlightBox.style.backgroundColor = "#ffe3c1"; // Naranja claro
      page2.style.backgroundColor = "#ffe3c1"; // Naranja claro
      labelImage.style.backgroundColor = "#ffe3c1"; // Naranja claro
      colorRamos.style.backgroundColor = "#ffe3c1"; // Naranja claro
      break;
    case "Rosa violeta":
      highlightBox.style.backgroundColor = "#cfcee7"; // Violeta claro
      page2.style.backgroundColor = "#cfcee7"; // Violeta claro
      labelImage.style.backgroundColor = "#cfcee7"; // Violeta claro
      colorRamos.style.backgroundColor = "#cfcee7"; // Violeta claro
      break;
    case "Rosa amarilla":
      highlightBox.style.backgroundColor = "#fef4a7"; // Amarillo claro
      page2.style.backgroundColor = "#fcf7d1"; // Amarillo claro
      labelImage.style.backgroundColor = "#fcf7d1"; // Amarillo claro
      colorRamos.style.backgroundColor = "#fcf7d1"; // Amarillo claro
      break;
    case "Rosa azul":
      highlightBox.style.backgroundColor = "#d3ebff"; // Azul claro
      page2.style.backgroundColor = "#d3ebff"; // Azul claro
      labelImage.style.backgroundColor = "#d3ebff"; // Azul claro
      colorRamos.style.backgroundColor = "#d3ebff"; // Azul claro
      break;
    case "Rosa blanca":
      highlightBox.style.backgroundColor = "#dcdcdc"; // Blanco
      page2.style.backgroundColor = "#dcdcdc"; // Blanco
      labelImage.style.backgroundColor = "#dcdcdc"; // Blanco
      colorRamos.style.backgroundColor = "#dcdcdc"; // Blanco
      break;
    case "Rosa rosada":
      highlightBox.style.backgroundColor = "#f0c9dc"; // Rosa claro
      page2.style.backgroundColor = "#f0c9dc"; // Rosa claro
      labelImage.style.backgroundColor = "#f0c9dc"; // Rosa claro
      colorRamos.style.backgroundColor = "#f0c9dc"; // Rosa claro
      break;
    default:
      highlightBox.style.backgroundColor = "#ffebee"; // Color por defecto
      page2.style.backgroundColor = "#ffebee"; // Color por defecto
      labelImage.style.backgroundColor = "#ffebee"; // Color por defecto
      colorRamos.style.backgroundColor = "#ffebee"; // Color por defecto
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



// ========================
// Lectura y verificación de valores de localStorage
// ========================
// const storedName = localStorage.getItem("selectedName");
// const storedIntention = localStorage.getItem("selectedIntention");
// const storedRoseSrc = localStorage.getItem("selectedRoseSrc");
// const storedRoseColor = localStorage.getItem("selectedRoseColor");
// const storedVideo = localStorage.getItem("videoLink");
// const mensajeGuardado = localStorage.getItem("mensajeAdicional");
// const storedBouquetOption = localStorage.getItem("selectedBouquetOption"); // Guarda si el usuario eligió el ramo

// // Mostrar en consola los valores guardados
// if (storedName) console.log("Nombre guardado:", storedName);
// if (storedIntention) console.log("Intención guardada:", storedIntention);
// if (storedRoseSrc) console.log("URL de la rosa guardada:", storedRoseSrc);
// if (storedRoseColor) console.log("Color de la rosa guardado:", storedRoseColor);
// if (storedVideo) console.log("Enlace de video guardado:", storedVideo);
// if (mensajeGuardado) console.log("Mensaje adicional guardado:", mensajeGuardado);
// if (storedBouquetOption) console.log("Opción de ramo guardada:", storedBouquetOption);




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





//Tercera pestaña:
async function pegarLink() {
  try {
      const text = await navigator.clipboard.readText();
      
      // Validar si el enlace es de una plataforma de video común
      if (esEnlaceDeVideo(text)) {
          document.getElementById('youtube_url').value = text;
          console.log("Enlace de video pegado desde el portapapeles:", text);
      } else {
          console.log("El enlace pegado no es un enlace de video válido.");
          alert("Por favor, pegue un enlace válido de video.");
      }
  } catch (err) {
      console.error("Error al pegar el enlace desde el portapapeles:", err);
  }
}

// Función para verificar si el enlace es de un video
function esEnlaceDeVideo(url) {
  // Expresiones regulares para validar URLs de diferentes plataformas de video
  const patronesVideo = [
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/,               // YouTube
      /^(https?:\/\/)?(m\.)?(youtube\.com|youtu\.be)\/.+$/,                 // YouTube móvil
      /^(https?:\/\/)?(www\.)?vimeo\.com\/.+$/,                             // Vimeo
      /^(https?:\/\/)?(www\.)?tiktok\.com\/.+$/,                            // TikTok
      /^(https?:\/\/)?(vm\.)?tiktok\.com\/.+$/,                             // TikTok móvil
      /^(https?:\/\/)?(www\.)?dailymotion\.com\/.+$/,                       // Dailymotion
      /^(https?:\/\/)?(www\.)?facebook\.com\/.+\/videos\/.+$/,              // Facebook Videos
      /^(https?:\/\/)?(www\.)?facebook\.com\/reel\/.+$/,                    // Facebook Reels
      /^(https?:\/\/)?(m\.)?facebook\.com\/.+\/videos\/.+$/,                // Facebook Videos móvil
      /^(https?:\/\/)?(m\.)?facebook\.com\/reel\/.+$/,                      // Facebook Reels móvil
      /^(https?:\/\/)?(www\.)?facebook\.com\/share\/r\/.+$/,                // Facebook Compartidos (share links)
      /^(https?:\/\/)?(fb\.watch)\/.+$/,                                    // Facebook Watch (fb.watch)
      /^(https?:\/\/)?(www\.)?instagram\.com\/p\/.+$/,                      // Instagram Video (post)
      /^(https?:\/\/)?(www\.)?instagram\.com\/reel\/.+$/,                   // Instagram Reels
      /^(https?:\/\/)?(www\.)?twitter\.com\/.+\/status\/.+$/,               // Twitter Video (tweet)
      /^(https?:\/\/)?(mobile\.)?twitter\.com\/.+\/status\/.+$/             // Twitter Video móvil
  ];

  // Comprobar si la URL coincide con alguno de los patrones
  return patronesVideo.some((patron) => patron.test(url));
}

function guardarLink() {
  const youtubeUrl = document.getElementById('youtube_url').value;
  
  // Verificar si el enlace ingresado es de un video usando la función de validación
  if (youtubeUrl && esEnlaceDeVideo(youtubeUrl)) {
      // Guardar el enlace en localStorage
      localStorage.setItem("videoLink", youtubeUrl);
      console.log("Enlace guardado:", youtubeUrl);

      // Mostrar solo la parte inicial del enlace en la quinta página
      const summaryVideo = document.getElementById("summaryVideo");
      const urlObject = new URL(youtubeUrl);
      const displayUrl = urlObject.origin + "/...";
      summaryVideo.textContent = displayUrl;

      // Cerrar el modal
      document.getElementById('modal-video').style.display = 'none';
  } else {
      console.log("Por favor, ingresa un enlace de video válido.");
  }
}



function borrarLink() {
  // Borrar el enlace del localStorage
  localStorage.removeItem('videoLink');
  console.log("Enlace borrado");

  // Limpiar el campo de entrada
  document.getElementById('youtube_url').value = '';
}

function cerrarModal() {
  // Cierra el modal sin realizar ninguna otra acción
  document.getElementById('modal-video').style.display = 'none';
  console.log("Modal cerrado sin guardar ni borrar el enlace.");
}


// ========================
// Carga y actualización de mensaje adicional en textarea
// ========================
document.addEventListener("DOMContentLoaded", function() {
  const messageTextarea = document.getElementById("message");
  const charCounter = document.getElementById("char-counter");
  const summaryMessage = document.getElementById("summaryMessage"); // Elemento donde se mostrará el mensaje en la quinta pestaña

  // Limpiar el mensaje en localStorage al cargar la página
  localStorage.removeItem("mensajeAdicional");

  // Asegurarse de que el textarea y el contador comiencen vacíos
  messageTextarea.value = "";
  charCounter.textContent = "0 / 300";
  summaryMessage.value = ""; // Asegurarse de que también empiece vacío

  // Actualizar el contador, guardar en localStorage y mostrar en la quinta pestaña al escribir
  messageTextarea.addEventListener("input", function() {
      const currentLength = messageTextarea.value.length;
      charCounter.textContent = `${currentLength} / 300`;
      
      // Guardar el mensaje en localStorage
      localStorage.setItem("mensajeAdicional", messageTextarea.value);
      console.log("Mensaje actualizado y guardado en localStorage:", messageTextarea.value);

      // Actualizar el mensaje en la quinta pestaña
      summaryMessage.value = messageTextarea.value;
  });
});



//cuarta pestaña
// Función para mostrar el ramo según el color de la rosa seleccionada
function mostrarBouquet() {
  // Obtiene el color de la rosa seleccionada desde localStorage
  let selectedColor = localStorage.getItem("selectedRoseColor");

  // Verifica que el color esté en `localStorage`
  if (!selectedColor) {
    console.warn("No hay color seleccionado en localStorage.");
    return;
  }

  // Normaliza el color a minúsculas para evitar problemas de coincidencia
  selectedColor = selectedColor.toLowerCase();

  // Mapeo de códigos hexadecimales a los IDs de ramos
  const colorToBouquetMap = {
    "#e23535": "bouquet-red",
    "#ff9c24": "bouquet-orange",
    "#6e16e3": "bouquet-violet",
    "#fdd300": "bouquet-yellow",
    "#2d95ff": "bouquet-lightblue",
    "#ff0000": "bouquet-white", // Asegúrate de que este sea el color correcto para blanco
    "#ff58ac": "bouquet-pink"
  };

  // Obtener el ID del ramo correspondiente al color
  const bouquetId = colorToBouquetMap[selectedColor];

  // Oculta todos los ramos inicialmente
  document.querySelectorAll(".bouquet-img").forEach(img => {
    img.style.display = "none";
  });

  // Muestra el ramo correspondiente al color de la rosa seleccionada
  if (bouquetId) {
    const bouquetElement = document.getElementById(bouquetId);
    if (bouquetElement) {
      bouquetElement.style.display = "block";
      console.log("Ramo mostrado:", bouquetId); // Verificación en consola
    } else {
      console.warn("No se encontró un ramo para el color seleccionado:", bouquetId);
    }
  } else {
    console.warn("No se encontró mapeo para el color:", selectedColor);
  }
}



// Escucha el evento de clic en el botón para ir a la cuarta pestaña
document.getElementById("btn-letter").addEventListener("click", function () {
  // Obtiene el valor del textarea
  const messageTextarea = document.getElementById("message").value.trim();

  // Verifica si el textarea está vacío
  if (messageTextarea === "") {
    alert("Por favor, escribe un mensaje antes de continuar.");
    return; // Evita el cambio de pestaña si el mensaje está vacío
  }

  // Si el textarea no está vacío, proceder a la cuarta pestaña
  document.getElementById("thirdTab").style.display = "none";
  document.getElementById("fourthTab").style.display = "block";
  
  // Llamada a la función para mostrar el ramo correspondiente
  mostrarBouquet();

  // Añadir la animación de entrada
  document.getElementById("fourthTab").classList.add("animated");

  // Quitar la clase de animación después de que termine
  setTimeout(() => {
      document.getElementById("fourthTab").classList.remove("animated");
  }, 900); // Tiempo de la animación en milisegundos
});

function SaveBouquet(option) {
  // Verifica si el usuario eligió "Sí" (option = 2)
  if (option === 2) {
    // Actualiza `localStorage` para guardar el ramo en lugar de la rosa
    let selectedColor = localStorage.getItem("selectedRoseColor");

    // Normaliza el color a minúsculas para evitar problemas de coincidencia
    if (selectedColor) {
      selectedColor = selectedColor.toLowerCase();
    } else {
      console.warn("No se encontró un color en localStorage.");
      return;
    }

    // Mapeo de colores a las URLs de los ramos
    const colorToBouquetMap = {
      "#e23535": "./3d/roses-red.png",
      "#ff9c24": "./3d/roses-orange.png",
      "#6e16e3": "./3d/roses-violet.png",
      "#fdd300": "./3d/roses-yellow.png",
      "#2d95ff": "./3d/roses-lightblue.png",
      "#ff0000": "./3d/roses-white.png",
      "#ff58ac": "./3d/roses-rose.png"
    };

    // Obtener la URL del ramo según el color de la rosa seleccionada
    const bouquetSrc = colorToBouquetMap[selectedColor];
    
    if (bouquetSrc) {
      // Actualiza `localStorage` con la URL del ramo
      localStorage.setItem("selectedRoseSrc", bouquetSrc);
      console.log("Se guardó el ramo en localStorage:", bouquetSrc);
    } else {
      console.warn("No se encontró un ramo para el color seleccionado:", selectedColor);
    }
  } else {
    // Si elige "No", no se realizan cambios en `localStorage`
    console.log("El usuario decidió no convertir la rosa en un ramo.");
  }

  // Mostrar la imagen seleccionada en la quinta pestaña
  const summaryColorContainer = document.getElementById("summaryColor");
  const selectedRoseSrc = localStorage.getItem("selectedRoseSrc");
  
  if (selectedRoseSrc) {
    summaryColorContainer.innerHTML = ""; // Limpia cualquier contenido anterior

    const img = document.createElement("img");
    img.src = selectedRoseSrc; // Usa la imagen almacenada en `localStorage`
    img.style.width = "120px"; // Ajusta el tamaño según sea necesario
    img.style.height = "auto";
    summaryColorContainer.appendChild(img); // Muestra la imagen en el contenedor de la quinta pestaña
  }

  // Ocultar la cuarta pestaña y mostrar la quinta pestaña
  document.getElementById("fourthTab").style.display = "none";
  document.getElementById("fifthTab").style.display = "block";
}



//quinta Pestaña
// Función para obtener el nombre del color desde el código hexadecimal
function getColorName(colorHex) {
  const colorMap = {
      "#e23535": "Rojo",
      "#ff9c24": "Anaranjado",
      "#6e16e3": "Violeta",
      "#fdd300": "Celeste",
      "#ff0000": "Blanco",
      "#ff58ac": "Rosada"
  };
  return colorMap[colorHex.toLowerCase()] || "Desconocido";
}

// Función para formatear el enlace de video
function formatVideoLink(url) {
  if (!url) return "No especificado";
  return url.length > 25 ? `${url.substring(0, 25)}...` : url;
}

// Función para registrar toda la selección del usuario en la consola
function logUserSelection() {
  const name = localStorage.getItem("selectedName") || "No especificado";
  const intention = localStorage.getItem("selectedIntention") || "No especificada";
  const colorHex = localStorage.getItem("selectedRoseColor") || "No especificado";
  const colorName = getColorName(colorHex);
  const roseSrc = localStorage.getItem("selectedRoseSrc") || "No especificado";
  const message = localStorage.getItem("mensajeAdicional") || "No especificado";
  const videoLink = localStorage.getItem("videoLink") || "No especificado";
  const bouquetOption = localStorage.getItem("selectedBouquetOption") === "true" ? "Sí" : "No";

  
  console.log("Selección del Usuario:");
  console.log("Nombre:", name);
  console.log("Intención:", intention);
  console.log("Color de Rosa:", colorName);
  console.log("URL de la Rosa:", roseSrc);
  console.log("Mensaje Adicional:", message);
  console.log("Enlace de Video:", formatVideoLink(videoLink));
  console.log("Convertido a Ramo:", bouquetOption);
}

// Llama a `logUserSelection` cuando se acceda a la quinta pestaña
function goToSummaryPage() {
  logUserSelection();
}

// Llama a `goToSummaryPage` cuando se haga clic en el botón para acceder a la quinta pestaña
document.getElementById("finishBtn").addEventListener("click", goToSummaryPage);

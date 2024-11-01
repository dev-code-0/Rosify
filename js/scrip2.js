




function openModal() {
            document.getElementById('myModal').style.display = 'block';
        }

        // Función para cerrar el modal
        function closeModal() {
            document.getElementById('myModal').style.display = 'none';
        }
// Función para cambiar de la primera pestaña a la segunda
document.getElementById('confirmBtn').addEventListener('click', function() {
            const selectedColor = 'rosa'; // Debes reemplazar esto con la lógica de selección del color real
            localStorage.setItem('selectedRoseColor', selectedColor); // Guardar color en localStorage

            // Ocultar la primera pestaña y mostrar la segunda
            document.getElementById('firstTab').style.display = 'none';
            document.getElementById('secondTab').style.display = 'block';

            closeModal(); // Cerrar el modal
        });

        // Función para regresar a la primera pestaña
        document.getElementById('backBtn').addEventListener('click', function() {
            document.getElementById('secondTab').style.display = 'none';
            document.getElementById('firstTab').style.display = 'block';
        });

        // Cargar el color seleccionado en la segunda pestaña
        window.addEventListener('load', function() {
            const selectedColor = localStorage.getItem('selectedRoseColor');
            if (selectedColor) {
                document.getElementById('selectedRose').innerText = selectedColor;
                document.getElementById('selectedRose').style.color = selectedColor;
                document.getElementById('nameInput').style.borderColor = selectedColor;
                document.getElementById('nextBtn').style.backgroundColor = selectedColor;
            }
        });    
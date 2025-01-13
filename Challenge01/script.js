// Selección de elementos
const ratingButtons = document.querySelectorAll(".rating button");
const submitButton = document.querySelector(".submit-button");
const feedbackCard = document.querySelector(".feedback-card");

// Crear la tarjeta de agradecimiento dinámica
function createThankYouCard(selectedRating) {
  const thankYouCard = document.createElement("div");
  thankYouCard.classList.add("feedback-card");
  thankYouCard.innerHTML = `
        <div class="icon">
            <span class="star">★</span>
        </div>
        <h1>¡Gracias!</h1>
        <p>Seleccionaste ${selectedRating} de 5.</p>
        <p>¡Agradecemos mucho tu tiempo en darnos tu opinión para mejorar nuestro servicio!</p>
    `;
  document.body.appendChild(thankYouCard);
}

// Variable para guardar la calificación seleccionada
let selectedRating = null;

// Agregar evento a cada botón de calificación
ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Desmarcar todos los botones
    ratingButtons.forEach((btn) => btn.classList.remove("active"));

    // Marcar el botón seleccionado
    button.classList.add("active");

    // Guardar la calificación seleccionada
    selectedRating = button.textContent;
  });
});

// Evento para el botón de enviar
submitButton.addEventListener("click", () => {
  if (selectedRating) {
    // Ocultar la tarjeta actual
    feedbackCard.style.display = "none";

    // Mostrar la tarjeta de agradecimiento
    createThankYouCard(selectedRating);
  } else {
    alert("Por favor, selecciona una calificación antes de enviar.");
  }
});

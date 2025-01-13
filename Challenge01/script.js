// Selección de elementos
const ratingButtons = document.querySelectorAll(".rating button");
const submitButton = document.querySelector(".submit-button");
const feedbackCard = document.querySelector(".feedback-card");
const thankYouCard = document.querySelector(".thank-you-card");
const selectedRatingText = document.querySelector(".selected-rating");

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
    // Ocultar la tarjeta de feedback
    feedbackCard.style.display = "none";

    // Mostrar la tarjeta de agradecimiento
    thankYouCard.style.display = "block";

    // Actualizar el texto con la calificación seleccionada
    selectedRatingText.textContent = `Seleccionaste ${selectedRating} de 5`;
  } else {
    alert("Por favor, selecciona una calificación antes de enviar.");
  }
});

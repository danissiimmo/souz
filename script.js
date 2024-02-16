function openPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  document.body.style.overflow = "hidden"; // Блокировка прокрутки основного экрана
  document.getElementById("popup").scrollTop = 0; // Прокрутить вверх
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "auto"; // Разблокировка прокрутки основного экрана
}
function openuslovia() {
  document.getElementById("pravilasouz").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  document.body.style.overflow = "hidden"; // Блокировка прокрутки основного экрана
  document.getElementById("pravilasouz").scrollTop = 0; // Прокрутить вверх
}
function closeuslovia() {
  document.getElementById("pravilasouz").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "auto"; // Разблокировка прокрутки основного экрана
}
function openavtorskie() {
  document.getElementById("avtorskieprava").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  document.body.style.overflow = "hidden"; // Блокировка прокрутки основного экрана
  document.getElementById("avtorskieprava").scrollTop = 0; // Прокрутить вверх
}
function closeavtorskie() {
  document.getElementById("avtorskieprava").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "auto"; // Разблокировка прокрутки основного экрана
}
//Sélection des éléments du DOM
const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const startUpName = document.querySelector("#startup_name");
const message = document.querySelector("message");
const form = document.querySelector("form");

const submitButton = document.getElementById("submit_button");

submitButton.addEventListener("click", handleSubmit);

function handleSubmit() {
  form.reset();
}

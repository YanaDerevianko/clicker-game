import saveUserData from "./setDataLocalStorage.js";
import isValidEmail from "./validationEmail.js";

const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Please fill in all fields!");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (isValidEmail(email) && name !== "" && email !== "") {
    saveUserData(name, email);
    // clear input fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
  }

  // transition to the first level of the game
  window.location.href = "./gamePage.html";
});

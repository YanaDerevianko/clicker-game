export default function saveUserData(name, email) {
  // set data in local storage
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  console.log("User data successfully saved!");
}

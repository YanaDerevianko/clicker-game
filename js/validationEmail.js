export default function isValidEmail(email) {
    // check if the entered email address is valid
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  }
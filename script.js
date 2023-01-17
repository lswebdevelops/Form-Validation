const email = document.getElementById('mail');
// setCustomValidity(message): Adds a custom error message to 
// the element; if you set a custom error message, the element
//  is considered to be invalid, and the specified error is displayed.
//   This lets you use JavaScript code to establish a validation failure 
//   other than those offered by the standard HTML validation constraints. 
//   The message is shown to the user when reporting the problem.

email.addEventListener('input', function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});

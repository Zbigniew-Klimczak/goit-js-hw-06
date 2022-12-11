const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", submitForm);
function submitForm(evt) {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;
  if (email.value === "" || password.value === "") {
    window.alert("Please fill in all the fields!");
  } else {
    const formObject = new Object();
    formObject.email = email.value;
    formObject.password = password.value;
    console.log(formObject);
    evt.currentTarget.reset();
  }
}

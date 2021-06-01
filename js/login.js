let email = document.getElementById("email");
let password = document.getElementById("password");

let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((result) => {
      if (result.user.email == "ashanjameel78@gmail.com") {
        window.location.replace("../chatB.html");
      } else if (result.user.email == "esha@gmail.com") {
        window.location.replace("../chatA.html");
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode);
      alert(errorMessage);
    });
});

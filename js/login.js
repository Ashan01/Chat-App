let email = document.getElementById("email");
let password = document.getElementById("password");

let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");
  if (email.value == "ashanjameel78@gmail.com" && password.value == "1234") {
    console.log("hello world");
    window.location.replace("../chatB.html");
  } else if (email.value == "esha@gmail.com" && password.value == "1234") {
    window.location.replace("../chatA.html");
    // window.location.href = "../chat.html";
  } else {
    alert("wrong email password");
  }
});

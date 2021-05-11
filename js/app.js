let email = document.getElementById("email");
let password = document.getElementById("password");

function handleSubmit() {
   if (email.value == "ashanjameel@gmail.com" && password.value == "pakindo") {
      console.log("hello world");
   } else {
      console.log("try again");
   }
}

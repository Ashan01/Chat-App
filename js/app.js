let email = document.getElementById("email");
let password = document.getElementById("password");

let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");
  if (email.value == "ashanjameel78@gmail.com" && password.value == "pakindo") {
    console.log("hello world");
    window.location.href = "../chat.html";
  } else {
    console.log("try again");
  }
});

function ChatA() {
  var chat_Sec = document.getElementById("Chat_Sec");

  var para = document.createElement("p");
  var paraTextNode = document.createTextNode("hello");

  para.appendChild(paraTextNode);

  chat_Sec.appendChild(para);
}

function ChatB() {
  var chat_Sec = document.getElementById("Chat_Sec");

  var para = document.createElement("p");
  var br = document.createElement("br");

  var paraTextNode = document.createTextNode("this was good");
  para.setAttribute("class", "paraB");

  para.appendChild(paraTextNode);

  chat_Sec.appendChild(para);
  chat_Sec.appendChild(br);
}

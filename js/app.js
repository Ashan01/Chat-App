/*****************Login Js**********************/

let email = document.getElementById("email");
let password = document.getElementById("password");

let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");
  // if (email.value == "ashanjameel78@gmail.com" && password.value == "pakindo") {
  //   console.log("hello world");
  //   window.location.href = "http://127.0.0.1:5500/chat.html";
  // } else {
  //   console.log("try again");
  //   window.location.replace("../chat.html");
  //   // window.location.href = "../chat.html";
  // }
});

/*****************Login Js**********************/

function handleMsg() {
  let msg_input = document.getElementById("msg_input").value;
  console.log(msg_input);

  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let div4 = document.createElement("div");
  let div5 = document.createElement("div");
  let div6 = document.createElement("div");
  let div7 = document.createElement("div");

  div1.setAttribute("class", "msg left_msg");
  div2.setAttribute("class", "msg_img");
  div3.setAttribute("class", "Chat_sec");
  div4.setAttribute("class", "msg_info");
  div5.setAttribute("class", "msg_info_name");
  div6.setAttribute("class", "msg_info_time");
  div7.setAttribute("class", "msg_text");

  div1.appendChild(div2);
}

/*****************Login Js**********************/

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

/*****************Login Js**********************/

function handleMsg() {
  let msg_input = document.getElementById("msg_input");
  let chat_Container = document.getElementById("chat_Container");

  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let div4 = document.createElement("div");
  let div5 = document.createElement("div");
  let div6 = document.createElement("div");
  let div7 = document.createElement("div");

  div1.setAttribute("class", "msg right_msg");
  div2.setAttribute("class", "msg_img_B");
  div3.setAttribute("class", "Chat_sec Chat_sec_B");
  div4.setAttribute("class", "msg_info");
  div5.setAttribute("class", "msg_info_name");
  div6.setAttribute("class", "msg_info_time");
  div7.setAttribute("class", "msg_text");

  div1.appendChild(div2);
  div1.appendChild(div3);
  div3.appendChild(div4);
  div4.appendChild(div5);
  div4.appendChild(div6);
  div3.appendChild(div7);

  var div6Text = document.createTextNode("12:56");
  div6.append(div6Text);

  var div5Text = document.createTextNode("Esha");
  div5.append(div5Text);

  var div7Text = document.createTextNode(msg_input.value);

  div7.append(div7Text);
  msg_input.value = "";

  chat_Container.appendChild(div1);
}

function handleMsgB() {
  let msg_input = document.getElementById("msg_input");
  let chat_Container = document.getElementById("chat_Container");

  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let div4 = document.createElement("div");
  let div5 = document.createElement("div");
  let div6 = document.createElement("div");
  let div7 = document.createElement("div");

  div1.setAttribute("class", "msg right_msg");
  div2.setAttribute("class", "msg_img");
  div3.setAttribute("class", "Chat_sec Chat_sec_B");
  div4.setAttribute("class", "msg_info");
  div5.setAttribute("class", "msg_info_name");
  div6.setAttribute("class", "msg_info_time");
  div7.setAttribute("class", "msg_text");

  div1.appendChild(div2);
  div1.appendChild(div3);
  div3.appendChild(div4);
  div4.appendChild(div5);
  div4.appendChild(div6);
  div3.appendChild(div7);

  var div6Text = document.createTextNode("12:56");
  div6.append(div6Text);

  var div5Text = document.createTextNode("Ashan");
  div5.append(div5Text);

  var div7Text = document.createTextNode(msg_input.value);
  div7.append(div7Text);
  msg_input.value = "";
  chat_Container.appendChild(div1);
}

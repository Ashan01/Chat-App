/****************Global Variables**************/
let chat_Container = document.getElementById("chat_Container");

let database = firebase.database().ref("chat");

/****************Global Variables**************/

/*****************Login Js**********************/

/*****************Login Js**********************/

function handleMsg() {
  let msg_input = document.getElementById("msg_input");

  let key = database.push().key;

  database.child(key).set({
    msg_A: msg_input.value,
    name: "Esha",
    time: "11:20",
  });
  msg_input.value = "";

  // let chat_Container = document.getElementById("chat_Container");
  // let div1 = document.createElement("div");
  // chat_Container.appendChild(div1);
  // let div2 = document.createElement("div");
  // let div3 = document.createElement("div");
  // let div4 = document.createElement("div");
  // let div5 = document.createElement("div");
  // let div6 = document.createElement("div");
  // let div7 = document.createElement("div");
  // div1.setAttribute("class", "msg left_msg");
  // div2.setAttribute("class", "msg_img");
  // div3.setAttribute("class", "Chat_sec ");
  // div4.setAttribute("class", "msg_info");
  // div5.setAttribute("class", "msg_info_name");
  // div6.setAttribute("class", "msg_info_time");
  // div7.setAttribute("class", "msg_text");
  // div1.appendChild(div2);
  // div1.appendChild(div3);
  // div3.appendChild(div4);
  // div4.appendChild(div5);
  // div4.appendChild(div6);
  // div3.appendChild(div7);
  // var div6Text = document.createTextNode("12:56");
  // div6.append(div6Text);
  // var div5Text = document.createTextNode("Ashan");
  // div5.append(div5Text);
  // var div7Text = document.createTextNode(msg_input.value);
  // div7.append(div7Text);
}

function handleMsgB() {
  let msg_input_B = document.getElementById("msg_input_B");

  let key = database.push().key;

  database.child(key).set({
    msg_B: msg_input_B.value,
    name: "Ashan",
    time: "11:20",
  });
  msg_input_B.value = "";

  // let chat_Container = document.getElementById("chat_Container");
  // let div1 = document.createElement("div");
  // chat_Container.appendChild(div1);
  // let div2 = document.createElement("div");
  // let div3 = document.createElement("div");
  // let div4 = document.createElement("div");
  // let div5 = document.createElement("div");
  // let div6 = document.createElement("div");
  // let div7 = document.createElement("div");
  // div1.setAttribute("class", "msg right_msg");
  // div2.setAttribute("class", "msg_img");
  // div3.setAttribute("class", "Chat_sec Chat_sec_B");
  // div4.setAttribute("class", "msg_info");
  // div5.setAttribute("class", "msg_info_name");
  // div6.setAttribute("class", "msg_info_time");
  // div7.setAttribute("class", "msg_text");
  // div1.appendChild(div2);
  // div1.appendChild(div3);
  // div3.appendChild(div4);
  // div4.appendChild(div5);
  // div4.appendChild(div6);
  // div3.appendChild(div7);
  // var div6Text = document.createTextNode("12:56");
  // div6.append(div6Text);
  // var div5Text = document.createTextNode("Ashan");
  // div5.append(div5Text);
  // var div7Text = document.createTextNode(msg_input_B.value);
  // div7.append(div7Text);
}

database.on("child_added", function (data) {
  console.log(data.val());

  if (data.val().msg_B !== undefined) {
    let div1 = document.createElement("div");
    chat_Container.appendChild(div1);
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
    var div7Text = document.createTextNode(data.val().msg_B);
    div7.append(div7Text);
  } else {
    console.log("this msg was undefined from msg B");
  }

  if (data.val().msg_A !== undefined) {
    let div1_1 = document.createElement("div");
    chat_Container.appendChild(div1_1);
    let div2_2 = document.createElement("div");
    let div3_3 = document.createElement("div");
    let div4_4 = document.createElement("div");
    let div5_5 = document.createElement("div");
    let div6_6 = document.createElement("div");
    let div7_7 = document.createElement("div");
    div1_1.setAttribute("class", "msg left_msg");
    div2_2.setAttribute("class", "msg_img");
    div3_3.setAttribute("class", "Chat_sec ");
    div4_4.setAttribute("class", "msg_info");
    div5_5.setAttribute("class", "msg_info_name");
    div6_6.setAttribute("class", "msg_info_time");
    div7_7.setAttribute("class", "msg_text");
    div1_1.appendChild(div2_2);
    div1_1.appendChild(div3_3);
    div3_3.appendChild(div4_4);
    div4_4.appendChild(div5_5);
    div4_4.appendChild(div6_6);
    div3_3.appendChild(div7_7);
    var div6_6Text = document.createTextNode("12:56");
    div6_6.append(div6_6Text);
    var div5_5Text = document.createTextNode("Esha");
    div5_5.append(div5_5Text);
    var div7_7Text = document.createTextNode(data.val().msg_A);
    div7_7.append(div7_7Text);
  } else {
    console.log("this msg was undefined from msg A");
  }
});

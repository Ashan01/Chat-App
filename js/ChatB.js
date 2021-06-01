let chat_Container = document.getElementById("chat_Container");

let database = firebase.database().ref("chat");

function handleMsgB() {
  let msg_input_B = document.getElementById("msg_input_B");

  if (msg_input_B.value !== "") {
    let key = database.push().key;

    database.child(key).set({
      msg_B: msg_input_B.value,
      name: "Ashan",
      time: "11:20",
    });
  } else {
    alert("this msg was empty");
  }
  msg_input_B.value = "";
}

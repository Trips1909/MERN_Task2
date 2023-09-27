let inputName;
let inputEmail;
let inputWebsite;
let inputMessage;

function getValues() {
  inputName = document.querySelector("#inputName").value;
  inputEmail = document.querySelector("#inputEmail").value;
  inputWebsite = document.querySelector("#inputWebsite").value;
  inputMessage = document.querySelector("#inputMessage").value;
}

function resetSite() {
    let inputs = document.querySelectorAll("input");
    for(let i = 0; i<inputs.length; i++){
        inputs[i].value = "";
    }

    document.querySelector("#inputMessage").value = "";

    let mes = document.querySelectorAll(".message");
    for(let i = 0; i<mes.length; i++){
        mes[i].textContent = "";
    }
    alert("Form Submitted")
}

function fieldEmpty(id, message) {
  let boxID = "#input" + id;
  let box = document.querySelector(boxID);
  let messageID = "#message" + id;
  let messagebox = document.querySelector(messageID);
  box.style.borderColor = "red";
  messagebox.textContent = message;
  // console.log(box);
  // console.log(messagebox);
}

function inputNameEmpty() {
  fieldEmpty("Name", "This field is required");
}

function inputEmailEmpty() {
  fieldEmpty("Email", " A valid email is required ");
}

function inputWebsiteEmpty() {
  fieldEmpty("Website", "A valid url is required");
}
function inputMessageEmpty() {
  fieldEmpty("Message", "This field is required");
}

document.querySelector("#submitBtn").addEventListener("click", function () {
  getValues();
  var anyEmpty = false;
  // console.log(inputName);
  // console.log(inputEmail);
  // console.log(inputWebsite);
  // console.log(inputMessage);
  // console.log(inputEmail);

  if (inputName == "") {
    // console.log("Input name empty");
    anyEmpty = true;
    inputNameEmpty();
  }

  if (inputEmail == "") {
    // console.log("Input Email empty");
    anyEmpty = true;
    inputEmailEmpty();
  }

  if (inputWebsite == "") {
    // console.log("Input website empty");
    anyEmpty = true;
    inputWebsiteEmpty();
  }

  if (inputMessage == "") {
    // console.log("Input message empty");
    anyEmpty = true;
    inputMessageEmpty();
  }

  if (!anyEmpty) {
    resetSite();
  }
  // console.log(typeof inputMessage);
});

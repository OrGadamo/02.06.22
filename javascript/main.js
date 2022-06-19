var userNameL = document.createElement("label");
document.getElementById("container").appendChild(userNameL);
userNameL.innerText = "First Name:";
userNameL.for = "name_input";
var userName = document.createElement("input");
document.getElementById("container").appendChild(userName);
userName.placeholder = "enter your name";
userName.id = "name_input";
var ageInputL = document.createElement("label");
document.getElementById("container").appendChild(ageInputL);
ageInputL.innerText = "Date Of Birth:";
ageInputL.for = "age_input";
var ageInput = document.createElement("input");
document.getElementById("container").appendChild(ageInput);
userName.id = "age_input";
ageInput.type = "date";
var submitBtn = document.createElement("button");
document.getElementById("container").appendChild(submitBtn);
submitBtn.innerText = "submit";
submitBtn.id = "submit_btn";
submitBtn.addEventListener("click", mainFunc);
var userNameSave;
/// מחזיר לי אובייקט עם התאריך של המשתמש בעל שלוש שדות של שנה חודש ויום
function getDateFromString(str) {
  var lineIndex = [];
  var myDate = {};
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "-") {
      lineIndex.push(i);
    }
  }
  myDate.year = +str.substring(0, lineIndex[0]);
  myDate.month = +str.substring(lineIndex[0] + 1, lineIndex[1]);
  myDate.day = +str.substring(lineIndex[1] + 1);
  return myDate;
}
//מקבל אובייקט של תאריך שאני יצרתי מחזיר אמת אם גיל מעל 18 שקר אחרת
function getLegalAgeFromObj(someDate) {
  var nowDate = new Date();
  if (nowDate.getFullYear() - someDate.year > 18) {
    return true;
  }
  if (nowDate.getFullYear() - someDate.year == 18) {
    if (nowDate.getMonth() + 1 > someDate.month) {
      return true;
    }
    if (nowDate.getMonth() + 1 == someDate.month) {
      if (nowDate.getDate() >= someDate.day) {
        return true;
      }
    }
  }
  return false;
}
function mainFunc() {
  if (userName.value != "" && ageInput.value != "") {
    var userDate = ageInput.value;
    var userDateObj = getDateFromString(userDate);
    var isLegal = getLegalAgeFromObj(userDateObj);
    var Message = document.createElement("h1");
    document.getElementById("con_message").appendChild(Message);
    Message.style.textAlign = "center";
    Message.id = "message";
    userNameSave = userName.value;
    if (isLegal) {
      Message.innerText = "Welcome " + userName.value + " !";
      Message.style.color = "blue";
      Message.onmouseover = () => {
        Message.style.color = "green";
      };
      Message.onmouseout = () => {
        Message.style.color = "blue";
      };
      setTimeout(() => {
        nextPage();
      }, 5000);
      return;
    }
    Message.innerText = "No Entry :(";
    Message.style.color = "red";
    var declineGif = document.createElement("img");
    document.body.appendChild(declineGif);
    declineGif.src = "gif/mygif.gif";
    declineGif.style =
      "height: 55vh; width:65vw ;border:black solid 1px;position:absolute; top:8vh; left:25vh";
    declineGif.id = "gif";
    setTimeout(() => {
      window.location = "index.html";
    }, 5000);
    return;
  }
  alert("enter details");
}

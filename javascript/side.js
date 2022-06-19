var firstNameArray = [];
var lastName;
function nextPage() {
  document.getElementById("message").innerHTML = "";
  document.getElementById("opener").innerHTML = "";
  document.getElementById("container").innerHTML = "";
  document.getElementById("con_opener").innerHTML =
    "<h1>Hello " +
    userNameSave +
    "</h1><h2 style='text-align: center'>welcome to the Name list Generator<br />Enter your family name and 4 first name to generate a name list</h2>";
  document.getElementById("opener").style +=
    "justify-content:space-evenly;padding:4vh; border-radius:10px; background-color:#e9edf1";
  var lNameLabel = document.createElement("label");
  document.getElementById("opener").appendChild(lNameLabel);
  lNameLabel.innerText = "Family Name:";
  var lastNameInput = document.createElement("input");
  document.getElementById("opener").appendChild(lastNameInput);
  lastNameInput.placeholder = "enter last name";
  lastNameInput.id = "lname_inp";
  var lastNameBtn = document.createElement("button");
  document.getElementById("opener").appendChild(lastNameBtn);
  lastNameBtn.innerText = "press to save";
  lastNameBtn.id = "lname_btn";
  lastNameBtn.addEventListener("click", saveLastName);
  var fNameLabel = document.createElement("label");
  document.getElementById("opener").appendChild(fNameLabel);
  fNameLabel.innerText = "First Name:";
  var firstNameInput = document.createElement("input");
  document.getElementById("opener").appendChild(firstNameInput);
  firstNameInput.placeholder = "enter first name";
  firstNameInput.id = "fname_inp";
  var firstNameBtn = document.createElement("button");
  document.getElementById("opener").appendChild(firstNameBtn);
  firstNameBtn.innerText = "press to save";
  firstNameBtn.addEventListener("click", saveFirstName);
  firstNameBtn.id = "fname_btn";
  var getListBtn = document.createElement("button");
  document.getElementById("opener").appendChild(getListBtn);
  getListBtn.innerText = "press to generate list";
  getListBtn.id = "generator_btn";
  getListBtn.addEventListener("click", createListForNames);
  console.log(userNameSave);
}
// save input of last name in global var lastNameInput
function saveLastName() {
  if (document.getElementById("lname_inp").value != "") {
    lastName = document.getElementById("lname_inp").value;
    document.getElementById("lname_btn").disabled = "true";
    document.getElementById("lname_inp").value = "";
    return;
  }
  alert("enter last name!");
}
// save input of first name in global var array firstNameArray
function saveFirstName() {
  if (document.getElementById("fname_inp").value != "") {
    if (firstNameArray.length < 4) {
      firstNameArray.push(document.getElementById("fname_inp").value);
      document.getElementById("fname_inp").value = "";
      return;
    }
    document.getElementById("fname_btn").disabled = "true";
    alert("you already entered 4 names");
    return;
  }
  alert("enter first name!");
}
function createListForNames() {
  if (firstNameArray.length == 4) {
    var newlist = document.createElement("ul");
    document.getElementById("container").appendChild(newlist);
    newlist.id = "names_list";
    createListItemInList(newlist.id);
    createListButton();
    return;
  }
  alert("please enter 4 names!");
}
function createListItemInList(id) {
  document.getElementById(id).innerHTML = "";
  for (var i = 0; i < firstNameArray.length; i++) {
    var newListItem = document.createElement("li");
    newListItem.innerText = firstNameArray[i] + " " + lastName;
    document.getElementById(id).appendChild(newListItem);
    newListItem.id = "li_" + i;
  }
}
function createListButton() {
  var checkFirstLetterBtn = document.createElement("button");
  document.getElementById("container").appendChild(checkFirstLetterBtn);
  checkFirstLetterBtn.innerText = "change by first letter";
  checkFirstLetterBtn.id = "change_btn";
  checkFirstLetterBtn.addEventListener("click", changeNamesColorByFirstName);
  var searchBtn = document.createElement("button");
  document.getElementById("container").appendChild(searchBtn);
  searchBtn.innerText = "press to start search";
  searchBtn.id = "search_btn";
  searchBtn.addEventListener("click", getSearchInput);
  searchBtn.addEventListener("mouseover", printToLog);
  var rearrangeBtnL = document.createElement("button");
  document.getElementById("container").appendChild(rearrangeBtnL);
  rearrangeBtnL.innerText = "press to rearrange list by length";
  rearrangeBtnL.addEventListener("click", printListByLengthOrder);
  rearrangeBtnL.id = "lengthchange_btn";
  var rearrangeBtnA = document.createElement("button");
  document.getElementById("container").appendChild(rearrangeBtnA);
  rearrangeBtnA.innerText = "press to rearrange list by Alphabet";
  rearrangeBtnA.addEventListener("click", printListByAlphabetOrder);
  rearrangeBtnA.id = "alphabetchange_btn";
}
function changeNamesColorByFirstName() {
  for (var i = 0; i < firstNameArray.length; i++) {
    if (checkFirstLetter(firstNameArray[i])) {
      document.getElementById("li_" + i).style.color = "green";
    }
  }
  document.getElementById("change_btn").style.display = "none";
}
function checkFirstLetter(str) {
  return str[0].toUpperCase() === userNameSave[0].toUpperCase();
}
function getSearchInput() {
  var labelSearch = document.createElement("label");
  document.getElementById("con_message").appendChild(labelSearch);
  labelSearch.innerText = "Search";
  var SearchInput = document.createElement("input");
  document.getElementById("con_message").appendChild(SearchInput);
  SearchInput.placeholder = "enter a name";
  SearchInput.id = "input_search";
  SearchInput.addEventListener("input", checkInNames);
  var resultp = document.createElement("p");
  document.getElementById("con_message").appendChild(resultp);
  resultp.id = "search_result";
  document.getElementById("search_btn").style.display = "none";
}
function checkInNames() {
  var userSearch = document.getElementById("input_search").value;
  document.getElementById("search_result").innerText = "";
  for (var i = 0; i < firstNameArray.length; i++) {
    if (firstNameArray[i].indexOf(userSearch) != -1) {
      document.getElementById("search_result").innerText +=
        firstNameArray[i] + "\n";
    }
  }
}
function printToLog() {
  console.log("Search Hover");
}
function getArrayOrderByLength() {
  for (var i = 0; i < firstNameArray.length - 1; i++) {
    if (firstNameArray[i].length > firstNameArray[i + 1].length) {
      firstNameArray.push(firstNameArray.splice(i, 1)[0]);
      i = 0;
    }
  }
}
function printListByLengthOrder() {
  getArrayOrderByLength();
  createListItemInList("names_list");
}
function getArrayOrderByAlphabet() {
  for (var i = 0; i < firstNameArray.length - 1; i++) {
    if (
      firstNameArray[i][0].toUpperCase() >
      firstNameArray[i + 1][0].toUpperCase()
    ) {
      firstNameArray.push(firstNameArray.splice(i, 1)[0]);
      i = 0;
    }
  }
}
function printListByAlphabetOrder() {
  getArrayOrderByAlphabet();
  createListItemInList("names_list");
}

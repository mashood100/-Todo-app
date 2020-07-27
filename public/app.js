// targated or focus input field on page load
var todo_item = document.getElementById("todo_item");
todo_item.focus();
todo_item.select();

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Trigger a Button Click on Enter
todo_item.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    document.getElementById("add_btn").click();
  }
});
function date_time() {
  var today = new Date();
  var date =
    "Date : " +
    today.getDate() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getFullYear();

  var time =
    "Time - " +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds();

  return (dateTime = date + " " + time);
}
var list = document.getElementById("list");
var counts = 0;
function addTodo() {
  var todo_item = document.getElementById("todo_item");
  if (todo_item.value === "") {
    alert("Please Enter Some Task to Add in TODO App");
  } else {
    counts += 1;
    document.getElementById("item_count").innerHTML = counts;
    // create span tag for date and time
    var span = document.createElement("span");
    var spanText = document.createTextNode(date_time());
    span.setAttribute("class", "date_time");
    span.setAttribute("id", "date");
    // create li tag with text node
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value);
    li.setAttribute("class", "todoList");
    // create delete button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.setAttribute("class", "deleteBtn");
    delBtn.setAttribute("onclick", "deleteItem(this)");
    delBtn.appendChild(delText);
    // create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.setAttribute("class", "editBtn");
    editBtn.setAttribute("onclick", "editItem(this)");
    editBtn.appendChild(editText);

    li.appendChild(spanText);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    li.appendChild(liText);
    list.appendChild(li);
    todo_item.value = "";
  }
}

function deleteAll() {
  document.getElementById("item_count").innerHTML = 0;
  if (list.innerHTML === "") {
    alert("Currently no task is available for delete");
  } else {
    list.innerHTML = "";
  }
}

function deleteItem(e) {
  e.parentNode.remove();
}

function editItem(e) {
  var val = prompt("Enter updated value", e.parentNode.lastChild.nodeValue);
  e.parentNode.lastChild.nodeValue = val;
}
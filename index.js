var inputItem = document.getElementById("search");

inputItem.addEventListener("keyup", filterEvent);

function filterEvent(e) {
  var text = e.target.value.toLowerCase();
  var items = document.getElementsByClassName("card-body");

  Array.from(items).forEach((item) => {
    var roomName = item.firstElementChild.textContent;
    if (
      roomName.toLowerCase().indexOf(text) != -1 ||
      roomName.toLowerCase() == "receipt"
    ) {
      item.parentElement.style.display = "block";
    } else {
      item.parentElement.style.display = "none";
    }
  });
}

var buttons = document.getElementsByClassName("book");
Array.from(buttons).forEach((button) => {
  if (button.id != "checkin") {
    button.addEventListener("click", clickEvent);
  } else {
    button.addEventListener("click", alertEvent);
  }
});

function clickEvent(e) {
  var id = e.target.id;
  var guests = document.getElementById("guest" + id[4]).value;
  var days = document.getElementById("day" + id[4]).firstElementChild.value;
  var price = document
    .getElementById("price" + id[4])
    .textContent.split("₹")[1];

  days = days == "" ? "--" : days;
  var totalCost = days == "--" ? "--" : "₹" + days * parseInt(price);

  document.getElementById("receipt-guests").textContent = guests;
  document.getElementById("receipt-days").textContent = days;
  document.getElementById("receipt-total").textContent = totalCost;
}

function alertEvent(e) {
  var guests = document.getElementById("receipt-guests").textContent;
  var days = document.getElementById("receipt-days").textContent;
  if (guests != "--" || days != "--") {
    alert(
      `Your room for ${guests} halt for ${days} day/days is getting ready...`
    );
  } else {
    alert("Please select the room...");
  }
}
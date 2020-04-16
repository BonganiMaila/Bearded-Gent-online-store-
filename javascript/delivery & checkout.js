//use a random generator to confirm order and generate  a reference number
function generateNumber() {
  let x = document.getElementById("random")
  x.innerHTML = Math.floor((Math.random() * 1000) + 1);
  alert("Your order is confirmed and your reference number is EU" + x).innerHTML;
}



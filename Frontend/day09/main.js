const tds = document.querySelectorAll("td");
console.log(tds);

function changeFucntion(e) {
  console.log(e);
  e.classList.toggle("active");

  console.log(e.classList.contains("active"));

  let count = getCounter();
  console.log(count);
  updateCounter(count);
}

function getCounter() {
  let count = 0;
  for (let index = 0; index < tds.length; index++) {
    let td = tds[index];
    if (td.classList.contains("active")) {
      count++;
    }
  }

  return count;
}

//updating booking and remaining class seats
const bookings = document.querySelector(".points1");
const remaining = document.querySelector(".points2");

function updateCounter(count) {
  remaining.innerHTML = 30 - count;
  bookings.innerHTML = count;
}

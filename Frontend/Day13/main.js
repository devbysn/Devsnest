let myForm = document.getElementById("myForm");
let confirmed = document.getElementById("confirmed");
let recovered = document.getElementById("recovered");
let deaths = document.getElementById("deaths");

const child = document.getElementsByClassName("child");
console.log(child);

let button = document.getElementsByClassName("button");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let country = document.getElementById("country").value;
  console.log(country);

  let url = "https://api.covid19api.com/total/dayone/country/" + country;

  console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      var length = res.length - 1;
      console.log(length);
      console.log(res[length]);
      const confirm = res[length].Confirmed;
      const death = res[length].Deaths;
      const recover = res[length].Recovered;

      confirmed.innerHTML = "";
      recovered.innerHTML = "";
      deaths.innerHTML = "";
      confirmed.textContent += `total Confirmed : + ${confirm}`;
      recovered.textContent += `total Recovered : + ${recover}`;
      deaths.textContent += `total Deaths : + ${death}`;
    });
});
//

// async function covidData() {
//   const data = await fetch("https://api.covid19api.com/summary ");
//   console.log(data);

//   const jsonData = await data.json();
//   console.log(jsonData.Countries[76]);
// }

// covidData();

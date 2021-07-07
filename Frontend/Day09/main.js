//call and apply
const descSatya = {
  name: "Satya",
  year: "2020",
  dob(year, course) {
    console.log(
      `${this.name} is ${this.year - year} year old and is persuing ${course}`
    );
  },
};

const descRohit = {
  name: "Rohit",
  year: "2020",
};

descSatya.dob(2000, "CSE");

const year = descSatya.dob;

year.call(descRohit, 2001, "Nursing");

const rohitInfo = [2001, "Nursing"];
year.apply(descRohit, rohitInfo);

//bind

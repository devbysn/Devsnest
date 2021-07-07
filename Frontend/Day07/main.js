// 1. Write a JavaScript program to list the properties of a JavaScript object.Sample object:
// var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
//Sample Output: name,sclass,rollno

// var getkeys = Object.keys(student);
// console.log(getkeys);

// var getkeys2 = function (student) {
//   var keys = [];
//   for (var key in student) {
//     keys.push(key);
//   }

//   return keys;
// };

// console.log(getkeys2);

//  2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
//Sample object:
// var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

// delete student.rollno;

// console.log(student);

// 3. Write a JavaScript program to get the length of a JavaScript object.
//Sample object :
// Object.objsize = function (Myobj) {
//   var osize = 0,
//     key;
//   for (key in Myobj) {
//     if (Myobj.hasOwnProperty(key)) osize++;
//   }
//   return osize;
// };

// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };

// var objsize = Object.objsize(student);
// console.log("Size of the current object : " + objsize);

// console.log(
//   "Size of the current object : " + (size = Object.keys(student).length)
// );
// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
// var library = [
//   { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
//   { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];
// for (var i = 0; i < library.length; i++) {
//   console.log(library[i].readingStatus);
// }

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
//Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased

// function Cylinder(cyl_height, cyl_diameter) {
//   this.cyl_height = cyl_height;
//   this.cyl_diameter = cyl_diameter;
// }

// Cylinder.prototype.Volume = function () {
//   var radius = this.cyl_diameter / 2;
//   return this.cyl_height * Math.PI * radius * radius;
// };

// var cyl = new Cylinder(7, 4);
// console.log('volume =', cyl.Volume().toFixed(4));

// function Cylinder(radius, let )

// 6. Write a JavaScript program to sort an array of JavaScript objects.
//Sample Object :
var library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

var sort_by = function (field_name, reverse, initial) {
  var key = initial
    ? function (x) {
        return initial(x[field_name]);
      }
    : function (x) {
        return x[field_name];
      };

  reverse = !reverse ? 1 : -1;

  return function (x, y) {
    return (x = key(x)), (y = key(y)), reverse * ((x > y) - (y > x));
  };
};

var newobj = library.sort(sort_by("libraryID", true, parseInt));

console.log(newobj);

// let arr = ["jonas", "zach", "satya", "ajay"];
// console.log(arr.sort());
// console.log(arr);

// Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

// 1 .JS function to check whether input is array or not

// const arr1 = [1, 3, 4, 5];

// const arr2 = "This is not an array";

// console.log(Array.isArray(arr1));

// console.log(Array.isArray(arr2));

// if (arr1.constructor === Array) console.log("true");
// else console.log("False");
// if (arr2.constructor === Array) console.log("true");
// else console.log("False");

// // 2. Write a JavaScript function to clone an array Test Data :

// var arr1 = [1, 2, 4, 0];
// var arr2 = [1, 2, [4, 0]];
// console.log(arr1);
// console.log(arr2);

// console.log(arr1.splice(0));
// console.log(arr2.splice(0));

// var arr_clone = function (arr1) {
//   return arr1.slice(0);
// };

// //using for loop
// var arr3 = [].concat(arr1);
// var arr4 = [...arr2];
// console.log(arr3);
// console.log(arr4);

//3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

// _first = function (array, n) {
//   var result = [];
//   if (n === undefined) return array[0];
//   for (var i = 0; i < n; i++) {
//     result.push(array[i]);
//   }
//   return result;
// };

// //2nd method

// var first =  function(array, n) {
//     if (array == null)
//     return void 0;
//   if (n == null)
//     return array[0];
//   if (n < 0)
//     return [];
//   return array.slice(0, n);
// };

//4. Write a simple JavaScript program to join all elements of the following array into a string.

// myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString());
// console.log(myColor.join());
// console.log(myColor.join('+'));

//5. Write a JavaScript program to find the most frequent item of an array
var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) m++;
    if (mf < m) {
      mf = m;
      item = arr1[i];
    }
  }
  m = 0;
}
console.log(item + " ( " + mf + " times ) ");

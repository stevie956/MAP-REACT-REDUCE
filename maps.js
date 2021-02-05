// const arrayExample = [1, 2, 3];
// let testArray = [];
// for (let i = 0; i < arrayExample.length; i++) {
//   let currentElement = arrayExample[i];
//   currentElement = currentElement + 1;
//   //testArray[i] = currentElement;
//   testArray.push(currentElement);
// }
// console.log("-------------This is the for loop example--------------");
// console.log(arrayExample); // [1,2,3]
// console.log(testArray); // [2,3,4]
// console.log("-------------------------------------------------------");
// // [1,2,3]
// const mysteryVariable = arrayExample.map((num) => {
//   return num + 1;
// });
// // const mysteryVariable = arrayExample.map((num) => num + 1);
// console.log("-------------This is the map example--------------");
// console.log(arrayExample);
// console.log(mysteryVariable);
// console.log("-------------------------------------------------------");

// const input = [1, 2, 3, "Ash", "10", "13", "Jake"];

// const result = input.map((num) => {
//   if (typeof num != "number") {
//     return num;
//   }
//   if (num % 2 == 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// console.log(input);
// console.log(result);

const input = [
    {
        name:"Ash",
        age: 10,
    },
    {
        name:"Stacey",
        age: 5
    },
];

const STATIC_VALUE = "General Assembly";
const output = input.map((ele) =>{
    return {
  name: ele.name,
  age: ele.age,
  time: new Date(),
  data: {
      stringified: `${ele.name} ${ele.age}`,
  },
  staticValue: STATIC_VALUE
};
});
 console.log(output);


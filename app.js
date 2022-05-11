// const j = 10;
// const l = 20;
// console.log(j + l);

// const greeting = (name) => {
//   const time = new Date().getHours();
//   if (time >= 3 && time <= 11) {
//     console.log(`Goodmorning ${name}`);
//   } else if (time >= 12 && time <= 16) {
//     console.log(`GoodAfternoon ${name}`);
//   } else if (time >= 17 && time <= 19) {
//     console.log(`GoodEvening ${name}`);
//   } else {
//     console.log(`Goodnight ${name}`);
//   }
// };

// greeting("Jack");

// console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);

// let count = 0;

// setInterval(() => {
//   console.log(`Count with me ${(count += 1)}`);
// }, 1000);

const names = require("./2-names.js");

console.log(names.chairman);
console.log(names.members);

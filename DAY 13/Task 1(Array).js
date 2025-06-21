let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
console.log("Third fruit:", fruits[2]);
fruits.push("Grapes");
console.log("After push:", fruits);
fruits.shift();
console.log("After shift:", fruits);
console.log("Length of array:", fruits.length);
console.log("Looping through array:");
for (let fruit of fruits) {
  console.log(fruit);
}
fruits.reverse();
console.log("Reversed array:", fruits);
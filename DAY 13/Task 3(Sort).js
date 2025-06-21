let s1 = [1,2,3,4,5];
let s2 = [5,4,3,2,1];
let s3 = s1.concat(s2);
console.log("After concat :"+s3);
console.log("After splice :"+s3.splice(5,2));
s3.sort();
console.log("After sort :"+s3);
console.log("Includes 3? " + s3.includes(3));
console.log("Index of 4: " + s3.indexOf(2));
Math.floor(Math.random() * 256);

// Does random return 1 as well? NOPE

let redVal = Math.floor(Math.random() * 256);
let greenVal = Math.floor(Math.random() * 256);
let blueVal = Math.floor(Math.random() * 256);

console.log(`redVal = ${redVal}`);
console.log(`greenVal = ${greenVal}`);
console.log(`blueVal = ${blueVal}`);

let oneTenthRedVal = redVal * 0.1;
let oneTenthGreenVal = greenVal * 0.1;
let oneTenthBlueVal = blueVal * 0.1;


redVal = Math.round((redVal - oneTenthRedVal) * 10) / 10;
console.log(redVal);

redVal = Math.round((redVal - oneTenthRedVal) * 10) / 10;
console.log(redVal);

redVal = Math.round((redVal - oneTenthRedVal) * 10) / 10;
console.log(redVal);

redVal = Math.round((redVal - oneTenthRedVal) * 10) / 10;
console.log(redVal);

redVal = Math.round((redVal - oneTenthRedVal) * 10) / 10;
console.log(redVal);

redVal = Math.round((redVal - oneTenthRedVal) * 10) / 10;
console.log(redVal);

redVal = Math.round((redVal - oneTenthRedVal) * 10) / 10;
console.log(redVal);

redVal = Math.round((redVal - oneTenthRedVal) * 10) / 10;
console.log(redVal);

redVal = Math.round((redVal - oneTenthRedVal) * 10) / 10;
console.log(redVal);

redVal = Math.round((redVal - oneTenthRedVal) * 10) / 10;
console.log(redVal);


for (let i = 0; i < 10; i++) {
  // redVal = redVal - oneTenthRedVal;
  // greenVal = greenVal - oneTenthgreenVal;
  // blueVal = blueVal - oneTenthblueVal;

  // console.log(`count ${i+1} - redVal = ${redVal}, greenVal = ${greenVal}, 
  // blueVal = ${blueVal}`);
}
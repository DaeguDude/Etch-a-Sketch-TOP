Math.floor(Math.random() * 256);

// Does random return 1 as well? NOP
let redVal = Math.floor(Math.random() * 256);
let oneTenthRedVal = (redVal * 0.1).toPrecision(3);

let greenVal = Math.floor(Math.random() * 256);
let oneTenthGreenVal = (greenVal * 0.1).toPrecision(3);

let blueVal = Math.floor(Math.random() * 256);
let oneTenthBlueVal = (blueVal * 0.1).toPrecision(3);

for (let i = 0; i < 10; i++) {
  redVal = (redVal - oneTenthRedVal).toPrecision(4);
  greenVal = (greenVal - oneTenthGreenVal).toPrecision(4);
  blueVal = (blueVal - oneTenthBlueVal).toPrecision(4);
}

console.log(redVal);
console.log(greenVal);
console.log(blueVal);






for (let i = 0; i < 10; i++) {
  // redVal = redVal - oneTenthRedVal;
  // greenVal = greenVal - oneTenthgreenVal;
  // blueVal = blueVal - oneTenthblueVal;

  // console.log(`count ${i+1} - redVal = ${redVal}, greenVal = ${greenVal}, 
  // blueVal = ${blueVal}`);
}
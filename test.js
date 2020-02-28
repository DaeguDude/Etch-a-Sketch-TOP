let str = 'rgb(68, 39, 160)';

let startIndex = str.search("\\(") + 1;
let endIndex = str.search("\\)");
let rgb = str.substring(startIndex, endIndex);
rgb = rgb.split(",");
console.log(rgb);


for (let i = 0; i < 10; i++) {
  // redVal = redVal - oneTenthRedVal;
  // greenVal = greenVal - oneTenthgreenVal;
  // blueVal = blueVal - oneTenthblueVal;

  // console.log(`count ${i+1} - redVal = ${redVal}, greenVal = ${greenVal}, 
  // blueVal = ${blueVal}`);
}
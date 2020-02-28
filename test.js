let red = 155
let green = 255
let blue = 20

for (let i = 0; i < 10; i++) {
  let numCalled = Math.floor(Math.random() * 10);
  console.log(`number of times called: ${numCalled}`);

  let percent = (1 - (numCalled / 10)).toPrecision(2);
  console.log(`percent to multiply: ${percent}`)

  console.log("\n")


}



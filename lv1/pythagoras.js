const input = ['6 8 10', '25 52 60', '5 12 13', '5 4 3', '0 0 0'];

for (let sides of input) {
  const strToInt = sides
    .split(' ')
    .map(num => Math.pow(parseInt(num), 2))
    .sort((a, b) => a - b);
  const firstSidePow = strToInt.shift();
  const secondSidePow = strToInt.shift();
  const thirdSidePow = strToInt.shift();
  if (firstSidePow === 0 && secondSidePow === 0 && thirdSidePow === 0) {
    break;
  }

  if (firstSidePow + secondSidePow === thirdSidePow) {
    console.log('right');
  } else {
    console.log('wrong');
  }
}

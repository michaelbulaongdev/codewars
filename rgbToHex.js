function convertToHex(x) {

  if (x < 0) {x = 0;}
  if (x > 255) {x = 255;}

  const hex = []

  do {
    hex.push(x % 16);
    x = Math.floor(x / 16);
  } while ((x / 16) !== 0);

  const hexMap = hex.map(num => {
    if (num < 10) {
      return num;
    } else {
      switch (num) {
        case 10: return num = 'A'; break;
        case 11: return num = 'B'; break;
        case 12: return num = 'C'; break;
        case 13: return num = 'D'; break;
        case 14: return num = 'E'; break;
        case 15: return num = 'F'; break;
      }
    }
  })

  if (hexMap.length === 1) {
    hexMap.push(0);
  }

  const hexNum = hexMap.reverse().join('');

  return hexNum;
}

function rgb (r, g, b) {
  const hexR = convertToHex(r);
  const hexG = convertToHex(g);
  const hexB = convertToHex(b);

  return `${hexR}${hexG}${hexB}`;
}

// console.log(rgb(-20, -20, -20));
// console.log(rgb(0, 0, 0));
// console.log(rgb(10, 10, 10));
// console.log(rgb(16, 16, 16));
// console.log(rgb(255, 255, 255));
// console.log(rgb(300, 300, 300));

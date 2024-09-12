/*
  This solution runs in O(sqrt(floors)) time.
  It jumps by the square root of the number of floors,
  then uses a linear search to find the exact floor.
*/
function twoEggs(floors, breakingPoint) {
  let drops = 0;
  const jmpAmount = Math.floor(Math.sqrt(floors));

  let i = jmpAmount;
  for (; i <= floors; i += jmpAmount) {
    drops++;
    if (i >= breakingPoint) {
      break;
    }
  }

  i -= jmpAmount;

  for (let j = 1; j <= jmpAmount && i < floors; j++, i++) {
    drops++;
    if (i >= breakingPoint) {
      break;
    }
  }

  return drops;
}

// example usage:
console.log(twoEggs(100, 45));

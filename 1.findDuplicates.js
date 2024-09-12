/*
  findDuplicates1 leverages javascript's array methods filter and indexOf.
  However, it runs in O(n^2) time complexity because 'filter' runs in O(n)
  and 'indexOf' is also O(n).
*/
function findDuplicates1(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}

/*
  findDuplicates2 is a more efficient version of findDuplicates1.
  It leverages javascript's Set and for...of loop.
  It runs in O(n) time complexity because 'Set' has O(1) read/write time complexity
  and 'for...of' runs in O(n).
*/
function findDuplicates2(arr) {
  const duplicates = [];
  const seen = new Set();

  for (const item of arr) {
    if (seen.has(item)) {
      duplicates.push(item);
    } else {
      seen.add(item);
    }
  }

  return duplicates;
}

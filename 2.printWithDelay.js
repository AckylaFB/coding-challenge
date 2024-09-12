function printWithDelay(arr) {
  let delay = 1000;
  for (const item of arr) {
    setTimeout(() => {
      console.log(item);
    }, delay);
    delay *= 2;
  }
}

printWithDelay(["a", "b", "c", "d"]);

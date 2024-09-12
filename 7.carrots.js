function getMaxValue(carrotTypes, capacity) {
  const maxValueAtCapacity = Array(capacity + 1).fill(0);

  for (let i = 0; i <= capacity; i++) {
    for (const carrot of carrotTypes) {
      if (carrot.kg <= i) {
        maxValueAtCapacity[i] = Math.max(
          maxValueAtCapacity[i],
          maxValueAtCapacity[i - carrot.kg] + carrot.price
        );
      }
    }
  }

  return maxValueAtCapacity[capacity];
}

console.log(
  getMaxValue(
    [
      { kg: 5, price: 100 },
      { kg: 7, price: 150 },
      { kg: 3, price: 70 },
    ],
    36
  )
);

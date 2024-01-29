//Fischer-Yates Array Shuffle Alogrithm
export function shuffleArray(arr: string[]): string[] {
  const newArr = arr.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const ranEl = Math.floor(Math.random() * (i + 1));
    const temp = newArr[i];
    newArr[i] = newArr[ranEl];
    newArr[ranEl] = temp;
  }

  return newArr;
}

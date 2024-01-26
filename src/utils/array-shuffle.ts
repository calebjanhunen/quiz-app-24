//Fischer-Yates Array Shuffle Alogrithm
export function shuffleArray(arr: string[]): string[] {
  const newArr = new Array(arr.length);
  for (let i = arr.length - 1; i > 0; i--) {
    const ranEl = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    newArr[i] = arr[ranEl];
    newArr[ranEl] = temp;
  }

  return newArr;
}

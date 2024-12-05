function bubbleSort(a) {
  const n = a.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        // Swap arr[j] and arr[j+1]
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
}

const n = 5000;
const a = Array.from({ length: n }, () => Math.floor(Math.random() * 1000));
const startTime = performance.now();
bubbleSort(a);
const stopTime = performance.now();
const elapsedTime = stopTime - startTime;
console.log(`Time Taken: ${elapsedTime} milliseconds`);


function selectionSort(a) {
  for (let i = 0; i < a.length - 1; i++) {
    let pos = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[pos]) {
        pos = j;
      }
    }
    [a[pos], a[i]] = [a[i], a[pos]];
  }
  
}

const n = 5000;
const a = Array.from({ length: n }, () => Math.floor(Math.random() * n));
const startTime = performance.now();
selectionSort(a);
const stopTime = performance.now();
const elapsedTime = stopTime - startTime;
console.log(`Time Taken: ${elapsedTime} milliseconds`);


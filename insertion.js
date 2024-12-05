function insertionSort(a) {
  for (let i = 1; i < a.length; i++) {
    let v = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > v) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = v;
  }
}

let n = 5000;
let a = Array.from({ length: n }, () => Math.floor(Math.random() * 1000));
let startTime = performance.now();
insertionSort(a);
let stopTime = performance.now();
let elapsedTime = stopTime - startTime;
console.log("Time Taken: " + elapsedTime + " milliseconds");



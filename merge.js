function mergesort(a, low, mid, r) {
  let p = mid - low + 1;
  let q = r - mid;
  let L = new Array(p);
  let R = new Array(q);
  for (let i = 0; i < p; ++i) {
    L[i] = a[low + i];
  }
  for (let j = 0; j < q; ++j) {
    R[j] = a[mid + 1 + j];
  }
  let i = 0, j = 0;
  let k = low;
  while (i < p && j < q) {
    if (L[i] <= R[j]) {
      a[k] = L[i];
      i++;
    } else {
      a[k] = R[j];
      j++;
    }
    k++;
  }
  while (i < p) {
    a[k] = L[i];
    i++;
    k++;
  }
  while (j < q) {
    a[k] = R[j];
    j++;
    k++;
  }
}

function msort(a, low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    msort(a, low, mid);
    msort(a, mid + 1, high);
    mergesort(a, low, mid, high);
  }
}

let n = 5000;
let a = Array.from({ length: n }, () => Math.floor(Math.random() * n));
  
  let startTime = performance.now();
  msort(a, 0, n - 1);
  let stopTime = performance.now();
  let elapsedTime = stopTime - startTime;
  console.log(`Time Taken: ${elapsedTime} milliseconds`);



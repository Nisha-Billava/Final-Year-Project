function swap(a, i, j) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function partition(a, low, high) {
  let pivot = a[low];
  let i = low - 1;
  let j = high + 1;
  while (true) {
    do {
      i++;
    } while (a[i] < pivot);
    do {
      j--;
    } while (a[j] < pivot);
    if (i >= j) {
      return j;
    }
    swap(a, i, j);
  }
}

function quicksort(a, low, high) {
  if (low < high) {
    let pivot = partition(a, low, high);
    quicksort(a, low, pivot);
    quicksort(a, pivot + 1, high);
  }
}


let n = 5000;
let a = Array.from({ length: n }, () => Math.floor(Math.random() * n));
  let startTime = Date.now();
  quicksort(a, 0, n - 1);
  let stopTime = Date.now();
  let elapsedTime = stopTime - startTime;
  console.log(`Time Taken: ${elapsedTime} milliseconds`);





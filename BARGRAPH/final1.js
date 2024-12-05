document.getElementById("ch1"); 
document.getElementById("ch2");
document.getElementById("ch3");
document.getElementById("ch4");
document.getElementById("ch5");
document.getElementById("ch6");
document.getElementById("ch7");
document.getElementById("ch8");
document.getElementById("ch9");
document.getElementById("ch10");
document.getElementById("ch11");
document.getElementById("ch12");

if(!isSet("ch12")){
  alert("Please select Algorithms");
}
else{
if(isSet("ch1")){
   function bubblesort(a) {
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
}

if(isSet("ch2")){
  function selectionsort(a) {
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
}

if(isSet("ch3")){
  function insertionsort(a) {
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
}

if(isSet("ch4")){
  function  exchangesort(a) {
    let n = a.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (a[i] < a[j]) {
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
  }
}

if(isSet("ch5")){
function countsort(a) {
    let n = a.length;
    let m = 0;
    for (let i = 0; i < n; i++) {
        m = Math.max(m, a[i]);
    }
    let countArray = new Array(m + 1).fill(0);
    for (let i = 0; i < n; i++) {
        countArray[a[i]]++;
    }
    for (let i = 1; i <= m; i++) {
        countArray[i] += countArray[i - 1];
    }
    let outputArray = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        outputArray[countArray[a[i]] - 1] = a[i];
        countArray[a[i]]--;
    }
  } 
}

if(isSet("ch6")){
function heapsort(a) {
    let n = a.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(a, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
        let temp = a[0];
        a[0] = a[i];
        a[i] = temp;
        heapify(a, i, 0);
    }
}
}


function heapify(a, n, i){
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if (l < n && a[l] > a[largest]) {
        largest = l;
    }
    if (r < n && a[r] > a[largest]) {
        largest = r;
    }
    if (largest !== i) {
        let swap = a[i];
        a[i] = a[largest];
        a[largest] = swap;
        heapify(a, n, largest);
    }
}



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

  if(isSet("ch7")){
  function msort(a, low, high) {
    if (low < high) {
      let mid = Math.floor((low + high) / 2);
      msort(a, low, mid);
      msort(a, mid + 1, high);
      mergesort(a, low, mid, high);
    }
  }
  }

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
  
  if(isSet("ch8")){
    function quicksort(a, low, high) {
    if (low < high) {
      let pivot = partition(a, low, high);
      quicksort(a, low, pivot);
      quicksort(a, pivot + 1, high);
    }
  }
  }
  
  if(isSet("ch9")){
  function bricksort(a, n) {
    for (let i = 1; i <= n - 2; i += 2) {
        if (a[i] > a[i + 1]) {
            let temp = a[i];
            a[i] = a[i + 1];
            a[i + 1] = temp;
        }
    }
    for (let i = 0; i <= n - 2; i += 2) {
        if (a[i] > a[i + 1]) {
            let temp = a[i];
            a[i] = a[i + 1];
            a[i + 1] = temp;
        }
    }
}
}

if(isSet("ch10")){
function shellsort(a) {
    let n = a.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let temp = a[i];
            let j;
            for (j = i; j >= gap && a[j - gap] > temp; j -= gap) {
                a[j] = a[j - gap];
            }
            a[j] = temp;
        }
    }
}
}


function insertsort(bucket) {
    for (let i = 1; i < bucket.length; ++i) {
        let key = bucket[i];
        let j = i - 1;
        while (j >= 0 && bucket[j] > key) {
            bucket[j + 1] = bucket[j];
            j--;
        }
        bucket[j + 1] = key;
    }
}

if(isSet("ch11")){
function bucketsort(a) {
    let n = a.length;
    let buckets = Array.from({ length: n }, () => []);

    for (let i = 0; i < n; i++) {
        let bi = Math.floor(n * a[i]);
        buckets[bi].push(a[i]);
    }

    for (let i = 0; i < n; i++) {
        insertsort(buckets[i]);
    }

    let index = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
            a[index++] = buckets[i][j];
        }
    }
}
}
const n = 5000;
const a = Array.from({ length: n }, () => Math.floor(Math.random() * 1000));
const b=Array();
const startTime1 = performance.now();
bubblesort(a);
const stopTime1 = performance.now();
const elapsedTime1 = stopTime1 - startTime1;
b[0]=elapsedTime1;

const startTime2 = performance.now();
selectionsort(a);
const stopTime2 = performance.now();
const elapsedTime2 = stopTime2 - startTime2;
b[1]=elapsedTime2;

const startTime3 = performance.now();
insertionsort(a);
const stopTime3 = performance.now();
const elapsedTime3 = stopTime3 - startTime3;
b[2]=elapsedTime3;

const startTime4 = performance.now();
exchangesort(a);
const stopTime4 = performance.now();
const elapsedTime4 = stopTime4 - startTime4;
b[3]=elapsedTime4;

const startTime5 = performance.now();
countsort(a);
const stopTime5 = performance.now();
const elapsedTime5 = stopTime5- startTime5;
b[4]=elapsedTime5;

const startTime6= performance.now();
heapsort(a);
const stopTime6 = performance.now();
const elapsedTime6 = stopTime6 - startTime6;
b[5]=elapsedTime6;

const startTime7 = performance.now();
msort(a,0,n-1);
const stopTime7 = performance.now();
const elapsedTime7 = stopTime7- startTime7;
b[6]=elapsedTime7;

const startTime8 = performance.now();
quicksort(a,0,n-1);
const stopTime8 = performance.now();
const elapsedTime8 = stopTime8 - startTime8;
b[7]=elapsedTime8;

const startTime9 = performance.now();
bricksort(a,n);
const stopTime9 = performance.now();
const elapsedTime9 = stopTime9 - startTime9;
b[8]=elapsedTime9;


const startTime10 = performance.now();
shellsort(a);
const stopTime10 = performance.now();
const elapsedTime10 = stopTime10 - startTime10;
b[9]=elapsedTime10;

function main(){
let n = 5000;
let a = Array.from({ length: n }, () => Math.random());
const startTime11 = performance.now();
bucketsort(a);
const stopTime11 = performance.now();
const elapsedTime11 = stopTime11 - startTime11;
b[10]=elapsedTime11;
}
main();



  var trace1={
    x:['bubble','selection','insertion','exchange','count','heap','merge','quick','brick','shell','bucket'],
    y:[b[0],b[1],b[2],b[3],b[4],b[5],b[6],b[7],b[8],b[9],b[10]],
    type:'bar',
    marker:{
      color:'rgb(142,124,195)'
    }
  };
  var data=[trace1];
  var layout={
    title:'Final Output',
    font:{
      famil:'Raleway,sans-serif'
    },
    showlegend:false,
    xaxis:{
      tickangle:-45
    },
yaxis:{
  zeroline:false,
  gridwidth:2
},
bargap:0.05
  };
  Plotly.newPlot('myDiv',data,layout);
}


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



    const n = 5000;
    const a = Array.from({ length: n }, () => Math.floor(Math.random() * 10000));
    const startTime = Date.now();
    heapsort(a);
    const stopTime = Date.now();
    const elapsedTime = stopTime - startTime;
    console.log("Time Taken: " + elapsedTime + "milliseconds");






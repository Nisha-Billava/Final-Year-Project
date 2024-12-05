
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



    const n = 5000;
    let a = new Array(n).fill(0).map(() => Math.floor(Math.random() * 10000));
    
    let startTime = Date.now();
    shellsort(a);
    let stopTime = Date.now();
    let elapsedTime = stopTime - startTime;
    console.log("Time Taken: " + elapsedTime + "milliseconds");





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

    
    const n = 5000;
    const a = Array.from({ length: n }, () => Math.floor(Math.random() * 1000));
        let startTime = Date.now();
        bucketsort(a);
        let stopTime = Date.now();
        let elapsedTime = stopTime - startTime;
        console.log("Time Taken: " + elapsedTime + "milliseconds");
   





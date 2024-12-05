
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

    
        let n = 5000;
        let a = Array.from({ length: n }, () => Math.floor(Math.random() * n));
        let startTime = Date.now();
        countsort(a);
        let stopTime = Date.now();
        let elapsedTime = stopTime - startTime;
        console.log("Time Taken: " + elapsedTime + " milliseconds");
    




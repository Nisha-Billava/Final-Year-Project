
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

    let n = 5000;
    let a = Array.from({ length: n }, () => Math.floor(Math.random() * n));
    let startTime = Date.now();
    exchangesort(a);
    let stopTime = Date.now();
    let elapsedTime = stopTime - startTime;
    console.log("Time Taken: " + elapsedTime + "milliseconds");
    






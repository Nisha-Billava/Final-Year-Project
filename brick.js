
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



    const n = 5000;
    const a = Array.from({ length: n }, () => Math.floor(Math.random() * 10000));
    const startTime = Date.now();
    bricksort(a, n);
    const stopTime = Date.now();
    const elapsedTime = stopTime - startTime;
    console.log(`Time Taken: ${elapsedTime} milliseconds`);




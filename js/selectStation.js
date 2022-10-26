

const selectStation = (arrA, arrB, inp1, inp2) => {
    let inputStation1 = arrA.indexOf(inp1);
    let inputStation2 = arrB.indexOf(inp2);

    let intersection = arrA.filter((x) => arrB.includes(x));
    let cross = intersection[0];
    let crossIndexA = arrA.indexOf(cross);
    let crossIndexB = arrB.indexOf(cross);

    // alert(arrA.indexOf(cross));
    // alert(arrB.indexOf(cross));
    // alert(inputStation1);
    let arr = [];
    if (inputStation2 == crossIndexB) {
        return arrA;
    }
    if (inputStation1 < crossIndexA) {
        for (let i = 0; i <= crossIndexA; i++) {
            arr.push(arrA[i]);
        }
    }
    //  -----
    if (inputStation1 > crossIndexA) {
        arrA.reverse();
        crossIndexA = arrA.length - crossIndexA;
        for (let i = 0; i < crossIndexA; i++) {
            arr.push(arrA[i]);
        }
        alert(crossIndexA);
    }
    // -------
    if (inputStation2 > crossIndexB) {
        for (let i = 0; i <= crossIndexB; i++) {
            arrB.shift(arrB[i]);
        }
    }
    if (inputStation2 < crossIndexB) {
        let dif = arrB.length - crossIndexB;
        for (let i = 0; i < dif; i++) {
            arrB.pop(arrB[i]);
        }
        arrB.reverse();
    }

    arrA = arr;
    let concatArr = [...arrA, ...arrB];
    // alert(concatArr);

    return concatArr;
};

export default selectStation;
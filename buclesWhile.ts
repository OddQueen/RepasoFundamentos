
function hasEven(myNums: number[]): boolean {
    let par = false
    let i = 0
    while (i <  myNums.length && !par) {
        if (myNums[i] % 2 === 0) {
            par = true
        }
        i++;
    }
return par;
}

console.log(hasEven([3, 4, 5, 7, 9]));


function startWithM(myNames: string[]): boolean{
    let allM = false
    let i = 0;
    let total = 0
    while (i < myNames.length && myNames[i][0] ==="M") {
        total += i

        i++;
        if (total === myNames.length) {
            allM = true
        }
    }

    return allM
}

console.log(startWithM(["Laura", "Carla", "Noemí"]));

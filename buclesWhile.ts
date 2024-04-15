
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

//La función devuelve si existe un numero par en el arrray, recorriendo el array de numeros
    //i <  myNums.length, hasta que encuentre el numero par, en cuyo caso devuelve true


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

//Para saber si todos los nombres del array comienzan por M, iniciamos con la variable allM en false,
// es decir, asumiendo que no todos los nombres empoezan por M. 
// Con la variable total, llevaos la cuenta de los nombres del array.
//Recorremos el array desde el primer nombre y comprobamos sila primera letra coincide con M. 
//Si esto es cierto para todos los elementos del array, devuelve true. Si alguno de los elementos no empieza por M, devuelve false. 

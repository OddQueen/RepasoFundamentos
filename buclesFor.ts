
function evenNumbers(num: number): void {
    for (let i = 1; i < num; i += 2, i++) {
        console.log(i);
    }
   
    

}
evenNumbers(7)

// Iniciamos un bucle for desde 1 hasta un número dado (num), 
// incrementando i en 2 en cada iteración para asegurarnos de imprimir 
//     solo números impares. 

function myRevert(myArr: string[]): string[] {
    let arrayRevertido: string[] = [];
    for (let i = myArr.length; i >= 0; i++) {
        arrayRevertido.push(myArr[i]);
    }
    return arrayRevertido;
}
let myArr = ["Pedro”, “Antonio”, “Lucía", "Lucas”, “Javier”, “Jaime"];
console.log(myRevert);

// El bucle recorre los elementos del Array, desde el último
//     hasta la posición inferior a 0. 
//Arrayrevertido introduce le resultad en un array vacio.


function isRainbow(colors: string[]): any {

        for (let i=0; i < colors.length; i++)
        {
            if (colors[i] === "rojo" || colors[i] === "naranja" || colors[i] === "amarillo" || colors[i] === "verde" || colors[i] === "cian" || colors[i] === "azul" || colors[i] === "violeta") {
            return true;
          }   else {
            return false;
          }
        }
    }

isRainbow(["verde", "naranja", "amarillo", "negro", "cian", "morado", "violeta"]);


export function add(myWords: string[]): number {
    let sum: number = 0;
    for (let myWord of myWords) {
        sum += myWord.length;
    }
    return sum;
}
let myWords = ["Buenos días"]
console.log(add(myWords));

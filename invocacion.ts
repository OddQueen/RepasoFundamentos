
import { isEven } from "./condicionales";
import { add } from "./buclesFor";

let array1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let array2: string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let array3: string[] = ["Venezuela", "Veneno", "Voltaje"];

let sum1: number = add(array1);
let sum2: number = add(array2);
let sum3: number = add(array3);

console.log(`Array 1 tiene ${sum1} caraceres, y es ${isEven(sum1) ? "par" : "impar"}.`);
console.log(`Array 2 tiene ${sum2} caraceres, y es ${isEven(sum2) ? "par" : "impar"}.`);
console.log(`Array 3 tiene ${sum3} caraceres, y es ${isEven(sum3) ? "par" : "impar"}.`);


let signo: string = "";

function zodiac(day: number, month: string): void {
    switch (true) {
        case day >= 21 && month === "marzo" || day <= 19 && month === "abril":
            signo = "Aries";
            break;

        case (day >= 20 && month === "abril") || (day <= 20 && month === "mayo"):
            signo = "Tauro";
            break;

        case (day >= 21 && month === "mayo") || (day <= 20 && month === "junio"):
            signo = "Géminis";
            break;

        case (day >= 21 && month === "junio") || (day <= 22 && month === "julio"):
            signo = "Cáncer";
            break;

        case (day >= 23 && month === "julio") || (day <= 22 && month === "agosto"):
            signo = "Leo";
            break;

        case (day >= 23 && month === "agosto") || (day <= 22 && month === "septiembre"):
            signo = "Virgo";
            break;

        case (day >= 23 && month === "septiembre") || (day <= 22 && month === "octubre"):
            signo = "Libra";
            break;

        case (day >= 23 && month === "octubre") || (day <= 21 && month === "noviembre"):
            signo = "Escorpio";
            break;

        case (day >= 22 && month === "noviembre") || (day <= 21 && month === "diciembre"):
            signo = "Sagitario";
            break;

        case (day >= 22 && month === "diciembre") || (day <= 19 && month === "enero"):
            signo = "Capricornio";
            break;

        case (day >= 20 && month === "enero") || (day <= 18 && month === "febrero"):
            signo = "Acuario";
            break;

        case (day >= 19 && month === "febrero") || (day <= 20 && month === "marzo"):
            signo = "Piscis";
            break;

    default:
        signo = "Desconocido"
        break;
   }
    
}

zodiac(23, "marzo")

console.log("Esta persona es" + " "+ signo);

//La función zodiac toene 2 parámetros, dia, un numero, y mes, un string. 
//El condicional switch/case evalúa si las condiciones establecidas
    //en el Case coinciden con las establecidas en la llamada a la función.
//Cuando esto se cumple, se imprime el signo asociado a ese Case.
//Si no se cumple ningún Case, se imprime el default. 

let continente: string = "";
let country: string = "Australia";
function continent(country: string): void {

    switch (true) {
        case country === "España" || country === "Italia" || country === "Portugal":
            continente = "Europa";
            break;
        case country === "Estados Unidos" || country === "México" || country === "Panamá":
            continente = "América";
            break;
        case country === "China" || country === "India" || country === "Indonesia":
            continente = "Asia";
            break;
        case country === "Nigeria" || country === "Marruecos" || country === "Tanzania":
            continente = "África";
            break;
        case country === "Australia" || country === "Nueva Zelanda" || country === "Fiyi":
            continente = "Oceanía";
            break;
    default:
        continente = "País not found";
        break;
}      

}

continent(country)
console.log(`${country} se encuentra en ${continente}`);
    
export function isEven(number: number): any {
    let numero = number % 2 === 0 ? "El número es par" : "El número es impar";
    console.log(numero);

}

console.log(isEven(132));


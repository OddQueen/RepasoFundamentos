import { Point } from "./point";

let myPoint = new Point(3, 5);

console.log(myPoint);

console.log(myPoint.getX());
myPoint.setX(10);

console.log(myPoint.getY());
myPoint.setY(8);

console.log(myPoint.toString());
myPoint.toString();

console.log("Distancia del punto al origen de coordenadas (0,0)");
console.log(myPoint.distanceToOrigin(0, 0));

console.log("Distancia entre puntos");
let anotherPoint = new Point(6, 10); 
console.log(myPoint.calculateDistance(anotherPoint));

console.log("Cuadrante");
let cuadrante = new Point(4, 5);
let cuadrante1 = new Point(9, -3);

console.log(cuadrante.calcularQuadrant());
console.log(cuadrante1.calcularQuadrant());

console.log("Punto más cercano");
let puntoInicial = new Point(3, 5);
console.log(puntoInicial);

let arrayPoints: Point[] = 
[  
    new Point(5, 4),
    new Point(-5, 4)
];
console.log(arrayPoints);

let nearest = puntoInicial.calculateNearest(arrayPoints);
console.log(nearest);


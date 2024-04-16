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

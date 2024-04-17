
import { Triangle } from "./triangle";
import { Point } from "./Point";

let vertex1 = new Point(0, 0);
let vertex2 = new Point(3, 0);
let vertex3 = new Point(0, 4);

let triangle = new Triangle(vertex1, vertex2, vertex3);

console.log(triangle.calculateLengthSides());


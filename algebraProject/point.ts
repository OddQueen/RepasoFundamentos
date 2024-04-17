
export class Point
{
    private x: number;
    private y: number;

     constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public getX(): number 
    {
        return this.x;
    }

    public setX(x: number) 
    {
        this.x = x;
    }

    public getY(): number 
    {
        return this.y;
    }

    public setY(y: number)
    {
        this.y = y;
    }

    public toString(): string 
    {
        return "Point: " + this.x + " " + this.y;
    }

    distanceToOrigin(x1: number, y1: number): number 
    {
       return Math.floor(Math.hypot(x1- this.x , y1 - this.y));
    }

    calculateDistance(anotherPoint: Point): number 
    {
        let X2 = anotherPoint.x - this.x;
        let Y2 = anotherPoint.y - this.y;
        return Math.floor(Math.sqrt(X2 ** 2 + Y2 ** 2));
    }

    calcularQuadrant(): number 
    {  if (this.x === 0 || this.y === 0) {
            return 0;
        } else if (this.x > 0 && this.y > 0) {
            return 1;
        } else if (this.x < 0 && this.y > 0) {
            return 2;
        } else if (this.x < 0 && this.y < 0) {
            return 3;
        } else if ( this.x > 0 && this.y < 0){
            return 4;
        }else {
            return 89
        }
    }


}
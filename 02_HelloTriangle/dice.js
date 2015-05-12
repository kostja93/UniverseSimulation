var Dice = function(position, sideLength) {
    GeometricObject.call(this);

    this.calclateQuader = function(position, sideLength) {
        var points = [];

        points.push(position); //start point aka point A
        points.push([position[0], position[1] - sideLength, position[2]]); //point B
        points.push([position[0] + sideLength, position[1] - sideLength, position[2]]); //point C
        points.push([position[0] + sideLength, position[1], position[2]]); //point D

        points.push([position[0], position[1], position[2] - sideLength]); //point E
        points.push([position[0], position[1] - sideLength, position[2] - sideLength]); //point E
        points.push([position[0] + sideLength, position[1] - sideLength, position[2] - sideLength]); //point E
        points.push([position[0] + sideLength, position[1], position[2] - sideLength]); //point E

        return points;
    };

    this.shape.push(new Quader(this.calclateQuader(position, sideLength)));
};

Dice.prototype = Object.create(GeometricObject.prototype);
Dice.prototype.constructor = GeometricObject;
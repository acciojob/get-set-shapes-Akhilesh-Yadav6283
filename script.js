class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    getArea() {
        return this._width * this._height;
    }
}

class Square extends Rectangle {
    getPerimeter() {
        return 4 * this.width; // Use the 'width' property from the superclass
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

// Example usage in your test
// const rectangle = new Rectangle(2, 3);
// console.log(rectangle.getArea()); // Output: 6

// const square = new Square(2);
// console.log(square.getPerimeter()); // Output: 8

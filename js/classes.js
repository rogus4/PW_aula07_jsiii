class Rectangle {
    #width;
    #height;

    constructor (width, height){
        this.#width = width;
        this.#height = height;
    }

    #calculatePerimeter() {
        return 2*(this.#width + this.#height);
    }

    getPerimeter() {
        return this.#calculatePerimeter();
    }

    getDimensions() {
        return `${this.#width} x ${this.#height}`;
    }

    getShapeName() {
        return "Rectangle";
    }

    toString() {
        return `${this.getShapeName()}: ${this.getDimensions()}`;
    }

    get width() {
        return this.#width;
    }

    set width(width) {
        if (width < 0){
            throw new Error("Width must be positive");
        }
        this.#width = width;
    }

    // define getter setter for #height

    static createRandom(max = 10){
        const sideA = Math.floor(Math.random() * max) + 1;
        const sideB = Math.floor(Math.random() * max) + 1;

        return new Rectangle(sideA, sideB);
    }
}

class Square extends Rectangle {
    constructor(side){
        super(side, side);
    }

    getShapeName() {
        return "Square";
    }
}

const rect = new Rectangle(5, 6);

console.log(rect.getPerimeter());
console.log(rect.getDimensions());
console.log(`${rect}`);

rect.width = 10;

console.log(`${rect}`);

console.log(`${Rectangle.createRandom()}`);

const square = new Square(5);

console.log(`${square}`);
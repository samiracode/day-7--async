//Class --> obj

//Instance Properties : what they have
//     - name
//     - age
//     - height

// Instance methods : whay they do 
//    - talk
//    - run
//    - jump

class Rectangle {
    // set up
    constructor (_width, _height, _color) {

        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    calcArea (){
        return this.width * this.height;
    }

    printInfo () {
        console.log(`I am a rectangel of ${this.width} and ${this.height} and I am ${this.color}`)
    }
}

let myRectangle1 = new Rectangle(5, 3, 'blue');
let myRectangle2 = new Rectangle(10, 5, 'red');

console.log(myRectangle1.calcArea())
myRectangle1.printInfo()


//getter & setter 

class Squere {
    constructor (_width) {
        this.width = _width;
        this.height = _width;
        this.numOfrRequestForArea = 0;
    }

    get area () {
        this.numOfrRequestForArea++;
       return this.width * this.height; 
    }

    set area (area) {
        this.width = Math.sqrt(area);
        this.height = Math.sqrt(area);
    }
}

let squereOne = new Squere(12);
squereOne.area = 25
console.log(squereOne.area);
console.log(squereOne.area);
console.log(squereOne.area);
console.log(squereOne.area);

console.log(squereOne.numOfrRequestForArea);

//Static Methods

class OtherSquere {
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }

    static equals (a,b){
        // are a & b equale squeres? 
        return a.width * a.height === b.width * b.height;
    }

    static isValidDimentions (width, height) {
        return width === height;
    }
}


let squere1 = new OtherSquere(8);
let squere2 = new OtherSquere(9);
console.log(OtherSquere.equals(squere1, squere2))
console.log(OtherSquere.isValidDimentions(6,6))

// Enheritence & Extends
// parent & child Class

class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    describe () {
        return console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    }
}

class Programmer extends Person {
    constructor (_name, _age, _yearsOfExperience, _program ) {
        super(_name, _age);
        //custom behaviour
        this.yearsOfExperience = _yearsOfExperience;
        this.program = _program;
    }

    code () {
      console.log(`${this.name} is ${this.age} years old and codes in ${this.program} for the last ${this.yearsOfExperience} years`)
    }
}

const programmers = [
    new Programmer('John',42, 7, 'JavaScript'),
    new Programmer('Sara',34, 5, 'Python'),
];

function develpSoftware(programmers){
    // Develop Software 
    for(let programmer of programmers){
        console.log(programmer);
        programmer.code()
    }
}

develpSoftware(programmers);
// person1.code() is going to give an Error because a method does not inheritence from child to parent


// Polymorphism

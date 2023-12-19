// Defining class using es6
/*class Vehicle {
	constructor(name, maker, engine) {
		this.name = name;
		this.maker = maker;
		this.engine = engine;
	}
	getDetails() {
		return (`The name of the bike is ${this.name}.`)
	}
}
// Making object with the help of the constructor
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

console.log(bike1.name); // Hayabusa
console.log(bike2.maker); // Kawasaki
console.log(bike1.getDetails());*/

//Traditional Way of defining an Object and simulating them as classes.
// Defining class in a Traditional Way.
function Vehicle(name, maker, engine) {
	    this.name = name,
		this.maker = maker,
		this.engine = engine
};

Vehicle.prototype.getDetails = function () {
	console.log('The name of the bike is ' + this.name+"is introduced by "+this.maker+"builted with engine  "+this.engine);
}

let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

console.log(bike1.name);
console.log(bike2.maker);
console.log(bike1.getDetails());

// Instanciation de la clasee Human
class Human {
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person = new Human('Donald','Duck');

console.log('Bonjour '+person.firstName+' '+person.lastName);

// Instanciation de la classe Child
class Child extends Human {
    constructor(firstName,lastName){

        super(firstName,lastName);
        
        this.child = true;


    }

    play() {
        console.log(`Je m'apelle ${this.firstName} et je suis entrain de jouer`);
    }

}

//dclaration de riri
const riri = new Child('Riri','Duck');

console.log(riri);
if (riri.child == true){
    riri.play();
}
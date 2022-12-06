// Declaration fonction hello
function hello(){
    console.log('Hello World');
}

// appel de la fonction hello
hello();

// Declaration de la fonction helloSomeone
function helloSomeone(name) {
    console.log(`Bonjour ${name}`);
}
// appel avec parametre de helloSomeone
helloSomeone('fifi');

//Declaration de la fonction helloSomeoneUppercase
function helloSomeoneInUppercase(name){
    console.log('Bonjour '+ name.toUpperCase());
}

// appel avec parametre de helloSomeoneInUppercase
helloSomeoneInUppercase('loulou');


//Declaration de la fonction helloSomeoneInCapitalize
function helloSomeoneInCapitalize(name){
    let firstLetter = name[0].toUpperCase();
    let sliceName = name.slice(1);
    name = firstLetter + sliceName;
    console.log(`Bonjour ${name}`);
}

// appel avec parametre de helloSomeoneInCapitalize
helloSomeoneInCapitalize('picsou');

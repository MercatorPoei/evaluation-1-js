let myArray= [];

for(let i = 0; i < 5; i++){
    myArray[i] = i+1;
}

console.table(myArray);


for(let i = 0; i < 5; i++){
    if (myArray[i] > 2){
        console.log(myArray[i])
    }
}

let myArrayWithObjects =  [
    {
        "id": 1,
        "title": "toto"
    },
    {
        "id": 2,
        "title": "titi"
    },
    {
        "id": 3,
        "title": "toto"
    },
]


myArrayWithObjects.push({"id":5,"title":"tztz"});
console.log(myArrayWithObjects);


myArrayWithObjects.unshift({"id":6,"title":"tztz"});
console.log(myArrayWithObjects);

console.log("Affichage de chaque ligne");
for (let i of myArrayWithObjects){
    console.log(`${i.id} ${i.title}`);
}

//pour git
// creation cont objet monObjet
const monObjet = {'a': 1};
// affichage objet
console.log(monObjet);


// creation const objet monSecondObjet
const monSecondObjet = {'b': 2};
console.log(monSecondObjet);

// modification valeur b
monSecondObjet['b'] = 'test';
// affichage monSecodObjet
console.log(monSecondObjet);


// creation const objet monTroisiemeObjet
const monTroisiemeObjet = {'d': 4};
// affichage monTroisiemeObjet
console.log(monTroisiemeObjet);


// creation const objet monQuatriemenObjet
const monQuatriemeObjet = {'e': 5};
console.log('Avant suppresssion')
console.log(monQuatriemeObjet);

// suppression de e dans mon QuatriemeObjet
delete monQuatriemeObjet.e;
console.log('Apres suppresssion')
// Affichage de monQuatriemeObjet
console.log(monQuatriemeObjet);

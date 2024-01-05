//**********************Les conditions
let z= 28;
console.log(typeof z);

432

let nbreA = 4830;

if(nbreA % 2 == 0){
   console.log('Bravo');
}else{
   console.log('Echec');
}


// Lorsque l'on souhaite écrire des algorithmes il est important d'être capable de tester si une valeur est bien celle attendue. On va donc découvrir maintenant les conditions.
// Les conditions s'écrivent de la manière suivante :
if (true) {
   //  <code si vrai>
}
// Si par exemple on souhaite afficher à l'utilisateur une phrase si un nombre est pair :
// % donne le reste de la division de $nombre par 2


let nombre =51
if (nombre % 2 == 0) {
    console.log(`Bravo !`)
}

// Il est aussi possible de mettre un code à exécuter si la condition n'est pas remplie :
if (true) {
   //  <code si vrai>
} else {
   //  <code si faux>
}

// Enfin on est parfois amené à utiliser des conditions multiples :
if (true) {
   //  <code si vrai>
} else if (booleen) {
   //  <code>
} else {
   //  <code>
}


let g = 12;
console.log(g);

let monAge = 29;

if( monAge < 20 ){
   console.log('Mineur');
}else if( monAge <=28 && monAge >= 20){
   console.log('Majeur');
}else{
   console.log('Aldute');
}

if ("") {
   console.log("VRAI");
} else {
   console.log("FAUSSE");
   
}
if (false) {
   // Le code ici ne sera pas exécuté
 }
 
 if (null) {
   // Le code ici ne sera pas exécuté
 }
 
 if (undefined) {
   // Le code ici ne sera pas exécuté
 }
 
 if (0) {
   // Le code ici ne sera pas exécuté
 }
 
 if (-0) {
   // Le code ici ne sera pas exécuté
 }
 
 if (0n) {
   // Le code ici ne sera pas exécuté
 }
 
 if (NaN) {
   // Le code ici ne sera pas exécuté
 }
 
 if ("") {
   // Le code ici ne sera pas exécuté
 }
 
let nombre1 = 20

if ((nombre1 >=20) || (nombre1 > 34 && nombre1 %2 ==0)) {
   console.log("Vérifié");
   
}


for (let i =0; i< 10; i =i+1) {
   console.log(i);     
}
let pers = [1,3,4,5,8,54, "tomate"];

// pers.length  : afficher la taille d'un tableau
console.log(pers.length);
for(let i=0 ; i<pers.length; i++){
   console.log(pers[i]);
}

let j =3;
while(j<pers.length){
   console.log(pers[j]);
   j++;
}

let fruitsaa="POMME";
 //1-  transformer le string en tableau
 let frr = fruitsaa.split("")
 console.log(frr);



let fruite = "Pomme"; // Remplacez par le fruit de votre choix

let result;

if (!fruite) {
  result = false;
} else if (fruite.length === 5 && fruite.charAt(0) === "P") {
  result = true;
} else if (fruite.length === 10 && fruite.charAt(0) !== "R") {
  result = true;
} else {
  result = false;
}

console.log(result);

//**************************************************** */

let fruitess = "Pomme"; // Remplacez par le fruit de votre choix
let fruitee= fruitess.split("")
let results;

if (!fruitee) {
  results = false;
} else if (fruitee.length === 5 && fruitee[0] === "P") {
  results = true;
} else if (fruitee.length === 10 && fruitee[0] !== "R") {
  result = true;
} else {
  results = false;
}

console.log(results);


















//**************************************************** */
let fruites = "PgommegggR"; // Remplacez "Pomme" par le fruit de votre choix

if (!fruites) {
  console.log(false);
} else if (fruites.length === 5 && fruites[0] === "P") {
  console.log(true);
} else if (fruites.length === 10 && fruites[0] !== "R") {
  console.log(true);
} else {
  console.log(false);
}
 













// Même si cela fonctionne, on essaiera d'éviter de réutiliser le même nom de variable pour éviter les confusions
// Les boucles
// Dans ce nouveau chapitre nous allons parler des boucles. Les boucles permettent de répéter une certaine logique suivant une condition précise. Il existe plusieurs manières de créer des boucles :
// La boucle While
// La boucle while permet d'exécuter un code tant que la condition passée en paramètre n'est pas satisfaite

// let condition =1
// while (condition) {
//     // ....
// }



// Il faudra faire attention avec l'utilisation de cette boucle à ce que la condition devienne fausse à un moment donné au risque de voir la boucle se dérouler de manière infinie.
let i6 = 0 
while (i6 < 3) {
    console.log("Je compte " + i6)
    i6 = i6 + 1 // peut aussi s'écrire i6++
}


// Il est aussi possible de mettre la condition en fin de boucle grâce à la syntaxe do...while
let i5 = 0 
do {
    console.log("Je compte " + i5)
    i5 = i5 + 1 
} while (i5 < 3)


// Il est possible de forcer la sortie de la boucle à l'aide du mot clef break, ce mot clef fonctionnera avec les autres types de boucle
let i4 = 0 
while (i4 < 3) {
    console.log("Je compte " + i4)
    if (i4 === 1) {
        break
    }
    i4++
}


// La boucle For
// La boucle for permet d'exécuter un code un certain nombre de fois en précisant manuellement l'intervalle pour lequel on souhaite faire la boucle. Elle présente une notation plus concise que le while :
for (let i2 = 0; i2 < 3; i2++) {
    console.log(`Je compte   ${i2}`)
}


// Il est possible de sortir de la condition à l'aide d'un break mais on peut aussi sauter une itération à l'aide du mot clef continue
for (let i1 = 0; i1 < 3; i1++) {
    if (i1 === 1) {
        continue
    }
    console.log("Je compte " + i1)
}


// Cette boucle s'avèrera très utile lorsqu'il s'agira de parcourir un tableau
const eleves1 = ['Jean', 'Marc', 'Marie']
for (let i7 = 0; i7 < eleves1.length; i7++) {
    // affichera alternativement : Jean, Marc, Marie
    console.log(eleves1[i7]) 
}


// for...in
// L'instruction for in permet d'itérer sur les éléments énumérables. Elle permettra de récupérer les clefs d'un tableau ou les propriétés d'un objet.
const object3 = { a: 1, b: 2, c: 3 };

for (const property in object3) {
    // affichera alternativement : a, b, c
  console.log(property) 
}



const eleves2 = ['Jean', 'Marc', 'Marie']
for (const i8 in eleves2) {
    // affichera alternativement : 0, 1, 2
    console.log(i8) 
}


// for...of
// L'instruction for of permet de boucler sur un objet itérable en renvoyant les valeurs à chaque itération.
const eleves3 = ['Jean', 'Marc', 'Marie']
for (const eleve3 of eleves3) {
    // affichera alternativement : Jean, Marc, Marie
    console.log(eleve3) 
}




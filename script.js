
// ******************VARIABLES
   //-------Declarations de variables ---(var, let, const )
    //   age = 23; // ou var age = 23;
    //   let firstName2 = 'infinity';
    //   const fruitc ="banane";
    
    
    //--Primitives/Types valeurs
    //(String, number, undefined, null, Boolean, Symbol)
    
    //***String */
    
    let firstName = 'infinity'; //String
    let last_name = "eva"; //String
    let last_name2 = `EVA`; //String
    
    let age = 23; // number
    console.log(age);
   let name =undefined;  //undefined
   let fullName = null; //null
   let isApproved = true; //Boolean
   let symbole = Symbol("monSymbole"); // Une donnée unique et non modifiable
   
//    console.log("je me norme " + last_name +" et j'ai " +age+ " ans"); 
   
   console.log(`je me norme  ${last_name}  et j'ai  ${age} ans`);
  

   console.log();
   const fruit ="banane";
    age = 23;
    // age=24;
   

//--------Types references-----------
     //(Objects, Tableau, Fonctions)

     //-------- Objects : est une structure de données qui permet de stocker des ensembles de clés/valeurs et des entités plus complexes


     let mane1 = "eva";
     let age1 = 12

     let person = {
        name1 : "eva",
        age1 : 12,
     };
        //acceder a une propriété de l'objet
    //  console.log(person.name1);
    //  console.log(person.age1);
 

     //ou acceder a une proprieté de l'objet

     person['name1'] = "Myra";
    //  console.log( person['name1'] = "Myra");

    // Tableau 


    let fruits = ["Banane", "Pomme", "carotte"];

    console.log(fruits[0]);
    fruits[2]="Avocat";
    console.log(fruits[2]);
    console.log(fruits);
    
    const eleves = ['Jean', 'Marc', 'Marion']
    const demo = [true, 10, 'Marc']
    eleves[0] // Jean
eleves[2] // Marion
demo[1] // 10
demo[18] 

console.log(demo[18] );


















 nom2 = 23;

console.log(nom2);
     
const age5 = 12;
console.log(age5);

let bois=false;
console.log(bois);

// const nbr1='3';
// const = Number(nbr1);

let age2 = 23;
let nbr1='23';
let c ='3b';

console.log(typeof nbr1);
let nbr= Number('23'); 
console.log(typeof nbr);

console.log(nbr);
if(age2 ===nbr1){
   console.log("TRUE");
}else{
   console.log("FALSE");
}

console.log((nbr));
isNaN();

let nbr2 = 3.00;
 nbr2 = parseFloat(nbr2)
console.log(nbr2);

console.log("j'ai "+ age2);

let a1 =12;
let a2 = 5;

console.log(a1 % a2);


let voiture = "Carina Rouge";
let num = 234;
let Mon_Nom = 'Rostand lele';

console.log("Je me norme " + Mon_Nom + "je conduit la " + voiture + "de Numéro" + num);

console.log(`
Je me norme  ${Mon_Nom}
 je conduit la  
 ${voiture }
 de Numéro  ${num}
   
   `);

console.log(`je me norme ${Mon_Nom}`)
console.log('je me norme ' + Mon_Nom)
console.log("je me norme"  + Mon_Nom)

const names = ["Melvyn", "Sarah", "John"];

names[4] = "Bob";
names[3] = null;
console.log(names[4]);

const tab1 = [2, "two"]
const tab2 = [2, "two"]
console.log(typeof tab1);
if(tab1 === tab2){
   console.log('TRUE');
}else{
   console.log('FALSE');

}

console.log(names);
const fruits3 = ["🍎", "🍌","🍇"];

const [apple,...reste] = fruits3;
// apple = "🍎"
// banana = "🍌"
// grape = "🍇"

console.log(fruits3);
console.log([apple]);
console.log([...reste]);

let eleve = {
   clef: 'valeur',
   nom: 'Jean',
   age: 18,
   notes: [10, 4, 18],
     num : {
      a :1,
      b :2
      } 
}

let {clef, nom, ...newEleve} =eleve;
console.log({...newEleve});
console.log({nom});
console.log({clef});





console.log(eleve.notes[2]);
console.log(eleve.nom);
console.log(eleve['nom']);
console.log(eleve.num.a);


const student = {

   notes: {
       math: 18,
       francais: 14   
   }   
}

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


if(true){
   //***Si le fruit possède 5 caractères, on retourne true uniquement si il commence par "P"
   
   // -- (fruit.length ===5) && (fruit[0]=== "P")  ou 

   //**** */ Si le fruit possède 10 caractères, on retourne true uniquement si il NE commence PAS par "R"

   // -- (fruit.length ===10) && (fruit[0]=== "R") 

}else{
  console.log("FALSE"); 
}


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
 





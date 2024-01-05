
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





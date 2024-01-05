// Liste de nombres
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Utilisation de la méthode map() pour doubler chaque nombre
const doubledNumbers = numbers.map(num => num * 2);
console.log("Nombres doublés :", doubledNumbers);

// Utilisation de la méthode filter() pour filtrer les nombres pairs
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Nombres pairs :", evenNumbers);

// Utilisation de la méthode reduce() pour calculer la somme des nombres
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Somme des nombres :", sum);


const tableSize = 10; // Spécifie la taille de la table de multiplication

// Boucle externe pour les lignes de la table
for (let i = 1; i <= tableSize; i++) {
  let row = ""; // Chaîne vide pour stocker les valeurs de la ligne
  
  // Boucle interne pour les colonnes de la table
  for (let j = 1; j <= tableSize; j++) {
    const product = i * j; // Calcule le produit des nombres
    row += product + "\t"; // Ajoute le produit à la ligne avec un caractère de tabulation (\t)
  }
  
  console.log(row); // Affiche la ligne de la table
}



// 1. Nombre pair et impair
function checkEvenOdd(number) {
    if (number % 2 === 0) {
      console.log(number + " est pair.");
    } else {
      console.log(number + " est impair.");
    }
  }
  
  // 2. Table de multiplication
  function multiplicationTable(tableSize) {
    for (let i = 1; i <= tableSize; i++) {
      let row = "";
      for (let j = 1; j <= tableSize; j++) {
        const product = i * j;
        row += product + "\t";
      }
      console.log(row);
    }
  }
  
  // 3. Nombre premier
  function isPrimeNumber(number) {
    if (number <= 1) {
      console.log(number + " n'est pas un nombre premier.");
      return;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        console.log(number + " n'est pas un nombre premier.");
        return;
      }
    }
    
    console.log(number + " est un nombre premier.");
  }
  
  // 4. Tri à bulle
  function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    console.log("Tri à bulle :", arr);
  }
  
  // 5. Tri par sélection
  function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
    console.log("Tri par sélection :", arr);
  }
  
  // 6. Tri rapide - Quick sort
  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    const pivot = arr[0];
    const left = [];
    const right = [];
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // 7. Suite de Fibonacci
  function fibonacci(n) {
    const sequence = [0, 1];
    
    for (let i = 2; i <= n; i++) {
      const nextNum = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNum);
    }
    
    console.log("Suite de Fibonacci :", sequence);
  }
  
  // 8. Palindrome
  function isPalindrome(word) {
    const reversedWord = word.split("").reverse().join("");
    
    if (word === reversedWord) {
      console.log(word + " est un palindrome.");
    } else {
      console.log(word + " n'est pas un palindrome.");
    }
  }
  
  // Exemples d'utilisation
  checkEvenOdd(5); // Affiche "5 est impair."
  multiplicationTable(5); // Affiche la table de multiplication jusqu'à 5
  isPrimeNumber(17); // Affiche "17 est un nombre premier."
  bubbleSort([5, 3, 8, 2, 1]); // Affiche le tableau trié avec le tri à bulle
  selectionSort([5, 3, 8, 2, 1]); // Affiche le tableau trié avec le tri par sélection
  console.log("Tri rapide - Quick sort :", quickSort([5, 3, 8, 2, 1])); // Affiche le tableau trié avec le tri rapide
  fibonacci(10); // Affiche la suite de Fibonacci jusqu'au 10ème terme
  isPalindrome("eve"); // Affiche "radar est un palindrome."






  //******************************************* */


//   2. Table de multiplication
  function tableMultiplication(nombre, limite) {
    for (let i = 1; i <= limite; i++) {
        console.log(`${nombre} * ${i} = ${nombre * i}`);
    }
}

// Exemple d'utilisation
tableMultiplication(5, 10);


// 3. Nombre premier

function estNombrePremier(nombre) {
    for (let i = 2; i < nombre; i++) {
        if (nombre % i === 0) {
            return "Non Premier";
        }
    }
    return "Premier";
}

// Exemple d'utilisation
console.log(estNombrePremier(89)); // Affichera "Premier"


// 4. Le tri à bulle

function triBulle(tableau) {
    let n = tableau.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (tableau[j] > tableau[j + 1]) {
                // Échanger les éléments
                let temp = tableau[j];
                tableau[j] = tableau[j + 1];
                tableau[j + 1] = temp;
            }
        }
    }
}

// Exemple d'utilisation
let tableau = [64, 34, 25, 12, 22, 11, 90];
triBulle(tableau);
console.log(tableau); // Affichera le tableau trié



// 5. Tri par sélection
function triSelection(tableau0) {
    let n = tableau0.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (tableau0[j] < tableau0[minIndex]) {
                minIndex = j;
            }
        }
        // Échanger les éléments
        let temp = tableau0[i];
        tableau0[i] = tableau0[minIndex];
        tableau0[minIndex] = temp;
    }
}

// Exemple d'utilisation
let tableau0 = [64, 25, 12, 22, 11];
triSelection(tableau0);
console.log(tableau0); // Affichera le tableau trié


// 8. Palindrome
function estPalindrome(mot) {
    const motInverse = mot.split('').reverse().join('');
    return mot === motInverse;
}

// Exemple d'utilisation
console.log(estPalindrome("radar")); // Affichera true


// 7. Suite de Fibonacci
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Exemple d'utilisation
console.log(fibonacci(5)); // Affichera le 8e terme de la suite de Fibonacci

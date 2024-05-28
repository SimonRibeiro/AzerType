console.log("Hello World!")

const listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0
let numero = 0

// Étape 1 : L’application propose un mot. 
let motApplication = listeMots[numero]
// Étape 2 : L’utilisateur tape ce mot au clavier. 
let motUtilisateur = prompt("Entrez le mot : " + motApplication)

/////// Étape 3 : Si le mot de l’utilisateur est exactement le même que le mot de l’application, alors on ajoute un point au score. //////
if (motUtilisateur === motApplication) {
    console.log("Bravo !")
    ++score
} else {
    console.log("Vous avez fait une erreur de frappe.")
}
console.log(score)
++numero
///////////////////////////
///// Need a for loop /////
///////////////////////////
// Étape 4 : On passe au mot suivant.  

// Étape 5 : On recommence à l’étape 1, jusqu’à ce que le temps soit écoulé. 


motApplication = listeMots[numero]
motUtilisateur = prompt("Entrez le mot : " + motApplication)

if (motUtilisateur === motApplication) {
    console.log("Bravo !")
    ++score
} else {
    console.log("Vous avez fait une erreur de frappe.")
}
console.log(score)
++numero

motApplication = listeMots[numero]
motUtilisateur = prompt("Entrez le mot : " + motApplication)

if (motUtilisateur === motApplication) {
    console.log("Bravo !")
    ++score
} else {
    console.log("Vous avez fait une erreur de frappe.")
}
console.log(score)
++numero
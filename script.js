console.log("Hello World!")

const listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0

let i = 0
while (i<listeMots.length) {
    // Étape 1 : L’application propose un mot. 
    let motApplication = listeMots[i]
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
    // Étape 4 : On passe au mot suivant. 
    i++
    // Étape 5 : On recommence à l’étape 1, jusqu’à ce que le temps soit écoulé. 
}
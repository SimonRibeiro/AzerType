let resultat = document.querySelector(".zoneScore span")
function afficherResultat(score, nbPropositionsProposes) {
    resultat.textContent = `${score} / ${nbPropositionsProposes}`
}

function afficherProposition(listePropositions,[i]) {
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.textContent = `${listePropositions[i]}`
}

function validerNom(nom) {
    if (nom.length <= 1) {
        throw new Error("Le nom est trop court")
    }
}

function validerEmail(email) {
    let emailRegExp = new RegExp(/[\w.-]+@[\w.-]+\.[\w.-]+/) 
    // "[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+" (besoin de doubler les \ pour prendre en compte le .)
    // OU "[\\w.-]+@[\\w.-]+\\.[\\w.-]+" (doubler aussi les \ pour les \w)
    // OU /[\w.-]+@[\w.-]+\.[\w.-]+/ (remplacer les " " par des / /)
    if (!emailRegExp.test(email)) {
        throw new Error("L'e-mail n'est pas valide")
    }
}

function afficherEmail(nom, email, scoreMail) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${scoreMail} sur le site d'Azertype !`
    location.href = mailto
}

//Nouvelle fonction
function afficherMessageErreur(message) { //Et non error.message dans le cas où l'erreur ne serait pas définie
    let span = document.getElementById("erreur")
    if (!span) { //Si span n'existe pas :
        let popup = document.querySelector(".popup") //Selectionne la div "popop"
        span = document.createElement("span") //Déclare la span
        span.id = "erreur" //Attribut l'id 'erreur' à la span
        popup.append(span) //Ajoute la span à la div "popup"
    }
    //Dans tous les cas :
    span.textContent = `${message}` //Met à jour le message de la span "erreur"  
}

function gererFormulaire(score, i) {
    initAddEventListenerPopup()
    let btnEnvoyerMail = document.querySelector(".popup form")
    btnEnvoyerMail.addEventListener("submit", (event) => {
        event.preventDefault()
        let baliseNom = document.getElementById("nom")
        let nom = baliseNom.value
        let baliseEmail = document.getElementById("email")
        let email = baliseEmail.value
        let scoreMail = `${score} / ${i}`
        try {
            validerNom(nom)
            validerEmail(email)
            afficherMessageErreur("") //Affichera un message vide dans la span
            afficherEmail(nom, email, scoreMail)
        } catch (error) {
            afficherMessageErreur(error.message) //Affiche le message d'erreur correspondant à l'exeption levée
        }
    })
}

function lancerJeu() {
    let score = 0
    let listePropositions = listeMots
    let i = 0
    afficherProposition(listePropositions,[i])
    gererFormulaire()

    let optionSource = document.querySelectorAll('input[name="optionSource"]')
    for (let j = 0; j < optionSource.length; j++) {
        optionSource[j].addEventListener("change", (event) => {
            if (event.target.value === "2") {
                listePropositions = listePhrases
            } else {
                listePropositions = listeMots
            }
                i = 0
                afficherProposition(listePropositions,[i])
                score = 0
                resultat.textContent = `0`
                btnValiderMot.disabled = false
                inputEcriture.disabled = false
                inputEcriture.value = null
        })
    }

    let zoneProposition = document.querySelector(".zoneProposition")
    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")

    btnValiderMot.addEventListener("click", () => {
        if (inputEcriture.value === listePropositions[i]) {
            score++
        }
        i++
        afficherResultat(score, i)

        if (listePropositions[i] === undefined) {
            zoneProposition.textContent = `Le jeu est fini`
            btnValiderMot.disabled = true
            inputEcriture.disabled = true
        } else {
        afficherProposition(listePropositions,[i])
        }
        inputEcriture.value = null
    })

    inputEcriture.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            if (inputEcriture.value === listePropositions[i]) {
                score++
            }
            i++
            afficherResultat(score, i)
    
            if (listePropositions[i] === undefined) {
                zoneProposition.textContent = `Le jeu est fini`
                btnValiderMot.disabled = true
                inputEcriture.disabled = true
            } else {
            afficherProposition(listePropositions,[i])
            }
            inputEcriture.value = null
        }
    })
}
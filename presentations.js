//recuperation du module readline

let readline = require("readline");

//recupération de l'objet rl permettant de recuperer la saisie de l'utilisateur

let responseUser = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

//fonction start()

function saisie() {

    responseUser.question('Quel est votre choix ? : ', function(saisie) {

        traiterSaisie(saisie);
    });
}



// fonction menu()

function afficherMenu() {

    console.log("1.  Lister les clients");
    console.log("2. Ajouter nouveau client");
    console.log("99. Sortir");
}


//fonction traiterSaisie()

function traiterSaisie(reponse) {
    switch (reponse) {
        case '99':
            console.log("Au revoir");
            responseUser.close();
            return;

        case '1':
            console.log("Liste des clients");
            break;

        case '2':
            console.log("Ajout nouveau client");
            break;

        default:
            console.log("Pas de choix possible");

    }
    afficherMenu();
    saisie();

}

exports.afficherMenu = afficherMenu;
exports.saisie = saisie;
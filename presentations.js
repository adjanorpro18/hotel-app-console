//recuperation du module readline

let readline = require("readline");

//recupération de l'objet rl permettant de recuperer la saisie de l'utilisateur

let responseUser = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

//Faire appel au service

let service = require('./service');

//fonction start()

function saisie() {

    responseUser.question('Quel est votre choix ? : ', function(saisie) {

        traiterSaisie(saisie);
    });
}



// fonction menu()

function afficherMenu() {

    console.log("  1.  Lister les clients ");
    console.log("  2.  Ajouter nouveau client ");
    console.log("  3.  Rechercher un client par nom ");
    console.log("  4.  Verifier la disponibilité d'une chambre ");
    console.log("99. Sortir");
}


//fonction traiterSaisie()

function traiterSaisie(reponse) {
    switch (reponse) {
        case '99':
            console.log("Au revoir");
            responseUser.close();
            console.log("");
            return;

        case '1':
            console.log("Liste des clients");
            service.listeClients();
            console.log("");

            break;

        case '2':
            console.log("Ajout nouveau client");
            responseUser.question('Veuillez saisir un nouveau client? :', function(saisie) {
                service.ajouterClient(saisie);
            });
            console.log("");


            break;

        default:
            console.log("Pas de choix possible");
            console.log("");



    }
    afficherMenu();
    saisie();

}

exports.afficherMenu = afficherMenu;
exports.saisie = saisie;
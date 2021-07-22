//recuperation du module readline

let readline = require("readline");

//recupération de l'objet rl permettant de recuperer la saisie de l'utilisateur

let responseUser = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

//Faire appel au service

let service = require('./service');

//Faire appel au servicePromesse

let servicePromesse = require('./promesses'); // charger le module promesses.js sans oublier de ne pas faire les exports

//fonction start()

function start() {

    responseUser.question('Choix du menu: ', function(saisie) {
        //Deuxième parametre avec un arrow fonction qui sera exécuté à chaque fois mais au bon moment
        traiterSaisie(saisie, () => {
            afficherMenu();
            start();
        })
    });
}



// fonction menu()

function afficherMenu() {

    console.log("  1.  Lister les clients ");
    console.log("  2.  Ajouter nouveau client ");
    console.log("  3.  Rechercher un client par nom ");
    console.log("  4.  Verifier la disponibilité d'une chambre ");
    console.log(" 99.  Sortir");
}

/**
 * fonction traiterSaisie()
 * @param {*} reponse 
 * @param {*} execute mon callback ()=>{ affichMenu(); start();}
 * @returns 
 */

function traiterSaisie(reponse, execute) {
    switch (reponse) {
        case '99':
            console.log("Au revoir");
            responseUser.close();
            return;

        case '1':
            console.log("Liste des clients");
            //service.listeClients();

            let oPromesse = new servicePromesse.ServicePromesse(); //on recupere l'objet servicePromesse par un new 
            oPromesse.listeClients()
                .then(response => {
                    console.log(response);
                }).catch(err => {
                    console.log(err);
                }).finally(() => {
                    execute();
                })
            break;

        case '2':
            console.log("Ajout nouveau client");
            responseUser.question('Veuillez saisir un nouveau client? :', function(saisie) {
                service.ajouterClient(saisie);
                console.log(`case 2 après appel service.ajouterClient(${saisie})`);
                execute();

            });
            break;

        default:
            console.log("Pas de choix possible");
            execute();
            break;



    }
    afficherMenu();
    start();

}

exports.afficherMenu = afficherMenu;
exports.start = start;
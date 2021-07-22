const clients = require('./client.json');



//fonction qui retourne la liste 
function listeClients() {

    clients.forEach(client => {
        console.log(`${client.nom}  ${client.prenom}`)
    })

}

exports.listeClients = listeClients;

//fonction qui rajoute un nouveau client

function ajouterClient(saisie) {

    let clientTab = saisie.split(' ');
    //creation de la variable client

    let client = {
        "id": clients.length + 1,
        "nom": clientTab[0],
        "prenom": clientTab[1]
    }

    //ajouter le nouveau client crée

    clients.push(client);
    listeClients(); //afficher par la suite la liste de clients avec le nouveau client ajouté 
}

exports.ajouterClient = ajouterClient;
const request = require('request');

const clients = require('./client.json');

// les promesses retournées par la classe service

class ServicePromesse {

    //methode qui retourne la liste des clients

    listeClients() {
        // cette methode retourne un objet du type promesse
        return new Promise((resolve, reject) => { // url de la data
            request('http://localhost:8888/json/client.json', {}, (err, response) => {
                if (err) {
                    return reject(err); // en cas d'erreur
                } else {
                    resolve(JSON.parse(response.body)); // en cas de success
                }
            });

        });
    }

    //methode qui ajoute un client à la liste des clients

    ajoutClient(saisie) {
        let clientTab = saisie.split(' ');
        //creation de la variable client

        let client = {
            "id": clients.length + 1,
            "nom": clientTab[0],
            "prenom": clientTab[1]
        }

        //ajouter le nouveau client crée

        clients.push(client);
        listeClients();
    }
}
exports.ServicePromesse = ServicePromesse;
const clients = require('./client.json');


//fonction qui retourne la liste 
function listeClients() {

    clients.forEach(client => {
        console.log(`${client.nom}  ${client.prenom}`)
    })

}

exports.listeClients = listeClients;
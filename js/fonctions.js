function afficherJoueurs() {
    let ids = [];
    let idNom  = document.getElementById('nom');
    let idScore = document.getElementById('score');

    ids.push(idNom);
    ids.push(idScore);

    return ids;
}

function afficherBienvenu(nomPerso1, nomPerso2) {
    alert(`Bonjour ${nomPerso1} vous êtes le Roi Jaeden`);
    alert(`Bonjour ${nomPerso2} vous êtes le Roi Lich `);
}

function html(message) {
    let div = document.querySelector('#texte');
    div.innerHTML += message;
}

function inscription() {
    let nomPerso1 = "";
    let nomPerso2 = "";
    let noms = [];

    do {
        nomPerso1 = prompt('Veuillez saisir le prénom du premier joueur :');
    } 
    while(nomPerso1 == null || nomPerso1 == "");

    do {
        nomPerso2 = prompt('Veuillez saisir le prénom du deuxième joueur :');
    }
    while(nomPerso2 == null || nomPerso2 == "");

    afficherBienvenu(nomPerso1, nomPerso2);

    noms.push(nomPerso1);
    noms.push(nomPerso2);

    return noms;
}

export { afficherJoueurs, html, inscription };










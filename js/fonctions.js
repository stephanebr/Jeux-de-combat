function afficherJoueurs() {
    let ids   = []; 
    let jaeden  = document.getElementById('jaeden');
    let lich    = document.getElementById('lich');
    let idScore = document.getElementById('score');

    ids.push(jaeden, lich, idScore);

    return ids;
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

    noms.push(nomPerso1);
    noms.push(nomPerso2);

    return noms;
}

function nbDeplacement() {
    alert(`nb tour : ${compteur}`);

    if(compteur > 3) {
        alert(`C'est au tour du joueur 2`);
    }
}

export { afficherJoueurs, html, inscription, nbDeplacement };










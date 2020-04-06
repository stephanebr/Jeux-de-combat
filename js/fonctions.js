let compteur = 0;

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

function deplacerDroite(personnage) {
//Le joueur à le droit de se déplacer de 3 cases max
    $(document).ready(function() {
        $('#btn-droite').bind('click',function(e) {
            let id = $('.cellule-' + personnage.classe).attr('id');

            if(id == 99) {
                return false;
            }

            let nId = parseInt(id) + 1;

            if(nId <= 9) {
                nId = '0' + nId;
            }

            $('#' + id).removeClass('cellule-' + personnage.classe);
            $('#' + nId + '').addClass('cellule-' + personnage.classe);
            return compteur++;
        });
    });
}
    
function deplacerGauche(personnage) {
//Le joueur à le droite de se déplacer de 3 cases max
    $(document).ready(function() {
        $('#btn-gauche').bind('click',function(e) {
            let id = $('.cellule-' + personnage.classe).attr('id');

            if(id == 0) {
                return false;
            }

            let nId = parseInt(id) - 1;

            if(nId <= 9) {
                nId = '0' + nId;
            }

            $('#' + id).removeClass('cellule-' + personnage.classe);
            $('#' + nId + '').addClass('cellule-' + personnage.classe);
            return compteur++;
        });
    });
}

function deplacerHaut(personnage) {
//Le joueur à le droite de se déplacer de 3 cases max
    $(document).ready(function() {
        $('#btn-haut').bind('click',function(e) {
            let id = $('.cellule-' + personnage.classe).attr('id');

            if(id < 9) {
                return false;
            }

            let nId = parseInt(id) - 10;

            if(nId <= 9) {
                nId = '0' + nId;
            }

            $('#' + id).removeClass('cellule-' + personnage.classe);
            $('#' + nId + '').addClass('cellule-' + personnage.classe);
            return compteur++;
        });
    });
}

function deplacerBas(personnage) {
//Le joueur à le droite de se déplacer de 3 cases max
    $(document).ready(function() {
        $('#btn-bas').bind('click',function(e) {
            let id = $('.cellule-' + personnage.classe).attr('id');

            if(id == 90) {
                return false;
            }

            let nId = parseInt(id) + 10;
            $('#' + id).removeClass('cellule-' + personnage.classe);
            $('#' + nId + '').addClass('cellule-' + personnage.classe);
            return compteur++;
        });
    });
}

function nbDeplacement() {
    alert(`nb tour : ${compteur}`);

    if(compteur > 3) {
        alert(`C'est au tour du joueur 2`);
    }
}

export { afficherJoueurs, deplacerBas, deplacerDroite, deplacerGauche, deplacerHaut, html, inscription, nbDeplacement, compteur };










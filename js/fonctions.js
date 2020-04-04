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

function deplacerDroite() {
//Le joueur à le droit de se déplacer de 3 cases max
    $(document).ready(function() {
        $('#btn-droite').bind('click',function(e){
            /*let cellule = $('.cellule-roi-jaeden').offset().left;
            $('.cellule-roi-jaeden').offset({
                left :  cellule + 50 //Ajoute 50px à la propriété 
            });*/

            let id = $('.cellule-roi-jaeden').attr('id');
            let valeur = parseInt(id) + 1;
            $(document.getElementById(id)).removeAttr('class');
            id = document.getElementById(valeur);
            id.classList.add('cellule-roi-jaeden');
        });
    });
}
    
function deplacerGauche() {
//Le joueur à le droite de se déplacer de 3 cases max
    $(document).ready(function() {
        $('#btn-gauche').bind('click',function(e){
            /*$('.cellule-roi-jaeden').css('backgroundColor', 'yellow');
            let cellule = $('.cellule-roi-jaeden').offset().left;
            $('.cellule-roi-jaeden').offset({
                left :  cellule - 50 //Retire 50px à la propriété 
            });*/

            let id = $('.cellule-roi-jaeden').attr('id');
            let valeur = parseInt(id) - 1;
            $(document.getElementById(id)).removeAttr('class');
            id = document.getElementById(valeur);
            id.classList.add('cellule-roi-jaeden');
        });
    });
}

function deplacerHaut() {
//Le joueur à le droite de se déplacer de 3 cases max
$(document).ready(function() {
    $('#btn-haut').bind('click',function(e){
        /*$('.cellule-roi-jaeden').css('backgroundColor', 'yellow');
        let cellule = $('.cellule-roi-jaeden').offset().top;
        $('.cellule-roi-jaeden').offset({
            top :  cellule - 50 //Retire 50px à la propriété 
        });*/

        let id = $('.cellule-roi-jaeden').attr('id');
        let valeur = parseInt(id) - 10;
        $(document.getElementById(id)).removeAttr('class');
        id = document.getElementById(valeur);
        id.classList.add('cellule-roi-jaeden');
    });
});
}

function deplacerBas() {
//Le joueur à le droite de se déplacer de 3 cases max
    $(document).ready(function() {
        $('#btn-bas').bind('click',function(e){
            /*$('.cellule-roi-jaeden').css('backgroundColor', 'yellow');
            let cellule = $('.cellule-roi-jaeden').offset().top;
            $('.cellule-roi-jaeden').offset({
                top :  cellule + 50 //Retire 50px à la propriété 
            });*/
            let id = $('.cellule-roi-jaeden').attr('id');
            let valeur = parseInt(id) + 10;
            $(document.getElementById(id)).removeAttr('class');
            id = document.getElementById(valeur);
            id.classList.add('cellule-roi-jaeden');
        });
    });
}

export { afficherJoueurs, deplacerBas, deplacerDroite, deplacerGauche, deplacerHaut, html, inscription };










import { Jeu } from './classes/Jeu.js';

const jeu = new Jeu();

jeu.afficherScore();
jeu.ajouterJoueur(jeu.jaeden);
jeu.ajouterJoueur(jeu.lich);
jeu.afficherArmes();


$(document).ready(function() {
    $('.roi-lich-btns').attr('disabled', 'disabled');

    alert(`${jeu.joueurs[0]} vous commencez la partie !`);

    //Les boutons de mouvement du roi Jaeden
    $('#jaeden-btn-droite').on('click', function(e) {
        jeu.verifMouvement(jeu.jaeden, jeu.lich, '.roi-jaeden-btns', '.roi-lich-btns', jeu.plateau.deplacerDroite(jeu.jaeden));
    });

    $('#jaeden-btn-gauche').on('click', function(e) {  
        jeu.verifMouvement(jeu.jaeden, jeu.lich, '.roi-jaeden-btns', '.roi-lich-btns', jeu.plateau.deplacerGauche(jeu.jaeden));
    });

    $('#jaeden-btn-haut').on('click', function(e) {  
        jeu.verifMouvement(jeu.jaeden, jeu.lich, '.roi-jaeden-btns', '.roi-lich-btns', jeu.plateau.deplacerHaut(jeu.jaeden));
    });

    $('#jaeden-btn-bas').on('click', function(e) {  
        jeu.verifMouvement(jeu.jaeden, jeu.lich, '.roi-jaeden-btns', '.roi-lich-btns', jeu.plateau.deplacerBas(jeu.jaeden));
    });

    $('#jaeden-btn-attaquer').on('click', function() {
        jeu.jaeden.attaquer(jeu.lich);
    });

    $('#jaeden-btn-terminer').on('click', function(e) {  
        jeu.desactiverBoutons('.roi-jaeden-btns', jeu.joueurs[1]);
        jeu.activerBoutons('.roi-lich-btns', jeu.joueurs[0]);
    });
            
    //Les boutons de mouvements du roi Lich
    $('#lich-btn-droite').on('click', function(e) {
        jeu.verifMouvement(jeu.lich, jeu.jaeden, '.roi-lich-btns', '.roi-jaeden-btns', jeu.plateau.deplacerDroite(jeu.lich));
    });

    $('#lich-btn-gauche').on('click', function(e) {
        jeu.verifMouvement(jeu.lich, jeu.jaeden, '.roi-lich-btns', '.roi-jaeden-btns', jeu.plateau.deplacerGauche(jeu.lich));
    });

    $('#lich-btn-haut').on('click', function(e) {
        jeu.verifMouvement(jeu.lich, jeu.jaeden, '.roi-lich-btns', 'roi-jaeden-btns', jeu.plateau.deplacerHaut(jeu.lich));
    });

    $('#lich-btn-bas').on('click', function(e) {
        jeu.verifMouvement(jeu.lich, jeu.jaeden, '.roi-lich-btns', '.roi-jaeden-btns', jeu.plateau.deplacerBas(jeu.lich));
    });

    $('#lich-btn-terminer').on('click', function(e) {  
        jeu.desactiverBoutons('.roi-lich-btns', jeu.joueurs[1]);
        jeu.activerBoutons('.roi-jaeden-btns', jeu.joueurs[0]);
    });

    $("html").keydown(function(e){
        console.log(e);
        e.preventDefault();

        if(e.key == 'ArrowRight') {
            jeu.verifMouvement(jeu.jaeden, jeu.lich, '.roi-lich-btns', '.roi-jaeden-btns', jeu.plateau.deplacerDroite(jeu.jaeden));
        }

        if(e.key == 'ArrowLeft') {
            jeu.verifMouvement(jeu.jaeden, jeu.lich, '.roi-lich-btns', '.roi-jaeden-btns', jeu.plateau.deplacerGauche(jeu.jaeden));
        }

        if(e.key == 'ArrowUp') {
            jeu.verifMouvement(jeu.jaeden, jeu.lich, '.roi-lich-btns', '.roi-jaeden-btns', jeu.plateau.deplacerHaut(jeu.jaeden));
        }

        if(e.key == 'ArrowDown') {
            jeu.verifMouvement(jeu.jaeden, jeu.lich, '.roi-lich-btns', '.roi-jaeden-btns', jeu.plateau.deplacerBas(jeu.jaeden));
        }
    });
});
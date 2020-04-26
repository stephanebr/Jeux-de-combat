import { Jeu } from './classes/Jeu.js';

const jeu = new Jeu();

jeu.afficherScore();
jeu.ajouterJoueur(jeu.jaeden);
jeu.ajouterJoueur(jeu.lich);
jeu.afficherArmes();


$(document).ready(function() {
    $(".roi-lich-btns").off('click');
    //Les boutons de mouvement du roi Jaeden
    $('#jaeden-btn-droite').on('click', function(e) {
        jeu.quiPeutJouer(jeu.jaeden);
        jeu.verifMouvement(jeu.jaeden, '.roi-jaeden-btns', jeu.plateau.deplacerDroite(jeu.jaeden));
    });

    $('#jaeden-btn-gauche').on('click', function(e) {  
        jeu.quiPeutJouer(jeu.jaeden);
        jeu.verifMouvement(jeu.jaeden, '.roi-jaeden-btns', jeu.plateau.deplacerGauche(jeu.jaeden));
    });

    $('#jaeden-btn-haut').on('click', function(e) {  
        jeu.quiPeutJouer(jeu.jaeden);
        jeu.verifMouvement(jeu.jaeden, '.roi-jaeden-btns', jeu.plateau.deplacerHaut(jeu.jaeden));
    });

    $('#jaeden-btn-bas').on('click', function(e) {  
        jeu.quiPeutJouer(jeu.jaeden);
        jeu.verifMouvement(jeu.jaeden, '.roi-jaeden-btns', jeu.plateau.deplacerBas(jeu.jaeden));
    });

    $('#jaeden-btn-terminer').on('click', function(e) {  
        jeu.desactiverBoutons('.roi-jaeden-btns');
    });
            
    //Les boutons de mouvements du roi Lich
    $('#lich-btn-droite').on('click', function(e) {
        jeu.quiPeutJouer(jeu.jaeden);
        jeu.verifMouvement(jeu.lich, '.roi-lich-btns', jeu.plateau.deplacerDroite(jeu.lich));  
    });

    $('#lich-btn-gauche').on('click', function(e) {
        jeu.quiPeutJouer(jeu.jaeden);
        jeu.verifMouvement(jeu.lich, '.roi-lich-btns', jeu.plateau.deplacerGauche(jeu.lich));
    });

    $('#lich-btn-haut').on('click', function(e) {
        jeu.quiPeutJouer(jeu.jaeden);
        jeu.verifMouvement(jeu.lich, '.roi-lich-btns', jeu.plateau.deplacerHaut(jeu.lich));
    });

    $('#lich-btn-bas').on('click', function(e) {
        jeu.quiPeutJouer(jeu.jaeden);
        jeu.verifMouvement(jeu.lich, '.roi-lich-btns', jeu.plateau.deplacerBas(jeu.lich));
    });

    $('#lich-btn-terminer').on('click', function(e) {  
        jeu.desactiverBoutons('.roi-lich-btns');
    });
});
import { Jeu } from './classes/Jeu.js';

const jeu = new Jeu();

jeu.afficherScore();
jeu.ajouterJoueur(jeu.jaeden);
jeu.ajouterJoueur(jeu.lich);
jeu.afficherArmes();

$(document).ready(function() {
        $('#jaeden-btn-droite').bind('click', function(e) {  
            jeu.desactiverBouton(jeu.jaeden, '.jaeden-btns')          
            jeu.plateau.deplacerDroite(jeu.jaeden);
        });

        $('#jaeden-btn-gauche').bind('click', function(e) {
            jeu.desactiverBouton(jeu.jaeden, '.jaeden-btns')
            jeu.plateau.deplacerGauche(jeu.jaeden);
        });

        $('#jaeden-btn-haut').bind('click', function(e) {
            jeu.desactiverBouton(jeu.jaeden, '.jaeden-btns')
            jeu.plateau.deplacerHaut(jeu.jaeden);
        });

        $('#jaeden-btn-bas').bind('click', function(e) {
            jeu.desactiverBouton(jeu.jaeden, '.jaeden-btns')
            jeu.plateau.deplacerBas(jeu.jaeden);
        });

    $('#lich-btn-droite').bind('click', function(e) {
        jeu.desactiverBouton(jeu.lich, '.lich-btns');
        jeu.plateau.deplacerDroite(jeu.lich);
    });

    $('#lich-btn-gauche').bind('click', function(e) {
        jeu.desactiverBouton(jeu.lich, '.lich-btns');
        jeu.plateau.deplacerGauche(jeu.lich);
    });

    $('#lich-btn-haut').bind('click', function(e) {
        jeu.desactiverBouton(jeu.lich, '.lich-btns');
        jeu.plateau.deplacerHaut(jeu.lich);
    });

    $('#lich-btn-bas').bind('click', function(e) {
        jeu.desactiverBouton(jeu.lich, '.lich-btns');
        jeu.plateau.deplacerBas(jeu.lich);
    });
});
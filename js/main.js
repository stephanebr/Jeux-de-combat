import { inscription, nbDeplacement } from './fonctions.js';
import { RoiLich, RoiJaeden } from './classes/Personnage.js';
import { Jeu } from './classes/Jeu.js';

//let noms = inscription();
let jaeden    = new RoiJaeden('S');
let lich      = new RoiLich('N');
let jeu       = new Jeu();

// To do le score des joueurs
//let ids           = afficherJoueurs();

jeu.score.innerHTML     = `${jaeden.pseudo} | `;
jeu.score.innerHTML     = `${lich.pseudo}`;
jeu.score.innerHTML     = `${jaeden.sante} | ${lich.sante}`;




jeu.ajouterJoueur(jaeden);
jeu.ajouterJoueur(lich);


$(document).ready(function() {
    $('#jaeden-btn-droite').bind('click', function(e) {
        plateau.deplacerDroite(jaeden);
    });

    $('#jaeden-btn-gauche').bind('click', function(e) {
        plateau.deplacerGauche(jaeden);
    });

    $('#jaeden-btn-haut').bind('click', function(e) {
        plateau.deplacerHaut(jaeden);
    });

    $('#jaeden-btn-bas').bind('click', function(e) {
        plateau.deplacerBas(jaeden);
    });

    $('#lich-btn-droite').bind('click', function(e) {
        plateau.deplacerDroite(lich);
    });

    $('#lich-btn-gauche').bind('click', function(e) {
        plateau.deplacerGauche(lich);
    });

    $('#lich-btn-haut').bind('click', function(e) {
        plateau.deplacerHaut(lich);
    });

    $('#lich-btn-bas').bind('click', function(e) {
        plateau.deplacerBas(lich);
    });
});


import { afficherJoueurs, inscription, nbDeplacement } from './fonctions.js';
import { RoiLich, RoiJaeden } from './classes/Personnage.js';
import { Plateau } from './classes/Plateau.js';

//let noms = inscription();
let plateau   = new Plateau(10, 10);
let jaeden    = new RoiJaeden('S');
let lich      = new RoiLich('N');

// To do le score des joueurs
let ids = afficherJoueurs();
ids[0].innerHTML  = `${jaeden.pseudo} | ${lich.pseudo}`;
ids[1].innerHTML = `${jaeden.sante} | ${lich.sante}`;

plateau.creer();
plateau.genererObstacle(10);
plateau.placerArme();
plateau.placerPersonnage(jaeden);
plateau.placerPersonnage(lich);


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


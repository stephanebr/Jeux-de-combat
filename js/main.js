import { afficherJoueurs, deplacerDroite, deplacerGauche, deplacerBas, deplacerHaut, inscription, nbDeplacement, compteur } from './fonctions.js';
import { RoiLich, RoiJaeden } from './classes/Personnage.js';
import { Plateau } from './classes/Plateau.js';

//let noms = inscription();
let plateau   = new Plateau(10, 10);
let jaeden    = new RoiJaeden("J");
let lich      = new RoiLich("B");

// To do le score des joueurs
let ids = afficherJoueurs();
ids[0].innerHTML  = `${jaeden.pseudo} | ${lich.pseudo}`;
ids[1].innerHTML = `${jaeden.sante} | ${lich.sante}`;

plateau.creer();
plateau.genererObstacle(10);
plateau.placerArme();
plateau.placerPersonnage(jaeden);
plateau.placerPersonnage(lich);

deplacerDroite(lich);
deplacerGauche(lich);
deplacerHaut(lich);
deplacerBas(lich);

console.log(compteur);


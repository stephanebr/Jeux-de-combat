import { RoiLich, RoiJaeden } from './classes/Personnage.js';
import { nomPerso1, nomPerso2 } from './inscription.js';
import { Plateau } from './classes/Plateau.js';

if(nomPerso1 === undefined) {
    nomPerso1 = "Jaeden";
}

if(nomPerso2 === undefined) {
    nomPerso2 = "Lich";
}

let jaeden    = new RoiJaeden(nomPerso1);
let lich      = new RoiLich(nomPerso2);
let plateau   = new Plateau(10, 10);

console.log(jaeden.pseudo + ' ' + lich.pseudo);
plateau.creer();
plateau.genererObstacle(10);
plateau.placerArme();
plateau.placerPersonnage(jaeden);
plateau.trouverCaseUtilisable();
plateau.placerPersonnage(lich);
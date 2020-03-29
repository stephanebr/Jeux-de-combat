import { RoiLich, RoiJaeden } from './classes/Personnage.js';
import { inscription } from './inscription.js';
import { Plateau } from './classes/Plateau.js';

console.log(inscription());

let jaeden    = new RoiJaeden();
let lich      = new RoiLich(nomPerso2)
let plateau   = new Plateau(10, 10);

console.log(jaeden.pseudo + ' ' + lich.pseudo);
plateau.creer();
plateau.genererObstacle(10);
plateau.placerArme();
plateau.placerPersonnage(jaeden);
plateau.trouverCaseUtilisable();
plateau.placerPersonnage(lich);
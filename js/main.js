import { RoiLich, RoiJaeden } from './classes/Personnage.js';
import { Hache, Epe, Glaive, BaguetteMagique } from './classes/Arme.js';
import { Plateau } from './classes/Plateau.js';

//let perso1 = new RoiJaeden('Stéphane', new Hache());
//let perso2 = new RoiLich('Sebastien', new BaguetteMagique());

//perso1.coupSpecial(perso2);
//perso1.coupSpecial(perso2);

let plateau = new Plateau(10, 10);

plateau.placerPersonnage();

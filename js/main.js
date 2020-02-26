import { Guerrier, Magicien } from './classes/Personnage.js';
import { Hache, Epe, Glaive, BaguetteMagique } from './classes/Arme.js';
import { Plateau } from './classes/Plateau.js';

let perso1 = new Guerrier('Stéphane', new Hache());
let perso2 = new Magicien('Sebastien', new BaguetteMagique());

perso1.coupSpecial(perso2);
perso1.coupSpecial(perso2);

let plateau = new Plateau();
plateau.creer();

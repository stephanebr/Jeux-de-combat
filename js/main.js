import { Guerrier, Magicien } from './classes/Personnage';
import { Hache, Epe, Glaive, BaguetteMagique } from './classes/Arme';
import { Plateau } from './classes/Plateau';

let perso1 = new Guerrier('Stéphane', new Hache());
let perso2 = new Magicien('Sebastien', new BaguetteMagique());

perso1.coupSpecial(perso2);
perso1.coupSpecial(perso2);

let plateau = new Plateau();
plateau.creer();

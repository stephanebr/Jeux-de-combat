import { RoiLich, RoiJaeden } from './classes/Personnage.js';
import { Hache, Epe, Glaive, BaguetteMagique } from './classes/Arme.js';
import { Plateau } from './classes/Plateau.js';
//import { inscription } from './inscription.js';


let jaeden  = new RoiJaeden('Stéphane');
let lich    = new RoiLich('Sebastien');
let plateau = new Plateau(10, 10);

plateau.creer();
plateau.genererObstacle(10);
plateau.placerPersonnage(jaeden);
plateau.placerPersonnage(lich);



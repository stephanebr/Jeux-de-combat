import { RoiLich, RoiJaeden } from './classes/Personnage.js';
import { Hache, Epe, Glaive, BaguetteMagique } from './classes/Arme.js';
import { Plateau } from './classes/Plateau.js';

let perso1 = new RoiJaeden(inscription(nom), new Hache());
let perso2 = new RoiLich(inscription(nom), new BaguetteMagique());


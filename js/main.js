import { RoiLich, RoiJaeden } from './classes/Personnage.js';
import { Plateau } from './classes/Plateau.js';


let nomPerso1 = "";
let nomPerso2 = "";
let jaeden    = new RoiJaeden(nomPerso1);
let lich      = new RoiLich(nomPerso2);
let plateau   = new Plateau(10, 10);

document.getElementById('valider').addEventListener('click', function() {
    nomPerso1     = document.getElementById('perso1').value;
    jaeden.pseudo = nomPerso1;

    nomPerso2     = document.getElementById('perso2').value;
    lich.pseudo   = nomPerso2;
});

plateau.creer();
plateau.genererObstacle(10);
plateau.placerArme();
plateau.trouverCaseUtilisable();
plateau.placerPersonnage(jaeden);
plateau.trouverCaseUtilisable();
plateau.placerPersonnage(lich);
plateau.trouverCaseUtilisable();



import { RoiLich, RoiJaeden } from './classes/Personnage.js';
import { Plateau } from './classes/Plateau.js';

let nomPerso1 = "";
let nomPerso2 = "";

do {
    nomPerso1 = prompt('Veuillez saisir le prénom du premier joueur :');
} 
while(nomPerso1 == null || nomPerso1 == "");

do {
    nomPerso2 = prompt('Veuillez saisir le prénom du deuxième joueur :');
}
while(nomPerso2 == null || nomPerso2 == "");

alert(`Bonjour ${nomPerso1} vous êtes le Roi Jaeden`);
alert(`Bonjour ${nomPerso2} vous êtes le Roi Lich `);

let plateau   = new Plateau(10, 10);
let jaeden    = new RoiJaeden(nomPerso1);
let lich      = new RoiLich(nomPerso2);

// To do le score des joueurs
let noms  = document.getElementById('noms');
let score = document.getElementById('score');

noms.innerHTML  = `${nomPerso1} | ${nomPerso2}`;
score.innerHTML = `${jaeden.sante} | ${lich.sante}`;

console.log(jaeden.pseudo + ' ' + lich.pseudo);
plateau.creer();
plateau.genererObstacle(10);
plateau.placerArme();
plateau.placerPersonnage(jaeden);
plateau.placerPersonnage(lich);


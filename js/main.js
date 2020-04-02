import { afficherJoueurs, inscription } from './fonctions.js';
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

//Le joueur à le droit de se déplacer de 3 cases max
$(document).ready(function() {
	$('#btn-droite').bind('click',function(e){
        $('.cellule-roi-jaeden').css('backgroundColor', 'yellow');
        $('.cellule-roi-jaeden').parent().offset({
            left : $('.cellule-roi-jaeden').parent().offset() + 1 //Ajoute 1px à la propriété left
        })
	});
});

function deplace(dx, dy) {
    document.getElementsByClassName('cellule-roi-jaeden').style.top
      = parseInt(document.getElementsByClassName('cellule-roi-jaeden').style.top) + dy + 'px';
    document.getElementsByClassName('cellule-roi-jaeden').style.left
      = parseInt(document.getElementsByClassName('cellule-roi-jaeden').style.left) + dx + 'px';
}


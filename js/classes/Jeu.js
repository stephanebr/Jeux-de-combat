import { Plateau } from './Plateau.js';
import { Personnage } from './Personnage.js';


class Jeu {
    _joueurs = []; // Tableau contenant les joueurs
    _plateau; // Objet contenant le plateau instancié
    _peutJouer; // le nom du joueur qui peut jouer
    _score = { // tableau json contenant le score
                idJaeden: document.getElementById('jaeden'),
                idLich: document.getElementById('lich'),
                idScore: document.getElementById('score')
    }; 

    constructor() {
        this._plateau = new Plateau(10, 10);
        this._plateau.genererObstacle(10);
        this._plateau.placerArme();
    }

    get joueurs() {
        return this._joueurs;
    }

    get plateau() {
        return this._plateau;
    }

    get peutJouer() {
        return this._peutJouer;
    }

    get score() {
        return this._score;
    }

    set joueurs(joueur) {
        this._joueurs.push(joueur);
    }

    set plateau(plateau) {
        this._plateau = plateau;
    }

    set peutJouer(peutJouer) {
        this._peutJouer = peutJouer;
    }

    set score(score) {
        this._score = score;
    }

    ajouterJoueur(joueur) {
        this.joueurs = joueur; // On ajoute au tableau
        this.plateau.placerPersonnage(joueur) // On trouve un Id libre pour placer un personnage sur le plateau
        document.getElementById(joueur.position).innerHTML  = joueur.pseudo; // On affiche le personnage
    }

}

export { Jeu };
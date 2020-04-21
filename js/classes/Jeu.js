import { Plateau } from './Plateau.js';
import { RoiJaeden } from './RoiJaeden.js';
import { RoiLich } from './RoiLich.js';
import { Hache, Glaive, BaguetteMagique, Epee } from './Arme.js';


class Jeu {
    _joueurs   = []; // Tableau contenant les joueurs
    _plateau; // Objet contenant le plateau instancié
    _armes     = [];
    _peutJouer; // le nom du joueur qui peut jouer
    _score     = {}; // tableau json contenant le score 

    constructor() {
        this.jaeden   = new RoiJaeden(this.pseudo);
        this.lich     = new RoiLich(this.pseudo);
        this.armes    = new Hache();
        this.armes    = new Glaive();
        this.armes    = new BaguetteMagique();
        this.armes    = new Epee();
        this.plateau  = new Plateau(10, 10);
        this.plateau.genererObstacle(10);
        this.plateau.placerArme(this.armes);        
    }

    get joueurs() {
        return this._joueurs;
    }

    get plateau() {
        return this._plateau;
    }

    get armes() {
        return this._armes;
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

    set armes(armes) {
        this._armes.push(armes);
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
        //document.getElementById(joueur.position).innerHTML  = joueur.pseudo; // On affiche le personnage
        console.log(this.armes);
    }

    afficherScore() {
        const noms  = this.inscrireJoueur();
        const score = {
            idJaeden: document.getElementById('jaeden').innerHTML = noms[0],
            idLich: document.getElementById('lich').innerHTML     = noms[1],
            scoreJaeden: document.getElementById('score-jaeden').innerHTML   = `${this.jaeden.sante}`,
            scoreLich: document.getElementById('score-lich').innerHTML   = `${this.lich.sante}`
        };
    }

    desactiverBouton(personnage, idBtnDroite, idBtnGauche, idBtnHaut, idBtnBas) {
        if(personnage.mouvement >= 2) {
            $(idBtnDroite).prop('disabled', true);
            $(idBtnGauche).prop('disabled', true);
            $(idBtnHaut).prop('disabled', true);
            $(idBtnBas).prop('disabled', true);
            alert('vous ne pouvez plus jouer');
        }
    }

    inscrireJoueur() {
        let noms = [];
    
        do {
            this.jaeden.pseudo = prompt('Veuillez saisir le prénom du premier joueur :');
        } 
        while( this.jaeden.pseudo == null || this.jaeden.pseudo == '');
    
        do {
            this.lich.pseudo = prompt('Veuillez saisir le prénom du deuxième joueur :');
        }
        while(this.lich.pseudo == null || this.lich.pseudo == '');
    
        noms.push(this.jaeden.pseudo, this.lich.pseudo);
    
        return noms;
    }

}

export { Jeu };
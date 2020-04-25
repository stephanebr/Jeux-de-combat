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
        this.armes    = new Epee();
        this.armes    = new Hache();
        this.armes    = new Glaive();
        this.armes    = new BaguetteMagique();
        this.plateau  = new Plateau(10, 10);
        this.plateau.genererObstacle(10);
        this.plateau.placerArme(this.armes);        
    }

    get joueurs() { return this._joueurs; }

    get plateau() { return this._plateau; }

    get armes() { return this._armes; }

    get peutJouer() { this._peutJouer ? true : false; }

    get score() { return this._score; }

    set joueurs(joueur) { this._joueurs.push(joueur); }

    set plateau(plateau) { this._plateau = plateau; }

    set armes(armes) { this._armes.push(armes); }

    set peutJouer(peutJouer) { this._peutJouer = peutJouer; }

    set score(score) { this._score = score; }

    ajouterJoueur(joueur) {
        this.joueurs = joueur; // On ajoute au tableau
        this.plateau.placerPersonnage(joueur) // On trouve un Id libre pour placer un personnage sur le plateau
        //document.getElementById(joueur.position).innerHTML  = joueur.pseudo; // On affiche le personnage
        console.log(this.armes);
    }

    afficherScore() {
        const noms  = this.inscrireJoueur();
        const score = {
            idJaeden: document.getElementById('jaeden').innerHTML          = noms[0],
            idLich: document.getElementById('lich').innerHTML              = noms[1],
            scoreJaeden: document.getElementById('score-jaeden').innerHTML = `${this.jaeden.sante}`,
            scoreLich: document.getElementById('score-lich').innerHTML     = `${this.lich.sante}`
        };
    }

    afficherArmes() {
        const listArmes = [];
        const idArmes = document.getElementById('armes');
        let img;
        
        for(let arme of this.armes){
            img = `<p>
                        <img src="../images/${arme.type}.png" alt="Image ${arme.type}" class="img-thumbnail" id="${arme.type}">
                        <span class="degats">${arme.degats}</span>
                        <br>
                        <span class="nom-arme">${arme.type}</span>
                    </p>`;

            listArmes.push(img);

            idArmes.innerHTML = listArmes.join('');            
         }       
    }

    desactiverBoutons(classBtn) {
        $(classBtn).off('click');
        alert('Vous ne pouvez plus jouer !');
    }

    activerBoutons(classBtn) {
        if(this.jaeden.mouvement == 0) {
            $(classBtn).prop('disabled', false);
            alert(`Vous pouvez jouer !`);
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

    debuterPartie(personnage) {
        this.peutJouer = true;

        if(personnage === this.jaeden) {
            if(this.peutJouer) {
                this.activerBouton('.jaeden-btns');
                this.desactiverBouton('.lich-btns');
                this.peutJouer = false;
            }
        }

        this.activerBouton('.lich-btns');
        this.desactiverBouton('.lich-btns');
    }

}

export { Jeu };
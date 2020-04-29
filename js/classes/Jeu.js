import { Plateau } from './Plateau.js';
import { RoiJaeden } from './RoiJaeden.js';
import { RoiLich } from './RoiLich.js';
import { Hache, Glaive, BaguetteMagique, Epee } from './Arme.js';


class Jeu {
    _joueurs   = []; // Tableau contenant les joueurs
    _plateau; // Objet contenant le plateau instancié
    _armes     = [];
    _peutJouer; // Le nom du joueur qui peut jouer
    _score     = {}; // Tableau json contenant le score
    _msgAlert;  // Messages d'actions

    constructor() {
        this.jaeden    = new RoiJaeden(this.pseudo);
        this.lich      = new RoiLich(this.pseudo);
        this.armes     = new Epee();
        this.armes     = new Hache();
        this.armes     = new Glaive();
        this.armes     = new BaguetteMagique();
        this.plateau   = new Plateau(10, 10);
        this.plateau.genererObstacle(10);
        this.plateau.placerArme(this.armes); 
        this.peutJouer = this.jaeden.classe;      
    }

    get joueurs() { return this._joueurs; }

    get plateau() { return this._plateau; }

    get armes() { return this._armes; }

    get peutJouer() { return this._peutJouer; }

    get score() { return this._score; }
    
    get msgAlert() { return this._msgAlert; }

    set joueurs(joueur) { this._joueurs.push(joueur); }

    set plateau(plateau) { this._plateau = plateau; }

    set armes(armes) { this._armes.push(armes); }

    set peutJouer(peutJouer) { this._peutJouer = peutJouer; }

    set score(score) { this._score = score; }

    set msgAlert(message) { this._msgAlert = message; }


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
            scoreJaeden: document.getElementById('score-jaeden').innerHTML = ` : ${this.jaeden.sante}` ,
            scoreLich: document.getElementById('score-lich').innerHTML     = ` : ${this.lich.sante}`
        }
    }

    afficherArmes() {
        const listArmes = [];
        const idArmes = document.getElementById('armes');
        let img;
        
        for(let arme of this.armes){
            img = `<p class="pl-5">
                        <img src="../images/${arme.type}.png" alt="Image ${arme.type}" class="img-thumbnail" id="${arme.type}">
                        <span class="degats">${arme.degats}</span>
                        <br>
                        <span class="nom-arme">${arme.type}</span>
                    </p>`;

            listArmes.push(img);

            idArmes.innerHTML = listArmes.join('');            
         }       
    }

    activerBoutons(classBtn, nomPersonnage) {
        $(classBtn).removeAttr('disabled');
        this.msgAlert = alert(`Vous pouvez jouer ${nomPersonnage} !`);
        return this.msgAlert;
    }

    desactiverBoutons(classBtn, nomPersonnage) {
        $(classBtn).attr('disabled', 'disabled');
        this.msgAlert = alert(`${nomPersonnage} vous avez fini votre tour !`);
        return this.msgAlert;
    }

    inscrireJoueur() {    
        do {
            this.jaeden.pseudo = prompt('Veuillez saisir le prénom du premier joueur :');
            
        }
        while(this.jaeden.pseudo == '');

        if (this.jaeden.pseudo == null) {
            window.location.href = "index.html";
        }
    
        do {
            this.lich.pseudo = prompt('Veuillez saisir le prénom du deuxième joueur :');
        }
        while(this.lich.pseudo == '');

        if (this.lich.pseudo == null) {
            window.location.href = "index.html";
        }
    
        this.joueurs = this.jaeden.pseudo;
        this.joueurs = this.lich.pseudo;
    
        return this.joueurs;
    }

    verifMouvement(fonctionDeplacer) {
        let personnage;

        if(this.peutJouer == this.jaeden.classe) {
            personnage     = this.jaeden;
        }
        else {
            personnage = this.lich;
        }

        console.log('Avant if mouvement : ' + personnage.mouvement);
        
        if (personnage.mouvement >= 3) {
            console.log('if mouvement : ' + personnage.mouvement);
            this.desactiverBoutons(`.${this.jaeden.classe}-btns`, this.jaeden.classe);
            this.activerBoutons(`.${this.lich.classe}-btns`, this.lich.classe);
            this.peutJouer = this.lich.classe;
            personnage.mouvement = 0;
        }
        
        fonctionDeplacer;
    }
}

export { Jeu };
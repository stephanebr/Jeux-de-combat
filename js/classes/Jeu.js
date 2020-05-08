import { Plateau } from './Plateau.js';
import { RoiJaeden } from './RoiJaeden.js';
import { RoiLich } from './RoiLich.js';
import { Hache, Glaive, BaguetteMagique, Epee } from './Arme.js';


class Jeu {

    constructor() {
        this.jaeden     = new RoiJaeden(this.pseudo);
        this.lich       = new RoiLich(this.pseudo);
        this._armes      = []; // Tableau contenant la liste des armes
        this.armes      = new Epee();
        this.armes      = new Hache();
        this.armes      = new Glaive();
        this.armes      = new BaguetteMagique();
        this._plateau    = new Plateau(10, 10); // Objet contenant le plateau instancié
        this.plateau.genererObstacle(10);
        this.plateau.placerArme(this.armes);
        this._joueurs    = []; // Tableau contenant le pseudo des joueurs inscrits
        this._peutJouer  = this.jaeden.classe; // Le nom du personnage qui peut jouer
        this._msgAlert   = ''; // Messages d'actions
    }

    get joueurs() { return this._joueurs; }

    get plateau() { return this._plateau; }

    get armes() { return this._armes; }

    get peutJouer() { return this._peutJouer; }
    
    get msgAlert() { return this._msgAlert; }

    set joueurs(joueur) { this._joueurs.push(joueur); }

    set plateau(plateau) { this._plateau = plateau; }

    set armes(armes) { this._armes.push(armes); }

    set peutJouer(peutJouer) { this._peutJouer = peutJouer; }

    set msgAlert(message) { this._msgAlert = message; }


    ajouterJoueur(joueur) {
        this.joueurs = joueur; // On ajoute au tableau
        this.plateau.placerPersonnage(joueur) // On trouve un Id libre pour placer un personnage sur le plateau
        //document.getElementById(joueur.position).innerHTML  = joueur.pseudo; // On affiche le personnage
        console.log(this.armes);
    }

    afficherScore() {
        const noms  = this.inscrireJoueur();
    
        this.jaeden.score = {
            idJaeden: document.getElementById('jaeden').innerHTML          = noms[0],
            scoreJaeden: document.getElementById('score-jaeden').innerHTML = ` : ${this.jaeden.sante}`           
        }

        this.lich.score = {
            idLich: document.getElementById('lich').innerHTML              = noms[1],
            scoreLich: document.getElementById('score-lich').innerHTML     = ` : ${this.lich.sante}`
        }
    }

    afficherArme() {
        const listArmes = [];
        const idArmes   = document.getElementById('armes');
        let img;

        this.armes.forEach(arme => {
            img = `<p class="pl-4">
            <img src="images/${arme.type}.png" alt="Image ${arme.type}" class="img-thumbnail" id="${arme.type}">
            <span class="degats">${arme.degats}</span>
            <br>
            <span class="nom-arme">${arme.type}</span>
            </p>`;

            listArmes.push(img);

            idArmes.innerHTML = listArmes.join('');         
        });
    }

    activerBoutons(classBtn, nomPersonnage) {
        $(classBtn).removeAttr('disabled');
        return this.msgAlert = alert(`Vous pouvez jouer ${nomPersonnage} !`);
    }

    desactiverBoutons(classBtn, nomPersonnage) {
        $(classBtn).attr('disabled', 'disabled');
        return this.msgAlert = alert(`${nomPersonnage} vous avez fini votre tour !`);
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

    verifMouvement(personnage1, personnage2, classBtnP1, classBtnP2) {
        if (personnage1.mouvement >= 2) {
            console.log(`desactiver`);
            this.desactiverBoutons(classBtnP1, personnage1.classe);
            console.log(`activer`);
            this.activerBoutons(classBtnP2, personnage2.classe);
            personnage1.mouvement = 0;
            personnage2.mouvement = 0;
            this.peutJouer = personnage2.classe;
        }
    }
}

export { Jeu };
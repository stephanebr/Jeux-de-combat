import { Plateau } from './Plateau.js';
import { RoiJaeden } from './RoiJaeden.js';
import { RoiLich } from './RoiLich.js';
import { Hache, Glaive, BaguetteMagique, Epee, Couteau } from './Arme.js';


class Jeu {

    constructor() {
        this._armes     = []; // Tableau contenant la liste des armes
        this.armes      = new Epee();
        this.armes      = new Hache();
        this.armes      = new Glaive();
        this.armes      = new BaguetteMagique();
        this._plateau   = new Plateau(12,8); // Objet contenant le plateau instancié
        this.plateau.genererObstacle(1);
        this.plateau.placerArme(this.armes);
        this.armes      = new Couteau();
        this.jaeden     = new RoiJaeden(this.pseudo, this.armes[this.armes.length -1]);
        this.lich       = new RoiLich(this.pseudo, this.armes[this.armes.length -1]);
        this._joueurs   = []; // Tableau contenant le pseudo des joueurs inscrits
        this._peutJouer = this.jaeden; // Le nom du personnage qui peut jouer
        this._msgAlert  = ''; // Messages d'actions
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
    }

    afficherScore() {
        const noms  = this.inscrireJoueur();
    
        this.jaeden.score = {
            idJaeden: $('#jaeden').html(noms[0]),
            scoreJaeden: $('#score-jaeden').html(` : ${this.jaeden.sante}`)           
        }

        this.lich.score = {
            idLich: $('#lich').html(noms[1]),
            scoreLich: $('#score-lich').html(` : ${this.lich.sante}`)
        }
    }

    afficherArme() {
        const listArmes = [];
        const idArmes   = $('#armes');
        let img;

        this.armes.forEach(arme => {
            img = `<p class="pl-4">
            <img src="images/${arme.type}.png" alt="Image ${arme.type}" class="img-thumbnail" id="${arme.type}">
            <span class="degats">${arme.degats}</span>
            <br>
            <span class="nom-arme">${arme.type}</span>
            </p>`;

            listArmes.push(img);

            idArmes.html(listArmes.join(''));        
        });
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

    verifMouvement(personnage1, personnage2) {
        if (personnage1.mouvement >= 100) {
            this.changerJoueur(personnage2);
            alert(`${this.joueurs[0]} vous avez fini votre tour !`);
            alert(`Vous pouvez jouer ${this.joueurs[1]}`);
            $('.nom-personnage').html(personnage2.classe).attr('id', `${personnage2.classe}-h2`);
            $('#mon-arme').html(personnage2.arme.degats).attr('class', `${personnage2.classe} cellule-${personnage2.arme.type} img-thumbnail`);
            personnage1.mouvement = 0;
            personnage2.mouvement = 0;
            console.log(`perso 1 : ${personnage1.mouvement}`)
            console.log(`perso 2 : ${personnage2.mouvement}`)
        }
    }

    combat() {
             console.log(`sante jaeden : ${this.jaeden.sante}`);
            if(this.peutJouer === this.jaeden) {
                
                this.jaeden.attaquer(this.lich);
                this.changerJoueur(this.lich);
            } else {
                this.lich.attaquer(this.jaeden);
                this.changerJoueur(this.jaeden);
            }

            console.log('jaeden : ' + this.jaeden.sante);
            console.log('Lich : ' + this.lich.sante);

        if(this.jaeden.sante <= 0 || this.lich.sante <= 0) {
            alert('Vous êtes mort !');
        }
    }

    changerJoueur(classePersonnage) {
        this.peutJouer = classePersonnage;
    }
}

export { Jeu };
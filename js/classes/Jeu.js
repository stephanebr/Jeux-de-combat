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
        this._plateau   = new Plateau(10,10); // Objet contenant le plateau instancié
        this.plateau.genererObstacle(10);
        this.plateau.placerArme(this.armes);
        this.armes      = new Couteau();
        this.jaeden     = new RoiJaeden(this.armes[this.armes.length -1]);
        this.lich       = new RoiLich(this.armes[this.armes.length -1]);
        this._persoActif = this.jaeden; // Le nom du personnage qui peut jouer
        this._msgAlert  = ''; // Messages d'actions
    }

    get plateau() { return this._plateau; }

    get armes() { return this._armes; }

    get persoActif() { return this._persoActif; }
    
    get msgAlert() { return this._msgAlert; }

    set plateau(plateau) { this._plateau = plateau; }

    set armes(armes) { this._armes.push(armes); }

    set persoActif(persoActif) { this._persoActif = persoActif; }

    set msgAlert(message) { this._msgAlert = message; }

    
    ajouterJoueur(joueur) {
        this.plateau.placerPersonnage(joueur) // On trouve un Id libre pour placer un personnage sur le plateau
    }

    afficherJoueur() { 
        $('#jaeden').html(`${this.jaeden.pseudo} `);
        $('#lich').html(`${this.lich.pseudo} `);
    }

    afficherScore() {
        this.jaeden.score = {
            scoreJaeden: $('#score-jaeden').html(` : ${this.jaeden.sante}`)           
        }

        this.lich.score = {
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

    verifMouvement(personnage1, personnage2) {
        if (personnage1.mouvement >= 2) {
            alert(`${personnage1.pseudo} vous avez fini votre tour !`);
            this.changerJoueur(personnage2);
            personnage1.mouvement = 0;
            personnage2.mouvement = 0;
        }
    }

    combat() {
        if(this.persoActif === this.jaeden) {
            this.jaeden.attaquer(this.lich);
            this.changerJoueur(this.lich);
        } else {
            this.lich.attaquer(this.jaeden);
            this.changerJoueur(this.jaeden);
        }

        this.afficherScore();

        if(!this.persoActif.vie) {
           this.persoActif.gagner();
           alert('La partie est terminée !');
           $('#btn-attaquer, #btn-defendre').hide();           
        }
    }

    changerJoueur(classePersonnage) {
        this.persoActif = classePersonnage;
        $('.nom-personnage').html(classePersonnage.classe).attr('id', `${classePersonnage.classe}-h2`);
        $('#mon-arme').html(classePersonnage.arme.degats).attr('class', `${classePersonnage.classe} cellule-${classePersonnage.arme.type} img-thumbnail`);
    }
}

export { Jeu };
import { Plateau } from './Plateau.js';
import { RoiJaeden } from './RoiJaeden.js';
import { RoiLich } from './RoiLich.js';
import { Hache, Glaive, BaguetteMagique, Epee, Couteau } from './Arme.js';
import { jeu } from '../main.js';

/**
 * La class Jeu est composée d'un constructeur, des GETTERS ET SETTERS
 * d'attribut public et privées
 * des méthodes :
 * - ajouterJoueur(joueur)
 * - afficherJoueur()
 * - afficherScore()
 * - afficherArme()
 * - peutSeDeplacer(personnage)
 * - combat()
 * - changerJoueur()
 */
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
    }

    /**
     * GETTERS ET SETTERS
     */
    get plateau() { return this._plateau; }

    get armes() { return this._armes; }

    get persoActif() { return this._persoActif; }

    set plateau(plateau) { this._plateau = plateau; }

    set armes(armes) { this._armes.push(armes); }

    set persoActif(persoActif) { this._persoActif = persoActif; }

    /**
     * Ajoute un joueur et le place sur le plateau selon l'id disponible
     * @param {Object} joueur 
     * @method placerPersonnage(joueur)
     */
    ajouterJoueur(joueur) {
        this.plateau.placerPersonnage(joueur) // On trouve un Id libre pour placer un personnage sur le plateau
    }

    /**
     * Sélectionne l'id et affiche le nom des 2 personnages sur la page-partie.html
     */
    afficherJoueur() { 
        $('#jaeden').html(`${this.jaeden.pseudo} `);
        $('#lich').html(`${this.lich.pseudo} `);
    }

    /**
     * Sélectionne l'id et affiche le score des 2 personnages sur la page-partie.html
     */
    afficherScore() {
        this.jaeden.score = {
            scoreJaeden: $('#score-jaeden').html(` : ${this.jaeden.sante}`)           
        }

        this.lich.score = {
            scoreLich: $('#score-lich').html(` : ${this.lich.sante}`)
        }
    }

    /**
     * Crée les paragraphes avec une image qui est en rapport avec le type de 
     * l'armes qui sont stockées dans le tableau this.armes et les affichent
     * dans la page-partie.html  
     */
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

    /**
     * Si mouvement du personnage est supérieur ou égale à 3 alors
     * retourne faux sinon vrai
     * @param {Object} personnage
     * @returns {Boolean} 
     */
    peutSeDeplacer(personnage) {
        if(personnage.mouvement >= 3) {
            return false;
        }
        return true;
    }

    /**
     * Gestion du combat
     * Elle vérifie qui joue, qui attaque et fait un changement de personnage
     * Des que la vie d'un personnage est à 0 alors la partie est terminée
     */
    combat() {
        if(this.persoActif === this.jaeden) {
            this.persoActif.attaquer(this.lich);
            if(!this.lich.vie) {
                this.persoActif.gagner();
                this.lich.sante = 0;          
            }

            this.changerJoueur();
        } else {
            this.persoActif.attaquer(this.jaeden);
            if(!this.jaeden.vie) {
                this.persoActif.gagner();
                this.jaeden.sante = 0;          
            }

            this.changerJoueur();
        }

        this.afficherScore();
    }

    /**
     * Gestion du changement de personnage
     * réinitialise le mouvement du personnage actif à 0
     * Changement de l'interface dynamiquement
     * - Nom du personnage, la couleur du bandeau et son arme 
     */
    changerJoueur() {
        this.persoActif = this.persoActif === this.jaeden ? this.lich : this.jaeden;
        this.persoActif.mouvement = 0;
        $('.nom-personnage').html(this.persoActif.classe).attr('id', `${this.persoActif.classe}-h2`);
        $('#mon-arme').html(this.persoActif.arme.degats).attr('class', `${this.persoActif.classe} cellule-${this.persoActif.arme.type} img-thumbnail offset-4`);
    }

    /**
     * Affiche un message au personnage actif
     */
    msgFinTour() {
        alert(`${this.persoActif.pseudo} vous avez fini votre tour !`);
    }    
}

export { Jeu };
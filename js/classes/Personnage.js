import { Couteau } from './Arme.js';
import { html } from '../fonctions.js';

class Personnage {

    constructor(pseudo, classe, position) {
        this._pseudo     = pseudo;
        this._classe     = classe;
        this._sante      = 100;
        this._position   = position;
        this._mouvement  = 0;
        this._armes      = new Couteau();
        this._score      = {}; //Tableau json contenant le score des joueurs
    }

    /**
     * GETTERS ET SETTERS
     */
    get pseudo() { return this._pseudo; }

    get classe() { return this._classe; }

    get sante() { return this._sante; }

    get vie() { return !(this._sante <= 0); } 

    get position() { return this._position; }

    get mouvement() { return this._mouvement; }

    get arme() { return this._arme; }

    get score() { return this._score; }
    
    set pseudo(pseudo) { this._pseudo = pseudo; }

    set classe(classe) { this._classe = classe; }

    set sante(sante) { this._sante = sante; }

    set position(position) { this._position = position; }

    set mouvement(nbMouvement) { this._mouvement = nbMouvement; }
    
    set arme(arme) { this._arme = arme; }

    set score(score) { this._score = score; }

    attaquer(personnage) {
        if(personnage === this) {
            html("Vous êtes fous, vous êtes en train de vous taper !<br>");
        }

        if(!personnage.vie) {
            html("Vous ne pouvez pas attaquer un mort !<br>");
            return;
        }

        html(`${this.pseudo} attaque ${personnage.pseudo} avec son ${this.arme.type} qui fait ${this.arme.degats} dégâts.<br> ${personnage.pseudo} vous perdez ${this.arme.degats} points de vie.<br>`);
        //personnage.informer();

        personnage.sante -= this.arme.degats;

        if(this.arme) {
            html(`${this.pseudo} attaque ${personnage.pseudo} avec son ${this.arme.type} qui fait ${this.arme.degats} dégâts.<br> ${personnage.pseudo} vous perdez ${this.arme.degats} points de vie.<br>`);
            personnage.informer();
        }

        if(!personnage.vie) {
            personnage.mourir();
            this.gagner();
            return;
        }
    }

    gagner() {
        html(`${this.pseudo} Bravo, vous avez gagné !<br>`);
    }

    informer() {
        html(`${this.pseudo} ${this.classe} a ${this.sante} points de vie.<br>`);
    }

    mourir() {
        html(`${this.pseudo} Vous avez perdu, vous êtes mort !<br>`);
    } 
    
    deplacer(position, nPosition) {
        document.getElementById(position).classList.remove(`cellule-${this.classe}`, 'cellule-perso');
        document.getElementById(nPosition).classList.add(`cellule-${this.classe}`, 'cellule-perso');
        this.position = nPosition;
        this.mouvement++;

        console.log(`mouvements : ${this.mouvement}`);
        
        return this.mouvement;        
    }

    prendre(arme) {
       this.arme = new arme.type;
       console.log(`nouvelle arme : ${this.arme}`);
       document.getElementById(this.nPosition).classList.remove(`cellule-${arme.type}`, 'cellule-perso');
    }
}

export { Personnage };
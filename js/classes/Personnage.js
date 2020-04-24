import { Couteau } from './Arme.js';
import { html } from '../fonctions.js';

class Personnage {

    _pseudo;
    _classe;
    _sante
    _position;
    _mouvement;
    _arme;

    constructor(pseudo, classe, sante, position, arme) {
        this.pseudo     = pseudo;
        this.classe     = classe;
        this.sante      = sante;
        this.position   = position;
        this.mouvement  = 0;
        this.arme       = new Couteau();
    }

    /**
     * GETTERS ET SETTERS
     */
    get pseudo() {
        return this._pseudo;
    }

    get classe() {
        return this._classe;
    }

    get sante() {
        return this._sante;
    }

    get vie() {
        if(this.sante <= 0) {
            return false;
        }
        return true;
    }

    get position() {
        return this._position;
    }

    get mouvement() {
        if(this._mouvement >= 3) {
            alert(`Vous avez déjà effectué vos 3 déplacements`);
        }

        return this._mouvement;
    }

    get arme() {
        return this._arme;
    }

    set pseudo(pseudo) {
        this._pseudo = pseudo;
    }

    set classe(classe) {
        this._classe = classe;
    }

    set sante(sante) {
        if(sante < 0) {
            sante = 0;
        }
        this._sante = sante;
    }

    set position(position) {
        this._position = position;
    }

    set mouvement(nbMouvement) {
        this._mouvement = nbMouvement;
    }

    set arme(arme) {
        this._arme = arme;
    }

    attaquer(personnage) {
        if(personnage === this) {
            html("Vous êtes fous, vous êtes en train de vous taper !<br>");
        }

        if(!personnage.vie) {
            html("Vous ne pouvez pas attaquer un mort !<br>");
            return;
        }

        html(`${this.pseudo} attaque ${personnage.pseudo} avec son ${this.arme.type} qui fait ${this.arme.degats} dégâts.<br> ${personnage.pseudo} vous perdez ${this.arme.degats} points de vie.<br>`);
        personnage.informer();

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
        document.getElementById(position).classList.remove('cellule-' + this.classe, 'cellule-perso');
        document.getElementById(nPosition).classList.add('cellule-' + this.classe, 'cellule-perso');
        this.position = nPosition;
        this.mouvement++;
        
        return this.mouvement;        
    }

    prendre(arme) {
       this.attaquer(this(arme));
    }
}




export { Personnage };
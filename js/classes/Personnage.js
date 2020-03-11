import { Hache, Epe, Glaive, BaguetteMagique } from './Arme.js';
import { html } from '../fonctions.js';

class Personnage {

    _pseudo;
    _classe;
    _sante;
    _x;
    _y;

    constructor(pseudo, classe, sante, x, y) {
        this._pseudo     = pseudo;
        this._classe     = classe;
        this._sante      = sante;
        this._x          = x;
        this._y          = y;
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

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
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

    set x(x) {
        this._x = x;
    }

    set y(y) {
        this._y = y;
    }


    attaquer(personnage, force = 1) {
        if(personnage == this) {
            html("Vous êtes fous, vous êtes en train de vous taper !<br>");
        }

        if(!personnage.vie) {
            html("Vous ne pouvez pas attaquer un mort !<br>");
            return;
        }
        personnage.sante -= this.arme.degats * force;

        if(force == 1) {
            html(`${this.pseudo} attaque ${personnage.pseudo} avec son ${this.arme.type} qui fait ${this.arme.degats} dégâts.<br> ${personnage.pseudo} vous perdez ${this.arme.degats} points de vie.<br>`);
            personnage.informations();
        }
        
        html(`${this.pseudo} attaque avec son coup spécial ${this.arme.type} de guerre ${personnage.pseudo} ${force} dégâts.<br> ${personnage.pseudo} vous perdez ${force} points de vie.<br>`);
        personnage.informations();

        if(!personnage.vie) {
            personnage.mourir();
            this.gagner();
            return;
        }
    }

    coupSpecial(personnage) {
        this.attaquer(personnage, 100);
    }

    gagner() {
        html(`${this.pseudo} Bravo, vous avez gagné !<br>`);
    }

    informations() {
         html(`${this.pseudo} ${this.classe} a ${this.sante} points de vie.<br>`);
    }

    mourir() {
        html(`${this.pseudo} Vous avez perdu, vous êtes mort !<br>`);
    }    
}


class RoiJaeden extends Personnage {
    constructor(pseudo, arme, x, y) {
        super(pseudo, "Roi Jaeden", 100, x, y);
        this.arme  = arme;
    }    
}


class RoiLich extends Personnage {
    constructor(pseudo, arme, x, y) {
        super(pseudo, "Roi Lich", 100, x, y);
        this.arme = arme;
    }
}

export { Personnage, RoiJaeden, RoiLich };
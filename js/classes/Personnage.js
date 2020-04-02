import { Hache, Epe, Glaive, BaguetteMagique } from './Arme.js';
import { html } from '../fonctions.js';

class Personnage {

    _pseudo;
    _classe;
    _sante;
    _degats;

    constructor(pseudo, classe, sante, degats) {
        this._pseudo     = pseudo;
        this._classe     = classe;
        this._sante      = sante;
        this._degats     = 10;
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

    get degats() {
        return this._degats;
    }

    get vie() {
        if(this.sante <= 0) {
            return false;
        }
        return true;
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

    set degats(degats) {
        this._degats = degats;
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
    constructor(pseudo) {
        super(pseudo, "roi-jaeden", 100);
    }    
}


class RoiLich extends Personnage {
    constructor(pseudo) {
        super(pseudo, "roi-lich", 100);
    }
}

export { Personnage, RoiJaeden, RoiLich };
import { Couteau } from './Arme.js';
import { html } from '../fonctions.js';
import { jeu } from '../main.js';
import { Plateau } from './Plateau.js';

class Personnage {

    constructor(pseudo, classe, position, arme) {
        this._pseudo     = pseudo;
        this._classe     = classe;
        this._sante      = 100;
        this._position   = position;
        this._mouvement  = 0;
        this._arme       = arme;
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

        /*if(this.arme) {
            html(`${this.pseudo} attaque ${personnage.pseudo} avec son ${this.arme.type} qui fait ${this.arme.degats} dégâts.<br> ${personnage.pseudo} vous perdez ${this.arme.degats} points de vie.<br>`);
            personnage.informer();
        }

        if(!personnage.vie) {
            personnage.mourir();
            this.gagner();
            return;
        }*/
    }

    gagner() {
        html(`${this.pseudo} Bravo, vous avez gagné !<br>`);
    }

    mourir() {
        alert(`${this.pseudo} Vous avez perdu, vous êtes mort !`);
    } 


    informer() {
        html(`${this.pseudo} ${this.classe} a ${this.sante} points de vie.<br>`);
    }
    
    deplacer(position, nPosition) {
        document.getElementById(this.position).classList.remove(`cellule-${this.classe}`, 'cellule-perso');
        document.getElementById(this.position).removeAttribute('data-perso');
        document.getElementById(nPosition).classList.add(`cellule-${this.classe}`, 'cellule-perso');
        document.getElementById(nPosition).setAttribute('data-perso', '' + this.classe);
        this.position = nPosition;
        this.mouvement++;

        let tabId = Plateau.recupererCellules(nPosition);
        Plateau.verifierClassPersonnage(tabId);
        
        return this.mouvement;        
    }

    prendre(idArme) { 
        console.log("L.102 - IDArme : "+idArme) 
        this.arme = jeu.armes[Number(idArme)];
        console.log("L-106 : this.arme "+this.arme)
        console.log(`${this.classe} vous avez : ${this.arme.type} qui fait ${this.arme.degats} de dégats`);
    
    }

    deposer(surCelluleID) {
        surCelluleID.classList.add(`cellule-${this.arme.type}`);
        console.log("Mon arme :" + this.arme)
        console.log(jeu.armes); 
        surCelluleID.setAttribute('data-idArme', '' + jeu.armes.indexOf(this.arme));
    }
}

export { Personnage };
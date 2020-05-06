import { Couteau } from './Arme.js';
import { html } from '../fonctions.js';

class Personnage {
    #pseudo;
    #classe;
    #sante     = 100;
    #position;
    #mouvement = 0;
    #arme      = new Couteau();
    #score     = {}; //Tableau json contenant le score des joueurs

    constructor(pseudo, classe, position) {
        this.pseudo     = pseudo;
        this.classe     = classe;
        //this.sante      = 100;
        this.position   = position;
    }

    /**
     * GETTERS ET SETTERS
     */
    get pseudo() { return this.#pseudo; }

    get classe() { return this.#classe; }

    get sante() { return this.#sante; }

    get vie() { return !(this.sante <= 0); } 

    get position() { return this.#position; }

    get mouvement() { return this.#mouvement; }

    get arme() { return this.#arme; }

    get score() { return this.#score; }
    
    set pseudo(pseudo) { this.#pseudo = pseudo; }

    set classe(classe) { this.#classe = classe; }

    set sante(sante) { this.#sante = sante; }

    set position(position) { this.#position = position; }

    set mouvement(nbMouvement) { this.#mouvement = nbMouvement; }
    
    set arme(arme) { this.#arme = arme; }

    set score(score) { this.#score = score; }

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
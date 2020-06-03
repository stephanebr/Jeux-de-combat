import { jeu } from '../main.js';
import { Plateau } from './Plateau.js';

/**
 * @class Personnage
 * @constructor
 * @param {String} pseudo
 * @param {String} classe
 * @param {String} position
 * @param {Object} arme
 * @private {Number} _sante
 * @private {Number} _mouvement
 * @private {Object} _score
 * @member {Boolean} defenseActive
 * @method attaquer(personnage)
 * @method gagner()
 * @method deplacer()
 * @method prendre()
 * @method deposer()
 */
class Personnage {

    constructor(pseudo, classe, position, arme) {
        this._pseudo       = pseudo;
        this._classe       = classe;
        this._sante        = 20;
        this._position     = position;
        this._mouvement    = 0;
        this._arme         = arme;
        this._score        = {};
        this.defenseActive = false;
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

    /**
     * Vérifie si le personnage adverse a déclenché une défense
     * Si oui, les dégats effectués sont de moitié
     * sinon il reçoit les degats de l'arme
     * @param {Object} personnage 
     */
    attaquer(personnage) {
        if(personnage.defenseActive === true) {
            personnage.sante = personnage.sante - (this.arme.degats / 2);
            alert(`${personnage.pseudo} se défend, les dégats reçu sont divisés par 2 : ${personnage.pseudo} vous recevez ${this.arme.degats / 2} de dégats`);
            personnage.defenseActive = false;
        } else {
            personnage.sante -= this.arme.degats;
            alert(`${personnage.pseudo} reçoit : ${this.arme.degats} de dégats`);
        }
    }

    /**
     * Affiche le message d'alerte quand la vie d'un personnage est à 0
     */
    gagner() {
        alert(`${this.pseudo} Bravo, vous avez gagné !`);
        alert('La partie est terminée !');
        $('#btn-attaquer, #btn-defendre').hide(); 
    }
    
    /**
     * Elle récupère la nouvelle position du personnage et incrément le
     * nombre de mouvement
     * @param {String} position 
     * @param {String} nPosition 
     * @returns {Number} this.mouvement
     */
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

    /**
     * Elle permet de récupérer une arme sur la cellule où le personnage c'est
     * déplacé
     * Affiche un message
     * @param {String} idArme 
     */
    prendre(idArme) { 
        this.arme = jeu.armes[Number(idArme)];
        alert(`${this.pseudo} vous avez récupéré : ${this.arme.type} qui fait ${this.arme.degats} de dégats`);    
    }

    /**
     * Elle permet de déposer l'arme sur la cellule de la nouvelle
     * arme récupérée
     * @param {String} surCelluleID 
     */
    deposer(surCelluleID) {
        surCelluleID.classList.add(`cellule-${this.arme.type}`);
        surCelluleID.setAttribute('data-idArme', '' + jeu.armes.indexOf(this.arme));
    }
}

export { Personnage };
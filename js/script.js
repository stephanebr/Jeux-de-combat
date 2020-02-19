class Plateau {

    constructor(colonnes, lignes, obstacles) {
        this.colonnes     = colonnes;
        this.lignes       = lignes;
        this.obstacles    = obstacles;
    }


}

class Personnage {

    div = document.querySelector('#texte');
    _pseudo;
    _classe;
    _sante;
    _niveau;
    _vie;

    constructor(pseudo, classe, sante, niveau, vie) {
        this._pseudo     = pseudo;
        this._classe     = classe;
        this._sante      = sante;
        this._niveau     = 1;
        this._vie        = true;
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

    get niveau() {
        return this._niveau;
    }

    get vie() {
        return this._vie;
    }

    set pseudo(pseudo) {
        this._pseudo = pseudo;
    }

    set classe(classe) {
        this._classe = classe;
    }

    set sante(sante) {
        this._sante = sante;
    }

    set niveau(niveau) {
        this._niveau = niveau;
    }

    set vie(vie) {
        this._vie = vie;
    }

    attaquer(personnage, force = 1) {
        if(personnage == this) {
            this.message += "Vous êtes fous, vous êtes en train de vous taper !<br>";
        }

        if(personnage.vie === true) {
            personnage.sante -= this.arme._degats * force;
            personnage.verifierSante();
            console.log(personnage.vie)

            if(force == 1) {
                this.html(this.pseudo + " attaque " + personnage.pseudo + " avec son " + this.arme._type + " qui fait " + this.arme._degats + " dégâts.<br>" + personnage.pseudo + " vous perdez " + this.arme._degats + " points de vie.<br>");
                this.evoluer();
                personnage.informations();
            }
            
            this.html(this.pseudo + " attaque avec son coup spécial " + this.arme._type + " de guerre " +  personnage.pseudo + " " + force + " dégâts.<br>" + personnage.pseudo + " vous perdez " + force + " points de vie.<br>");
            this.evoluer();
            personnage.informations();
            console.log(personnage.vie);

            if(personnage.vie === false) {
                personnage.mourir();
                this.gagner();
                return;
            }
        }
        
        console.log("aaa.vie");
        this.html("Vous ne pouvez pas attaquer un mort !<br>");
    }

    coupSpecial(personnage) {
        this.attaquer(personnage, 100);
    }

    evoluer() {
        this.niveau++;
        this.html(this.pseudo + " passe au niveau " + this.niveau + " !<br>");
    }

    gagner() {
        this.html(this.pseudo + " Bravo, vous avez gagné !<br>");
    }

    html(message) {
        this.div.innerHTML += message;
    }

    informations() {
         this.html(this.pseudo + " " + this.classe + " a " + this.sante + " points de vie et est au niveau " + this.niveau + ".<br>");
    }

    mourir() {
        this.html(this.pseudo + " Vous avez perdu, vous êtes mort !<br>");
    }    

    verifierSante() {
        if(this.sante <= 0) {
            this.sante = 0;
            this.vie = false;
        }
    }
}


class Magicien extends Personnage {
    constructor(pseudo, arme) {
        super(pseudo, "magicien", 170);
        this.arme = arme;
    }    
}


class Guerrier extends Personnage {
    constructor(pseudo, arme) {
        super(pseudo, "guerrier", 350);
        this.arme = arme;
    }
}


/**
 * Classes des armes :
 * 
 * Private @String : _nom 
 * Private @Number : _degats             
 *              
 *              
 */
class Arme {
    _type;
    _degats;

    constructor(type, degats) {
        this._type    = type;
        this._degats = degats;
    }    

    get type() {
        return this._type;
    }

    get degats() {
        return this._degats;
    }

    set type(_type) {
        this._nom = _type;
    }

    set degats(_degats) {
        this._degats = _degats;
    }
}


class Hache extends Arme {
    constructor() {
        super('Hache', 7);
    }

}


class Epe extends Arme {
    constructor() {
        super('Epé', 5);
    }
}


class Glaive extends Arme {
    constructor() {
        super('Glaive', 8);
    }
}


class BaguetteMagique extends Arme {
    constructor() {
        super('Baguette magique', 10);
    }
}


let perso1 = new Guerrier('Stéphane', new Hache());
let perso2 = new Magicien('Sebastien', new BaguetteMagique());

perso1.coupSpecial(perso2);
perso1.coupSpecial(perso2);

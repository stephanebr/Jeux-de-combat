class Personnage {

    div = document.querySelector('#texte');

    constructor(pseudo, classe, sante, niveau, vie) {
        this.pseudo     = pseudo;
        this.classe     = classe;
        this.sante      = sante;
        this.niveau     = 1;
        this.vie        = true;
    }

    evoluer() {
        this.niveau++;
        this.div.innerHTML += this.pseudo + " passe au niveau " + this.niveau + " !<br>";
    }

    gagner() {
        this.div.innerHTML += this.pseudo + " Bravo, vous avez gagné !<br>";
    }

    mourir() {
        this.div.innerHTML += this.pseudo + " Vous avez perdu, vous êtes mort !<br>";
    }

    html(message) {
        //to do
    }

    attaquer(personnage, force = 1) {
        if(personnage == this) {
            this.div.innerHTML += "Vous êtes fous, vous êtes en train de vous taper !<br>";
        }

        if(personnage.vie === true) {
            personnage.sante -= this.arme._degats * force;
            personnage.verifierSante();
            console.log(personnage.vie)
            this.evoluer();
            if(force == 1) {
                this.div.innerHTML += this.pseudo + " attaque " + personnage.pseudo + " avec son " + this.arme._type + " qui fait " + this.arme._degats + " dégâts.<br>";
            }
            else {
                this.div.innerHTML += this.pseudo + " attaque avec son coup spécial " + this.arme._type + " de guerre " +  personnage.pseudo + " " + this.arme._degats + " * 5 dégâts.<br>";
            }
            console.log(personnage.vie);
            if(personnage.vie === false) {
                this.gagner();
            }
        }
        else {
            console.log("aaa.vie");
            this.div.innerHTML += "Vous ne pouvez pas attaquer un mort !";
        }
    }

    coupSpecial(personnage) {
        this.attaquer(personnage, 100);
        /*if(personnage == this) {
            return this.div.innerHTML += "Vous êtes fous, vous êtes en train de vous taper !<br>";
        }

        if(personnage.vie === true) {
            personnage.sante -= this.arme._degats * 5;
            personnage.verifierSante();
            console.log(personnage.vie)
            this.evoluer();

            return this.div.innerHTML += this.pseudo + " attaque avec son coup spécial " + this.arme._type + " de guerre " +  personnage.pseudo + " " + this.arme._degats + " * 5 dégâts.<br>";
        } 
        else {
             return this.div.innerHTML += "Vous ne pouvez pas attaquer un mort !";
            console.log("aaa");
        }    */   
    }

    verifierSante() {
        if(this.sante <= 0) {
            this.sante = 0;
            this.vie = false;
            this.div.innerHTML += this.mourir();
        }
    }

    get informations() {
        this.div.innerHTML += this.pseudo + " " + this.classe + " a " + this.sante + " points de vie et au niveau de " + this.niveau + ".<br>";
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

perso2.informations;

perso1.coupSpecial(perso2);
perso1.coupSpecial(perso2);

/*
perso2.informations;

perso1.coupSpecial(perso2);

perso2.informations;

perso1.coupSpecial(perso2);

perso2.informations;

perso1.coupSpecial(perso2);

perso2.informations;

perso1.coupSpecial(perso1);

perso2.informations;

perso1.coupSpecial(perso1);
perso1.coupSpecial(perso2);

perso2.informations;*/
/**
 * Classes des armes :
 * 
 * Private @String : _type 
 * Private @Number : _degats             
 *              
 *              
 */
class Arme {

    constructor(type, degats) {
        this._type    = type;
        this._degats  = degats;
    }    

    get type() { return this._type; }

    get degats() { return this._degats; }

    set type(type) { this._nom = type; }

    set degats(degats) { this._degats = degats; }
}


class Hache extends Arme {
    constructor() {
        super('hache', 17);
    }

}


class Epee extends Arme {
    constructor() {
        super('epee', 15);
    }
}


class Glaive extends Arme {
    constructor() {
        super('glaive', 18);
    }
}


class BaguetteMagique extends Arme {
    constructor() {
        super('baguette-magique', 20);
    }
}

class Couteau extends Arme {
    constructor() {
        super('couteau', 10);
    }
}

export { Couteau, Hache, Epee, Glaive, BaguetteMagique };
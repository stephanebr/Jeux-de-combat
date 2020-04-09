/**
 * Classes des armes :
 * 
 * Private @String : _type 
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
        super('hache', 7);
    }

}


class Epe extends Arme {
    constructor() {
        super('epee', 5);
    }
}


class Glaive extends Arme {
    constructor() {
        super('glaive', 8);
    }
}


class BaguetteMagique extends Arme {
    constructor() {
        super('baguette-magique', 10);
    }
}

export { Hache, Epe, Glaive, BaguetteMagique };
/***
 * @class Arme
 * @constructor
 * @param {String} type
 * @param {Number} degats
 */
class Arme {

    constructor(type, degats) {
        this._type    = type;
        this._degats  = degats;
    }    

    get type() { return this._type; }

    get degats() { return this._degats; }

    set type(type) { this._type = type; }

    set degats(degats) { this._degats = degats; }
}

/**
 * @class Hache
 * @extends Arme
 * @constructor
 * @param {String} 'hache'
 * @param {Number} 17
 */
class Hache extends Arme {
    constructor() {
        super('hache', 17);
    }

}

/**
 * @class Epee
 * @extends Arme
 * @constructor
 * @param {String} 'epee'
 * @param {Number} 15
 */
class Epee extends Arme {
    constructor() {
        super('epee', 15);
    }
}

/**
 * @class Glaive
 * @extends Arme
 * @constructor
 * @param {String} 'glaive'
 * @param {Number} 18
 */
class Glaive extends Arme {
    constructor() {
        super('glaive', 18);
    }
}

/**
 * @class BaguetteMagique
 * @extends Arme
 * @constructor
 * @param {String} 'baguette-magique'
 * @param {Number} 20
 */
class BaguetteMagique extends Arme {
    constructor() {
        super('baguette-magique', 20);
    }
}

/**
 * Arme de base
 * @class Couteau
 * @extends Arme
 * @constructor
 * @param {String} 'couteau'
 * @param {Number} 10
 */
class Couteau extends Arme {
    constructor() {
        super('couteau', 10);
    }
}

export { Couteau, Hache, Epee, Glaive, BaguetteMagique };
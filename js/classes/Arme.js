/**
 * Classes des armes :
 * 
 * Private @String : #type 
 * Private @Number : #degats             
 *              
 *              
 */
class Arme {
    #type;
    #degats;

    constructor(type, degats) {
        this.type    = type;
        this.degats  = degats;
    }    

    get type() { return this.#type; }

    get degats() { return this.#degats; }

    set type(type) { this.#type = type; }

    set degats(degats) { this.#degats = degats; }
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
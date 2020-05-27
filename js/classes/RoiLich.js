import { Personnage } from './Personnage.js';

class RoiLich extends Personnage {
    constructor(pseudo, arme) {
        super(pseudo, "roi-lich", null, arme);
    }
}

export { RoiLich };
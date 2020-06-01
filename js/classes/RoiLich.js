import { Personnage } from './Personnage.js';

class RoiLich extends Personnage {
    constructor(arme) {
        super('Roi-Lich', "roi-lich", null, arme);
    }
}

export { RoiLich };
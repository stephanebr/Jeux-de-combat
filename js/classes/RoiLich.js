import { Personnage } from './Personnage.js';

class RoiLich extends Personnage {
    constructor(pseudo) {
        super(pseudo, "roi-lich");
    }
}

export { RoiLich };
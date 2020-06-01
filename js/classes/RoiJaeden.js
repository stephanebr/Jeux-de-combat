import { Personnage } from './Personnage.js';

class RoiJaeden extends Personnage {
    constructor(arme) {
        super('Roi-Jaeden', "roi-jaeden", null, arme);
    }    
}

export { RoiJaeden };
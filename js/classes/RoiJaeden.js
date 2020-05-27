import { Personnage } from './Personnage.js';

class RoiJaeden extends Personnage {
    constructor(pseudo, arme) {
        super(pseudo, "roi-jaeden", null, arme);
    }    
}

export { RoiJaeden };
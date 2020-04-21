import { Personnage } from './Personnage.js';

class RoiJaeden extends Personnage {
    constructor(pseudo) {
        super(pseudo, "roi-jaeden", 100);
    }    
}

export { RoiJaeden };
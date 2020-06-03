import { Personnage } from './Personnage.js';

/**
 * @class RoiJaeden
 * @extends Personnage
 * @constructor
 * @param {Object} arme
 * @param {String} 'Roi-Jaeden'
 * @param {String} 'Roi-jaeden'
 * @param {String} null
 * @param {Object} arme
 */
class RoiJaeden extends Personnage {
    constructor(arme) {
        super('Roi-Jaeden', "roi-jaeden", null, arme);
    }    
}

export { RoiJaeden };
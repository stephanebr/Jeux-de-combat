import { Personnage } from './Personnage.js';

/**
 * @class RoiLich
 * @extends Personnage
 * @constructor
 * @param {Object} arme
 * @param {String} 'Roi-Lich'
 * @param {String} 'Roi-lich'
 * @param {String} null
 * @param {Object} arme
 */
class RoiLich extends Personnage {
    constructor(arme) {
        super('Roi-Lich', "roi-lich", null, arme);
    }
}

export { RoiLich };
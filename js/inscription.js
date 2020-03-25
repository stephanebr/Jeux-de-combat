import { RoiLich, RoiJaeden } from './classes/Personnage.js';

function inscription() {
    let nomPerso1 = "";
    let nomPerso2 = "";
    let jaeden;
    let lich;

    document.getElementById('valider').addEventListener('click', function() {
        nomPerso1    = document.getElementById('perso1').value;
        jaeden       = new RoiJaeden(nomPerso1);

        nomPerso2    = document.getElementById('perso2').value;
        lich         = new RoiLich(nomPerso2);
    });
}

alert(inscription());

export { inscription };


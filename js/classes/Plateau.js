import { jeu } from '../main.js';

class Plateau {
    
    constructor(colonnes, rangees) {
        this._casesPleines     = [];
        this._casesObstacles   = [];
        this._casesArmes       = [];
        this._colonnes         = colonnes;
        this._rangees          = rangees;
        this.creer();
    }

    /**
     * Getters
     */
    get casesPleines() { return this._casesPleines; }

    get casesObstacles() { return this._casesObstacles; }

    get casesArmes() { return this._casesArmes; }

    get colonnes() { return this._colonnes; }

    get rangees() { return this._rangees; }

    /**
     * Setters
     */
    set casesPleines(casesPleines) { this._casesPleines = casesPleines; }

    set casesObstacles(caseObstacles) { this._casesObstacles = caseObstacles; }

    set casesArmes(caseArmes) { this._casesArmes = caseArmes; }

    set colonnes(colonnes) { this._colonnes = colonnes; }

    set rangees(rangees) { this._rangees = rangees; }

    creer() {
        let plateauDeJeu = document.getElementById('plateau-de-jeu');
        
        // Création de l'élément <table> et d'un élément <tbody>
        let tbl     = document.createElement("table");
        let tblBody = document.createElement("tbody");
        
        // Création de toutes les cellules du tableau
        for (let i = 0; i < this.rangees; i++) {
            // Création des lignes du tableau
            let lignes = document.createElement('tr');
            lignes.setAttribute('ligne', '' + i);
            lignes.classList.add('cellule-plateau');
        
            for (let j = 0; j < this.colonnes; j++) {
                // Création des éléments <td>
                let cellules = document.createElement('td');

                /* Création des id dynamiquements aux cellules en récupérant la concaténation de i + j et
                *  stock le resultat dans une propriété resultat
                */ 
                cellules.setAttribute('data-ligne', "" + i);
                cellules.setAttribute('data-colonne', "" + j);
                cellules.setAttribute('id', "" + i + j);
                cellules.classList.add('cellule-plateau');
                lignes.appendChild(cellules);
            }

            // Ajoute la ligne à la fin du tableau
            tblBody.appendChild(lignes);
        }
        
        // Mettre le <tbody> dans <table>
        tbl.appendChild(tblBody);
        // Ajouter <table> au niveau de l'id plateau-de-jeu
        plateauDeJeu.append(tbl);
        // Définitiion des attributs
        tbl.setAttribute("border", "2");
        tbl.setAttribute("width", "500");
        tbl.setAttribute("height", "500");
    }

    genererObstacle(nbObstacles) {

        for(let i = 0; i < nbObstacles; i++) {
            let obstacle = this.trouverCaseVide();

            this.casesPleines.push(obstacle);
            this.casesObstacles.push(obstacle);

            obstacle = document.getElementById(obstacle);
            obstacle.classList.add('cellule-obstacle');
        }
    }

    nombreAleatoire(max) {
        return Math.floor(Math.random() * max);
    }

    placerPersonnage(personnage) {
        let id = this.trouverCaseUtilisable();        
        this.casesPleines.push(id);
        console.log(`cases persos : ${this.casesPersos} `);
        let cellulePersonnage = document.getElementById(id);
        cellulePersonnage.classList.add(`cellule-${personnage.classe}`, 'cellule-perso');
        cellulePersonnage.setAttribute('data-perso', '' + personnage.classe);
        personnage.position = cellulePersonnage.id;
    }

    placerArme(armes) {
        for(let i = 0; i < armes.length; i++) {
            let idArme = this.trouverCaseVide();

            this.casesPleines.push(idArme);
            this.casesArmes.push(idArme);
            
            let celluleArme = document.getElementById(idArme);
            celluleArme.classList.add(`cellule-${armes[i].type}`);
            celluleArme.classList.add('cellule-arme');
            celluleArme.setAttribute('data-idArme', '' + i);
        }

        return armes;
    }

    trouverCaseVide() {
        let x         = this.nombreAleatoire(this.rangees);
        let y         = this.nombreAleatoire(this.colonnes);
        const cellule = String(x) + String(y); 
        
        if (this.casesPleines.includes(cellule)) {
            return this.trouverCaseVide();
        }

        return cellule;
    }

    trouverCaseUtilisable() {
        let cellule = this.trouverCaseVide();

        if(this.caseGaucheLibre(cellule)) {
            return cellule;
        }

        if(this.caseHauteLibre(cellule)) {
            return cellule;
        }

        if(this.caseBasLibre(cellule)) {
            return cellule;
        }

        if(this.caseDroiteLibre(cellule)) {
            return cellule;
        }

        return this.trouverCaseUtilisable();
    }

    caseHauteLibre(celluleId) {
        let result  = true;
        let cellule = document.getElementById(celluleId);
        
        if(cellule.getAttribute('data-ligne') === '0') {
            result = false;
        }

        let celluleHaute = cellule - 10;

        if(celluleHaute < 10) {
            celluleHaute = '0' + celluleHaute + '';
        }

        celluleHaute = celluleHaute.toString();

        if(this.casesPleines.includes(celluleHaute)) {
            result = false;
        }

        return result;
    }

    caseBasLibre(celluleId) {
        let result  = true;
        let cellule = document.getElementById(celluleId);

        if(cellule.getAttribute('data-colonne') > this.colonnes) {
            result = false;
        }

        let celluleBasse = cellule + 10;

        celluleBasse = celluleBasse.toString();

        if(this.casesPleines.includes(celluleBasse)) {
            result = false;
        }

        return result;
    }

    caseGaucheLibre(celluleId) {
        let result  = true;
        let cellule = document.getElementById(celluleId);

        if(cellule.getAttribute('data-colonne') === '0' && cellule.getAttribute('data-ligne') === 0) { //Si je suis sur la première colonne
            result = false;
        }   

        let celluleGauche = cellule.getAttribute('data-colonne') - 1;

        /*if(celluleGauche < 10) {
            celluleGauche = '0' + celluleGauche + '';
        }*/

        celluleGauche = celluleGauche.toString();

        if(this.casesPleines.includes(celluleGauche)) {
            result = false;
        }

        return result;
    }

    caseDroiteLibre(cellule) {
        let result = true;
        
        if(cellule.getAttribute('data-colonne') === this.colonnes) {
            result = false;
        }

        let celluleDroite = cellule + 1;

        if(celluleDroite < 10) {
            celluleDroite = '0' + celluleDroite + '';
        }

        celluleDroite = celluleDroite.toString();

        if(this.casesPleines.includes(celluleDroite)) {
            result = false;
        }

        return result;
    }

    deplacerDroite(personnage) {
        //Le joueur à le droit de se déplacer de 3 cases max
        let position = personnage.position;
        let cellule  = document.getElementById(position);

        if(cellule.getAttribute('data-colonne') === this.colonnes) {
            return false;
        }

        let nPosition = parseInt(position) + 1;

        if(nPosition <= 9) {
            nPosition = '0' + nPosition;
        }

        if(this.estCeQueLaCaseEstLibre(nPosition)) {
            personnage.mouvement = personnage.deplacer(position, nPosition);
        }        
        }
    
    deplacerGauche(personnage) {
    //Le joueur à le droit de se déplacer de 3 cases max
        let position = personnage.position;
        let cellule = document.getElementById(position);

        if(cellule.getAttribute('data-colonne') > this.colonnes) {
            return false;
        }

        let nPosition = cellule.getAttribute('data-colonne') - 1;

        console.log(`nouvelle position ${nPosition}`);

        /*if(nPosition <= 9) {
            nPosition = '0' + nPosition;
        }*/

        if(this.estCeQueLaCaseEstLibre(nPosition)) {
            personnage.mouvement = personnage.deplacer(position, nPosition);
        }
    }
    
    deplacerHaut(personnage) {
    //Le joueur à le droit de se déplacer de 3 cases max
        let position = personnage.position;
        let cellule  = document.getElementById(position);

        if(cellule.getAttribute('data-ligne') === '0') {
            return false;
        }

        let nPosition = parseInt(position) - 10;

        if(nPosition <= 9) {
            nPosition = '0' + nPosition;
        }

        if(this.estCeQueLaCaseEstLibre(nPosition)) {
            personnage.mouvement = personnage.deplacer(position, nPosition);
        }
    }

    deplacerBas(personnage) {
    //Le joueur à le droit de se déplacer de 3 cases max
        let position = personnage.position;
        let cellule  = document.getElementById(position);

        if(cellule.getAttribute('data-ligne') > this.rangees) {
            return false;
        }

        let nPosition = parseInt(position) + 10;

        if(this.estCeQueLaCaseEstLibre(nPosition)) {
            personnage.mouvement = personnage.deplacer(position, nPosition);
        }
    }

    estCeQueLaCaseEstLibre(cellule) {
        let cell       = String(cellule);
        let idPerso    = document.getElementById(cellule);
    
        if(this.casesObstacles.includes(cell) || idPerso.classList.contains('cellule-perso')) {
            alert("La case n'est pas libre !");

            if(idPerso.classList.contains('cellule-perso')) {
                alert('Vous pouvez attaquer le personnage');
            }

            return false;
        }
            this.estCeQueLaCaseAUneArme(cell);
        
            return true;
    }

    estCeQueLaCaseAUneArme(cellule) {
        let cell = String(cellule);
        let personnage;
        let idArme = document.getElementById(cell);

        if(this.casesArmes.includes(cell)) {
            let dataIdArme = idArme.getAttribute('data-idArme');
            alert("Prendre l'arme !");

            if(jeu.peutJouer === jeu.jaeden.classe) {
                personnage = jeu.jaeden;
            } 
            else {
                personnage = jeu.lich;
            }

            personnage.prendre(dataIdArme);

            $('#mon-arme').html(personnage.arme.degats).attr('class', `cellule-${personnage.arme.type} img-thumbnail`);

            idArme.removeAttribute('data-idArme');
            idArme.classList.remove(`cellule-${personnage.arme.type}`);
            idArme.classList.remove('cellule-arme');

            this.casesArmes.splice(this.casesArmes.indexOf(cell),1);

            return true;
        }

        return false;
    }
}

export { Plateau };
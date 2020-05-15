import { jeu } from '../main.js';

class Plateau {
    
    constructor(colonnes, rangees) {
        this._casesPleines     = [];
        this._caseObstacles    = [];
        this._caseArmes        = [];
        this._colonnes         = colonnes;
        this._rangees          = rangees;
        this.creer();
    }

    /**
     * Getters
     */
    get casesPleines() { return this._casesPleines; }

    get caseObstacles() { return this._caseObstacles; }

    get caseArmes() { return this._caseArmes; }

    get colonnes() { return this._colonnes; }

    get rangees() { return this._rangees; }

    /**
     * Setters
     */
    set casesPleines(casesPleines) { this._casesPleines = casesPleines; }

    set caseObstacles(caseObstacles) { this._caseObstacles = caseObstacles; }

    set caseArmes(caseArmes) { this._caseArmes = caseArmes; }

    set colonnes(colonnes) { this._colonnes = colonnes; }

    set rangees(rangees) { this._rangees = rangees; }

    creer() {
        let plateauDeJeu = document.getElementById('plateau-de-jeu');
        
        // Création de l'élément <table> et d'un élément <tbody>
        let tbl     = document.createElement("table");
        let tblBody = document.createElement("tbody");
        
        // Création de toutes les cellules du tableau
        for (let i = 0; i < 10; i++) {
            // Création des lignes du tableau
            let lignes = document.createElement('tr');
            lignes.setAttribute('ligne', '' + i);
            lignes.classList.add('cellule-plateau');
        
            for (let j = 0; j < 10; j++) {
                // Création des éléments <td>
                let cellules = document.createElement("td");
                /* Création des id dynamiquements aux cellules en récupérant la concaténation de i + j et
                *  stock le resultat dans une propriété resultat
                */ 
                cellules.setAttribute("id", "" + i + j);
                cellules.classList.add("cellule-plateau");
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
            this.caseObstacles.push(obstacle);

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
        let cellulePersonnage = document.getElementById(id);
        cellulePersonnage.classList.add(`cellule-${personnage.classe}`, 'cellule-perso');
        cellulePersonnage.setAttribute('data-perso', '' + personnage.classe);
        personnage.position = cellulePersonnage.id;
    }

    placerArme(armes) {
        for(let i = 0; i < armes.length; i++) {
            let idArme = this.trouverCaseVide();

            this.casesPleines.push(idArme);
            this.caseArmes.push(idArme);
            
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

    caseHauteLibre(cellule) {
        let result = true;

        if(cellule < 10) {
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

    caseBasLibre(cellule) {
        let result = true;

        if(cellule == 89) {
            result = false;
        }

        let celluleBasse = cellule + 10;

        celluleBasse = celluleBasse.toString();

        if(this.casesPleines.includes(celluleBasse)) {
            result = false;
        }

        return result;
    }

    caseGaucheLibre(cellule) {
        let result = true;

        if(cellule % 10 === 0) { //Si je suis sur la première colonne
            result = false;
        }   

        let celluleGauche = cellule - 1;

        if(celluleGauche < 10) {
            celluleGauche = '0' + celluleGauche + '';
        }

        celluleGauche = celluleGauche.toString();

        if(this.casesPleines.includes(celluleGauche)) {
            result = false;
        }

        return result;
    }

    caseDroiteLibre(cellule) {
        let result = true;
        
        if(cellule == 99) {
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

    estCeQueLaCaseEstLibre(cellule) {
        let cell       = String(cellule);
        let idPerso    = document.getElementById(cellule);
    
        if(this.caseObstacles.includes(cell) || idPerso.classList.contains('cellule-perso') == true) {
            alert("La case n'est pas libre !");
            return false;
        }

        this.estCeQueLaCaseAUneArme(cell);
        
        return true;
    }

    estCeQueLaCaseAUneArme(cellule) {
        let cell = String(cellule);
        let personnage;
        let idArme = document.getElementById(cell);

        if(this.caseArmes.includes(cell)) {
            let dataIdArme = idArme.getAttribute('data-idArme');
            alert("Prendre l'arme !");

            if(jeu.peutJouer === jeu.jaeden.classe) {
                personnage = jeu.jaeden;
            } 
            else {
                personnage = jeu.lich;
            }

            personnage.prendre(dataIdArme);
            document.getElementById('mon-arme').classList.add(`cellule-${personnage.arme.type}`);

            idArme.setAttribute('data-idArme', '');
            idArme.classList.remove(`cellule-${personnage.arme.type}`);
            idArme.classList.remove('cellule-arme');

            return true;
        }

        return false;
    }

    deplacerDroite(personnage) {
    //Le joueur à le droit de se déplacer de 3 cases max
        let position = personnage.position;

        if(position == 99) {
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

        if(position == '00') {
            return false;
        }

        let nPosition = parseInt(position) - 1;

        if(nPosition <= 9) {
            nPosition = '0' + nPosition;
        }

        if(this.estCeQueLaCaseEstLibre(nPosition)) {
            personnage.mouvement = personnage.deplacer(position, nPosition);
        }
    }

     deplacerHaut(personnage) {
    //Le joueur à le droit de se déplacer de 3 cases max
        let position = personnage.position;

        if(position <= 9) {
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

        if(position >= 89) {
            return false;
        }

        let nPosition = parseInt(position) + 10;

        if(this.estCeQueLaCaseEstLibre(nPosition)) {
            personnage.mouvement = personnage.deplacer(position, nPosition);
        }
    }
}

export { Plateau };
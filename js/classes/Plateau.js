import { Coordonnees } from './Coordonnees.js';

class Plateau {

    _casesPleines;
    _obstacles;
    _colonnes;
    _rangees;

    constructor(colonnes, rangees) {
        this._casesPleines = [];
        this._obstacles    = [];
        this._colonnes     = colonnes;
        this._rangees      = rangees;
    }

    /**
     * Getteers
     */
    get casesPleines() {
       return this._casesPleines;
    }

    get obstacles() {
        return this._obstacles;
    }

    get colonnes() {
        return this._colonnes;
    }

    get rangees() {
        return this._rangees;
    }

    /**
     * Setters
     */
    set casesPleines(casesPleines) {
        this._casesPleines = casesPleines;
    }

    set obstacles(obstacles) {
        this._obstacles = obstacles;
    }

    set colonnes(colonnes) {
        this._colonnes = colonnes;
    }

    set rangees(rangees) {
        this._rangees = rangees;
    }

    creer() {
        let body = document.getElementsByTagName("body")[0];
        
        // Création de l'élément <table> et d'un élément <tbody>
        let tbl = document.createElement("table");
        let tblBody = document.createElement("tbody");
        
        // Création de toutes les cellules du tableau
        for (let i = 0; i < 10; i++) {
            // Création des lignes du tableau
            let lignes = document.createElement("tr");
            lignes.setAttribute("ligne", "" + i);
            lignes.classList.add("cellule-plateau");
        
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
        // Ajouter <table> dans <body>
        body.appendChild(tbl);
        // Définitiion des attributs
        tbl.setAttribute("border", "2");
        tbl.setAttribute("width", "500");
        tbl.setAttribute("height", "500");
        tbl.style.margin = "auto 400px";
    }

    genererObstacle(nbObstacles) {

        for(let i = 0; i < nbObstacles; i++) {
            let obstacle = this.trouverCaseVide();

            this.casesPleines.push(obstacle);

            obstacle = document.getElementById(obstacle);
            obstacle.classList.add("cellule-obstacle");
        }
    }

    nombreAleatoire(max) {
        return Math.floor(Math.random() * max);
    }

    placerPersonnage(personnage) {
        let idPerso = this.trouverCaseVide();
        
        this.trouverCaseUtilisable();
        this.casesPleines.push(idPerso);
        let cellulePersonnage = document.getElementById(idPerso);
        cellulePersonnage.classList.add("cellule-" + personnage.classe);  
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

    caseHauteLibre(id) {
        if(id < 10) {
            return false;
        }

        let celluleHaute = document.getElementById(parseInt(id) - 10).id;

        if(this.casesPleines.includes(celluleHaute)) {
            return false;
        }

        return true;
    }

    caseBasLibre(id) {
        if(id > 10) {
            return false;
        }

        let celluleBasse = document.getElementById(parseInt(id) + 10).id;

        if(this.casesPleines.includes(celluleBasse)) {
            return false;
        }

        return true;
    }

    caseGaucheLibre(id) {
        if(id == '00') {
            return false;
        }

        console.log('id : ' + id);

        let celluleGauche = document.getElementById(parseInt(id) - 1).id;
        console.log('cellule gauche : ' + celluleGauche);

        if(this.casesPleines.includes(celluleGauche)) {
            return false;
        }

        return true;
    }

    caseDroiteLibre(id) {
        if(id == 99) {
            return false;
        }

        let celluleDroite = document.getElementById(parseInt(id) + 1).id;

        if(this.casesPleines.includes(celluleDroite)) {
            return false;
        }

        return true;
    }
}

export { Plateau };
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

    creer(nbObstacles) {
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

        this.genererObstacle(nbObstacles);
    }

    genererObstacle(nbObstacles) {

        for(let i = 0; i < nbObstacles; i++) {
            let obstacles = this.trouverCaseVide();

            console.log(`les obstacles ${obstacles.x}`);

            obstacles = document.getElementById(obstacles.x);
            obstacles.classList.add("cellule-obstacle");
        }
    }

    nombreAleatoire(max) {
        return Math.floor(Math.random() * max);
    }

    placerPersonnage(personnage) {
        let perso = this.trouverCaseVide();
        let cellulePersonnage1 = document.getElementById(perso.x);
        cellulePersonnage1.classList.add("cellule-" + personnage.classe);
    }

    trouverCaseVide() {
        let x         = this.nombreAleatoire(this.rangees);
        let y         = this.nombreAleatoire(this.colonnes);
        const cellule = new Coordonnees(x, y);

        /* if(x <= 9) {
            x = "0" + x;
            console.log(`id perso 1 = ${x}`);
        }

        if(y <= 9) {
            y = "0" + y;
            console.log(`id perso 1 = ${y}`);
        } */

        if(cellule.x <= 9) {
            cellule.x = "0" + cellule.x;
        }

        if(cellule.y <= 9) {
            cellule.y = "0" + cellule.y;
        }
        
        for(let cell of this.casesPleines) {
            if (cell.x === cellule.x && cellule.y === cell.y) {
                console.log('la case est prise');
                this.trouverCaseVide();
            }
        }
        
        this.casesPleines.push(cellule);

        return cellule;
    }
}

export { Plateau };
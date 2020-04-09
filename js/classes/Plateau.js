import { Hache, Epe, Glaive, BaguetteMagique } from './Arme.js';

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
        let id = this.trouverCaseUtilisable();        
        this.casesPleines.push(id);
        let cellulePersonnage = document.getElementById(id);
        cellulePersonnage.classList.add("cellule-" + personnage.classe);
        personnage.position = cellulePersonnage.id;
    }

    placerArme() {
        let armes = [new Hache(), new Glaive(), new BaguetteMagique(), new Epe()];

        for(let i = 0; i < armes.length; i++) {
            let idArme      = this.trouverCaseVide();
            this.casesPleines.push(idArme);
            let celluleArme = document.getElementById(idArme);
            celluleArme.classList.add("cellule-" + armes[i].type);
            celluleArme.classList.add("cellule-arme"); 
        }
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

    estCeQueLaCaseDeDroiteEstLibre(cellule) {
        let celluleDroite = String(cellule);
    
        if(this.casesPleines.includes(celluleDroite)) {
            alert("La case droite n'est pas libre !");
            return false;
        }
        return true;
    }

    estCeQueLaCaseDeDroiteAUneArme(cellule) {
        let celluleDroite = String(cellule);

        if(celluleDroite == document.getElementsByClassName('cellule-arme')) {
            alert("Prendre l'arme !");
        }

        return true;
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

        if(this.estCeQueLaCaseDeDroiteEstLibre(nPosition)) {
            document.getElementById(position).classList.remove('cellule-' + personnage.classe);
            document.getElementById(nPosition).classList.add('cellule-' + personnage.classe);
        }        

        personnage.position = document.getElementById(nPosition).id;
    }
}

export { Plateau };
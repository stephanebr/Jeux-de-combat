class Plateau {

    creer(nbObstacles) {
        let body = document.getElementsByTagName("body")[0];
        
        // Création de l'élément <table> et d'un élément <tbody>
        let tbl = document.createElement("table");
        let tblBody = document.createElement("tbody");
        
        // Création de toutes les cellules du tableau
        for (let i = 0; i < 10; i++) {
            // Création des lignes du tableau
            let lignes = document.createElement("tr");
        
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
        let nbs = [];
        let obstacle = "";

        for(let i = 0; i < nbObstacles; i++) {
            let nb = (Math.floor(Math.random() * 100));
            nbs.push(nb);
            console.log(nb);
            console.log(`Tab ${nbs}`);

            if(nb <= 9) {
                nb = "0" + nb;
                console.log(`id= ${nb}`);
            }

            /*if (nbs.includes(nb)) {
                this.genererObstacle(nbObstacles - 1); //Récursivité
                console.log(`Test NB = ${nb}`);
            }*/

            if(nbs == nb) {
                console.log(`Test NB = ${nb}`);
                return this.genererObstacle(nbObstacles - 1);
            }

            obstacle = document.getElementById(nb);
            obstacle.classList.add("cellule-obstacle");       
        }
    }
}

export { Plateau };
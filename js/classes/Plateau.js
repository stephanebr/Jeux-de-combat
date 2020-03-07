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
        let obstacle = "";

        for(let i = 0; i < nbObstacles; i++) {
            let nb = this.nombreAleatoire(100);

            if(nb <= 9) {
                nb = "0" + nb;
                console.log(`id= ${nb}`);
            }

            obstacle = document.getElementById(nb);
            obstacle.classList.add("cellule-obstacle");
            
            if (document.getElementsByClassName("cellule-obstacle")) {
                console.log(`Cellule deja prise = ${nb}`);
                nb++;                
            }
        }
    }

    nombreAleatoire(nombre) {
        return Math.floor(Math.random() * nombre);
    }

    placerPersonnage() {
        let nb1               = 0;
        let nb2               = 0;
        let idPersonnage1     = "";
        let idPersonnage2     = "";
        let idObstacle        = document.getElementById("cellule-obstacle");

        nb1 = this.nombreAleatoire(5);
        console.log(`id personnage 1 : ${nb1}`);

        nb2 = this.nombreAleatoire(5);
        console.log(`id personnage 2 : ${nb2}`);

        while((nb2 <= nb1) || (idObstacle)) {
            if(nb2 <= 96) {
                nb2 += 4;
            }

            if(nb1 >= 4) {
                nb1 -= 4;
            }
             
            console.log(`ajoute 4 à personnage 2 : ${nb2}`);
            console.log(`retire 4 à personnage 1 : ${nb1}`);
        }

        if(nb1 <= 9) {
            nb1 = "0" + nb1;
            console.log(`id perso 1 = ${nb1}`);
        }

        if(nb2 <= 9) {
            nb2 = "0" + nb2;
            console.log(`id perso 2 = ${nb2}`);
        }

        idPersonnage1 = document.getElementById(nb1);
        idPersonnage1.classList.add("cellule-personnage-1");

        idPersonnage2 = document.getElementById(nb2);
        idPersonnage2.classList.add("cellule-personnage-2");  
    }
}

export { Plateau };
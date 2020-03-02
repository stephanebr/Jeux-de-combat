class Plateau {

    /*constructor(lignes, colonnes, obstacles) {
        this.lignes       = creer(lignes);
        this.colonnes     = colonnes;
        this.obstacles    = obstacles;
    }*/

    creer() {
        let body = document.getElementsByTagName("body")[0];
        
        // Création de l'élément <table> et d'un élément <tbody>
        let tbl = document.createElement("table");
        let tblBody = document.createElement("tbody");
        let resultat1 = 0;
        
        // Création de toutes les cellules du tableau
        for (let i = 0; i < 10; i++) {
            // Création des lignes du tableau
            let ligne = document.createElement("tr");
        
            for (let j = 0; j < 10; j++) {
                // Création des éléments <td>
                var cellules = document.createElement("td");
                /* Création des id dynamiquements aux cellules en récupérant la somme de i + j et
                *  stock le resultat dans une propriété resultat
                */ 
                var resultat = cellules.setAttribute("id", "" + i + j);
                ligne.appendChild(cellules);
            }

        
            // Ajoute la ligne à la fin du tableau
            tblBody.appendChild(ligne);
        }
        
        // Mettre le <tbody> dans <table>
        tbl.appendChild(tblBody);
        // Ajouter <table> dans <body>
        body.appendChild(tbl);
        // Définitiion des attributs
        tbl.setAttribute("border", "2");
        tbl.setAttribute("width", "800");
        tbl.setAttribute("height", "500");
        tbl.style.margin = "auto 400px";

        
        for(let i = 0; i < 10; i++) {
            resultat1 = (Math.floor(Math.random() * 100));
            console.log(resultat1);

            if(resultat1 <= 9) {
                resultat1 = "0" + resultat1;
                console.log(`id= ${resultat1}`);
            }

            let obs = document.getElementById(resultat1);

            console.log(obs);

            obs.style.backgroundImage = "url('./images/obstacle-1.png')";            
        }
    }
}

export { Plateau };
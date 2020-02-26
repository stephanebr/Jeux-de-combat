class Plateau {

    /*constructor(lignes, colonnes, obstacles) {
        this.lignes       = creer(lignes);
        this.colonnes     = colonnes;
        this.obstacles    = obstacles;
    }*/

    creer() {
        let body = document.getElementsByTagName("body")[0];
        
        // creates a <table> element and a <tbody> element
        let tbl = document.createElement("table");
        let tblBody = document.createElement("tbody");
        
        // creating all cells
        for (let i = 0; i < 10; i++) {
            // creates a table row
            let row = document.createElement("tr");
        
            for (let j = 0; j < 10; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            let cell = document.createElement("td");
            cell.setAttribute("id", "" + i + j);
            //let cellText = document.createTextNode(i + " " + j);
            //cell.appendChild(cellText);
            row.appendChild(cell);
            }
        
            // add the row to the end of the table body
            tblBody.appendChild(row);
        }


        
        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tbl);
        // sets the border attribute of tbl to 2;
        tbl.setAttribute("border", "2");
        tbl.setAttribute("width", "800");
        tbl.setAttribute("height", "500");
        tbl.style.textAlign = "center";
    }
}

export { Plateau };
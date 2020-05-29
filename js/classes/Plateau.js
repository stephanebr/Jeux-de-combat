import { jeu } from "../main.js";

class Plateau {
  constructor(colonnes, rangees) {
    this._casesPleines = [];
    this._casesObstacles = [];
    this._casesArmes = [];
    this._colonnes = colonnes;
    this._rangees = rangees;
    this.creer();
  }

  static conversionIdEnCoord(id) {
    const [x, y] = id.split("/");
    return { x: Number(x), y: Number(y) };
  }

  static majId(id, translationX, translationY) {
    const originePosition = Plateau.conversionIdEnCoord(id);

    const nPosition = {
      x: originePosition.x + translationX,
      y: originePosition.y + translationY,
    };

    return `${nPosition.x}/${nPosition.y}`;
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
    let plateauDeJeu = document.getElementById("plateau-de-jeu");

    // Création de l'élément <table> et d'un élément <tbody>
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");

    // Création de toutes les cellules du tableau
    for (let i = 0; i < this.rangees; i++) {
      // Création des lignes du tableau
      let lignes = document.createElement("tr");
      lignes.setAttribute("ligne", "" + i);
      lignes.classList.add("cellule-plateau");

      for (let j = 0; j < this.colonnes; j++) {
        // Création des éléments <td>
        let cellules = document.createElement("td");

        /* Création des id dynamiquements aux cellules en récupérant la concaténation de i + j et
         *  stock le resultat dans une propriété resultat
         */
        cellules.setAttribute("id", "" + j + "/" + i);
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
    for (let i = 0; i < nbObstacles; i++) {
      let obstacle = this.trouverCaseVide();

      this.casesPleines.push(obstacle);
      this.casesObstacles.push(obstacle);

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
    console.log(`cases persos : ${this.casesPersos}`);
    let cellulePersonnage = document.getElementById(id);
    cellulePersonnage.classList.add(
      `cellule-${personnage.classe}`,
      "cellule-perso"
    );
    cellulePersonnage.setAttribute("data-perso", "" + personnage.classe);
    personnage.position = cellulePersonnage.id;
  }

  placerArme(armes) {
    for (let i = 0; i < armes.length; i++) {
      let idArme = this.trouverCaseVide();

      this.casesPleines.push(idArme);
      this.casesArmes.push(idArme);

      let celluleArme = document.getElementById(idArme);
      celluleArme.classList.add(`cellule-${armes[i].type}`);
      celluleArme.classList.add("cellule-arme");
      celluleArme.setAttribute("data-idArme", "" + i);
    }

    return armes;
  }

  trouverCaseVide() {
    let x = this.nombreAleatoire(this.rangees);
    let y = this.nombreAleatoire(this.colonnes);
    const cellule = String(y) + "/" + String(x);

    if(this.casesPleines.includes(cellule)) {
      return this.trouverCaseVide();
    }

    return cellule;
  }

  trouverCaseUtilisable() {
    let cellule = this.trouverCaseVide();

    if (this.caseGaucheLibre(cellule)) {
      return cellule;
    }

    if (this.caseHauteLibre(cellule)) {
      return cellule;
    }

    if (this.caseBasLibre(cellule)) {
      return cellule;
    }

    if (this.caseDroiteLibre(cellule)) {
      return cellule;
    }

    return this.trouverCaseUtilisable();
  }

  caseHauteLibre(cellule) {
    let result = true;
    const celluleHaute = Plateau.majId(cellule, 0, -1);
    const nPosition = Plateau.conversionIdEnCoord(celluleHaute);

    if(nPosition.y < 0) {
      return false;
    }

    if (this.casesPleines.includes(celluleHaute)) {
      result = false;
    }

    return result;
  }

  caseBasLibre(cellule) {
    let result = true;
    const celluleBasse = Plateau.majId(cellule, 0, 1);
    const nPosition = Plateau.conversionIdEnCoord(celluleBasse);

    if(nPosition.y >= this.rangees) {
      return false;
    }
    
    if(this.casesPleines.includes(celluleBasse)) {
      result = false;
    }

    return result;
  }

  caseGaucheLibre(cellule) {
    let result = true;
    const celluleGauche = Plateau.majId(cellule, -1, 0);
    const nPosition = Plateau.conversionIdEnCoord(celluleGauche);

    if(nPosition.x < 0) {
      return false;
    }

    if(this.casesPleines.includes(celluleGauche)) {
      result = false;
    }

    return result;
  }

  caseDroiteLibre(cellule) {
    let result = true;
    const celluleDroite = Plateau.majId(cellule, 1, 0);
    const nPosition = Plateau.conversionIdEnCoord(celluleDroite);

    if(nPosition.x >= this.colonnes) {
      return false;
    }

    if(this.casesPleines.includes(celluleDroite)) {
      result = false;
    }

    return result;
  }

  deplacerDroite(personnage) {
    //Le joueur à le droit de se déplacer de 3 cases max
    let position = personnage.position;
    let celluleDroite = Plateau.majId(position, 1, 0);
    const nPosition = Plateau.conversionIdEnCoord(celluleDroite);

    if(nPosition.x < this.colonnes && this.estCeQueLaCaseEstLibre(celluleDroite)) {
      personnage.mouvement = personnage.deplacer(position, celluleDroite);
    }
  }

  deplacerGauche(personnage) {
    //Le joueur à le droit de se déplacer de 3 cases max
    let position = personnage.position;
    const celluleGauche = Plateau.majId(position, -1, 0);
    const nPosition = Plateau.conversionIdEnCoord(celluleGauche);

    if(nPosition.x < 0) {
      console.log("la colonne est egale à 0");
      return false;
    }

    if (nPosition.x >= 0 && this.estCeQueLaCaseEstLibre(celluleGauche)) {
      personnage.mouvement = personnage.deplacer(position, celluleGauche);
    }
  }

  deplacerHaut(personnage) {
    //Le joueur à le droit de se déplacer de 3 cases max
    let position = personnage.position;
    const celluleHaute = Plateau.majId(position, 0, -1);
    const nPosition = Plateau.conversionIdEnCoord(celluleHaute);

    if(nPosition.y < 0) {
      return false;
    }

    if (this.estCeQueLaCaseEstLibre(celluleHaute)) {
      personnage.mouvement = personnage.deplacer(position, celluleHaute);
    }
  }

  deplacerBas(personnage) {
    //Le joueur à le droit de se déplacer de 3 cases max
    let position = personnage.position;
    const celluleBasse = Plateau.majId(position, 0, 1);
    const nPosition = Plateau.conversionIdEnCoord(celluleBasse);
    let idBas = [];

    if(nPosition.y >= this.rangees) {
      return false;
    }

    if(this.estCeQueLaCaseEstLibre(celluleBasse)) {
      personnage.mouvement = personnage.deplacer(position, celluleBasse);
      let tabId = this.recupererCellules(position);

      tabId.forEach((id, index) => {
        idBas.push(id);
        console.log('index des cellule : ' + index + ' = à ' + id);
      });

      console.log('id bas ' + idBas);

      if(document.getElementById(idBas).contains('cellule-perso')) {
        console.log('Vous pouvez attaquer');
      }

      /*if(idPerso.classList.contains("cellule-perso")) {
        alert("Vous pouvez attaquer le personnage");
        $('#btn-attaquer').show();
      }*/

      /*
       TO DO : fonction(id) {
         return array[id : bas, haut, gauche et droite]

         deuxieme fonction(array[id]) qui verifie que si un de ces elements si la class cellule-perso est presente
       }

      */
    }
  }

  recupererCellules(id) {
    let tabId = [];
    const celluleHaute = Plateau.majId(id, 0, 0);
    const celluleDroite = Plateau.majId(id, 1, 1);
    const celluleBasse = Plateau.majId(id, 0, 2);
    const celluleGauche = Plateau.majId(id, -1, 1);
    tabId.push(celluleHaute, celluleGauche, celluleBasse, celluleDroite);

    return tabId;
  }

  estCeQueLaCaseEstLibre(cellule) {
    let cell = String(cellule);
    let idPerso = document.getElementById(cellule);

    if(this.casesObstacles.includes(cell) || idPerso.classList.contains("cellule-perso")) {
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

    if(this.casesArmes.includes(cell)) {
      let dataIdArme = idArme.getAttribute("data-idArme");
      alert("Prendre l'arme !");

      personnage = jeu.peutJouer;

      personnage.deposer(idArme);

      console.log("l 331 : dataIdArme : " + dataIdArme);
      personnage.prendre(dataIdArme);

      $("#mon-arme").html(personnage.arme.degats).attr("class", `cellule-${personnage.arme.type} img-thumbnail`);

      idArme.classList.remove(`cellule-${personnage.arme.type}`);
      idArme.classList.remove("cellule-arme");

      return true;
    }

    return false;
  }
}

export { Plateau };

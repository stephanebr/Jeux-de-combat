import { jeu } from "../main.js";

/**
 * @class Plateau crée la map du jeu
 * @constructor 
 * @param {Number} colonnes 
 * @param {Number} rangees
 * @private {Array} _casesPleines
 * @private {Array} _casesObstacles
 * @private {Array} _casesArmes
 * @method creer()
 */
class Plateau {
  constructor(colonnes, rangees) {
    this._casesPleines = [];
    this._casesObstacles = [];
    this._casesArmes = [];
    this._colonnes = colonnes;
    this._rangees = rangees;
    this.creer();
  }

  /**
   * Convertie l'id en coordonnées
   * @param {String} id 
   * @returns {Object}
   */
  static conversionIdEnCoord(id) {
    const [x, y] = id.split("_");
    return { x: Number(x), y: Number(y) };
  }

  /**
   * Retourne la nouvelle position du personnage
   * @param {String} id 
   * @param {Number} translationX 
   * @param {Number} translationY 
   * @returns {String} la colonne et la rangée
   */
  static majId(id, translationX, translationY) {
    const originePosition = Plateau.conversionIdEnCoord(id);

    const nPosition = {
      x: originePosition.x + translationX,
      y: originePosition.y + translationY,
    };

    return `${nPosition.x}_${nPosition.y}`;
  }

  /**
   * Récupère les cellules adjacentes selon la position du personnage
   * et les stockes dans un tableau
   * @param {String} id
   * @returns {Array} tabId 
   */
  static recupererCellules(id) {
    let tabId = [];
    const celluleHaute = Plateau.majId(id, 0, -1);
    const celluleDroite = Plateau.majId(id, 1, 0);
    const celluleBasse = Plateau.majId(id, 0, 1);
    const celluleGauche = Plateau.majId(id, -1, 0);
    const celluleH = Plateau.conversionIdEnCoord(celluleHaute);
    const celluleD = Plateau.conversionIdEnCoord(celluleDroite);
    const celluleB = Plateau.conversionIdEnCoord(celluleBasse);
    const celluleG = Plateau.conversionIdEnCoord(celluleGauche);

    tabId.push(celluleHaute, celluleGauche, celluleBasse, celluleDroite);
 
    return tabId;
  }

  /**
   * Verifie si un personnage est présent sur une cellule adjacente
   * Active les attaquer et parer
   * masque les boutons de déplacement et terminer le tour
   * désactive les touches du clavier
   * @param {Array} tableauId 
   * @returns {Boolean}
   */
  static verifierClassPersonnage(tableauId) {
    let combatDemare = false;

    tableauId.forEach((id) => {
      if($("#" + id).hasClass('cellule-perso')) {
        alert('Vous pouvez attaquer votre adversaire !');
        alert('Que le combat commence !');
        $('#btn-attaquer').show();
        $('#btn-defendre').show();
        $('#btn-haut, #btn-droite, #btn-bas, #btn-gauche, #btn-terminer').hide();
        $('*').off('keydown');
        combatDemare = true
      }
    });

    return combatDemare;
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

  /**
   * Elle sert à créer la map du jeu
   */
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

        /* Création des id dynamiquements aux cellules en récupérant le nombre de la colonne et le nombre de la rangée (i_j)
         */
        cellules.setAttribute("id", "" + j + "_" + i);
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

  /**
   * Permet de définir le nombre d'obstacle sur la map
   * @param {Number} nbObstacles
   */
  genererObstacle(nbObstacles) {
    for (let i = 0; i < nbObstacles; i++) {
      let obstacle = this.trouverCaseVide();

      this.casesPleines.push(obstacle);
      this.casesObstacles.push(obstacle);

      obstacle = document.getElementById(obstacle);
      obstacle.classList.add("cellule-obstacle");
    }
  }

  /**
   * La méthode nombreAléatoire(max) attend un parametre Number qui détermine le nombre maximun
   * Elle fait un tirage aléatoire de nombre de 0 à max de colonne et rangée 
   * @param {Number} max
   * @returns {Number}
   *  
   */
  nombreAleatoire(max) {
    return Math.floor(Math.random() * max);
  }

  /**
   * La méthode placerPersonnage attend en parametre un objet Personnage, place les personnages selon la valeur retournée par le méthode trouverCaseUtilisable()
   * qui est stockée dans un attribut id et stock l'id dans le tableau casePleines.
   * Recupère la position des personnages qui est initialisée par le Setter position
   *  
   * @param {Object} personnage 
   */
  placerPersonnage(personnage) {
    let id = this.trouverCaseUtilisable();
    this.casesPleines.push(id);
    let cellulePersonnage = document.getElementById(id);
    cellulePersonnage.classList.add(`cellule-${personnage.classe}`, "cellule-perso");
    cellulePersonnage.setAttribute("data-perso", "" + personnage.classe);
    personnage.position = cellulePersonnage.id;
  }

  /**
   * Place les armes sur la map stockés dans la tableau selon l'id disponible
   * @param {Array} armes
   * @returns {Array} armes
   */
  placerArme(armes) {
    for (let i = 0; i < armes.length; i++) {
      let idArme = this.trouverCaseVide();
      this.casesArmes.push(idArme);

      let celluleArme = document.getElementById(idArme);
      celluleArme.classList.add(`cellule-${armes[i].type}`);
      celluleArme.classList.add("cellule-arme");
      celluleArme.setAttribute("data-idArme", "" + i);
    }

    return armes;
  }

  /**
   * Permet de trouver une cellule vide
   * @returns {String} cellule
   */
  trouverCaseVide() {
    let x = this.nombreAleatoire(this.rangees);
    let y = this.nombreAleatoire(this.colonnes);
    const cellule = String(y) + "_" + String(x);

    if(this.casesPleines.includes(cellule) || this.casesArmes.includes(cellule)) {
      return this.trouverCaseVide(); // Récursivité
    }

    return cellule;
  }

  /**
   * Elle détermine lors du déplacement du personnage
   * si la case est bien libre
   * - Pas d'obstacle
   * - Pas de personnage
   * @returns {String} cellule
   */
  trouverCaseUtilisable() {
    let cellule = this.trouverCaseVide();
    let dispo = true;
  
    if (!this.caseHauteLibre(cellule)) {
      dispo = false;
    }

    if (!this.caseDroiteLibre(cellule)) {
      dispo = false;
    }   

    if (!this.caseBasLibre(cellule)) {
      dispo = false;
    }

    if (!this.caseGaucheLibre(cellule)) {
      dispo = false;
    }   

    if(dispo === false) {
      return this.trouverCaseUtilisable();
    }    
    
    return cellule;
  }

  /**
   * Vérifie si la case haute est libre
   * @param {String} cellule 
   * @returns {Boolean} result
   */
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

  /**
   * Vérifie si la case droite est libre
   * @param {String} cellule 
   * @returns {Boolean} result
   */
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

  /**
   * Vérifie si la case basse est libre
   * @param {String} cellule 
   * @returns {Boolean} result
   */
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

  /**
   * Vérifie si la case gauche est libre
   * @param {String} cellule 
   * @returns {Boolean} result
   */
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

  /**
   * Gestion du déplacement haut
   * Récupère le nombre de mouvement
   * @param {Object} personnage 
   */
  deplacerHaut(personnage) {
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

  /**
   * Gestion du déplacement droit
   * Récupère le nombre de mouvement
   * @param {Object} personnage 
   */
  deplacerDroite(personnage) {
    let position = personnage.position;
    let celluleDroite = Plateau.majId(position, 1, 0);
    const nPosition = Plateau.conversionIdEnCoord(celluleDroite);

    if(nPosition.x < this.colonnes && this.estCeQueLaCaseEstLibre(celluleDroite)) {
      personnage.mouvement = personnage.deplacer(position, celluleDroite);
    }
  }

  /**
   * Gestion du déplacement bas
   * Récupère le nombre de mouvement
   * @param {Object} personnage 
   */
  deplacerBas(personnage) {
    let position = personnage.position;
    const celluleBasse = Plateau.majId(position, 0, 1);
    const nPosition = Plateau.conversionIdEnCoord(celluleBasse);

    if(nPosition.y >= this.rangees) {
      return false;
    }

    if(this.estCeQueLaCaseEstLibre(celluleBasse)) {
      personnage.mouvement = personnage.deplacer(position, celluleBasse);
    }
  }

  /**
   * Gestion du déplacement gauche
   * Récupère le nombre de mouvement
   * @param {Object} personnage 
   */
  deplacerGauche(personnage) {
    let position = personnage.position;
    const celluleGauche = Plateau.majId(position, -1, 0);
    const nPosition = Plateau.conversionIdEnCoord(celluleGauche);

    if(nPosition.x < 0) {
      return false;
    }

    if (nPosition.x >= 0 && this.estCeQueLaCaseEstLibre(celluleGauche)) {
      personnage.mouvement = personnage.deplacer(position, celluleGauche);
    }
  }

  /**
   * Verifie si la cellule n'est pas un obstacle
   * @param {Number} cellule 
   * @return {Boolean}
   */
  estCeQueLaCaseEstLibre(cellule) {
    let cell = String(cellule);

    if(this.casesObstacles.includes(cell)) {
      return false;
    }

    this.laCaseAUneArme(cell);

    return true;
  }

  /**
   * Vérifie si la case possède une arme
   * Si une arme est présente, le personnage dépose l'arme actuelle sur la cellule
   * et s'attribut la nouvelle 
   * @param {Number} cellule 
   * @returns {Boolean}
   */
  laCaseAUneArme(cellule) {
    let cell = String(cellule);
    let personnage;
    let idArme = document.getElementById(cell);

    if(this.casesArmes.includes(cell)) {
      let dataIdArme = idArme.getAttribute("data-idArme");
      alert("Prendre l'arme !");

      personnage = jeu.persoActif;
      personnage.deposer(idArme);
      personnage.prendre(dataIdArme);

      $("#mon-arme").html(personnage.arme.degats).attr("class", `cellule-${personnage.arme.type} img-thumbnail offset-3`);

      idArme.classList.remove(`cellule-${personnage.arme.type}`);
      idArme.classList.remove("cellule-arme");

      return true;
    }

    return false;
  }
}

export { Plateau };

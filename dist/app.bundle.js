/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/classes/Arme.js":
/*!****************************!*\
  !*** ./js/classes/Arme.js ***!
  \****************************/
/*! exports provided: Couteau, Hache, Epee, Glaive, BaguetteMagique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Couteau", function() { return Couteau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hache", function() { return Hache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Epee", function() { return Epee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Glaive", function() { return Glaive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaguetteMagique", function() { return BaguetteMagique; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Classes des armes :
 * 
 * Private @String : #type 
 * Private @Number : #degats             
 *              
 *              
 */
var Arme = /*#__PURE__*/function () {
  function Arme(type, degats) {
    _classCallCheck(this, Arme);

    this._type = type;
    this._degats = degats;
  }

  _createClass(Arme, [{
    key: "type",
    get: function get() {
      return this._type;
    },
    set: function set(type) {
      this._type = type;
    }
  }, {
    key: "degats",
    get: function get() {
      return this._degats;
    },
    set: function set(degats) {
      this._degats = degats;
    }
  }]);

  return Arme;
}();

var Hache = /*#__PURE__*/function (_Arme) {
  _inherits(Hache, _Arme);

  var _super = _createSuper(Hache);

  function Hache() {
    _classCallCheck(this, Hache);

    return _super.call(this, 'hache', 17);
  }

  return Hache;
}(Arme);

var Epee = /*#__PURE__*/function (_Arme2) {
  _inherits(Epee, _Arme2);

  var _super2 = _createSuper(Epee);

  function Epee() {
    _classCallCheck(this, Epee);

    return _super2.call(this, 'epee', 15);
  }

  return Epee;
}(Arme);

var Glaive = /*#__PURE__*/function (_Arme3) {
  _inherits(Glaive, _Arme3);

  var _super3 = _createSuper(Glaive);

  function Glaive() {
    _classCallCheck(this, Glaive);

    return _super3.call(this, 'glaive', 18);
  }

  return Glaive;
}(Arme);

var BaguetteMagique = /*#__PURE__*/function (_Arme4) {
  _inherits(BaguetteMagique, _Arme4);

  var _super4 = _createSuper(BaguetteMagique);

  function BaguetteMagique() {
    _classCallCheck(this, BaguetteMagique);

    return _super4.call(this, 'baguette-magique', 20);
  }

  return BaguetteMagique;
}(Arme);

var Couteau = /*#__PURE__*/function (_Arme5) {
  _inherits(Couteau, _Arme5);

  var _super5 = _createSuper(Couteau);

  function Couteau() {
    _classCallCheck(this, Couteau);

    return _super5.call(this, 'couteau', 10);
  }

  return Couteau;
}(Arme);



/***/ }),

/***/ "./js/classes/Jeu.js":
/*!***************************!*\
  !*** ./js/classes/Jeu.js ***!
  \***************************/
/*! exports provided: Jeu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jeu", function() { return Jeu; });
/* harmony import */ var _Plateau_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plateau.js */ "./js/classes/Plateau.js");
/* harmony import */ var _RoiJaeden_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoiJaeden.js */ "./js/classes/RoiJaeden.js");
/* harmony import */ var _RoiLich_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RoiLich.js */ "./js/classes/RoiLich.js");
/* harmony import */ var _Arme_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Arme.js */ "./js/classes/Arme.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Jeu = /*#__PURE__*/function () {
  function Jeu() {
    _classCallCheck(this, Jeu);

    this.jaeden = new _RoiJaeden_js__WEBPACK_IMPORTED_MODULE_1__["RoiJaeden"](this.pseudo);
    this.lich = new _RoiLich_js__WEBPACK_IMPORTED_MODULE_2__["RoiLich"](this.pseudo);
    this._armes = []; // Tableau contenant la liste des armes

    this.armes = new _Arme_js__WEBPACK_IMPORTED_MODULE_3__["Epee"]();
    this.armes = new _Arme_js__WEBPACK_IMPORTED_MODULE_3__["Hache"]();
    this.armes = new _Arme_js__WEBPACK_IMPORTED_MODULE_3__["Glaive"]();
    this.armes = new _Arme_js__WEBPACK_IMPORTED_MODULE_3__["BaguetteMagique"]();
    this._plateau = new _Plateau_js__WEBPACK_IMPORTED_MODULE_0__["Plateau"](12, 15); // Objet contenant le plateau instancié

    this.plateau.genererObstacle(1);
    this.plateau.placerArme(this.armes);
    this._joueurs = []; // Tableau contenant le pseudo des joueurs inscrits

    this._peutJouer = this.jaeden.classe; // Le nom du personnage qui peut jouer

    this._msgAlert = ''; // Messages d'actions
  }

  _createClass(Jeu, [{
    key: "ajouterJoueur",
    value: function ajouterJoueur(joueur) {
      this.joueurs = joueur; // On ajoute au tableau

      this.plateau.placerPersonnage(joueur); // On trouve un Id libre pour placer un personnage sur le plateau
      //document.getElementById(joueur.position).innerHTML  = joueur.pseudo; // On affiche le personnage

      console.log(this.armes);
    }
  }, {
    key: "afficherScore",
    value: function afficherScore() {
      var noms = this.inscrireJoueur();
      this.jaeden.score = {
        idJaeden: $('#jaeden').html(noms[0]),
        scoreJaeden: $('#score-jaeden').html(" : ".concat(this.jaeden.sante))
      };
      this.lich.score = {
        idLich: $('#lich').html(noms[1]),
        scoreLich: $('#score-lich').html(" : ".concat(this.lich.sante))
      };
    }
  }, {
    key: "afficherArme",
    value: function afficherArme() {
      var listArmes = [];
      var idArmes = $('#armes');
      var img;
      this.armes.forEach(function (arme) {
        img = "<p class=\"pl-4\">\n            <img src=\"images/".concat(arme.type, ".png\" alt=\"Image ").concat(arme.type, "\" class=\"img-thumbnail\" id=\"").concat(arme.type, "\">\n            <span class=\"degats\">").concat(arme.degats, "</span>\n            <br>\n            <span class=\"nom-arme\">").concat(arme.type, "</span>\n            </p>");
        listArmes.push(img);
        idArmes.html(listArmes.join(''));
      });
    }
  }, {
    key: "inscrireJoueur",
    value: function inscrireJoueur() {
      do {
        this.jaeden.pseudo = prompt('Veuillez saisir le prénom du premier joueur :');
      } while (this.jaeden.pseudo == '');

      if (this.jaeden.pseudo == null) {
        window.location.href = "index.html";
      }

      do {
        this.lich.pseudo = prompt('Veuillez saisir le prénom du deuxième joueur :');
      } while (this.lich.pseudo == '');

      if (this.lich.pseudo == null) {
        window.location.href = "index.html";
      }

      this.joueurs = this.jaeden.pseudo;
      this.joueurs = this.lich.pseudo;
      return this.joueurs;
    }
  }, {
    key: "verifMouvement",
    value: function verifMouvement(personnage1, personnage2) {
      if (personnage1.mouvement >= 100) {
        this.changerJoueur(personnage2.classe);
        alert("".concat(this.joueurs[0], " vous avez fini votre tour !"));
        alert("Vous pouvez jouer ".concat(this.joueurs[1]));
        $('.nom-personnage').html(personnage2.classe).attr('id', "".concat(personnage2.classe, "-h2"));
        $('#mon-arme').html(personnage2.arme.degats).attr('class', "".concat(personnage2.classe, " cellule-").concat(personnage2.arme.type, " img-thumbnail"));
        personnage1.mouvement = 0;
        personnage2.mouvement = 0;
        console.log("perso 1 : ".concat(personnage1.mouvement));
        console.log("perso 2 : ".concat(personnage2.mouvement));
      }
    }
  }, {
    key: "changerJoueur",
    value: function changerJoueur(classePersonnage) {
      this.peutJouer = classePersonnage;
    }
  }, {
    key: "joueurs",
    get: function get() {
      return this._joueurs;
    },
    set: function set(joueur) {
      this._joueurs.push(joueur);
    }
  }, {
    key: "plateau",
    get: function get() {
      return this._plateau;
    },
    set: function set(plateau) {
      this._plateau = plateau;
    }
  }, {
    key: "armes",
    get: function get() {
      return this._armes;
    },
    set: function set(armes) {
      this._armes.push(armes);
    }
  }, {
    key: "peutJouer",
    get: function get() {
      return this._peutJouer;
    },
    set: function set(peutJouer) {
      this._peutJouer = peutJouer;
    }
  }, {
    key: "msgAlert",
    get: function get() {
      return this._msgAlert;
    },
    set: function set(message) {
      this._msgAlert = message;
    }
  }]);

  return Jeu;
}();



/***/ }),

/***/ "./js/classes/Personnage.js":
/*!**********************************!*\
  !*** ./js/classes/Personnage.js ***!
  \**********************************/
/*! exports provided: Personnage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personnage", function() { return Personnage; });
/* harmony import */ var _Arme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Arme.js */ "./js/classes/Arme.js");
/* harmony import */ var _fonctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fonctions.js */ "./js/fonctions.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.js */ "./js/main.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Personnage = /*#__PURE__*/function () {
  function Personnage(pseudo, classe, position) {
    _classCallCheck(this, Personnage);

    this._pseudo = pseudo;
    this._classe = classe;
    this._sante = 100;
    this._position = position;
    this._mouvement = 0;
    this._arme = new _Arme_js__WEBPACK_IMPORTED_MODULE_0__["Couteau"]();
    this._score = {}; //Tableau json contenant le score des joueurs
  }
  /**
   * GETTERS ET SETTERS
   */


  _createClass(Personnage, [{
    key: "attaquer",
    value: function attaquer(personnage) {
      if (personnage === this) {
        Object(_fonctions_js__WEBPACK_IMPORTED_MODULE_1__["html"])("Vous êtes fous, vous êtes en train de vous taper !<br>");
      }

      if (!personnage.vie) {
        Object(_fonctions_js__WEBPACK_IMPORTED_MODULE_1__["html"])("Vous ne pouvez pas attaquer un mort !<br>");
        return;
      }

      Object(_fonctions_js__WEBPACK_IMPORTED_MODULE_1__["html"])("".concat(this.pseudo, " attaque ").concat(personnage.pseudo, " avec son ").concat(this.arme.type, " qui fait ").concat(this.arme.degats, " d\xE9g\xE2ts.<br> ").concat(personnage.pseudo, " vous perdez ").concat(this.arme.degats, " points de vie.<br>")); //personnage.informer();

      personnage.sante -= this.arme.degats;

      if (this.arme) {
        Object(_fonctions_js__WEBPACK_IMPORTED_MODULE_1__["html"])("".concat(this.pseudo, " attaque ").concat(personnage.pseudo, " avec son ").concat(this.arme.type, " qui fait ").concat(this.arme.degats, " d\xE9g\xE2ts.<br> ").concat(personnage.pseudo, " vous perdez ").concat(this.arme.degats, " points de vie.<br>"));
        personnage.informer();
      }

      if (!personnage.vie) {
        personnage.mourir();
        this.gagner();
        return;
      }
    }
  }, {
    key: "gagner",
    value: function gagner() {
      Object(_fonctions_js__WEBPACK_IMPORTED_MODULE_1__["html"])("".concat(this.pseudo, " Bravo, vous avez gagn\xE9 !<br>"));
    }
  }, {
    key: "informer",
    value: function informer() {
      Object(_fonctions_js__WEBPACK_IMPORTED_MODULE_1__["html"])("".concat(this.pseudo, " ").concat(this.classe, " a ").concat(this.sante, " points de vie.<br>"));
    }
  }, {
    key: "mourir",
    value: function mourir() {
      Object(_fonctions_js__WEBPACK_IMPORTED_MODULE_1__["html"])("".concat(this.pseudo, " Vous avez perdu, vous \xEAtes mort !<br>"));
    }
  }, {
    key: "deplacer",
    value: function deplacer(position, nPosition) {
      document.getElementById(position).classList.remove("cellule-".concat(this.classe), 'cellule-perso');
      document.getElementById(position).removeAttribute('data-perso');
      document.getElementById(nPosition).classList.add("cellule-".concat(this.classe), 'cellule-perso');
      document.getElementById(nPosition).setAttribute('data-perso', '' + this.classe);
      this.position = nPosition;
      this.mouvement++;
      return this.mouvement;
    }
  }, {
    key: "prendre",
    value: function prendre(idArme) {
      switch (idArme) {
        case '0':
          this.arme = _main_js__WEBPACK_IMPORTED_MODULE_2__["jeu"].armes[0];
          console.log("".concat(this.classe, " vous avez : ").concat(this.arme.type, " qui fait ").concat(this.arme.degats, " de d\xE9gats"));
          break;

        case '1':
          this.arme = _main_js__WEBPACK_IMPORTED_MODULE_2__["jeu"].armes[1];
          console.log("".concat(this.classe, " vous avez : ").concat(this.arme.type, " qui fait ").concat(this.arme.degats, " de d\xE9gats"));
          break;

        case '2':
          this.arme = _main_js__WEBPACK_IMPORTED_MODULE_2__["jeu"].armes[2];
          console.log("".concat(this.classe, " vous avez : ").concat(this.arme.type, " qui fait ").concat(this.arme.degats, " de d\xE9gats"));
          break;

        case '3':
          this.arme = _main_js__WEBPACK_IMPORTED_MODULE_2__["jeu"].armes[3];
          console.log("".concat(this.classe, " vous avez : ").concat(this.arme.type, " qui fait ").concat(this.arme.degats, " de d\xE9gats"));
          break;

        default:
          console.log("".concat(this.classe, " vous avez : ").concat(this.arme.type, " qui fait ").concat(this.arme.degats, " de d\xE9gats"));
          break;
      }
    }
  }, {
    key: "pseudo",
    get: function get() {
      return this._pseudo;
    },
    set: function set(pseudo) {
      this._pseudo = pseudo;
    }
  }, {
    key: "classe",
    get: function get() {
      return this._classe;
    },
    set: function set(classe) {
      this._classe = classe;
    }
  }, {
    key: "sante",
    get: function get() {
      return this._sante;
    },
    set: function set(sante) {
      this._sante = sante;
    }
  }, {
    key: "vie",
    get: function get() {
      return !(this._sante <= 0);
    }
  }, {
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(position) {
      this._position = position;
    }
  }, {
    key: "mouvement",
    get: function get() {
      return this._mouvement;
    },
    set: function set(nbMouvement) {
      this._mouvement = nbMouvement;
    }
  }, {
    key: "arme",
    get: function get() {
      return this._arme;
    },
    set: function set(arme) {
      this._arme = arme;
    }
  }, {
    key: "score",
    get: function get() {
      return this._score;
    },
    set: function set(score) {
      this._score = score;
    }
  }]);

  return Personnage;
}();



/***/ }),

/***/ "./js/classes/Plateau.js":
/*!*******************************!*\
  !*** ./js/classes/Plateau.js ***!
  \*******************************/
/*! exports provided: Plateau */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plateau", function() { return Plateau; });
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.js */ "./js/main.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Plateau = /*#__PURE__*/function () {
  function Plateau(colonnes, rangees) {
    _classCallCheck(this, Plateau);

    this._casesPleines = [];
    this._casesObstacles = [];
    this._casesArmes = [];
    this._colonnes = colonnes;
    this._rangees = rangees;
    this.creer();
  }

  _createClass(Plateau, [{
    key: "creer",
    value: function creer() {
      var plateauDeJeu = document.getElementById("plateau-de-jeu"); // Création de l'élément <table> et d'un élément <tbody>

      var tbl = document.createElement("table");
      var tblBody = document.createElement("tbody"); // Création de toutes les cellules du tableau

      for (var i = 0; i < this.rangees; i++) {
        // Création des lignes du tableau
        var lignes = document.createElement("tr");
        lignes.setAttribute("ligne", "" + i);
        lignes.classList.add("cellule-plateau");

        for (var j = 0; j < this.colonnes; j++) {
          // Création des éléments <td>
          var cellules = document.createElement("td");
          /* Création des id dynamiquements aux cellules en récupérant la concaténation de i + j et
           *  stock le resultat dans une propriété resultat
           */

          cellules.setAttribute("data-ligne", "" + i);
          cellules.setAttribute("data-colonne", "" + j);
          cellules.setAttribute("id", "" + j + "/" + i);
          cellules.classList.add("cellule-plateau");
          lignes.appendChild(cellules);
        } // Ajoute la ligne à la fin du tableau


        tblBody.appendChild(lignes);
      } // Mettre le <tbody> dans <table>


      tbl.appendChild(tblBody); // Ajouter <table> au niveau de l'id plateau-de-jeu

      plateauDeJeu.append(tbl); // Définitiion des attributs

      tbl.setAttribute("border", "2");
      tbl.setAttribute("width", "500");
      tbl.setAttribute("height", "500");
    }
  }, {
    key: "genererObstacle",
    value: function genererObstacle(nbObstacles) {
      for (var i = 0; i < nbObstacles; i++) {
        var obstacle = this.trouverCaseVide();
        this.casesPleines.push(obstacle);
        this.casesObstacles.push(obstacle);
        obstacle = document.getElementById(obstacle);
        obstacle.classList.add("cellule-obstacle");
      }
    }
  }, {
    key: "nombreAleatoire",
    value: function nombreAleatoire(max) {
      return Math.floor(Math.random() * max);
    }
  }, {
    key: "placerPersonnage",
    value: function placerPersonnage(personnage) {
      var id = this.trouverCaseUtilisable();
      this.casesPleines.push(id);
      console.log("cases persos : ".concat(this.casesPersos));
      var cellulePersonnage = document.getElementById(id);
      cellulePersonnage.classList.add("cellule-".concat(personnage.classe), "cellule-perso");
      cellulePersonnage.setAttribute("data-perso", "" + personnage.classe);
      personnage.position = cellulePersonnage.id;
    }
  }, {
    key: "placerArme",
    value: function placerArme(armes) {
      for (var i = 0; i < armes.length; i++) {
        var idArme = this.trouverCaseVide();
        this.casesPleines.push(idArme);
        this.casesArmes.push(idArme);
        var celluleArme = document.getElementById(idArme);
        celluleArme.classList.add("cellule-".concat(armes[i].type));
        celluleArme.classList.add("cellule-arme");
        celluleArme.setAttribute("data-idArme", "" + i);
      }

      return armes;
    }
  }, {
    key: "trouverCaseVide",
    value: function trouverCaseVide() {
      var x = this.nombreAleatoire(this.rangees);
      var y = this.nombreAleatoire(this.colonnes);
      var cellule = String(y) + "/" + String(x);

      if (this.casesPleines.includes(cellule)) {
        return this.trouverCaseVide();
      }

      return cellule;
    }
  }, {
    key: "trouverCaseUtilisable",
    value: function trouverCaseUtilisable() {
      var cellule = this.trouverCaseVide();

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
  }, {
    key: "caseHauteLibre",
    value: function caseHauteLibre(celluleId) {
      var result = true;
      var cellule = document.getElementById(celluleId);

      if (cellule.getAttribute("data-ligne") === "0") {
        result = false;
      }

      var dataLigne = cellule.getAttribute("data-ligne") - 1;
      var dataColonne = cellule.getAttribute("data-colonne");
      /*if(celluleHaute < 10) {
              celluleHaute = '0' + celluleHaute + '';
          }*/

      var celluleHaute = document.getElementById(dataColonne.toString() + "-" + dataLigne);
      console.log("l 181 cellule haute : " + celluleHaute);

      if (this.casesPleines.includes(celluleHaute)) {
        result = false;
      }

      return result;
    }
  }, {
    key: "caseBasLibre",
    value: function caseBasLibre(cellule) {
      var result = true; //let cellule = document.getElementById(celluleId);

      var celluleBas = Plateau.majId(cellule, 0, 1);
      var nPosition = Plateau.conversionIdEnCoord(celluleBas);
      /*if (cellule.getAttribute("data-colonne") > this.colonnes) {
        result = false;
      }
        let celluleBasse = cellule + 10;
        celluleBasse = celluleBasse.toString();*/

      if (nPosition.y > this.colonnes) {
        return false;
      }

      if (this.casesPleines.includes(celluleBasse)) {
        result = false;
      }

      return result;
    }
  }, {
    key: "caseGaucheLibre",
    value: function caseGaucheLibre(cellule) {
      var result = true; // let cellule = document.getElementById(celluleId);

      var celluleGauche = Plateau.majId(cellule, -1, 0);
      var nPosition = Plateau.conversionIdEnCoord(celluleGauche); // if (
      //   cellule.getAttribute("data-colonne") === "0" &&
      //   cellule.getAttribute("data-ligne") === "0"
      // ) {
      //   //Si je suis sur la première colonne
      //   result = false;
      // }
      // let celluleGauche = cellule.getAttribute("data-colonne") - 1;

      /*if(celluleGauche < 10) {
              celluleGauche = '0' + celluleGauche + '';
          }*/
      // celluleGauche = celluleGauche.toString();

      if (nPosition.x < 0) {
        return false;
      }

      if (this.casesPleines.includes(celluleGauche)) {
        result = false;
      }

      return result;
    }
  }, {
    key: "caseDroiteLibre",
    value: function caseDroiteLibre(cellule) {
      var result = true;
      var celluleDroite = Plateau.majId(cellule, 1, 0);
      var nPosition = Plateau.conversionIdEnCoord(celluleDroite); // if (cellule.getAttribute("data-colonne") === this.colonnes) {
      //   result = false;
      // }
      // let celluleDroite = cellule + 1;
      // if (celluleDroite < 10) {
      //   celluleDroite = "0" + celluleDroite + "";
      // }
      // celluleDroite = celluleDroite.toString();

      if (nPosition.x >= this.colonnes) {
        return false;
      }

      if (this.casesPleines.includes(celluleDroite)) {
        result = false;
      }

      return result;
    }
  }, {
    key: "deplacerDroite",
    value: function deplacerDroite(personnage) {
      //Le joueur à le droit de se déplacer de 3 cases max
      var position = personnage.position;
      var celluleDroite = Plateau.majId(position, 1, 0);
      var nPosition = Plateau.conversionIdEnCoord(celluleDroite);

      if (nPosition.x < this.colonnes && this.estCeQueLaCaseEstLibre(nPosition)) {
        personnage.mouvement = personnage.deplacer(position, nPosition);
      }
    }
  }, {
    key: "deplacerGauche",
    value: function deplacerGauche(personnage) {
      //Le joueur à le droit de se déplacer de 3 cases max
      var position = personnage.position;
      var cellule = document.getElementById(position);

      if (cellule.getAttribute("data-colonne") === "0" && cellule.getAttribute("data-ligne") === "0") {
        console.log("la colonne est egale à 0");
        return false;
      }

      var celluleGauche = Plateau.majId(position, -1, 0);
      var nPosition = Plateau.conversionIdEnCoord(celluleGauche);
      console.log("nouvelle position ".concat(nPosition));
      /*if(nPosition <= 9) {
              nPosition = '0' + nPosition;
          }*/

      if (nPosition.x >= 0 && this.estCeQueLaCaseEstLibre(nPosition)) {
        personnage.mouvement = personnage.deplacer(position, nPosition);
      }
    }
  }, {
    key: "deplacerHaut",
    value: function deplacerHaut(personnage) {
      //Le joueur à le droit de se déplacer de 3 cases max
      var position = personnage.position; //let cellule = document.getElementById(position);

      var celluleHaute = Plateau.majId(position, 0, -1);
      var nPosition = Plateau.conversionIdEnCoord(celluleHaute);

      if (cellule.getAttribute("data-ligne") === "0") {
        return false;
      }
      /*let new_case = document.getElementById(monPerso.position.ligne+'-'+monPerso.position.col)*/
      //let nPosition = parseInt(position) - 10;


      var dataColonne = cellule.getAttribute("data-colonne");
      var dataLigne = cellule.getAttribute("data-ligne") - 1;
      console.log("data colonne :" + dataColonne);
      console.log("data ligne :" + dataLigne);
      console.log("l 315 cellule haute : " + nPosition);
      /*if(nPosition <= 9) {
              nPosition = '0' + nPosition;
          }*/

      if (this.estCeQueLaCaseEstLibre(nPosition)) {
        personnage.mouvement = personnage.deplacer(position, nPosition);
      }
    }
  }, {
    key: "deplacerBas",
    value: function deplacerBas(personnage) {
      //Le joueur à le droit de se déplacer de 3 cases max
      var position = personnage.position; //let cellule = document.getElementById(position);

      if (cellule.getAttribute("data-ligne") > this.rangees) {
        return false;
      }

      var nPosition = Plateau.majId(position, 0, 1);

      if (this.estCeQueLaCaseEstLibre(nPosition)) {
        personnage.mouvement = personnage.deplacer(position, nPosition);
      }
    }
  }, {
    key: "estCeQueLaCaseEstLibre",
    value: function estCeQueLaCaseEstLibre(cellule) {
      var cell = String(cellule);
      var idPerso = document.getElementById(cellule);

      if (this.casesObstacles.includes(cell) || idPerso.classList.contains("cellule-perso")) {
        alert("La case n'est pas libre !");

        if (idPerso.classList.contains("cellule-perso")) {
          alert("Vous pouvez attaquer le personnage");
        }

        return false;
      }

      this.estCeQueLaCaseAUneArme(cell);
      return true;
    }
  }, {
    key: "estCeQueLaCaseAUneArme",
    value: function estCeQueLaCaseAUneArme(cellule) {
      var cell = String(cellule);
      var personnage;
      var idArme = document.getElementById(cell);

      if (this.casesArmes.includes(cell)) {
        var dataIdArme = idArme.getAttribute("data-idArme");
        alert("Prendre l'arme !");

        if (_main_js__WEBPACK_IMPORTED_MODULE_0__["jeu"].peutJouer === _main_js__WEBPACK_IMPORTED_MODULE_0__["jeu"].jaeden.classe) {
          personnage = _main_js__WEBPACK_IMPORTED_MODULE_0__["jeu"].jaeden;
        } else {
          personnage = _main_js__WEBPACK_IMPORTED_MODULE_0__["jeu"].lich;
        }

        personnage.prendre(dataIdArme);
        $("#mon-arme").html(personnage.arme.degats).attr("class", "cellule-".concat(personnage.arme.type, " img-thumbnail"));
        idArme.removeAttribute("data-idArme");
        idArme.classList.remove("cellule-".concat(personnage.arme.type));
        idArme.classList.remove("cellule-arme");
        this.casesArmes.splice(this.casesArmes.indexOf(cell), 1);
        return true;
      }

      return false;
    }
  }, {
    key: "casesPleines",

    /**
     * Getters
     */
    get: function get() {
      return this._casesPleines;
    },

    /**
     * Setters
     */
    set: function set(casesPleines) {
      this._casesPleines = casesPleines;
    }
  }, {
    key: "casesObstacles",
    get: function get() {
      return this._casesObstacles;
    },
    set: function set(caseObstacles) {
      this._casesObstacles = caseObstacles;
    }
  }, {
    key: "casesArmes",
    get: function get() {
      return this._casesArmes;
    },
    set: function set(caseArmes) {
      this._casesArmes = caseArmes;
    }
  }, {
    key: "colonnes",
    get: function get() {
      return this._colonnes;
    },
    set: function set(colonnes) {
      this._colonnes = colonnes;
    }
  }, {
    key: "rangees",
    get: function get() {
      return this._rangees;
    },
    set: function set(rangees) {
      this._rangees = rangees;
    }
  }], [{
    key: "conversionIdEnCoord",
    value: function conversionIdEnCoord(id) {
      var _id$split = id.split("/"),
          _id$split2 = _slicedToArray(_id$split, 2),
          x = _id$split2[0],
          y = _id$split2[1];

      return {
        x: Number(x),
        y: Number(y)
      };
    }
  }, {
    key: "majId",
    value: function majId(id, translationX, translationY) {
      var originePosition = Plateau.conversionIdEnCoord(id);
      var nPosition = {
        x: originePosition.x + translationX,
        y: originePosition.y + translationY
      };
      return "".concat(nPosition.x, "/").concat(nPosition.y);
    }
  }]);

  return Plateau;
}();



/***/ }),

/***/ "./js/classes/RoiJaeden.js":
/*!*********************************!*\
  !*** ./js/classes/RoiJaeden.js ***!
  \*********************************/
/*! exports provided: RoiJaeden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoiJaeden", function() { return RoiJaeden; });
/* harmony import */ var _Personnage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Personnage.js */ "./js/classes/Personnage.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var RoiJaeden = /*#__PURE__*/function (_Personnage) {
  _inherits(RoiJaeden, _Personnage);

  var _super = _createSuper(RoiJaeden);

  function RoiJaeden(pseudo) {
    _classCallCheck(this, RoiJaeden);

    return _super.call(this, pseudo, "roi-jaeden");
  }

  return RoiJaeden;
}(_Personnage_js__WEBPACK_IMPORTED_MODULE_0__["Personnage"]);



/***/ }),

/***/ "./js/classes/RoiLich.js":
/*!*******************************!*\
  !*** ./js/classes/RoiLich.js ***!
  \*******************************/
/*! exports provided: RoiLich */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoiLich", function() { return RoiLich; });
/* harmony import */ var _Personnage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Personnage.js */ "./js/classes/Personnage.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var RoiLich = /*#__PURE__*/function (_Personnage) {
  _inherits(RoiLich, _Personnage);

  var _super = _createSuper(RoiLich);

  function RoiLich(pseudo) {
    _classCallCheck(this, RoiLich);

    return _super.call(this, pseudo, "roi-lich");
  }

  return RoiLich;
}(_Personnage_js__WEBPACK_IMPORTED_MODULE_0__["Personnage"]);



/***/ }),

/***/ "./js/fonctions.js":
/*!*************************!*\
  !*** ./js/fonctions.js ***!
  \*************************/
/*! exports provided: html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
function html(message) {
  var div = document.querySelector('#texte');
  div.innerHTML += message;
}



/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! exports provided: jeu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jeu", function() { return jeu; });
/* harmony import */ var _classes_Jeu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Jeu.js */ "./js/classes/Jeu.js");

var jeu = new _classes_Jeu_js__WEBPACK_IMPORTED_MODULE_0__["Jeu"]();
jeu.afficherScore();
jeu.ajouterJoueur(jeu.jaeden);
jeu.ajouterJoueur(jeu.lich);
jeu.afficherArme();
$(document).ready(function () {
  alert("".concat(jeu.joueurs[0], " vous commencez la partie !"));
  $('.nom-personnage').html(jeu.jaeden.classe).attr('id', "".concat(jeu.jaeden.classe, "-h2"));
  $('#mon-arme').html(jeu.jaeden.arme.degats).attr('class', "".concat(jeu.jaeden.classe, " cellule-").concat(jeu.jaeden.arme.type, " img-thumbnail")); //Les boutons des mouvements

  $('#btn-droite').on('click', function (e) {
    if (jeu.peutJouer == jeu.jaeden.classe) {
      jeu.verifMouvement(jeu.jaeden, jeu.lich);
      jeu.plateau.deplacerDroite(jeu.jaeden);
    } else {
      console.log("Lich : peut joeur" + jeu.peutJouer);
      jeu.verifMouvement(jeu.lich, jeu.jaeden);
      jeu.plateau.deplacerDroite(jeu.lich);
    }
  });
  $('#btn-gauche').on('click', function (e) {
    if (jeu.peutJouer == jeu.jaeden.classe) {
      jeu.verifMouvement(jeu.jaeden, jeu.lich);
      jeu.plateau.deplacerGauche(jeu.jaeden);
    } else {
      console.log("Lich : peut joeur" + jeu.peutJouer);
      jeu.verifMouvement(jeu.lich, jeu.jaeden);
      jeu.plateau.deplacerGauche(jeu.lich);
    }
  });
  $('#btn-haut').on('click', function (e) {
    if (jeu.peutJouer == jeu.jaeden.classe) {
      jeu.verifMouvement(jeu.jaeden, jeu.lich);
      jeu.plateau.deplacerHaut(jeu.jaeden);
    } else {
      console.log("Lich : peut joeur" + jeu.peutJouer);
      jeu.verifMouvement(jeu.lich, jeu.jaeden);
      jeu.plateau.deplacerHaut(jeu.lich);
    }
  });
  $('#btn-bas').on('click', function (e) {
    if (jeu.peutJouer == jeu.jaeden.classe) {
      jeu.verifMouvement(jeu.jaeden, jeu.lich);
      jeu.plateau.deplacerBas(jeu.jaeden);
    } else {
      console.log("Lich : peut joeur" + jeu.peutJouer);
      jeu.verifMouvement(jeu.lich, jeu.jaeden);
      jeu.plateau.deplacerBas(jeu.lich);
    }
  }); // Bouton d'attaque

  $('#btn-attaquer').on('click', function () {}); // Bouton pour terminer le tour

  $('#btn-terminer').on('click', function (e) {
    if (jeu.peutJouer == jeu.jaeden.classe) {
      jeu.changerJoueur(jeu.lich.classe);
      jeu.lich.mouvement = 0;
      alert("".concat(jeu.joueurs[0], " vous passer votre tour !"));
      alert("Vous pouvez jouer ".concat(jeu.joueurs[1], ", votre adversaire \xE0 pass\xE9 son tour !"));
    } else {
      jeu.changerJoueur(jeu.jaeden.classe);
      jeu.jaeden.mouvement = 0;
      alert("".concat(jeu.joueurs[1], " vous passer votre tour !"));
      alert("Vous pouvez jouer ".concat(jeu.joueurs[0], ", votre adversaire \xE0 pass\xE9 son tour !"));
    }
  }); // Déplacement par les flêches du clavier

  $('html').keydown(function (e) {
    e.preventDefault();

    if (e.key == 'ArrowRight') {
      if (jeu.peutJouer == jeu.jaeden.classe) {
        console.log("Jeaden : peut jouer" + jeu.peutJouer);
        jeu.verifMouvement(jeu.jaeden, jeu.lich);
        jeu.plateau.deplacerDroite(jeu.jaeden);
      } else {
        console.log("Lich : peut joeur" + jeu.peutJouer);
        jeu.verifMouvement(jeu.lich, jeu.jaeden);
        jeu.plateau.deplacerDroite(jeu.lich);
      }
    }

    if (e.key == 'ArrowLeft') {
      if (jeu.peutJouer == jeu.jaeden.classe) {
        jeu.verifMouvement(jeu.jaeden, jeu.lich);
        jeu.plateau.deplacerGauche(jeu.jaeden);
      } else {
        jeu.verifMouvement(jeu.lich, jeu.jaeden);
        jeu.plateau.deplacerGauche(jeu.lich);
      }
    }

    if (e.key == 'ArrowUp') {
      if (jeu.peutJouer == jeu.jaeden.classe) {
        jeu.verifMouvement(jeu.jaeden, jeu.lich);
        jeu.plateau.deplacerHaut(jeu.jaeden);
      } else {
        jeu.verifMouvement(jeu.lich, jeu.jaeden);
        jeu.plateau.deplacerHaut(jeu.lich);
      }
    }

    if (e.key == 'ArrowDown') {
      if (jeu.peutJouer == jeu.jaeden.classe) {
        jeu.verifMouvement(jeu.jaeden, jeu.lich);
        jeu.plateau.deplacerBas(jeu.jaeden);
      } else {
        jeu.verifMouvement(jeu.lich, jeu.jaeden);
        jeu.plateau.deplacerBas(jeu.lich);
      }
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9Bcm1lLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvSmV1LmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvUGVyc29ubmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL1BsYXRlYXUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9Sb2lKYWVkZW4uanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9Sb2lMaWNoLmpzIiwid2VicGFjazovLy8uL2pzL2ZvbmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tYWluLmpzIl0sIm5hbWVzIjpbIkFybWUiLCJ0eXBlIiwiZGVnYXRzIiwiX3R5cGUiLCJfZGVnYXRzIiwiSGFjaGUiLCJFcGVlIiwiR2xhaXZlIiwiQmFndWV0dGVNYWdpcXVlIiwiQ291dGVhdSIsIkpldSIsImphZWRlbiIsIlJvaUphZWRlbiIsInBzZXVkbyIsImxpY2giLCJSb2lMaWNoIiwiX2FybWVzIiwiYXJtZXMiLCJfcGxhdGVhdSIsIlBsYXRlYXUiLCJwbGF0ZWF1IiwiZ2VuZXJlck9ic3RhY2xlIiwicGxhY2VyQXJtZSIsIl9qb3VldXJzIiwiX3BldXRKb3VlciIsImNsYXNzZSIsIl9tc2dBbGVydCIsImpvdWV1ciIsImpvdWV1cnMiLCJwbGFjZXJQZXJzb25uYWdlIiwiY29uc29sZSIsImxvZyIsIm5vbXMiLCJpbnNjcmlyZUpvdWV1ciIsInNjb3JlIiwiaWRKYWVkZW4iLCIkIiwiaHRtbCIsInNjb3JlSmFlZGVuIiwic2FudGUiLCJpZExpY2giLCJzY29yZUxpY2giLCJsaXN0QXJtZXMiLCJpZEFybWVzIiwiaW1nIiwiZm9yRWFjaCIsImFybWUiLCJwdXNoIiwiam9pbiIsInByb21wdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInBlcnNvbm5hZ2UxIiwicGVyc29ubmFnZTIiLCJtb3V2ZW1lbnQiLCJjaGFuZ2VySm91ZXVyIiwiYWxlcnQiLCJhdHRyIiwiY2xhc3NlUGVyc29ubmFnZSIsInBldXRKb3VlciIsIm1lc3NhZ2UiLCJQZXJzb25uYWdlIiwicG9zaXRpb24iLCJfcHNldWRvIiwiX2NsYXNzZSIsIl9zYW50ZSIsIl9wb3NpdGlvbiIsIl9tb3V2ZW1lbnQiLCJfYXJtZSIsIl9zY29yZSIsInBlcnNvbm5hZ2UiLCJ2aWUiLCJpbmZvcm1lciIsIm1vdXJpciIsImdhZ25lciIsIm5Qb3NpdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJpZEFybWUiLCJqZXUiLCJuYk1vdXZlbWVudCIsImNvbG9ubmVzIiwicmFuZ2VlcyIsIl9jYXNlc1BsZWluZXMiLCJfY2FzZXNPYnN0YWNsZXMiLCJfY2FzZXNBcm1lcyIsIl9jb2xvbm5lcyIsIl9yYW5nZWVzIiwiY3JlZXIiLCJwbGF0ZWF1RGVKZXUiLCJ0YmwiLCJjcmVhdGVFbGVtZW50IiwidGJsQm9keSIsImkiLCJsaWduZXMiLCJqIiwiY2VsbHVsZXMiLCJhcHBlbmRDaGlsZCIsImFwcGVuZCIsIm5iT2JzdGFjbGVzIiwib2JzdGFjbGUiLCJ0cm91dmVyQ2FzZVZpZGUiLCJjYXNlc1BsZWluZXMiLCJjYXNlc09ic3RhY2xlcyIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImlkIiwidHJvdXZlckNhc2VVdGlsaXNhYmxlIiwiY2FzZXNQZXJzb3MiLCJjZWxsdWxlUGVyc29ubmFnZSIsImxlbmd0aCIsImNhc2VzQXJtZXMiLCJjZWxsdWxlQXJtZSIsIngiLCJub21icmVBbGVhdG9pcmUiLCJ5IiwiY2VsbHVsZSIsIlN0cmluZyIsImluY2x1ZGVzIiwiY2FzZUdhdWNoZUxpYnJlIiwiY2FzZUhhdXRlTGlicmUiLCJjYXNlQmFzTGlicmUiLCJjYXNlRHJvaXRlTGlicmUiLCJjZWxsdWxlSWQiLCJyZXN1bHQiLCJnZXRBdHRyaWJ1dGUiLCJkYXRhTGlnbmUiLCJkYXRhQ29sb25uZSIsImNlbGx1bGVIYXV0ZSIsInRvU3RyaW5nIiwiY2VsbHVsZUJhcyIsIm1haklkIiwiY29udmVyc2lvbklkRW5Db29yZCIsImNlbGx1bGVCYXNzZSIsImNlbGx1bGVHYXVjaGUiLCJjZWxsdWxlRHJvaXRlIiwiZXN0Q2VRdWVMYUNhc2VFc3RMaWJyZSIsImRlcGxhY2VyIiwiY2VsbCIsImlkUGVyc28iLCJjb250YWlucyIsImVzdENlUXVlTGFDYXNlQVVuZUFybWUiLCJkYXRhSWRBcm1lIiwicHJlbmRyZSIsInNwbGljZSIsImluZGV4T2YiLCJjYXNlT2JzdGFjbGVzIiwiY2FzZUFybWVzIiwic3BsaXQiLCJOdW1iZXIiLCJ0cmFuc2xhdGlvblgiLCJ0cmFuc2xhdGlvblkiLCJvcmlnaW5lUG9zaXRpb24iLCJkaXYiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiYWZmaWNoZXJTY29yZSIsImFqb3V0ZXJKb3VldXIiLCJhZmZpY2hlckFybWUiLCJyZWFkeSIsIm9uIiwiZSIsInZlcmlmTW91dmVtZW50IiwiZGVwbGFjZXJEcm9pdGUiLCJkZXBsYWNlckdhdWNoZSIsImRlcGxhY2VySGF1dCIsImRlcGxhY2VyQmFzIiwia2V5ZG93biIsInByZXZlbnREZWZhdWx0Iiwia2V5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5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NEQsV0FBRyxDQUFDcUYsY0FBSixDQUFtQnJGLEdBQUcsQ0FBQzFFLE1BQXZCLEVBQStCMEUsR0FBRyxDQUFDdkUsSUFBbkM7QUFDQXVFLFdBQUcsQ0FBQ2pFLE9BQUosQ0FBWXlKLFlBQVosQ0FBeUJ4RixHQUFHLENBQUMxRSxNQUE3QjtBQUNILE9BSEQsTUFJSztBQUNEMEUsV0FBRyxDQUFDcUYsY0FBSixDQUFtQnJGLEdBQUcsQ0FBQ3ZFLElBQXZCLEVBQTZCdUUsR0FBRyxDQUFDMUUsTUFBakM7QUFDQTBFLFdBQUcsQ0FBQ2pFLE9BQUosQ0FBWXlKLFlBQVosQ0FBeUJ4RixHQUFHLENBQUN2RSxJQUE3QjtBQUNIO0FBQ0o7O0FBRUQsUUFBRzJKLENBQUMsQ0FBQ1EsR0FBRixJQUFTLFdBQVosRUFBeUI7QUFDckIsVUFBRzVGLEdBQUcsQ0FBQ3pCLFNBQUosSUFBaUJ5QixHQUFHLENBQUMxRSxNQUFKLENBQVdjLE1BQS9CLEVBQXVDO0FBQ25DNEQsV0FBRyxDQUFDcUYsY0FBSixDQUFtQnJGLEdBQUcsQ0FBQzFFLE1BQXZCLEVBQStCMEUsR0FBRyxDQUFDdkUsSUFBbkM7QUFDQXVFLFdBQUcsQ0FBQ2pFLE9BQUosQ0FBWTBKLFdBQVosQ0FBd0J6RixHQUFHLENBQUMxRSxNQUE1QjtBQUNILE9BSEQsTUFJSztBQUNEMEUsV0FBRyxDQUFDcUYsY0FBSixDQUFtQnJGLEdBQUcsQ0FBQ3ZFLElBQXZCLEVBQTZCdUUsR0FBRyxDQUFDMUUsTUFBakM7QUFDQTBFLFdBQUcsQ0FBQ2pFLE9BQUosQ0FBWTBKLFdBQVosQ0FBd0J6RixHQUFHLENBQUN2RSxJQUE1QjtBQUNIO0FBQ0o7QUFDSixHQWpERDtBQWtESCxDQWxJRCxFIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL21haW4uanNcIik7XG4iLCIvKipcclxuICogQ2xhc3NlcyBkZXMgYXJtZXMgOlxyXG4gKiBcclxuICogUHJpdmF0ZSBAU3RyaW5nIDogI3R5cGUgXHJcbiAqIFByaXZhdGUgQE51bWJlciA6ICNkZWdhdHMgICAgICAgICAgICAgXHJcbiAqICAgICAgICAgICAgICBcclxuICogICAgICAgICAgICAgIFxyXG4gKi9cclxuY2xhc3MgQXJtZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodHlwZSwgZGVnYXRzKSB7XHJcbiAgICAgICAgdGhpcy5fdHlwZSAgICA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5fZGVnYXRzICA9IGRlZ2F0cztcclxuICAgIH0gICAgXHJcblxyXG4gICAgZ2V0IHR5cGUoKSB7IHJldHVybiB0aGlzLl90eXBlOyB9XHJcblxyXG4gICAgZ2V0IGRlZ2F0cygpIHsgcmV0dXJuIHRoaXMuX2RlZ2F0czsgfVxyXG5cclxuICAgIHNldCB0eXBlKHR5cGUpIHsgdGhpcy5fdHlwZSA9IHR5cGU7IH1cclxuXHJcbiAgICBzZXQgZGVnYXRzKGRlZ2F0cykgeyB0aGlzLl9kZWdhdHMgPSBkZWdhdHM7IH1cclxufVxyXG5cclxuXHJcbmNsYXNzIEhhY2hlIGV4dGVuZHMgQXJtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignaGFjaGUnLCAxNyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuY2xhc3MgRXBlZSBleHRlbmRzIEFybWUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2VwZWUnLCAxNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBHbGFpdmUgZXh0ZW5kcyBBcm1lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdnbGFpdmUnLCAxOCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBCYWd1ZXR0ZU1hZ2lxdWUgZXh0ZW5kcyBBcm1lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdiYWd1ZXR0ZS1tYWdpcXVlJywgMjApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDb3V0ZWF1IGV4dGVuZHMgQXJtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignY291dGVhdScsIDEwKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQ291dGVhdSwgSGFjaGUsIEVwZWUsIEdsYWl2ZSwgQmFndWV0dGVNYWdpcXVlIH07IiwiaW1wb3J0IHsgUGxhdGVhdSB9IGZyb20gJy4vUGxhdGVhdS5qcyc7XHJcbmltcG9ydCB7IFJvaUphZWRlbiB9IGZyb20gJy4vUm9pSmFlZGVuLmpzJztcclxuaW1wb3J0IHsgUm9pTGljaCB9IGZyb20gJy4vUm9pTGljaC5qcyc7XHJcbmltcG9ydCB7IEhhY2hlLCBHbGFpdmUsIEJhZ3VldHRlTWFnaXF1ZSwgRXBlZSB9IGZyb20gJy4vQXJtZS5qcyc7XHJcblxyXG5cclxuY2xhc3MgSmV1IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmphZWRlbiAgICAgPSBuZXcgUm9pSmFlZGVuKHRoaXMucHNldWRvKTtcclxuICAgICAgICB0aGlzLmxpY2ggICAgICAgPSBuZXcgUm9pTGljaCh0aGlzLnBzZXVkbyk7XHJcbiAgICAgICAgdGhpcy5fYXJtZXMgICAgID0gW107IC8vIFRhYmxlYXUgY29udGVuYW50IGxhIGxpc3RlIGRlcyBhcm1lc1xyXG4gICAgICAgIHRoaXMuYXJtZXMgICAgICA9IG5ldyBFcGVlKCk7XHJcbiAgICAgICAgdGhpcy5hcm1lcyAgICAgID0gbmV3IEhhY2hlKCk7XHJcbiAgICAgICAgdGhpcy5hcm1lcyAgICAgID0gbmV3IEdsYWl2ZSgpO1xyXG4gICAgICAgIHRoaXMuYXJtZXMgICAgICA9IG5ldyBCYWd1ZXR0ZU1hZ2lxdWUoKTtcclxuICAgICAgICB0aGlzLl9wbGF0ZWF1ICAgPSBuZXcgUGxhdGVhdSgxMiwxNSk7IC8vIE9iamV0IGNvbnRlbmFudCBsZSBwbGF0ZWF1IGluc3RhbmNpw6lcclxuICAgICAgICB0aGlzLnBsYXRlYXUuZ2VuZXJlck9ic3RhY2xlKDEpO1xyXG4gICAgICAgIHRoaXMucGxhdGVhdS5wbGFjZXJBcm1lKHRoaXMuYXJtZXMpO1xyXG4gICAgICAgIHRoaXMuX2pvdWV1cnMgICA9IFtdOyAvLyBUYWJsZWF1IGNvbnRlbmFudCBsZSBwc2V1ZG8gZGVzIGpvdWV1cnMgaW5zY3JpdHNcclxuICAgICAgICB0aGlzLl9wZXV0Sm91ZXIgPSB0aGlzLmphZWRlbi5jbGFzc2U7IC8vIExlIG5vbSBkdSBwZXJzb25uYWdlIHF1aSBwZXV0IGpvdWVyXHJcbiAgICAgICAgdGhpcy5fbXNnQWxlcnQgID0gJyc7IC8vIE1lc3NhZ2VzIGQnYWN0aW9uc1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBqb3VldXJzKCkgeyByZXR1cm4gdGhpcy5fam91ZXVyczsgfVxyXG5cclxuICAgIGdldCBwbGF0ZWF1KCkgeyByZXR1cm4gdGhpcy5fcGxhdGVhdTsgfVxyXG5cclxuICAgIGdldCBhcm1lcygpIHsgcmV0dXJuIHRoaXMuX2FybWVzOyB9XHJcblxyXG4gICAgZ2V0IHBldXRKb3VlcigpIHsgcmV0dXJuIHRoaXMuX3BldXRKb3VlcjsgfVxyXG4gICAgXHJcbiAgICBnZXQgbXNnQWxlcnQoKSB7IHJldHVybiB0aGlzLl9tc2dBbGVydDsgfVxyXG5cclxuICAgIHNldCBqb3VldXJzKGpvdWV1cikgeyB0aGlzLl9qb3VldXJzLnB1c2goam91ZXVyKTsgfVxyXG5cclxuICAgIHNldCBwbGF0ZWF1KHBsYXRlYXUpIHsgdGhpcy5fcGxhdGVhdSA9IHBsYXRlYXU7IH1cclxuXHJcbiAgICBzZXQgYXJtZXMoYXJtZXMpIHsgdGhpcy5fYXJtZXMucHVzaChhcm1lcyk7IH1cclxuXHJcbiAgICBzZXQgcGV1dEpvdWVyKHBldXRKb3VlcikgeyB0aGlzLl9wZXV0Sm91ZXIgPSBwZXV0Sm91ZXI7IH1cclxuXHJcbiAgICBzZXQgbXNnQWxlcnQobWVzc2FnZSkgeyB0aGlzLl9tc2dBbGVydCA9IG1lc3NhZ2U7IH1cclxuXHJcblxyXG4gICAgYWpvdXRlckpvdWV1cihqb3VldXIpIHtcclxuICAgICAgICB0aGlzLmpvdWV1cnMgPSBqb3VldXI7IC8vIE9uIGFqb3V0ZSBhdSB0YWJsZWF1XHJcbiAgICAgICAgdGhpcy5wbGF0ZWF1LnBsYWNlclBlcnNvbm5hZ2Uoam91ZXVyKSAvLyBPbiB0cm91dmUgdW4gSWQgbGlicmUgcG91ciBwbGFjZXIgdW4gcGVyc29ubmFnZSBzdXIgbGUgcGxhdGVhdVxyXG4gICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoam91ZXVyLnBvc2l0aW9uKS5pbm5lckhUTUwgID0gam91ZXVyLnBzZXVkbzsgLy8gT24gYWZmaWNoZSBsZSBwZXJzb25uYWdlXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcm1lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWZmaWNoZXJTY29yZSgpIHtcclxuICAgICAgICBjb25zdCBub21zICA9IHRoaXMuaW5zY3JpcmVKb3VldXIoKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuamFlZGVuLnNjb3JlID0ge1xyXG4gICAgICAgICAgICBpZEphZWRlbjogJCgnI2phZWRlbicpLmh0bWwobm9tc1swXSksXHJcbiAgICAgICAgICAgIHNjb3JlSmFlZGVuOiAkKCcjc2NvcmUtamFlZGVuJykuaHRtbChgIDogJHt0aGlzLmphZWRlbi5zYW50ZX1gKSAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxpY2guc2NvcmUgPSB7XHJcbiAgICAgICAgICAgIGlkTGljaDogJCgnI2xpY2gnKS5odG1sKG5vbXNbMV0pLFxyXG4gICAgICAgICAgICBzY29yZUxpY2g6ICQoJyNzY29yZS1saWNoJykuaHRtbChgIDogJHt0aGlzLmxpY2guc2FudGV9YClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWZmaWNoZXJBcm1lKCkge1xyXG4gICAgICAgIGNvbnN0IGxpc3RBcm1lcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGlkQXJtZXMgICA9ICQoJyNhcm1lcycpO1xyXG4gICAgICAgIGxldCBpbWc7XHJcblxyXG4gICAgICAgIHRoaXMuYXJtZXMuZm9yRWFjaChhcm1lID0+IHtcclxuICAgICAgICAgICAgaW1nID0gYDxwIGNsYXNzPVwicGwtNFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy8ke2FybWUudHlwZX0ucG5nXCIgYWx0PVwiSW1hZ2UgJHthcm1lLnR5cGV9XCIgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgaWQ9XCIke2FybWUudHlwZX1cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZWdhdHNcIj4ke2FybWUuZGVnYXRzfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5vbS1hcm1lXCI+JHthcm1lLnR5cGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+YDtcclxuXHJcbiAgICAgICAgICAgIGxpc3RBcm1lcy5wdXNoKGltZyk7XHJcblxyXG4gICAgICAgICAgICBpZEFybWVzLmh0bWwobGlzdEFybWVzLmpvaW4oJycpKTsgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2NyaXJlSm91ZXVyKCkgeyAgICBcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHRoaXMuamFlZGVuLnBzZXVkbyA9IHByb21wdCgnVmV1aWxsZXogc2Fpc2lyIGxlIHByw6lub20gZHUgcHJlbWllciBqb3VldXIgOicpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUodGhpcy5qYWVkZW4ucHNldWRvID09ICcnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuamFlZGVuLnBzZXVkbyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJpbmRleC5odG1sXCI7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB0aGlzLmxpY2gucHNldWRvID0gcHJvbXB0KCdWZXVpbGxleiBzYWlzaXIgbGUgcHLDqW5vbSBkdSBkZXV4acOobWUgam91ZXVyIDonKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUodGhpcy5saWNoLnBzZXVkbyA9PSAnJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxpY2gucHNldWRvID09IG51bGwpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImluZGV4Lmh0bWxcIjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB0aGlzLmpvdWV1cnMgPSB0aGlzLmphZWRlbi5wc2V1ZG87XHJcbiAgICAgICAgdGhpcy5qb3VldXJzID0gdGhpcy5saWNoLnBzZXVkbztcclxuICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmpvdWV1cnM7XHJcbiAgICB9XHJcblxyXG4gICAgdmVyaWZNb3V2ZW1lbnQocGVyc29ubmFnZTEsIHBlcnNvbm5hZ2UyKSB7XHJcbiAgICAgICAgaWYgKHBlcnNvbm5hZ2UxLm1vdXZlbWVudCA+PSAxMDApIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VySm91ZXVyKHBlcnNvbm5hZ2UyLmNsYXNzZSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KGAke3RoaXMuam91ZXVyc1swXX0gdm91cyBhdmV6IGZpbmkgdm90cmUgdG91ciAhYCk7XHJcbiAgICAgICAgICAgIGFsZXJ0KGBWb3VzIHBvdXZleiBqb3VlciAke3RoaXMuam91ZXVyc1sxXX1gKTtcclxuICAgICAgICAgICAgJCgnLm5vbS1wZXJzb25uYWdlJykuaHRtbChwZXJzb25uYWdlMi5jbGFzc2UpLmF0dHIoJ2lkJywgYCR7cGVyc29ubmFnZTIuY2xhc3NlfS1oMmApO1xyXG4gICAgICAgICAgICAkKCcjbW9uLWFybWUnKS5odG1sKHBlcnNvbm5hZ2UyLmFybWUuZGVnYXRzKS5hdHRyKCdjbGFzcycsIGAke3BlcnNvbm5hZ2UyLmNsYXNzZX0gY2VsbHVsZS0ke3BlcnNvbm5hZ2UyLmFybWUudHlwZX0gaW1nLXRodW1ibmFpbGApO1xyXG4gICAgICAgICAgICBwZXJzb25uYWdlMS5tb3V2ZW1lbnQgPSAwO1xyXG4gICAgICAgICAgICBwZXJzb25uYWdlMi5tb3V2ZW1lbnQgPSAwO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcGVyc28gMSA6ICR7cGVyc29ubmFnZTEubW91dmVtZW50fWApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBwZXJzbyAyIDogJHtwZXJzb25uYWdlMi5tb3V2ZW1lbnR9YClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlckpvdWV1cihjbGFzc2VQZXJzb25uYWdlKSB7XHJcbiAgICAgICAgdGhpcy5wZXV0Sm91ZXIgPSBjbGFzc2VQZXJzb25uYWdlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBKZXUgfTsiLCJpbXBvcnQgeyBDb3V0ZWF1IH0gZnJvbSAnLi9Bcm1lLmpzJztcclxuaW1wb3J0IHsgaHRtbCB9IGZyb20gJy4uL2ZvbmN0aW9ucy5qcyc7XHJcbmltcG9ydCB7IGpldSB9IGZyb20gJy4uL21haW4uanMnO1xyXG5cclxuY2xhc3MgUGVyc29ubmFnZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHNldWRvLCBjbGFzc2UsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fcHNldWRvICAgICA9IHBzZXVkbztcclxuICAgICAgICB0aGlzLl9jbGFzc2UgICAgID0gY2xhc3NlO1xyXG4gICAgICAgIHRoaXMuX3NhbnRlICAgICAgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb24gICA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuX21vdXZlbWVudCAgPSAwO1xyXG4gICAgICAgIHRoaXMuX2FybWUgICAgICAgPSBuZXcgQ291dGVhdSgpO1xyXG4gICAgICAgIHRoaXMuX3Njb3JlICAgICAgPSB7fTsgLy9UYWJsZWF1IGpzb24gY29udGVuYW50IGxlIHNjb3JlIGRlcyBqb3VldXJzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHRVRURVJTIEVUIFNFVFRFUlNcclxuICAgICAqL1xyXG4gICAgZ2V0IHBzZXVkbygpIHsgcmV0dXJuIHRoaXMuX3BzZXVkbzsgfVxyXG5cclxuICAgIGdldCBjbGFzc2UoKSB7IHJldHVybiB0aGlzLl9jbGFzc2U7IH1cclxuXHJcbiAgICBnZXQgc2FudGUoKSB7IHJldHVybiB0aGlzLl9zYW50ZTsgfVxyXG5cclxuICAgIGdldCB2aWUoKSB7IHJldHVybiAhKHRoaXMuX3NhbnRlIDw9IDApOyB9IFxyXG5cclxuICAgIGdldCBwb3NpdGlvbigpIHsgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uOyB9XHJcblxyXG4gICAgZ2V0IG1vdXZlbWVudCgpIHsgcmV0dXJuIHRoaXMuX21vdXZlbWVudDsgfVxyXG5cclxuICAgIGdldCBhcm1lKCkgeyByZXR1cm4gdGhpcy5fYXJtZTsgfVxyXG5cclxuICAgIGdldCBzY29yZSgpIHsgcmV0dXJuIHRoaXMuX3Njb3JlOyB9XHJcbiAgICBcclxuICAgIHNldCBwc2V1ZG8ocHNldWRvKSB7IHRoaXMuX3BzZXVkbyA9IHBzZXVkbzsgfVxyXG5cclxuICAgIHNldCBjbGFzc2UoY2xhc3NlKSB7IHRoaXMuX2NsYXNzZSA9IGNsYXNzZTsgfVxyXG5cclxuICAgIHNldCBzYW50ZShzYW50ZSkgeyB0aGlzLl9zYW50ZSA9IHNhbnRlOyB9XHJcblxyXG4gICAgc2V0IHBvc2l0aW9uKHBvc2l0aW9uKSB7IHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247IH1cclxuXHJcbiAgICBzZXQgbW91dmVtZW50KG5iTW91dmVtZW50KSB7IHRoaXMuX21vdXZlbWVudCA9IG5iTW91dmVtZW50OyB9XHJcbiAgICBcclxuICAgIHNldCBhcm1lKGFybWUpIHsgdGhpcy5fYXJtZSA9IGFybWU7IH1cclxuXHJcbiAgICBzZXQgc2NvcmUoc2NvcmUpIHsgdGhpcy5fc2NvcmUgPSBzY29yZTsgfVxyXG5cclxuICAgIGF0dGFxdWVyKHBlcnNvbm5hZ2UpIHtcclxuICAgICAgICBpZihwZXJzb25uYWdlID09PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIGh0bWwoXCJWb3VzIMOqdGVzIGZvdXMsIHZvdXMgw6p0ZXMgZW4gdHJhaW4gZGUgdm91cyB0YXBlciAhPGJyPlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCFwZXJzb25uYWdlLnZpZSkge1xyXG4gICAgICAgICAgICBodG1sKFwiVm91cyBuZSBwb3V2ZXogcGFzIGF0dGFxdWVyIHVuIG1vcnQgITxicj5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGh0bWwoYCR7dGhpcy5wc2V1ZG99IGF0dGFxdWUgJHtwZXJzb25uYWdlLnBzZXVkb30gYXZlYyBzb24gJHt0aGlzLmFybWUudHlwZX0gcXVpIGZhaXQgJHt0aGlzLmFybWUuZGVnYXRzfSBkw6lnw6J0cy48YnI+ICR7cGVyc29ubmFnZS5wc2V1ZG99IHZvdXMgcGVyZGV6ICR7dGhpcy5hcm1lLmRlZ2F0c30gcG9pbnRzIGRlIHZpZS48YnI+YCk7XHJcbiAgICAgICAgLy9wZXJzb25uYWdlLmluZm9ybWVyKCk7XHJcblxyXG4gICAgICAgIHBlcnNvbm5hZ2Uuc2FudGUgLT0gdGhpcy5hcm1lLmRlZ2F0cztcclxuXHJcbiAgICAgICAgaWYodGhpcy5hcm1lKSB7XHJcbiAgICAgICAgICAgIGh0bWwoYCR7dGhpcy5wc2V1ZG99IGF0dGFxdWUgJHtwZXJzb25uYWdlLnBzZXVkb30gYXZlYyBzb24gJHt0aGlzLmFybWUudHlwZX0gcXVpIGZhaXQgJHt0aGlzLmFybWUuZGVnYXRzfSBkw6lnw6J0cy48YnI+ICR7cGVyc29ubmFnZS5wc2V1ZG99IHZvdXMgcGVyZGV6ICR7dGhpcy5hcm1lLmRlZ2F0c30gcG9pbnRzIGRlIHZpZS48YnI+YCk7XHJcbiAgICAgICAgICAgIHBlcnNvbm5hZ2UuaW5mb3JtZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCFwZXJzb25uYWdlLnZpZSkge1xyXG4gICAgICAgICAgICBwZXJzb25uYWdlLm1vdXJpcigpO1xyXG4gICAgICAgICAgICB0aGlzLmdhZ25lcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdhZ25lcigpIHtcclxuICAgICAgICBodG1sKGAke3RoaXMucHNldWRvfSBCcmF2bywgdm91cyBhdmV6IGdhZ27DqSAhPGJyPmApO1xyXG4gICAgfVxyXG5cclxuICAgIGluZm9ybWVyKCkge1xyXG4gICAgICAgIGh0bWwoYCR7dGhpcy5wc2V1ZG99ICR7dGhpcy5jbGFzc2V9IGEgJHt0aGlzLnNhbnRlfSBwb2ludHMgZGUgdmllLjxicj5gKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3VyaXIoKSB7XHJcbiAgICAgICAgaHRtbChgJHt0aGlzLnBzZXVkb30gVm91cyBhdmV6IHBlcmR1LCB2b3VzIMOqdGVzIG1vcnQgITxicj5gKTtcclxuICAgIH0gXHJcbiAgICBcclxuICAgIGRlcGxhY2VyKHBvc2l0aW9uLCBuUG9zaXRpb24pIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3NpdGlvbikuY2xhc3NMaXN0LnJlbW92ZShgY2VsbHVsZS0ke3RoaXMuY2xhc3NlfWAsICdjZWxsdWxlLXBlcnNvJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocG9zaXRpb24pLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wZXJzbycpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5Qb3NpdGlvbikuY2xhc3NMaXN0LmFkZChgY2VsbHVsZS0ke3RoaXMuY2xhc3NlfWAsICdjZWxsdWxlLXBlcnNvJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoblBvc2l0aW9uKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGVyc28nLCAnJyArIHRoaXMuY2xhc3NlKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gblBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMubW91dmVtZW50Kys7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW91dmVtZW50OyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJlbmRyZShpZEFybWUpIHsgICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAoaWRBcm1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJzAnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcm1lID0gamV1LmFybWVzWzBdO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jbGFzc2V9IHZvdXMgYXZleiA6ICR7dGhpcy5hcm1lLnR5cGV9IHF1aSBmYWl0ICR7dGhpcy5hcm1lLmRlZ2F0c30gZGUgZMOpZ2F0c2ApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFybWUgPSBqZXUuYXJtZXNbMV07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNsYXNzZX0gdm91cyBhdmV6IDogJHt0aGlzLmFybWUudHlwZX0gcXVpIGZhaXQgJHt0aGlzLmFybWUuZGVnYXRzfSBkZSBkw6lnYXRzYCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcyJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJtZSA9IGpldS5hcm1lc1syXTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY2xhc3NlfSB2b3VzIGF2ZXogOiAke3RoaXMuYXJtZS50eXBlfSBxdWkgZmFpdCAke3RoaXMuYXJtZS5kZWdhdHN9IGRlIGTDqWdhdHNgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzMnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcm1lID0gamV1LmFybWVzWzNdO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jbGFzc2V9IHZvdXMgYXZleiA6ICR7dGhpcy5hcm1lLnR5cGV9IHF1aSBmYWl0ICR7dGhpcy5hcm1lLmRlZ2F0c30gZGUgZMOpZ2F0c2ApO1xyXG4gICAgICAgICAgICBicmVhazsgICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jbGFzc2V9IHZvdXMgYXZleiA6ICR7dGhpcy5hcm1lLnR5cGV9IHF1aSBmYWl0ICR7dGhpcy5hcm1lLmRlZ2F0c30gZGUgZMOpZ2F0c2ApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBlcnNvbm5hZ2UgfTsiLCJpbXBvcnQgeyBqZXUgfSBmcm9tIFwiLi4vbWFpbi5qc1wiO1xyXG5cclxuY2xhc3MgUGxhdGVhdSB7XHJcbiAgY29uc3RydWN0b3IoY29sb25uZXMsIHJhbmdlZXMpIHtcclxuICAgIHRoaXMuX2Nhc2VzUGxlaW5lcyA9IFtdO1xyXG4gICAgdGhpcy5fY2FzZXNPYnN0YWNsZXMgPSBbXTtcclxuICAgIHRoaXMuX2Nhc2VzQXJtZXMgPSBbXTtcclxuICAgIHRoaXMuX2NvbG9ubmVzID0gY29sb25uZXM7XHJcbiAgICB0aGlzLl9yYW5nZWVzID0gcmFuZ2VlcztcclxuICAgIHRoaXMuY3JlZXIoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb252ZXJzaW9uSWRFbkNvb3JkKGlkKSB7XHJcbiAgICBjb25zdCBbeCwgeV0gPSBpZC5zcGxpdChcIi9cIik7XHJcbiAgICByZXR1cm4geyB4OiBOdW1iZXIoeCksIHk6IE51bWJlcih5KSB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG1haklkKGlkLCB0cmFuc2xhdGlvblgsIHRyYW5zbGF0aW9uWSkge1xyXG4gICAgY29uc3Qgb3JpZ2luZVBvc2l0aW9uID0gUGxhdGVhdS5jb252ZXJzaW9uSWRFbkNvb3JkKGlkKTtcclxuXHJcbiAgICBjb25zdCBuUG9zaXRpb24gPSB7XHJcbiAgICAgIHg6IG9yaWdpbmVQb3NpdGlvbi54ICsgdHJhbnNsYXRpb25YLFxyXG4gICAgICB5OiBvcmlnaW5lUG9zaXRpb24ueSArIHRyYW5zbGF0aW9uWSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGAke25Qb3NpdGlvbi54fS8ke25Qb3NpdGlvbi55fWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXR0ZXJzXHJcbiAgICovXHJcbiAgZ2V0IGNhc2VzUGxlaW5lcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9jYXNlc1BsZWluZXM7XHJcbiAgfVxyXG5cclxuICBnZXQgY2FzZXNPYnN0YWNsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2FzZXNPYnN0YWNsZXM7XHJcbiAgfVxyXG5cclxuICBnZXQgY2FzZXNBcm1lcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9jYXNlc0FybWVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9ubmVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbG9ubmVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJhbmdlZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmFuZ2VlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHRlcnNcclxuICAgKi9cclxuICBzZXQgY2FzZXNQbGVpbmVzKGNhc2VzUGxlaW5lcykge1xyXG4gICAgdGhpcy5fY2FzZXNQbGVpbmVzID0gY2FzZXNQbGVpbmVzO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNhc2VzT2JzdGFjbGVzKGNhc2VPYnN0YWNsZXMpIHtcclxuICAgIHRoaXMuX2Nhc2VzT2JzdGFjbGVzID0gY2FzZU9ic3RhY2xlcztcclxuICB9XHJcblxyXG4gIHNldCBjYXNlc0FybWVzKGNhc2VBcm1lcykge1xyXG4gICAgdGhpcy5fY2FzZXNBcm1lcyA9IGNhc2VBcm1lcztcclxuICB9XHJcblxyXG4gIHNldCBjb2xvbm5lcyhjb2xvbm5lcykge1xyXG4gICAgdGhpcy5fY29sb25uZXMgPSBjb2xvbm5lcztcclxuICB9XHJcblxyXG4gIHNldCByYW5nZWVzKHJhbmdlZXMpIHtcclxuICAgIHRoaXMuX3JhbmdlZXMgPSByYW5nZWVzO1xyXG4gIH1cclxuXHJcbiAgY3JlZXIoKSB7XHJcbiAgICBsZXQgcGxhdGVhdURlSmV1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF0ZWF1LWRlLWpldVwiKTtcclxuXHJcbiAgICAvLyBDcsOpYXRpb24gZGUgbCfDqWzDqW1lbnQgPHRhYmxlPiBldCBkJ3VuIMOpbMOpbWVudCA8dGJvZHk+XHJcbiAgICBsZXQgdGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgbGV0IHRibEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcblxyXG4gICAgLy8gQ3LDqWF0aW9uIGRlIHRvdXRlcyBsZXMgY2VsbHVsZXMgZHUgdGFibGVhdVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJhbmdlZXM7IGkrKykge1xyXG4gICAgICAvLyBDcsOpYXRpb24gZGVzIGxpZ25lcyBkdSB0YWJsZWF1XHJcbiAgICAgIGxldCBsaWduZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgIGxpZ25lcy5zZXRBdHRyaWJ1dGUoXCJsaWduZVwiLCBcIlwiICsgaSk7XHJcbiAgICAgIGxpZ25lcy5jbGFzc0xpc3QuYWRkKFwiY2VsbHVsZS1wbGF0ZWF1XCIpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbG9ubmVzOyBqKyspIHtcclxuICAgICAgICAvLyBDcsOpYXRpb24gZGVzIMOpbMOpbWVudHMgPHRkPlxyXG4gICAgICAgIGxldCBjZWxsdWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHJcbiAgICAgICAgLyogQ3LDqWF0aW9uIGRlcyBpZCBkeW5hbWlxdWVtZW50cyBhdXggY2VsbHVsZXMgZW4gcsOpY3Vww6lyYW50IGxhIGNvbmNhdMOpbmF0aW9uIGRlIGkgKyBqIGV0XHJcbiAgICAgICAgICogIHN0b2NrIGxlIHJlc3VsdGF0IGRhbnMgdW5lIHByb3ByacOpdMOpIHJlc3VsdGF0XHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIGNlbGx1bGVzLnNldEF0dHJpYnV0ZShcImRhdGEtbGlnbmVcIiwgXCJcIiArIGkpO1xyXG4gICAgICAgIGNlbGx1bGVzLnNldEF0dHJpYnV0ZShcImRhdGEtY29sb25uZVwiLCBcIlwiICsgaik7XHJcbiAgICAgICAgY2VsbHVsZXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJcIiArIGogKyBcIi9cIiArIGkpO1xyXG4gICAgICAgIGNlbGx1bGVzLmNsYXNzTGlzdC5hZGQoXCJjZWxsdWxlLXBsYXRlYXVcIik7XHJcbiAgICAgICAgbGlnbmVzLmFwcGVuZENoaWxkKGNlbGx1bGVzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQWpvdXRlIGxhIGxpZ25lIMOgIGxhIGZpbiBkdSB0YWJsZWF1XHJcbiAgICAgIHRibEJvZHkuYXBwZW5kQ2hpbGQobGlnbmVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXR0cmUgbGUgPHRib2R5PiBkYW5zIDx0YWJsZT5cclxuICAgIHRibC5hcHBlbmRDaGlsZCh0YmxCb2R5KTtcclxuICAgIC8vIEFqb3V0ZXIgPHRhYmxlPiBhdSBuaXZlYXUgZGUgbCdpZCBwbGF0ZWF1LWRlLWpldVxyXG4gICAgcGxhdGVhdURlSmV1LmFwcGVuZCh0YmwpO1xyXG4gICAgLy8gRMOpZmluaXRpaW9uIGRlcyBhdHRyaWJ1dHNcclxuICAgIHRibC5zZXRBdHRyaWJ1dGUoXCJib3JkZXJcIiwgXCIyXCIpO1xyXG4gICAgdGJsLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiNTAwXCIpO1xyXG4gICAgdGJsLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjUwMFwiKTtcclxuICB9XHJcblxyXG4gIGdlbmVyZXJPYnN0YWNsZShuYk9ic3RhY2xlcykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYk9ic3RhY2xlczsgaSsrKSB7XHJcbiAgICAgIGxldCBvYnN0YWNsZSA9IHRoaXMudHJvdXZlckNhc2VWaWRlKCk7XHJcblxyXG4gICAgICB0aGlzLmNhc2VzUGxlaW5lcy5wdXNoKG9ic3RhY2xlKTtcclxuICAgICAgdGhpcy5jYXNlc09ic3RhY2xlcy5wdXNoKG9ic3RhY2xlKTtcclxuXHJcbiAgICAgIG9ic3RhY2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JzdGFjbGUpO1xyXG4gICAgICBvYnN0YWNsZS5jbGFzc0xpc3QuYWRkKFwiY2VsbHVsZS1vYnN0YWNsZVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5vbWJyZUFsZWF0b2lyZShtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xyXG4gIH1cclxuXHJcbiAgcGxhY2VyUGVyc29ubmFnZShwZXJzb25uYWdlKSB7XHJcbiAgICBsZXQgaWQgPSB0aGlzLnRyb3V2ZXJDYXNlVXRpbGlzYWJsZSgpO1xyXG4gICAgdGhpcy5jYXNlc1BsZWluZXMucHVzaChpZCk7XHJcbiAgICBjb25zb2xlLmxvZyhgY2FzZXMgcGVyc29zIDogJHt0aGlzLmNhc2VzUGVyc29zfWApO1xyXG4gICAgbGV0IGNlbGx1bGVQZXJzb25uYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgY2VsbHVsZVBlcnNvbm5hZ2UuY2xhc3NMaXN0LmFkZChgY2VsbHVsZS0ke3BlcnNvbm5hZ2UuY2xhc3NlfWAsIFwiY2VsbHVsZS1wZXJzb1wiKTtcclxuICAgIGNlbGx1bGVQZXJzb25uYWdlLnNldEF0dHJpYnV0ZShcImRhdGEtcGVyc29cIiwgXCJcIiArIHBlcnNvbm5hZ2UuY2xhc3NlKTtcclxuICAgIHBlcnNvbm5hZ2UucG9zaXRpb24gPSBjZWxsdWxlUGVyc29ubmFnZS5pZDtcclxuICB9XHJcblxyXG4gIHBsYWNlckFybWUoYXJtZXMpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGlkQXJtZSA9IHRoaXMudHJvdXZlckNhc2VWaWRlKCk7XHJcblxyXG4gICAgICB0aGlzLmNhc2VzUGxlaW5lcy5wdXNoKGlkQXJtZSk7XHJcbiAgICAgIHRoaXMuY2FzZXNBcm1lcy5wdXNoKGlkQXJtZSk7XHJcblxyXG4gICAgICBsZXQgY2VsbHVsZUFybWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZEFybWUpO1xyXG4gICAgICBjZWxsdWxlQXJtZS5jbGFzc0xpc3QuYWRkKGBjZWxsdWxlLSR7YXJtZXNbaV0udHlwZX1gKTtcclxuICAgICAgY2VsbHVsZUFybWUuY2xhc3NMaXN0LmFkZChcImNlbGx1bGUtYXJtZVwiKTtcclxuICAgICAgY2VsbHVsZUFybWUuc2V0QXR0cmlidXRlKFwiZGF0YS1pZEFybWVcIiwgXCJcIiArIGkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcm1lcztcclxuICB9XHJcblxyXG4gIHRyb3V2ZXJDYXNlVmlkZSgpIHtcclxuICAgIGxldCB4ID0gdGhpcy5ub21icmVBbGVhdG9pcmUodGhpcy5yYW5nZWVzKTtcclxuICAgIGxldCB5ID0gdGhpcy5ub21icmVBbGVhdG9pcmUodGhpcy5jb2xvbm5lcyk7XHJcbiAgICBjb25zdCBjZWxsdWxlID0gU3RyaW5nKHkpICsgXCIvXCIgKyBTdHJpbmcoeCk7XHJcblxyXG4gICAgaWYgKHRoaXMuY2FzZXNQbGVpbmVzLmluY2x1ZGVzKGNlbGx1bGUpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRyb3V2ZXJDYXNlVmlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjZWxsdWxlO1xyXG4gIH1cclxuXHJcbiAgdHJvdXZlckNhc2VVdGlsaXNhYmxlKCkge1xyXG4gICAgbGV0IGNlbGx1bGUgPSB0aGlzLnRyb3V2ZXJDYXNlVmlkZSgpO1xyXG5cclxuICAgIGlmICh0aGlzLmNhc2VHYXVjaGVMaWJyZShjZWxsdWxlKSkge1xyXG4gICAgICByZXR1cm4gY2VsbHVsZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jYXNlSGF1dGVMaWJyZShjZWxsdWxlKSkge1xyXG4gICAgICByZXR1cm4gY2VsbHVsZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jYXNlQmFzTGlicmUoY2VsbHVsZSkpIHtcclxuICAgICAgcmV0dXJuIGNlbGx1bGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2FzZURyb2l0ZUxpYnJlKGNlbGx1bGUpKSB7XHJcbiAgICAgIHJldHVybiBjZWxsdWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnRyb3V2ZXJDYXNlVXRpbGlzYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgY2FzZUhhdXRlTGlicmUoY2VsbHVsZUlkKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIGxldCBjZWxsdWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbHVsZUlkKTtcclxuXHJcbiAgICBpZiAoY2VsbHVsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxpZ25lXCIpID09PSBcIjBcIikge1xyXG4gICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGF0YUxpZ25lID0gY2VsbHVsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxpZ25lXCIpIC0gMTtcclxuICAgIGxldCBkYXRhQ29sb25uZSA9IGNlbGx1bGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xvbm5lXCIpO1xyXG5cclxuICAgIC8qaWYoY2VsbHVsZUhhdXRlIDwgMTApIHtcclxuICAgICAgICAgICAgY2VsbHVsZUhhdXRlID0gJzAnICsgY2VsbHVsZUhhdXRlICsgJyc7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgbGV0IGNlbGx1bGVIYXV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGFDb2xvbm5lLnRvU3RyaW5nKCkgKyBcIi1cIiArIGRhdGFMaWduZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJsIDE4MSBjZWxsdWxlIGhhdXRlIDogXCIgKyBjZWxsdWxlSGF1dGUpO1xyXG5cclxuICAgIGlmICh0aGlzLmNhc2VzUGxlaW5lcy5pbmNsdWRlcyhjZWxsdWxlSGF1dGUpKSB7XHJcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBjYXNlQmFzTGlicmUoY2VsbHVsZSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcbiAgICAvL2xldCBjZWxsdWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbHVsZUlkKTtcclxuICAgIGNvbnN0IGNlbGx1bGVCYXMgPSBQbGF0ZWF1Lm1haklkKGNlbGx1bGUsIDAsIDEpO1xyXG4gICAgY29uc3QgblBvc2l0aW9uID0gUGxhdGVhdS5jb252ZXJzaW9uSWRFbkNvb3JkKGNlbGx1bGVCYXMpO1xyXG5cclxuICAgIC8qaWYgKGNlbGx1bGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xvbm5lXCIpID4gdGhpcy5jb2xvbm5lcykge1xyXG4gICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2VsbHVsZUJhc3NlID0gY2VsbHVsZSArIDEwO1xyXG5cclxuICAgIGNlbGx1bGVCYXNzZSA9IGNlbGx1bGVCYXNzZS50b1N0cmluZygpOyovXHJcblxyXG4gICAgaWYgKG5Qb3NpdGlvbi55ID4gdGhpcy5jb2xvbm5lcykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2FzZXNQbGVpbmVzLmluY2x1ZGVzKGNlbGx1bGVCYXNzZSkpIHtcclxuICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGNhc2VHYXVjaGVMaWJyZShjZWxsdWxlKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIC8vIGxldCBjZWxsdWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbHVsZUlkKTtcclxuICAgIGNvbnN0IGNlbGx1bGVHYXVjaGUgPSBQbGF0ZWF1Lm1haklkKGNlbGx1bGUsIC0xLCAwKTtcclxuICAgIGNvbnN0IG5Qb3NpdGlvbiA9IFBsYXRlYXUuY29udmVyc2lvbklkRW5Db29yZChjZWxsdWxlR2F1Y2hlKTtcclxuXHJcbiAgICAvLyBpZiAoXHJcbiAgICAvLyAgIGNlbGx1bGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xvbm5lXCIpID09PSBcIjBcIiAmJlxyXG4gICAgLy8gICBjZWxsdWxlLmdldEF0dHJpYnV0ZShcImRhdGEtbGlnbmVcIikgPT09IFwiMFwiXHJcbiAgICAvLyApIHtcclxuICAgIC8vICAgLy9TaSBqZSBzdWlzIHN1ciBsYSBwcmVtacOocmUgY29sb25uZVxyXG4gICAgLy8gICByZXN1bHQgPSBmYWxzZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBsZXQgY2VsbHVsZUdhdWNoZSA9IGNlbGx1bGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xvbm5lXCIpIC0gMTtcclxuXHJcbiAgICAvKmlmKGNlbGx1bGVHYXVjaGUgPCAxMCkge1xyXG4gICAgICAgICAgICBjZWxsdWxlR2F1Y2hlID0gJzAnICsgY2VsbHVsZUdhdWNoZSArICcnO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgIC8vIGNlbGx1bGVHYXVjaGUgPSBjZWxsdWxlR2F1Y2hlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgaWYgKG5Qb3NpdGlvbi54IDwgMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2FzZXNQbGVpbmVzLmluY2x1ZGVzKGNlbGx1bGVHYXVjaGUpKSB7XHJcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBjYXNlRHJvaXRlTGlicmUoY2VsbHVsZSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgY2VsbHVsZURyb2l0ZSA9IFBsYXRlYXUubWFqSWQoY2VsbHVsZSwgMSwgMCk7XHJcbiAgICBjb25zdCBuUG9zaXRpb24gPSBQbGF0ZWF1LmNvbnZlcnNpb25JZEVuQ29vcmQoY2VsbHVsZURyb2l0ZSk7XHJcblxyXG4gICAgLy8gaWYgKGNlbGx1bGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xvbm5lXCIpID09PSB0aGlzLmNvbG9ubmVzKSB7XHJcbiAgICAvLyAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGxldCBjZWxsdWxlRHJvaXRlID0gY2VsbHVsZSArIDE7XHJcblxyXG4gICAgLy8gaWYgKGNlbGx1bGVEcm9pdGUgPCAxMCkge1xyXG4gICAgLy8gICBjZWxsdWxlRHJvaXRlID0gXCIwXCIgKyBjZWxsdWxlRHJvaXRlICsgXCJcIjtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBjZWxsdWxlRHJvaXRlID0gY2VsbHVsZURyb2l0ZS50b1N0cmluZygpO1xyXG5cclxuICAgIGlmIChuUG9zaXRpb24ueCA+PSB0aGlzLmNvbG9ubmVzKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNhc2VzUGxlaW5lcy5pbmNsdWRlcyhjZWxsdWxlRHJvaXRlKSkge1xyXG4gICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgZGVwbGFjZXJEcm9pdGUocGVyc29ubmFnZSkge1xyXG4gICAgLy9MZSBqb3VldXIgw6AgbGUgZHJvaXQgZGUgc2UgZMOpcGxhY2VyIGRlIDMgY2FzZXMgbWF4XHJcbiAgICBsZXQgcG9zaXRpb24gPSBwZXJzb25uYWdlLnBvc2l0aW9uO1xyXG4gICAgbGV0IGNlbGx1bGVEcm9pdGUgPSBQbGF0ZWF1Lm1haklkKHBvc2l0aW9uLCAxLCAwKTtcclxuICAgIGNvbnN0IG5Qb3NpdGlvbiA9IFBsYXRlYXUuY29udmVyc2lvbklkRW5Db29yZChjZWxsdWxlRHJvaXRlKTtcclxuICAgIFxyXG4gICAgaWYgKG5Qb3NpdGlvbi54IDwgdGhpcy5jb2xvbm5lcyAmJiB0aGlzLmVzdENlUXVlTGFDYXNlRXN0TGlicmUoblBvc2l0aW9uKSkge1xyXG4gICAgICBwZXJzb25uYWdlLm1vdXZlbWVudCA9IHBlcnNvbm5hZ2UuZGVwbGFjZXIocG9zaXRpb24sIG5Qb3NpdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZXBsYWNlckdhdWNoZShwZXJzb25uYWdlKSB7XHJcbiAgICAvL0xlIGpvdWV1ciDDoCBsZSBkcm9pdCBkZSBzZSBkw6lwbGFjZXIgZGUgMyBjYXNlcyBtYXhcclxuICAgIGxldCBwb3NpdGlvbiA9IHBlcnNvbm5hZ2UucG9zaXRpb247XHJcbiAgICBsZXQgY2VsbHVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBvc2l0aW9uKTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIGNlbGx1bGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xvbm5lXCIpID09PSBcIjBcIiAmJlxyXG4gICAgICBjZWxsdWxlLmdldEF0dHJpYnV0ZShcImRhdGEtbGlnbmVcIikgPT09IFwiMFwiXHJcbiAgICApIHtcclxuICAgICAgY29uc29sZS5sb2coXCJsYSBjb2xvbm5lIGVzdCBlZ2FsZSDDoCAwXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2VsbHVsZUdhdWNoZSA9IFBsYXRlYXUubWFqSWQocG9zaXRpb24sIC0xLCAwKTtcclxuICAgIGNvbnN0IG5Qb3NpdGlvbiA9IFBsYXRlYXUuY29udmVyc2lvbklkRW5Db29yZChjZWxsdWxlR2F1Y2hlKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgbm91dmVsbGUgcG9zaXRpb24gJHtuUG9zaXRpb259YCk7XHJcblxyXG4gICAgLyppZihuUG9zaXRpb24gPD0gOSkge1xyXG4gICAgICAgICAgICBuUG9zaXRpb24gPSAnMCcgKyBuUG9zaXRpb247XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgaWYgKG5Qb3NpdGlvbi54ID49IDAgJiYgdGhpcy5lc3RDZVF1ZUxhQ2FzZUVzdExpYnJlKG5Qb3NpdGlvbikpIHtcclxuICAgICAgcGVyc29ubmFnZS5tb3V2ZW1lbnQgPSBwZXJzb25uYWdlLmRlcGxhY2VyKHBvc2l0aW9uLCBuUG9zaXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVwbGFjZXJIYXV0KHBlcnNvbm5hZ2UpIHtcclxuICAgIC8vTGUgam91ZXVyIMOgIGxlIGRyb2l0IGRlIHNlIGTDqXBsYWNlciBkZSAzIGNhc2VzIG1heFxyXG4gICAgbGV0IHBvc2l0aW9uID0gcGVyc29ubmFnZS5wb3NpdGlvbjtcclxuICAgIC8vbGV0IGNlbGx1bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3NpdGlvbik7XHJcbiAgICBjb25zdCBjZWxsdWxlSGF1dGUgPSBQbGF0ZWF1Lm1haklkKHBvc2l0aW9uLCAwLCAtMSk7XHJcbiAgICBjb25zdCBuUG9zaXRpb24gPSBQbGF0ZWF1LmNvbnZlcnNpb25JZEVuQ29vcmQoY2VsbHVsZUhhdXRlKTtcclxuXHJcbiAgICBpZiAoY2VsbHVsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxpZ25lXCIpID09PSBcIjBcIikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLypsZXQgbmV3X2Nhc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb25QZXJzby5wb3NpdGlvbi5saWduZSsnLScrbW9uUGVyc28ucG9zaXRpb24uY29sKSovXHJcblxyXG4gICAgLy9sZXQgblBvc2l0aW9uID0gcGFyc2VJbnQocG9zaXRpb24pIC0gMTA7XHJcblxyXG4gICAgbGV0IGRhdGFDb2xvbm5lID0gY2VsbHVsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbG9ubmVcIik7XHJcbiAgICBsZXQgZGF0YUxpZ25lID0gY2VsbHVsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxpZ25lXCIpIC0gMTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgY29sb25uZSA6XCIgKyBkYXRhQ29sb25uZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgbGlnbmUgOlwiICsgZGF0YUxpZ25lKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImwgMzE1IGNlbGx1bGUgaGF1dGUgOiBcIiArIG5Qb3NpdGlvbik7XHJcblxyXG4gICAgLyppZihuUG9zaXRpb24gPD0gOSkge1xyXG4gICAgICAgICAgICBuUG9zaXRpb24gPSAnMCcgKyBuUG9zaXRpb247XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgaWYgKHRoaXMuZXN0Q2VRdWVMYUNhc2VFc3RMaWJyZShuUG9zaXRpb24pKSB7XHJcbiAgICAgIHBlcnNvbm5hZ2UubW91dmVtZW50ID0gcGVyc29ubmFnZS5kZXBsYWNlcihwb3NpdGlvbiwgblBvc2l0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlcGxhY2VyQmFzKHBlcnNvbm5hZ2UpIHtcclxuICAgIC8vTGUgam91ZXVyIMOgIGxlIGRyb2l0IGRlIHNlIGTDqXBsYWNlciBkZSAzIGNhc2VzIG1heFxyXG4gICAgbGV0IHBvc2l0aW9uID0gcGVyc29ubmFnZS5wb3NpdGlvbjtcclxuICAgIC8vbGV0IGNlbGx1bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3NpdGlvbik7XHJcblxyXG4gICAgaWYgKGNlbGx1bGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1saWduZVwiKSA+IHRoaXMucmFuZ2Vlcykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5Qb3NpdGlvbiA9IFBsYXRlYXUubWFqSWQocG9zaXRpb24sIDAsIDEpO1xyXG5cclxuICAgIGlmICh0aGlzLmVzdENlUXVlTGFDYXNlRXN0TGlicmUoblBvc2l0aW9uKSkge1xyXG4gICAgICBwZXJzb25uYWdlLm1vdXZlbWVudCA9IHBlcnNvbm5hZ2UuZGVwbGFjZXIocG9zaXRpb24sIG5Qb3NpdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlc3RDZVF1ZUxhQ2FzZUVzdExpYnJlKGNlbGx1bGUpIHtcclxuICAgIGxldCBjZWxsID0gU3RyaW5nKGNlbGx1bGUpO1xyXG4gICAgbGV0IGlkUGVyc28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjZWxsdWxlKTtcclxuXHJcbiAgICBpZiAodGhpcy5jYXNlc09ic3RhY2xlcy5pbmNsdWRlcyhjZWxsKSB8fCBpZFBlcnNvLmNsYXNzTGlzdC5jb250YWlucyhcImNlbGx1bGUtcGVyc29cIikpIHtcclxuICAgICAgYWxlcnQoXCJMYSBjYXNlIG4nZXN0IHBhcyBsaWJyZSAhXCIpO1xyXG5cclxuICAgICAgaWYgKGlkUGVyc28uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbHVsZS1wZXJzb1wiKSkge1xyXG4gICAgICAgIGFsZXJ0KFwiVm91cyBwb3V2ZXogYXR0YXF1ZXIgbGUgcGVyc29ubmFnZVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lc3RDZVF1ZUxhQ2FzZUFVbmVBcm1lKGNlbGwpO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZXN0Q2VRdWVMYUNhc2VBVW5lQXJtZShjZWxsdWxlKSB7XHJcbiAgICBsZXQgY2VsbCA9IFN0cmluZyhjZWxsdWxlKTtcclxuICAgIGxldCBwZXJzb25uYWdlO1xyXG4gICAgbGV0IGlkQXJtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNlbGwpO1xyXG5cclxuICAgIGlmICh0aGlzLmNhc2VzQXJtZXMuaW5jbHVkZXMoY2VsbCkpIHtcclxuICAgICAgbGV0IGRhdGFJZEFybWUgPSBpZEFybWUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZEFybWVcIik7XHJcbiAgICAgIGFsZXJ0KFwiUHJlbmRyZSBsJ2FybWUgIVwiKTtcclxuXHJcbiAgICAgIGlmIChqZXUucGV1dEpvdWVyID09PSBqZXUuamFlZGVuLmNsYXNzZSkge1xyXG4gICAgICAgIHBlcnNvbm5hZ2UgPSBqZXUuamFlZGVuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBlcnNvbm5hZ2UgPSBqZXUubGljaDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcGVyc29ubmFnZS5wcmVuZHJlKGRhdGFJZEFybWUpO1xyXG5cclxuICAgICAgJChcIiNtb24tYXJtZVwiKVxyXG4gICAgICAgIC5odG1sKHBlcnNvbm5hZ2UuYXJtZS5kZWdhdHMpXHJcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBgY2VsbHVsZS0ke3BlcnNvbm5hZ2UuYXJtZS50eXBlfSBpbWctdGh1bWJuYWlsYCk7XHJcblxyXG4gICAgICBpZEFybWUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1pZEFybWVcIik7XHJcbiAgICAgIGlkQXJtZS5jbGFzc0xpc3QucmVtb3ZlKGBjZWxsdWxlLSR7cGVyc29ubmFnZS5hcm1lLnR5cGV9YCk7XHJcbiAgICAgIGlkQXJtZS5jbGFzc0xpc3QucmVtb3ZlKFwiY2VsbHVsZS1hcm1lXCIpO1xyXG5cclxuICAgICAgdGhpcy5jYXNlc0FybWVzLnNwbGljZSh0aGlzLmNhc2VzQXJtZXMuaW5kZXhPZihjZWxsKSwgMSk7XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQbGF0ZWF1IH07XHJcbiIsImltcG9ydCB7IFBlcnNvbm5hZ2UgfSBmcm9tICcuL1BlcnNvbm5hZ2UuanMnO1xyXG5cclxuY2xhc3MgUm9pSmFlZGVuIGV4dGVuZHMgUGVyc29ubmFnZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwc2V1ZG8pIHtcclxuICAgICAgICBzdXBlcihwc2V1ZG8sIFwicm9pLWphZWRlblwiKTtcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbmV4cG9ydCB7IFJvaUphZWRlbiB9OyIsImltcG9ydCB7IFBlcnNvbm5hZ2UgfSBmcm9tICcuL1BlcnNvbm5hZ2UuanMnO1xyXG5cclxuY2xhc3MgUm9pTGljaCBleHRlbmRzIFBlcnNvbm5hZ2Uge1xyXG4gICAgY29uc3RydWN0b3IocHNldWRvKSB7XHJcbiAgICAgICAgc3VwZXIocHNldWRvLCBcInJvaS1saWNoXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBSb2lMaWNoIH07IiwiZnVuY3Rpb24gaHRtbChtZXNzYWdlKSB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHRlJyk7XHJcbiAgICBkaXYuaW5uZXJIVE1MICs9IG1lc3NhZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGh0bWwgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgSmV1IH0gZnJvbSAnLi9jbGFzc2VzL0pldS5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgamV1ID0gbmV3IEpldSgpO1xyXG5cclxuamV1LmFmZmljaGVyU2NvcmUoKTtcclxuamV1LmFqb3V0ZXJKb3VldXIoamV1LmphZWRlbik7XHJcbmpldS5ham91dGVySm91ZXVyKGpldS5saWNoKTtcclxuamV1LmFmZmljaGVyQXJtZSgpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBhbGVydChgJHtqZXUuam91ZXVyc1swXX0gdm91cyBjb21tZW5jZXogbGEgcGFydGllICFgKTtcclxuICAgICQoJy5ub20tcGVyc29ubmFnZScpLmh0bWwoamV1LmphZWRlbi5jbGFzc2UpLmF0dHIoJ2lkJywgYCR7amV1LmphZWRlbi5jbGFzc2V9LWgyYCk7XHJcbiAgICAkKCcjbW9uLWFybWUnKS5odG1sKGpldS5qYWVkZW4uYXJtZS5kZWdhdHMpLmF0dHIoJ2NsYXNzJywgYCR7amV1LmphZWRlbi5jbGFzc2V9IGNlbGx1bGUtJHtqZXUuamFlZGVuLmFybWUudHlwZX0gaW1nLXRodW1ibmFpbGApO1xyXG5cclxuICAgIC8vTGVzIGJvdXRvbnMgZGVzIG1vdXZlbWVudHNcclxuICAgICQoJyNidG4tZHJvaXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmKGpldS5wZXV0Sm91ZXIgPT0gamV1LmphZWRlbi5jbGFzc2UpIHtcclxuICAgICAgICAgICAgamV1LnZlcmlmTW91dmVtZW50KGpldS5qYWVkZW4sIGpldS5saWNoKTtcclxuICAgICAgICAgICAgamV1LnBsYXRlYXUuZGVwbGFjZXJEcm9pdGUoamV1LmphZWRlbik7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMaWNoIDogcGV1dCBqb2V1clwiK2pldS5wZXV0Sm91ZXIpO1xyXG4gICAgICAgICAgICBqZXUudmVyaWZNb3V2ZW1lbnQoamV1LmxpY2gsIGpldS5qYWVkZW4pOyAgXHJcbiAgICAgICAgICAgIGpldS5wbGF0ZWF1LmRlcGxhY2VyRHJvaXRlKGpldS5saWNoKTsgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYnRuLWdhdWNoZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZihqZXUucGV1dEpvdWVyID09IGpldS5qYWVkZW4uY2xhc3NlKSB7XHJcbiAgICAgICAgICAgIGpldS52ZXJpZk1vdXZlbWVudChqZXUuamFlZGVuLCBqZXUubGljaCk7XHJcbiAgICAgICAgICAgIGpldS5wbGF0ZWF1LmRlcGxhY2VyR2F1Y2hlKGpldS5qYWVkZW4pO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGljaCA6IHBldXQgam9ldXJcIitqZXUucGV1dEpvdWVyKVxyXG4gICAgICAgICAgICBqZXUudmVyaWZNb3V2ZW1lbnQoamV1LmxpY2gsIGpldS5qYWVkZW4pO1xyXG4gICAgICAgICAgICBqZXUucGxhdGVhdS5kZXBsYWNlckdhdWNoZShqZXUubGljaCk7ICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYnRuLWhhdXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7ICBcclxuICAgICAgICBpZihqZXUucGV1dEpvdWVyID09IGpldS5qYWVkZW4uY2xhc3NlKSB7XHJcbiAgICAgICAgICAgIGpldS52ZXJpZk1vdXZlbWVudChqZXUuamFlZGVuLCBqZXUubGljaCk7XHJcbiAgICAgICAgICAgIGpldS5wbGF0ZWF1LmRlcGxhY2VySGF1dChqZXUuamFlZGVuKTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxpY2ggOiBwZXV0IGpvZXVyXCIramV1LnBldXRKb3VlcilcclxuICAgICAgICAgICAgamV1LnZlcmlmTW91dmVtZW50KGpldS5saWNoLCBqZXUuamFlZGVuKTtcclxuICAgICAgICAgICAgamV1LnBsYXRlYXUuZGVwbGFjZXJIYXV0KGpldS5saWNoKTsgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNidG4tYmFzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmKGpldS5wZXV0Sm91ZXIgPT0gamV1LmphZWRlbi5jbGFzc2UpIHtcclxuICAgICAgICAgICAgamV1LnZlcmlmTW91dmVtZW50KGpldS5qYWVkZW4sIGpldS5saWNoKTtcclxuICAgICAgICAgICAgamV1LnBsYXRlYXUuZGVwbGFjZXJCYXMoamV1LmphZWRlbik7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMaWNoIDogcGV1dCBqb2V1clwiK2pldS5wZXV0Sm91ZXIpXHJcbiAgICAgICAgICAgIGpldS52ZXJpZk1vdXZlbWVudChqZXUubGljaCwgamV1LmphZWRlbik7XHJcbiAgICAgICAgICAgIGpldS5wbGF0ZWF1LmRlcGxhY2VyQmFzKGpldS5saWNoKTsgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEJvdXRvbiBkJ2F0dGFxdWVcclxuICAgICQoJyNidG4tYXR0YXF1ZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQm91dG9uIHBvdXIgdGVybWluZXIgbGUgdG91clxyXG4gICAgJCgnI2J0bi10ZXJtaW5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZihqZXUucGV1dEpvdWVyID09IGpldS5qYWVkZW4uY2xhc3NlKSB7XHJcbiAgICAgICAgICAgIGpldS5jaGFuZ2VySm91ZXVyKGpldS5saWNoLmNsYXNzZSk7XHJcbiAgICAgICAgICAgIGpldS5saWNoLm1vdXZlbWVudCA9IDA7XHJcbiAgICAgICAgICAgIGFsZXJ0KGAke2pldS5qb3VldXJzWzBdfSB2b3VzIHBhc3NlciB2b3RyZSB0b3VyICFgKTtcclxuICAgICAgICAgICAgYWxlcnQoYFZvdXMgcG91dmV6IGpvdWVyICR7amV1LmpvdWV1cnNbMV19LCB2b3RyZSBhZHZlcnNhaXJlIMOgIHBhc3PDqSBzb24gdG91ciAhYCk7ICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGpldS5jaGFuZ2VySm91ZXVyKGpldS5qYWVkZW4uY2xhc3NlKTtcclxuICAgICAgICAgICAgamV1LmphZWRlbi5tb3V2ZW1lbnQgPSAwO1xyXG4gICAgICAgICAgICBhbGVydChgJHtqZXUuam91ZXVyc1sxXX0gdm91cyBwYXNzZXIgdm90cmUgdG91ciAhYCk7XHJcbiAgICAgICAgICAgIGFsZXJ0KGBWb3VzIHBvdXZleiBqb3VlciAke2pldS5qb3VldXJzWzBdfSwgdm90cmUgYWR2ZXJzYWlyZSDDoCBwYXNzw6kgc29uIHRvdXIgIWApOyAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIETDqXBsYWNlbWVudCBwYXIgbGVzIGZsw6pjaGVzIGR1IGNsYXZpZXJcclxuICAgICQoJ2h0bWwnKS5rZXlkb3duKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYoZS5rZXkgPT0gJ0Fycm93UmlnaHQnKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihqZXUucGV1dEpvdWVyID09IGpldS5qYWVkZW4uY2xhc3NlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkplYWRlbiA6IHBldXQgam91ZXJcIitqZXUucGV1dEpvdWVyKVxyXG4gICAgICAgICAgICAgICAgamV1LnZlcmlmTW91dmVtZW50KGpldS5qYWVkZW4sIGpldS5saWNoKTtcclxuICAgICAgICAgICAgICAgIGpldS5wbGF0ZWF1LmRlcGxhY2VyRHJvaXRlKGpldS5qYWVkZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMaWNoIDogcGV1dCBqb2V1clwiK2pldS5wZXV0Sm91ZXIpXHJcbiAgICAgICAgICAgICAgICBqZXUudmVyaWZNb3V2ZW1lbnQoamV1LmxpY2gsIGpldS5qYWVkZW4pO1xyXG4gICAgICAgICAgICAgICAgamV1LnBsYXRlYXUuZGVwbGFjZXJEcm9pdGUoamV1LmxpY2gpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgaWYoZS5rZXkgPT0gJ0Fycm93TGVmdCcpIHtcclxuICAgICAgICAgICAgaWYoamV1LnBldXRKb3VlciA9PSBqZXUuamFlZGVuLmNsYXNzZSkge1xyXG4gICAgICAgICAgICAgICAgamV1LnZlcmlmTW91dmVtZW50KGpldS5qYWVkZW4sIGpldS5saWNoKTtcclxuICAgICAgICAgICAgICAgIGpldS5wbGF0ZWF1LmRlcGxhY2VyR2F1Y2hlKGpldS5qYWVkZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgamV1LnZlcmlmTW91dmVtZW50KGpldS5saWNoLCBqZXUuamFlZGVuKTtcclxuICAgICAgICAgICAgICAgIGpldS5wbGF0ZWF1LmRlcGxhY2VyR2F1Y2hlKGpldS5saWNoKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZS5rZXkgPT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgICAgICAgIGlmKGpldS5wZXV0Sm91ZXIgPT0gamV1LmphZWRlbi5jbGFzc2UpIHtcclxuICAgICAgICAgICAgICAgIGpldS52ZXJpZk1vdXZlbWVudChqZXUuamFlZGVuLCBqZXUubGljaCk7XHJcbiAgICAgICAgICAgICAgICBqZXUucGxhdGVhdS5kZXBsYWNlckhhdXQoamV1LmphZWRlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBqZXUudmVyaWZNb3V2ZW1lbnQoamV1LmxpY2gsIGpldS5qYWVkZW4pO1xyXG4gICAgICAgICAgICAgICAgamV1LnBsYXRlYXUuZGVwbGFjZXJIYXV0KGpldS5saWNoKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZS5rZXkgPT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICAgICAgaWYoamV1LnBldXRKb3VlciA9PSBqZXUuamFlZGVuLmNsYXNzZSkge1xyXG4gICAgICAgICAgICAgICAgamV1LnZlcmlmTW91dmVtZW50KGpldS5qYWVkZW4sIGpldS5saWNoKTtcclxuICAgICAgICAgICAgICAgIGpldS5wbGF0ZWF1LmRlcGxhY2VyQmFzKGpldS5qYWVkZW4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBqZXUudmVyaWZNb3V2ZW1lbnQoamV1LmxpY2gsIGpldS5qYWVkZW4pO1xyXG4gICAgICAgICAgICAgICAgamV1LnBsYXRlYXUuZGVwbGFjZXJCYXMoamV1LmxpY2gpXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9
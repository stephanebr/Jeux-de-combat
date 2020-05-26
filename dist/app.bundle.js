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

    this._armes = []; // Tableau contenant la liste des armes

    this.armes = new _Arme_js__WEBPACK_IMPORTED_MODULE_3__["Epee"]();
    this.armes = new _Arme_js__WEBPACK_IMPORTED_MODULE_3__["Hache"]();
    this.armes = new _Arme_js__WEBPACK_IMPORTED_MODULE_3__["Glaive"]();
    this.armes = new _Arme_js__WEBPACK_IMPORTED_MODULE_3__["BaguetteMagique"]();
    this._plateau = new _Plateau_js__WEBPACK_IMPORTED_MODULE_0__["Plateau"](12, 8); // Objet contenant le plateau instancié

    this.plateau.genererObstacle(1);
    this.plateau.placerArme(this.armes);
    this.armes = new _Arme_js__WEBPACK_IMPORTED_MODULE_3__["Couteau"]();
    this.jaeden = new _RoiJaeden_js__WEBPACK_IMPORTED_MODULE_1__["RoiJaeden"](this.pseudo, this.armes[this.armes.length - 1]);
    this.lich = new _RoiLich_js__WEBPACK_IMPORTED_MODULE_2__["RoiLich"](this.pseudo, this.armes[this.armes.length - 1]);
    this._joueurs = []; // Tableau contenant le pseudo des joueurs inscrits

    this._peutJouer = this.jaeden; // Le nom du personnage qui peut jouer

    this._msgAlert = ''; // Messages d'actions
  }

  _createClass(Jeu, [{
    key: "ajouterJoueur",
    value: function ajouterJoueur(joueur) {
      this.joueurs = joueur; // On ajoute au tableau

      this.plateau.placerPersonnage(joueur); // On trouve un Id libre pour placer un personnage sur le plateau
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
      if (personnage1.mouvement >= 2) {
        this.changerJoueur(personnage2);
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
    key: "combat",
    value: function combat() {
      while (this.jaeden.sante > 0 || this.lich.sante > 0) {
        if (this.peutJouer === this.jaeden) {
          this.jaeden.attaquer(this.lich);
          this.changerJoueur(this.lich);
        } else {
          this.lich.attaquer(this.jaeden);
          this.changerJoueur(this.jaeden);
        }

        console.log('jaeden : ' + this.jaeden.sante);
        console.log('Lich : ' + this.lich.sante);
      }

      if (this.jaeden.sante <= 0 || this.lich.sante <= 0) {
        alert('Vous êtes mort !');
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
  function Personnage(pseudo, classe, position, arme) {
    _classCallCheck(this, Personnage);

    this._pseudo = pseudo;
    this._classe = classe;
    this._sante = 100;
    this._position = position;
    this._mouvement = 0;
    this._arme = arme;
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
      /*if(this.arme) {
          html(`${this.pseudo} attaque ${personnage.pseudo} avec son ${this.arme.type} qui fait ${this.arme.degats} dégâts.<br> ${personnage.pseudo} vous perdez ${this.arme.degats} points de vie.<br>`);
          personnage.informer();
      }
        if(!personnage.vie) {
          personnage.mourir();
          this.gagner();
          return;
      }*/
    }
  }, {
    key: "gagner",
    value: function gagner() {
      Object(_fonctions_js__WEBPACK_IMPORTED_MODULE_1__["html"])("".concat(this.pseudo, " Bravo, vous avez gagn\xE9 !<br>"));
    }
  }, {
    key: "mourir",
    value: function mourir() {
      alert("".concat(this.pseudo, " Vous avez perdu, vous \xEAtes mort !"));
    }
  }, {
    key: "informer",
    value: function informer() {
      Object(_fonctions_js__WEBPACK_IMPORTED_MODULE_1__["html"])("".concat(this.pseudo, " ").concat(this.classe, " a ").concat(this.sante, " points de vie.<br>"));
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
      console.log("L.102 - IDArme : " + idArme);
      this.arme = _main_js__WEBPACK_IMPORTED_MODULE_2__["jeu"].armes[Number(idArme)];
      console.log("L-106 : this.arme " + this.arme);
      console.log("".concat(this.classe, " vous avez : ").concat(this.arme.type, " qui fait ").concat(this.arme.degats, " de d\xE9gats"));
    }
  }, {
    key: "deposer",
    value: function deposer(surCelluleID) {
      surCelluleID.classList.add("cellule-".concat(this.arme.type));
      console.log("Mon arme :" + this.arme);
      console.log(_main_js__WEBPACK_IMPORTED_MODULE_2__["jeu"].armes);
      surCelluleID.setAttribute('data-idArme', '' + _main_js__WEBPACK_IMPORTED_MODULE_2__["jeu"].armes.indexOf(this.arme));
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
    value: function caseHauteLibre(cellule) {
      var result = true;
      var celluleHaute = Plateau.majId(cellule, 0, -1);
      var nPosition = Plateau.conversionIdEnCoord(celluleHaute);

      if (nPosition.y < 0) {
        return false;
      }

      if (this.casesPleines.includes(celluleHaute)) {
        result = false;
      }

      return result;
    }
  }, {
    key: "caseBasLibre",
    value: function caseBasLibre(cellule) {
      var result = true;
      var celluleBasse = Plateau.majId(cellule, 0, 1);
      var nPosition = Plateau.conversionIdEnCoord(celluleBasse);

      if (nPosition.y >= this.rangees) {
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
      var result = true;
      var celluleGauche = Plateau.majId(cellule, -1, 0);
      var nPosition = Plateau.conversionIdEnCoord(celluleGauche);

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
      var nPosition = Plateau.conversionIdEnCoord(celluleDroite);

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

      if (nPosition.x < this.colonnes && this.estCeQueLaCaseEstLibre(celluleDroite)) {
        personnage.mouvement = personnage.deplacer(position, celluleDroite);
      }
    }
  }, {
    key: "deplacerGauche",
    value: function deplacerGauche(personnage) {
      //Le joueur à le droit de se déplacer de 3 cases max
      var position = personnage.position;
      var celluleGauche = Plateau.majId(position, -1, 0);
      var nPosition = Plateau.conversionIdEnCoord(celluleGauche);

      if (nPosition.x < 0) {
        console.log("la colonne est egale à 0");
        return false;
      }

      if (nPosition.x >= 0 && this.estCeQueLaCaseEstLibre(celluleGauche)) {
        personnage.mouvement = personnage.deplacer(position, celluleGauche);
      }
    }
  }, {
    key: "deplacerHaut",
    value: function deplacerHaut(personnage) {
      //Le joueur à le droit de se déplacer de 3 cases max
      var position = personnage.position;
      var celluleHaute = Plateau.majId(position, 0, -1);
      var nPosition = Plateau.conversionIdEnCoord(celluleHaute);

      if (nPosition.y < 0) {
        return false;
      }

      if (this.estCeQueLaCaseEstLibre(celluleHaute)) {
        personnage.mouvement = personnage.deplacer(position, celluleHaute);
      }
    }
  }, {
    key: "deplacerBas",
    value: function deplacerBas(personnage) {
      //Le joueur à le droit de se déplacer de 3 cases max
      var position = personnage.position;
      var celluleBasse = Plateau.majId(position, 0, 1);
      var nPosition = Plateau.conversionIdEnCoord(celluleBasse);

      if (nPosition.y >= this.rangees) {
        return false;
      }

      if (this.estCeQueLaCaseEstLibre(celluleBasse)) {
        personnage.mouvement = personnage.deplacer(position, celluleBasse);
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
          $('#btn-attaquer').show();
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
        personnage = _main_js__WEBPACK_IMPORTED_MODULE_0__["jeu"].peutJouer;
        personnage.deposer(idArme);
        console.log("l 331 : dataIdArme : " + dataIdArme);
        personnage.prendre(dataIdArme);
        $("#mon-arme").html(personnage.arme.degats).attr("class", "cellule-".concat(personnage.arme.type, " img-thumbnail"));
        idArme.classList.remove("cellule-".concat(personnage.arme.type));
        idArme.classList.remove("cellule-arme");
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
  $('#mon-arme').html(jeu.jaeden.arme.degats).attr('class', "".concat(jeu.jaeden.classe, " cellule-").concat(jeu.jaeden.arme.type, " img-thumbnail"));
  $('#btn-attaquer').hide(); //Les boutons des mouvements

  $('#btn-droite').on('click', function (e) {
    if (jeu.peutJouer === jeu.jaeden) {
      jeu.verifMouvement(jeu.jaeden, jeu.lich);
      jeu.plateau.deplacerDroite(jeu.jaeden);
    } else {
      console.log("Lich : peut jouer" + jeu.peutJouer.classe);
      jeu.verifMouvement(jeu.lich, jeu.jaeden);
      jeu.plateau.deplacerDroite(jeu.lich);
    }
  });
  $('#btn-gauche').on('click', function (e) {
    if (jeu.peutJouer === jeu.jaeden) {
      jeu.verifMouvement(jeu.jaeden, jeu.lich);
      jeu.plateau.deplacerGauche(jeu.jaeden);
    } else {
      console.log("Lich : peut jouer" + jeu.peutJouer.classe);
      jeu.verifMouvement(jeu.lich, jeu.jaeden);
      jeu.plateau.deplacerGauche(jeu.lich);
    }
  });
  $('#btn-haut').on('click', function (e) {
    if (jeu.peutJouer === jeu.jaeden) {
      jeu.verifMouvement(jeu.jaeden, jeu.lich);
      jeu.plateau.deplacerHaut(jeu.jaeden);
    } else {
      console.log("Lich : peut jouer" + jeu.peutJouer.classe);
      jeu.verifMouvement(jeu.lich, jeu.jaeden);
      jeu.plateau.deplacerHaut(jeu.lich);
    }
  });
  $('#btn-bas').on('click', function (e) {
    if (jeu.peutJouer === jeu.jaeden) {
      jeu.verifMouvement(jeu.jaeden, jeu.lich);
      jeu.plateau.deplacerBas(jeu.jaeden);
    } else {
      console.log("Lich : peut jouer" + jeu.peutJouer.classe);
      jeu.verifMouvement(jeu.lich, jeu.jaeden);
      jeu.plateau.deplacerBas(jeu.lich);
    }
  }); // Bouton d'attaque

  $('#btn-attaquer').on('click', function () {
    jeu.combat();
  }); // Bouton pour terminer le tour

  $('#btn-terminer').on('click', function (e) {
    if (jeu.peutJouer == jeu.jaeden) {
      jeu.changerJoueur(jeu.lich);
      jeu.lich.mouvement = 0;
      alert("".concat(jeu.joueurs[0], " vous passer votre tour !"));
      alert("Vous pouvez jouer ".concat(jeu.joueurs[1], ", votre adversaire \xE0 pass\xE9 son tour !"));
    } else {
      jeu.changerJoueur(jeu.jaeden);
      jeu.jaeden.mouvement = 0;
      alert("".concat(jeu.joueurs[1], " vous passer votre tour !"));
      alert("Vous pouvez jouer ".concat(jeu.joueurs[0], ", votre adversaire \xE0 pass\xE9 son tour !"));
    }
  }); // Déplacement par les flêches du clavier

  $('html').keydown(function (e) {
    e.preventDefault();

    if (e.key == 'ArrowRight') {
      if (jeu.peutJouer == jeu.jaeden) {
        console.log("Jeaden : peut jouer" + jeu.peutJouer.classe);
        jeu.verifMouvement(jeu.jaeden, jeu.lich);
        jeu.plateau.deplacerDroite(jeu.jaeden);
      } else {
        console.log("Lich : peut joeur" + jeu.peutJouer.classe);
        jeu.verifMouvement(jeu.lich, jeu.jaeden);
        jeu.plateau.deplacerDroite(jeu.lich);
      }
    }

    if (e.key == 'ArrowLeft') {
      if (jeu.peutJouer == jeu.jaeden) {
        jeu.verifMouvement(jeu.jaeden, jeu.lich);
        jeu.plateau.deplacerGauche(jeu.jaeden);
      } else {
        jeu.verifMouvement(jeu.lich, jeu.jaeden);
        jeu.plateau.deplacerGauche(jeu.lich);
      }
    }

    if (e.key == 'ArrowUp') {
      if (jeu.peutJouer == jeu.jaeden) {
        jeu.verifMouvement(jeu.jaeden, jeu.lich);
        jeu.plateau.deplacerHaut(jeu.jaeden);
      } else {
        jeu.verifMouvement(jeu.lich, jeu.jaeden);
        jeu.plateau.deplacerHaut(jeu.lich);
      }
    }

    if (e.key == 'ArrowDown') {
      if (jeu.peutJouer == jeu.jaeden) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9Bcm1lLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvSmV1LmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvUGVyc29ubmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL1BsYXRlYXUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9Sb2lKYWVkZW4uanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9Sb2lMaWNoLmpzIiwid2VicGFjazovLy8uL2pzL2ZvbmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tYWluLmpzIl0sIm5hbWVzIjpbIkFybWUiLCJ0eXBlIiwiZGVnYXRzIiwiX3R5cGUiLCJfZGVnYXRzIiwiSGFjaGUiLCJFcGVlIiwiR2xhaXZlIiwiQmFndWV0dGVNYWdpcXVlIiwiQ291dGVhdSIsIkpldSIsIl9hcm1lcyIsImFybWVzIiwiX3BsYXRlYXUiLCJQbGF0ZWF1IiwicGxhdGVhdSIsImdlbmVyZXJPYnN0YWNsZSIsInBsYWNlckFybWUiLCJqYWVkZW4iLCJSb2lKYWVkZW4iLCJwc2V1ZG8iLCJsZW5ndGgiLCJsaWNoIiwiUm9pTGljaCIsIl9qb3VldXJzIiwiX3BldXRKb3VlciIsIl9tc2dBbGVydCIsImpvdWV1ciIsImpvdWV1cnMiLCJwbGFjZXJQZXJzb25uYWdlIiwibm9tcyIsImluc2NyaXJlSm91ZXVyIiwic2NvcmUiLCJpZEphZWRlbiIsIiQiLCJodG1sIiwic2NvcmVKYWVkZW4iLCJzYW50ZSIsImlkTGljaCIsInNjb3JlTGljaCIsImxpc3RBcm1lcyIsImlkQXJtZXMiLCJpbWciLCJmb3JFYWNoIiwiYXJtZSIsInB1c2giLCJqb2luIiwicHJvbXB0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicGVyc29ubmFnZTEiLCJwZXJzb25uYWdlMiIsIm1vdXZlbWVudCIsImNoYW5nZXJKb3VldXIiLCJhbGVydCIsImNsYXNzZSIsImF0dHIiLCJjb25zb2xlIiwibG9nIiwicGV1dEpvdWVyIiwiYXR0YXF1ZXIiLCJjbGFzc2VQZXJzb25uYWdlIiwibWVzc2FnZSIsIlBlcnNvbm5hZ2UiLCJwb3NpdGlvbiIsIl9wc2V1ZG8iLCJfY2xhc3NlIiwiX3NhbnRlIiwiX3Bvc2l0aW9uIiwiX21vdXZlbWVudCIsIl9hcm1lIiwiX3Njb3JlIiwicGVyc29ubmFnZSIsInZpZSIsIm5Qb3NpdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJpZEFybWUiLCJqZXUiLCJOdW1iZXIiLCJzdXJDZWxsdWxlSUQiLCJpbmRleE9mIiwibmJNb3V2ZW1lbnQiLCJjb2xvbm5lcyIsInJhbmdlZXMiLCJfY2FzZXNQbGVpbmVzIiwiX2Nhc2VzT2JzdGFjbGVzIiwiX2Nhc2VzQXJtZXMiLCJfY29sb25uZXMiLCJfcmFuZ2VlcyIsImNyZWVyIiwicGxhdGVhdURlSmV1IiwidGJsIiwiY3JlYXRlRWxlbWVudCIsInRibEJvZHkiLCJpIiwibGlnbmVzIiwiaiIsImNlbGx1bGVzIiwiYXBwZW5kQ2hpbGQiLCJhcHBlbmQiLCJuYk9ic3RhY2xlcyIsIm9ic3RhY2xlIiwidHJvdXZlckNhc2VWaWRlIiwiY2FzZXNQbGVpbmVzIiwiY2FzZXNPYnN0YWNsZXMiLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpZCIsInRyb3V2ZXJDYXNlVXRpbGlzYWJsZSIsImNhc2VzUGVyc29zIiwiY2VsbHVsZVBlcnNvbm5hZ2UiLCJjYXNlc0FybWVzIiwiY2VsbHVsZUFybWUiLCJ4Iiwibm9tYnJlQWxlYXRvaXJlIiwieSIsImNlbGx1bGUiLCJTdHJpbmciLCJpbmNsdWRlcyIsImNhc2VHYXVjaGVMaWJyZSIsImNhc2VIYXV0ZUxpYnJlIiwiY2FzZUJhc0xpYnJlIiwiY2FzZURyb2l0ZUxpYnJlIiwicmVzdWx0IiwiY2VsbHVsZUhhdXRlIiwibWFqSWQiLCJjb252ZXJzaW9uSWRFbkNvb3JkIiwiY2VsbHVsZUJhc3NlIiwiY2VsbHVsZUdhdWNoZSIsImNlbGx1bGVEcm9pdGUiLCJlc3RDZVF1ZUxhQ2FzZUVzdExpYnJlIiwiZGVwbGFjZXIiLCJjZWxsIiwiaWRQZXJzbyIsImNvbnRhaW5zIiwic2hvdyIsImVzdENlUXVlTGFDYXNlQVVuZUFybWUiLCJkYXRhSWRBcm1lIiwiZ2V0QXR0cmlidXRlIiwiZGVwb3NlciIsInByZW5kcmUiLCJjYXNlT2JzdGFjbGVzIiwiY2FzZUFybWVzIiwic3BsaXQiLCJ0cmFuc2xhdGlvblgiLCJ0cmFuc2xhdGlvblkiLCJvcmlnaW5lUG9zaXRpb24iLCJkaXYiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiYWZmaWNoZXJTY29yZSIsImFqb3V0ZXJKb3VldXIiLCJhZmZpY2hlckFybWUiLCJyZWFkeSIsImhpZGUiLCJvbiIsImUiLCJ2ZXJpZk1vdXZlbWVudCIsImRlcGxhY2VyRHJvaXRlIiwiZGVwbGFjZXJHYXVjaGUiLCJkZXBsYWNlckhhdXQiLCJkZXBsYWNlckJhcyIsImNvbWJhdCIsImtleWRvd24iLCJwcmV2ZW50RGVmYXVsdCIsImtleSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFD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QUFHLENBQUNsRSxNQUF4QixFQUFnQztBQUM1QmtFLFdBQUcsQ0FBQ2tGLGNBQUosQ0FBbUJsRixHQUFHLENBQUNsRSxNQUF2QixFQUErQmtFLEdBQUcsQ0FBQzlELElBQW5DO0FBQ0E4RCxXQUFHLENBQUNyRSxPQUFKLENBQVkwSixZQUFaLENBQXlCckYsR0FBRyxDQUFDbEUsTUFBN0I7QUFDSCxPQUhELE1BSUs7QUFDRGtFLFdBQUcsQ0FBQ2tGLGNBQUosQ0FBbUJsRixHQUFHLENBQUM5RCxJQUF2QixFQUE2QjhELEdBQUcsQ0FBQ2xFLE1BQWpDO0FBQ0FrRSxXQUFHLENBQUNyRSxPQUFKLENBQVkwSixZQUFaLENBQXlCckYsR0FBRyxDQUFDOUQsSUFBN0I7QUFDSDtBQUNKOztBQUVELFFBQUcrSSxDQUFDLENBQUNTLEdBQUYsSUFBUyxXQUFaLEVBQXlCO0FBQ3JCLFVBQUcxRixHQUFHLENBQUN4QixTQUFKLElBQWlCd0IsR0FBRyxDQUFDbEUsTUFBeEIsRUFBZ0M7QUFDNUJrRSxXQUFHLENBQUNrRixjQUFKLENBQW1CbEYsR0FBRyxDQUFDbEUsTUFBdkIsRUFBK0JrRSxHQUFHLENBQUM5RCxJQUFuQztBQUNBOEQsV0FBRyxDQUFDckUsT0FBSixDQUFZMkosV0FBWixDQUF3QnRGLEdBQUcsQ0FBQ2xFLE1BQTVCO0FBQ0gsT0FIRCxNQUlLO0FBQ0RrRSxXQUFHLENBQUNrRixjQUFKLENBQW1CbEYsR0FBRyxDQUFDOUQsSUFBdkIsRUFBNkI4RCxHQUFHLENBQUNsRSxNQUFqQztBQUNBa0UsV0FBRyxDQUFDckUsT0FBSixDQUFZMkosV0FBWixDQUF3QnRGLEdBQUcsQ0FBQzlELElBQTVCO0FBQ0g7QUFDSjtBQUNKLEdBakREO0FBa0RILENBbklELEUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi5qc1wiKTtcbiIsIi8qKlxyXG4gKiBDbGFzc2VzIGRlcyBhcm1lcyA6XHJcbiAqIFxyXG4gKiBQcml2YXRlIEBTdHJpbmcgOiAjdHlwZSBcclxuICogUHJpdmF0ZSBATnVtYmVyIDogI2RlZ2F0cyAgICAgICAgICAgICBcclxuICogICAgICAgICAgICAgIFxyXG4gKiAgICAgICAgICAgICAgXHJcbiAqL1xyXG5jbGFzcyBBcm1lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBkZWdhdHMpIHtcclxuICAgICAgICB0aGlzLl90eXBlICAgID0gdHlwZTtcclxuICAgICAgICB0aGlzLl9kZWdhdHMgID0gZGVnYXRzO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBnZXQgdHlwZSgpIHsgcmV0dXJuIHRoaXMuX3R5cGU7IH1cclxuXHJcbiAgICBnZXQgZGVnYXRzKCkgeyByZXR1cm4gdGhpcy5fZGVnYXRzOyB9XHJcblxyXG4gICAgc2V0IHR5cGUodHlwZSkgeyB0aGlzLl90eXBlID0gdHlwZTsgfVxyXG5cclxuICAgIHNldCBkZWdhdHMoZGVnYXRzKSB7IHRoaXMuX2RlZ2F0cyA9IGRlZ2F0czsgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgSGFjaGUgZXh0ZW5kcyBBcm1lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdoYWNoZScsIDE3KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5jbGFzcyBFcGVlIGV4dGVuZHMgQXJtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignZXBlZScsIDE1KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIEdsYWl2ZSBleHRlbmRzIEFybWUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2dsYWl2ZScsIDE4KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIEJhZ3VldHRlTWFnaXF1ZSBleHRlbmRzIEFybWUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2JhZ3VldHRlLW1hZ2lxdWUnLCAyMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENvdXRlYXUgZXh0ZW5kcyBBcm1lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdjb3V0ZWF1JywgMTApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBDb3V0ZWF1LCBIYWNoZSwgRXBlZSwgR2xhaXZlLCBCYWd1ZXR0ZU1hZ2lxdWUgfTsiLCJpbXBvcnQgeyBQbGF0ZWF1IH0gZnJvbSAnLi9QbGF0ZWF1LmpzJztcclxuaW1wb3J0IHsgUm9pSmFlZGVuIH0gZnJvbSAnLi9Sb2lKYWVkZW4uanMnO1xyXG5pbXBvcnQgeyBSb2lMaWNoIH0gZnJvbSAnLi9Sb2lMaWNoLmpzJztcclxuaW1wb3J0IHsgSGFjaGUsIEdsYWl2ZSwgQmFndWV0dGVNYWdpcXVlLCBFcGVlLCBDb3V0ZWF1IH0gZnJvbSAnLi9Bcm1lLmpzJztcclxuXHJcblxyXG5jbGFzcyBKZXUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICBcclxuICAgICAgICB0aGlzLl9hcm1lcyAgICAgPSBbXTsgLy8gVGFibGVhdSBjb250ZW5hbnQgbGEgbGlzdGUgZGVzIGFybWVzXHJcbiAgICAgICAgdGhpcy5hcm1lcyAgICAgID0gbmV3IEVwZWUoKTtcclxuICAgICAgICB0aGlzLmFybWVzICAgICAgPSBuZXcgSGFjaGUoKTtcclxuICAgICAgICB0aGlzLmFybWVzICAgICAgPSBuZXcgR2xhaXZlKCk7XHJcbiAgICAgICAgdGhpcy5hcm1lcyAgICAgID0gbmV3IEJhZ3VldHRlTWFnaXF1ZSgpO1xyXG4gICAgICAgIHRoaXMuX3BsYXRlYXUgICA9IG5ldyBQbGF0ZWF1KDEyLDgpOyAvLyBPYmpldCBjb250ZW5hbnQgbGUgcGxhdGVhdSBpbnN0YW5jacOpXHJcbiAgICAgICAgdGhpcy5wbGF0ZWF1LmdlbmVyZXJPYnN0YWNsZSgxKTtcclxuICAgICAgICB0aGlzLnBsYXRlYXUucGxhY2VyQXJtZSh0aGlzLmFybWVzKTtcclxuICAgICAgICB0aGlzLmFybWVzICAgICAgPSBuZXcgQ291dGVhdSgpO1xyXG4gICAgICAgIHRoaXMuamFlZGVuICAgICA9IG5ldyBSb2lKYWVkZW4odGhpcy5wc2V1ZG8sIHRoaXMuYXJtZXNbdGhpcy5hcm1lcy5sZW5ndGggLTFdKTtcclxuICAgICAgICB0aGlzLmxpY2ggICAgICAgPSBuZXcgUm9pTGljaCh0aGlzLnBzZXVkbywgdGhpcy5hcm1lc1t0aGlzLmFybWVzLmxlbmd0aCAtMV0pO1xyXG4gICAgICAgIHRoaXMuX2pvdWV1cnMgICA9IFtdOyAvLyBUYWJsZWF1IGNvbnRlbmFudCBsZSBwc2V1ZG8gZGVzIGpvdWV1cnMgaW5zY3JpdHNcclxuICAgICAgICB0aGlzLl9wZXV0Sm91ZXIgPSB0aGlzLmphZWRlbjsgLy8gTGUgbm9tIGR1IHBlcnNvbm5hZ2UgcXVpIHBldXQgam91ZXJcclxuICAgICAgICB0aGlzLl9tc2dBbGVydCAgPSAnJzsgLy8gTWVzc2FnZXMgZCdhY3Rpb25zXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGpvdWV1cnMoKSB7IHJldHVybiB0aGlzLl9qb3VldXJzOyB9XHJcblxyXG4gICAgZ2V0IHBsYXRlYXUoKSB7IHJldHVybiB0aGlzLl9wbGF0ZWF1OyB9XHJcblxyXG4gICAgZ2V0IGFybWVzKCkgeyByZXR1cm4gdGhpcy5fYXJtZXM7IH1cclxuXHJcbiAgICBnZXQgcGV1dEpvdWVyKCkgeyByZXR1cm4gdGhpcy5fcGV1dEpvdWVyOyB9XHJcbiAgICBcclxuICAgIGdldCBtc2dBbGVydCgpIHsgcmV0dXJuIHRoaXMuX21zZ0FsZXJ0OyB9XHJcblxyXG4gICAgc2V0IGpvdWV1cnMoam91ZXVyKSB7IHRoaXMuX2pvdWV1cnMucHVzaChqb3VldXIpOyB9XHJcblxyXG4gICAgc2V0IHBsYXRlYXUocGxhdGVhdSkgeyB0aGlzLl9wbGF0ZWF1ID0gcGxhdGVhdTsgfVxyXG5cclxuICAgIHNldCBhcm1lcyhhcm1lcykgeyB0aGlzLl9hcm1lcy5wdXNoKGFybWVzKTsgfVxyXG5cclxuICAgIHNldCBwZXV0Sm91ZXIocGV1dEpvdWVyKSB7IHRoaXMuX3BldXRKb3VlciA9IHBldXRKb3VlcjsgfVxyXG5cclxuICAgIHNldCBtc2dBbGVydChtZXNzYWdlKSB7IHRoaXMuX21zZ0FsZXJ0ID0gbWVzc2FnZTsgfVxyXG5cclxuXHJcbiAgICBham91dGVySm91ZXVyKGpvdWV1cikge1xyXG4gICAgICAgIHRoaXMuam91ZXVycyA9IGpvdWV1cjsgLy8gT24gYWpvdXRlIGF1IHRhYmxlYXVcclxuICAgICAgICB0aGlzLnBsYXRlYXUucGxhY2VyUGVyc29ubmFnZShqb3VldXIpIC8vIE9uIHRyb3V2ZSB1biBJZCBsaWJyZSBwb3VyIHBsYWNlciB1biBwZXJzb25uYWdlIHN1ciBsZSBwbGF0ZWF1XHJcbiAgICB9XHJcblxyXG4gICAgYWZmaWNoZXJTY29yZSgpIHtcclxuICAgICAgICBjb25zdCBub21zICA9IHRoaXMuaW5zY3JpcmVKb3VldXIoKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuamFlZGVuLnNjb3JlID0ge1xyXG4gICAgICAgICAgICBpZEphZWRlbjogJCgnI2phZWRlbicpLmh0bWwobm9tc1swXSksXHJcbiAgICAgICAgICAgIHNjb3JlSmFlZGVuOiAkKCcjc2NvcmUtamFlZGVuJykuaHRtbChgIDogJHt0aGlzLmphZWRlbi5zYW50ZX1gKSAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxpY2guc2NvcmUgPSB7XHJcbiAgICAgICAgICAgIGlkTGljaDogJCgnI2xpY2gnKS5odG1sKG5vbXNbMV0pLFxyXG4gICAgICAgICAgICBzY29yZUxpY2g6ICQoJyNzY29yZS1saWNoJykuaHRtbChgIDogJHt0aGlzLmxpY2guc2FudGV9YClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWZmaWNoZXJBcm1lKCkge1xyXG4gICAgICAgIGNvbnN0IGxpc3RBcm1lcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGlkQXJtZXMgICA9ICQoJyNhcm1lcycpO1xyXG4gICAgICAgIGxldCBpbWc7XHJcblxyXG4gICAgICAgIHRoaXMuYXJtZXMuZm9yRWFjaChhcm1lID0+IHtcclxuICAgICAgICAgICAgaW1nID0gYDxwIGNsYXNzPVwicGwtNFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy8ke2FybWUudHlwZX0ucG5nXCIgYWx0PVwiSW1hZ2UgJHthcm1lLnR5cGV9XCIgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgaWQ9XCIke2FybWUudHlwZX1cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZWdhdHNcIj4ke2FybWUuZGVnYXRzfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5vbS1hcm1lXCI+JHthcm1lLnR5cGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+YDtcclxuXHJcbiAgICAgICAgICAgIGxpc3RBcm1lcy5wdXNoKGltZyk7XHJcblxyXG4gICAgICAgICAgICBpZEFybWVzLmh0bWwobGlzdEFybWVzLmpvaW4oJycpKTsgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2NyaXJlSm91ZXVyKCkgeyAgICBcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHRoaXMuamFlZGVuLnBzZXVkbyA9IHByb21wdCgnVmV1aWxsZXogc2Fpc2lyIGxlIHByw6lub20gZHUgcHJlbWllciBqb3VldXIgOicpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUodGhpcy5qYWVkZW4ucHNldWRvID09ICcnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuamFlZGVuLnBzZXVkbyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJpbmRleC5odG1sXCI7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB0aGlzLmxpY2gucHNldWRvID0gcHJvbXB0KCdWZXVpbGxleiBzYWlzaXIgbGUgcHLDqW5vbSBkdSBkZXV4acOobWUgam91ZXVyIDonKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUodGhpcy5saWNoLnBzZXVkbyA9PSAnJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxpY2gucHNldWRvID09IG51bGwpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImluZGV4Lmh0bWxcIjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB0aGlzLmpvdWV1cnMgPSB0aGlzLmphZWRlbi5wc2V1ZG87XHJcbiAgICAgICAgdGhpcy5qb3VldXJzID0gdGhpcy5saWNoLnBzZXVkbztcclxuICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmpvdWV1cnM7XHJcbiAgICB9XHJcblxyXG4gICAgdmVyaWZNb3V2ZW1lbnQocGVyc29ubmFnZTEsIHBlcnNvbm5hZ2UyKSB7XHJcbiAgICAgICAgaWYgKHBlcnNvbm5hZ2UxLm1vdXZlbWVudCA+PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlckpvdWV1cihwZXJzb25uYWdlMik7XHJcbiAgICAgICAgICAgIGFsZXJ0KGAke3RoaXMuam91ZXVyc1swXX0gdm91cyBhdmV6IGZpbmkgdm90cmUgdG91ciAhYCk7XHJcbiAgICAgICAgICAgIGFsZXJ0KGBWb3VzIHBvdXZleiBqb3VlciAke3RoaXMuam91ZXVyc1sxXX1gKTtcclxuICAgICAgICAgICAgJCgnLm5vbS1wZXJzb25uYWdlJykuaHRtbChwZXJzb25uYWdlMi5jbGFzc2UpLmF0dHIoJ2lkJywgYCR7cGVyc29ubmFnZTIuY2xhc3NlfS1oMmApO1xyXG4gICAgICAgICAgICAkKCcjbW9uLWFybWUnKS5odG1sKHBlcnNvbm5hZ2UyLmFybWUuZGVnYXRzKS5hdHRyKCdjbGFzcycsIGAke3BlcnNvbm5hZ2UyLmNsYXNzZX0gY2VsbHVsZS0ke3BlcnNvbm5hZ2UyLmFybWUudHlwZX0gaW1nLXRodW1ibmFpbGApO1xyXG4gICAgICAgICAgICBwZXJzb25uYWdlMS5tb3V2ZW1lbnQgPSAwO1xyXG4gICAgICAgICAgICBwZXJzb25uYWdlMi5tb3V2ZW1lbnQgPSAwO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcGVyc28gMSA6ICR7cGVyc29ubmFnZTEubW91dmVtZW50fWApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBwZXJzbyAyIDogJHtwZXJzb25uYWdlMi5tb3V2ZW1lbnR9YClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tYmF0KCkge1xyXG4gICAgICAgIHdoaWxlKHRoaXMuamFlZGVuLnNhbnRlID4gMCB8fCB0aGlzLmxpY2guc2FudGUgPiAwKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGV1dEpvdWVyID09PSB0aGlzLmphZWRlbikge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmphZWRlbi5hdHRhcXVlcih0aGlzLmxpY2gpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VySm91ZXVyKHRoaXMubGljaCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpY2guYXR0YXF1ZXIodGhpcy5qYWVkZW4pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VySm91ZXVyKHRoaXMuamFlZGVuKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2phZWRlbiA6ICcgKyB0aGlzLmphZWRlbi5zYW50ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMaWNoIDogJyArIHRoaXMubGljaC5zYW50ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmphZWRlbi5zYW50ZSA8PSAwIHx8IHRoaXMubGljaC5zYW50ZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdWb3VzIMOqdGVzIG1vcnQgIScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VySm91ZXVyKGNsYXNzZVBlcnNvbm5hZ2UpIHtcclxuICAgICAgICB0aGlzLnBldXRKb3VlciA9IGNsYXNzZVBlcnNvbm5hZ2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEpldSB9OyIsImltcG9ydCB7IENvdXRlYXUgfSBmcm9tICcuL0FybWUuanMnO1xyXG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnLi4vZm9uY3Rpb25zLmpzJztcclxuaW1wb3J0IHsgamV1IH0gZnJvbSAnLi4vbWFpbi5qcyc7XHJcblxyXG5jbGFzcyBQZXJzb25uYWdlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwc2V1ZG8sIGNsYXNzZSwgcG9zaXRpb24sIGFybWUpIHtcclxuICAgICAgICB0aGlzLl9wc2V1ZG8gICAgID0gcHNldWRvO1xyXG4gICAgICAgIHRoaXMuX2NsYXNzZSAgICAgPSBjbGFzc2U7XHJcbiAgICAgICAgdGhpcy5fc2FudGUgICAgICA9IDEwMDtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbiAgID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5fbW91dmVtZW50ICA9IDA7XHJcbiAgICAgICAgdGhpcy5fYXJtZSAgICAgICA9IGFybWU7XHJcbiAgICAgICAgdGhpcy5fc2NvcmUgICAgICA9IHt9OyAvL1RhYmxlYXUganNvbiBjb250ZW5hbnQgbGUgc2NvcmUgZGVzIGpvdWV1cnNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdFVFRFUlMgRVQgU0VUVEVSU1xyXG4gICAgICovXHJcbiAgICBnZXQgcHNldWRvKCkgeyByZXR1cm4gdGhpcy5fcHNldWRvOyB9XHJcblxyXG4gICAgZ2V0IGNsYXNzZSgpIHsgcmV0dXJuIHRoaXMuX2NsYXNzZTsgfVxyXG5cclxuICAgIGdldCBzYW50ZSgpIHsgcmV0dXJuIHRoaXMuX3NhbnRlOyB9XHJcblxyXG4gICAgZ2V0IHZpZSgpIHsgcmV0dXJuICEodGhpcy5fc2FudGUgPD0gMCk7IH0gXHJcblxyXG4gICAgZ2V0IHBvc2l0aW9uKCkgeyByZXR1cm4gdGhpcy5fcG9zaXRpb247IH1cclxuXHJcbiAgICBnZXQgbW91dmVtZW50KCkgeyByZXR1cm4gdGhpcy5fbW91dmVtZW50OyB9XHJcblxyXG4gICAgZ2V0IGFybWUoKSB7IHJldHVybiB0aGlzLl9hcm1lOyB9XHJcblxyXG4gICAgZ2V0IHNjb3JlKCkgeyByZXR1cm4gdGhpcy5fc2NvcmU7IH1cclxuICAgIFxyXG4gICAgc2V0IHBzZXVkbyhwc2V1ZG8pIHsgdGhpcy5fcHNldWRvID0gcHNldWRvOyB9XHJcblxyXG4gICAgc2V0IGNsYXNzZShjbGFzc2UpIHsgdGhpcy5fY2xhc3NlID0gY2xhc3NlOyB9XHJcblxyXG4gICAgc2V0IHNhbnRlKHNhbnRlKSB7IHRoaXMuX3NhbnRlID0gc2FudGU7IH1cclxuXHJcbiAgICBzZXQgcG9zaXRpb24ocG9zaXRpb24pIHsgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjsgfVxyXG5cclxuICAgIHNldCBtb3V2ZW1lbnQobmJNb3V2ZW1lbnQpIHsgdGhpcy5fbW91dmVtZW50ID0gbmJNb3V2ZW1lbnQ7IH1cclxuICAgIFxyXG4gICAgc2V0IGFybWUoYXJtZSkgeyB0aGlzLl9hcm1lID0gYXJtZTsgfVxyXG5cclxuICAgIHNldCBzY29yZShzY29yZSkgeyB0aGlzLl9zY29yZSA9IHNjb3JlOyB9XHJcblxyXG4gICAgYXR0YXF1ZXIocGVyc29ubmFnZSkge1xyXG4gICAgICAgIGlmKHBlcnNvbm5hZ2UgPT09IHRoaXMpIHtcclxuICAgICAgICAgICAgaHRtbChcIlZvdXMgw6p0ZXMgZm91cywgdm91cyDDqnRlcyBlbiB0cmFpbiBkZSB2b3VzIHRhcGVyICE8YnI+XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIXBlcnNvbm5hZ2UudmllKSB7XHJcbiAgICAgICAgICAgIGh0bWwoXCJWb3VzIG5lIHBvdXZleiBwYXMgYXR0YXF1ZXIgdW4gbW9ydCAhPGJyPlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHRtbChgJHt0aGlzLnBzZXVkb30gYXR0YXF1ZSAke3BlcnNvbm5hZ2UucHNldWRvfSBhdmVjIHNvbiAke3RoaXMuYXJtZS50eXBlfSBxdWkgZmFpdCAke3RoaXMuYXJtZS5kZWdhdHN9IGTDqWfDonRzLjxicj4gJHtwZXJzb25uYWdlLnBzZXVkb30gdm91cyBwZXJkZXogJHt0aGlzLmFybWUuZGVnYXRzfSBwb2ludHMgZGUgdmllLjxicj5gKTtcclxuICAgICAgICAvL3BlcnNvbm5hZ2UuaW5mb3JtZXIoKTtcclxuXHJcbiAgICAgICAgcGVyc29ubmFnZS5zYW50ZSAtPSB0aGlzLmFybWUuZGVnYXRzO1xyXG5cclxuICAgICAgICAvKmlmKHRoaXMuYXJtZSkge1xyXG4gICAgICAgICAgICBodG1sKGAke3RoaXMucHNldWRvfSBhdHRhcXVlICR7cGVyc29ubmFnZS5wc2V1ZG99IGF2ZWMgc29uICR7dGhpcy5hcm1lLnR5cGV9IHF1aSBmYWl0ICR7dGhpcy5hcm1lLmRlZ2F0c30gZMOpZ8OidHMuPGJyPiAke3BlcnNvbm5hZ2UucHNldWRvfSB2b3VzIHBlcmRleiAke3RoaXMuYXJtZS5kZWdhdHN9IHBvaW50cyBkZSB2aWUuPGJyPmApO1xyXG4gICAgICAgICAgICBwZXJzb25uYWdlLmluZm9ybWVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighcGVyc29ubmFnZS52aWUpIHtcclxuICAgICAgICAgICAgcGVyc29ubmFnZS5tb3VyaXIoKTtcclxuICAgICAgICAgICAgdGhpcy5nYWduZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG5cclxuICAgIGdhZ25lcigpIHtcclxuICAgICAgICBodG1sKGAke3RoaXMucHNldWRvfSBCcmF2bywgdm91cyBhdmV6IGdhZ27DqSAhPGJyPmApO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdXJpcigpIHtcclxuICAgICAgICBhbGVydChgJHt0aGlzLnBzZXVkb30gVm91cyBhdmV6IHBlcmR1LCB2b3VzIMOqdGVzIG1vcnQgIWApO1xyXG4gICAgfSBcclxuXHJcblxyXG4gICAgaW5mb3JtZXIoKSB7XHJcbiAgICAgICAgaHRtbChgJHt0aGlzLnBzZXVkb30gJHt0aGlzLmNsYXNzZX0gYSAke3RoaXMuc2FudGV9IHBvaW50cyBkZSB2aWUuPGJyPmApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkZXBsYWNlcihwb3NpdGlvbiwgblBvc2l0aW9uKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocG9zaXRpb24pLmNsYXNzTGlzdC5yZW1vdmUoYGNlbGx1bGUtJHt0aGlzLmNsYXNzZX1gLCAnY2VsbHVsZS1wZXJzbycpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBvc2l0aW9uKS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcGVyc28nKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuUG9zaXRpb24pLmNsYXNzTGlzdC5hZGQoYGNlbGx1bGUtJHt0aGlzLmNsYXNzZX1gLCAnY2VsbHVsZS1wZXJzbycpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5Qb3NpdGlvbikuc2V0QXR0cmlidXRlKCdkYXRhLXBlcnNvJywgJycgKyB0aGlzLmNsYXNzZSk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5Qb3NpdGlvbjtcclxuICAgICAgICB0aGlzLm1vdXZlbWVudCsrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLm1vdXZlbWVudDsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByZW5kcmUoaWRBcm1lKSB7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTC4xMDIgLSBJREFybWUgOiBcIitpZEFybWUpIFxyXG4gICAgICAgIHRoaXMuYXJtZSA9IGpldS5hcm1lc1tOdW1iZXIoaWRBcm1lKV07XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMLTEwNiA6IHRoaXMuYXJtZSBcIit0aGlzLmFybWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jbGFzc2V9IHZvdXMgYXZleiA6ICR7dGhpcy5hcm1lLnR5cGV9IHF1aSBmYWl0ICR7dGhpcy5hcm1lLmRlZ2F0c30gZGUgZMOpZ2F0c2ApO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgZGVwb3NlcihzdXJDZWxsdWxlSUQpIHtcclxuICAgICAgICBzdXJDZWxsdWxlSUQuY2xhc3NMaXN0LmFkZChgY2VsbHVsZS0ke3RoaXMuYXJtZS50eXBlfWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW9uIGFybWUgOlwiK3RoaXMuYXJtZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhqZXUuYXJtZXMpO1xyXG4gICAgICAgIHN1ckNlbGx1bGVJRC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWRBcm1lJywgJycgK2pldS5hcm1lcy5pbmRleE9mKHRoaXMuYXJtZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQZXJzb25uYWdlIH07IiwiaW1wb3J0IHsgamV1IH0gZnJvbSBcIi4uL21haW4uanNcIjtcclxuXHJcbmNsYXNzIFBsYXRlYXUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbG9ubmVzLCByYW5nZWVzKSB7XHJcbiAgICB0aGlzLl9jYXNlc1BsZWluZXMgPSBbXTtcclxuICAgIHRoaXMuX2Nhc2VzT2JzdGFjbGVzID0gW107XHJcbiAgICB0aGlzLl9jYXNlc0FybWVzID0gW107XHJcbiAgICB0aGlzLl9jb2xvbm5lcyA9IGNvbG9ubmVzO1xyXG4gICAgdGhpcy5fcmFuZ2VlcyA9IHJhbmdlZXM7XHJcbiAgICB0aGlzLmNyZWVyKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY29udmVyc2lvbklkRW5Db29yZChpZCkge1xyXG4gICAgY29uc3QgW3gsIHldID0gaWQuc3BsaXQoXCIvXCIpO1xyXG4gICAgcmV0dXJuIHsgeDogTnVtYmVyKHgpLCB5OiBOdW1iZXIoeSkgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBtYWpJZChpZCwgdHJhbnNsYXRpb25YLCB0cmFuc2xhdGlvblkpIHtcclxuICAgIGNvbnN0IG9yaWdpbmVQb3NpdGlvbiA9IFBsYXRlYXUuY29udmVyc2lvbklkRW5Db29yZChpZCk7XHJcblxyXG4gICAgY29uc3QgblBvc2l0aW9uID0ge1xyXG4gICAgICB4OiBvcmlnaW5lUG9zaXRpb24ueCArIHRyYW5zbGF0aW9uWCxcclxuICAgICAgeTogb3JpZ2luZVBvc2l0aW9uLnkgKyB0cmFuc2xhdGlvblksXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBgJHtuUG9zaXRpb24ueH0vJHtuUG9zaXRpb24ueX1gO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0dGVyc1xyXG4gICAqL1xyXG4gIGdldCBjYXNlc1BsZWluZXMoKSB7IHJldHVybiB0aGlzLl9jYXNlc1BsZWluZXM7IH1cclxuXHJcbiAgZ2V0IGNhc2VzT2JzdGFjbGVzKCkgeyByZXR1cm4gdGhpcy5fY2FzZXNPYnN0YWNsZXM7IH1cclxuXHJcbiAgZ2V0IGNhc2VzQXJtZXMoKSB7IHJldHVybiB0aGlzLl9jYXNlc0FybWVzOyB9XHJcblxyXG4gIGdldCBjb2xvbm5lcygpIHsgcmV0dXJuIHRoaXMuX2NvbG9ubmVzOyB9XHJcblxyXG4gIGdldCByYW5nZWVzKCkgeyByZXR1cm4gdGhpcy5fcmFuZ2VlczsgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXR0ZXJzXHJcbiAgICovXHJcbiAgc2V0IGNhc2VzUGxlaW5lcyhjYXNlc1BsZWluZXMpIHsgdGhpcy5fY2FzZXNQbGVpbmVzID0gY2FzZXNQbGVpbmVzOyB9XHJcblxyXG4gIHNldCBjYXNlc09ic3RhY2xlcyhjYXNlT2JzdGFjbGVzKSB7IHRoaXMuX2Nhc2VzT2JzdGFjbGVzID0gY2FzZU9ic3RhY2xlczsgfVxyXG5cclxuICBzZXQgY2FzZXNBcm1lcyhjYXNlQXJtZXMpIHsgdGhpcy5fY2FzZXNBcm1lcyA9IGNhc2VBcm1lczsgfVxyXG5cclxuICBzZXQgY29sb25uZXMoY29sb25uZXMpIHsgdGhpcy5fY29sb25uZXMgPSBjb2xvbm5lczsgfVxyXG5cclxuICBzZXQgcmFuZ2VlcyhyYW5nZWVzKSB7IHRoaXMuX3JhbmdlZXMgPSByYW5nZWVzOyB9XHJcblxyXG4gIGNyZWVyKCkge1xyXG4gICAgbGV0IHBsYXRlYXVEZUpldSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhdGVhdS1kZS1qZXVcIik7XHJcblxyXG4gICAgLy8gQ3LDqWF0aW9uIGRlIGwnw6lsw6ltZW50IDx0YWJsZT4gZXQgZCd1biDDqWzDqW1lbnQgPHRib2R5PlxyXG4gICAgbGV0IHRibCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIGxldCB0YmxCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG5cclxuICAgIC8vIENyw6lhdGlvbiBkZSB0b3V0ZXMgbGVzIGNlbGx1bGVzIGR1IHRhYmxlYXVcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yYW5nZWVzOyBpKyspIHtcclxuICAgICAgLy8gQ3LDqWF0aW9uIGRlcyBsaWduZXMgZHUgdGFibGVhdVxyXG4gICAgICBsZXQgbGlnbmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICBsaWduZXMuc2V0QXR0cmlidXRlKFwibGlnbmVcIiwgXCJcIiArIGkpO1xyXG4gICAgICBsaWduZXMuY2xhc3NMaXN0LmFkZChcImNlbGx1bGUtcGxhdGVhdVwiKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2xvbm5lczsgaisrKSB7XHJcbiAgICAgICAgLy8gQ3LDqWF0aW9uIGRlcyDDqWzDqW1lbnRzIDx0ZD5cclxuICAgICAgICBsZXQgY2VsbHVsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblxyXG4gICAgICAgIC8qIENyw6lhdGlvbiBkZXMgaWQgZHluYW1pcXVlbWVudHMgYXV4IGNlbGx1bGVzIGVuIHLDqWN1cMOpcmFudCBsYSBjb25jYXTDqW5hdGlvbiBkZSBpICsgaiBldFxyXG4gICAgICAgICAqICBzdG9jayBsZSByZXN1bHRhdCBkYW5zIHVuZSBwcm9wcmnDqXTDqSByZXN1bHRhdFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICBjZWxsdWxlcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxpZ25lXCIsIFwiXCIgKyBpKTtcclxuICAgICAgICBjZWxsdWxlcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbG9ubmVcIiwgXCJcIiArIGopO1xyXG4gICAgICAgIGNlbGx1bGVzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiXCIgKyBqICsgXCIvXCIgKyBpKTtcclxuICAgICAgICBjZWxsdWxlcy5jbGFzc0xpc3QuYWRkKFwiY2VsbHVsZS1wbGF0ZWF1XCIpO1xyXG4gICAgICAgIGxpZ25lcy5hcHBlbmRDaGlsZChjZWxsdWxlcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEFqb3V0ZSBsYSBsaWduZSDDoCBsYSBmaW4gZHUgdGFibGVhdVxyXG4gICAgICB0YmxCb2R5LmFwcGVuZENoaWxkKGxpZ25lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0dHJlIGxlIDx0Ym9keT4gZGFucyA8dGFibGU+XHJcbiAgICB0YmwuYXBwZW5kQ2hpbGQodGJsQm9keSk7XHJcbiAgICAvLyBBam91dGVyIDx0YWJsZT4gYXUgbml2ZWF1IGRlIGwnaWQgcGxhdGVhdS1kZS1qZXVcclxuICAgIHBsYXRlYXVEZUpldS5hcHBlbmQodGJsKTtcclxuICAgIC8vIETDqWZpbml0aWlvbiBkZXMgYXR0cmlidXRzXHJcbiAgICB0Ymwuc2V0QXR0cmlidXRlKFwiYm9yZGVyXCIsIFwiMlwiKTtcclxuICAgIHRibC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjUwMFwiKTtcclxuICAgIHRibC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCI1MDBcIik7XHJcbiAgfVxyXG5cclxuICBnZW5lcmVyT2JzdGFjbGUobmJPYnN0YWNsZXMpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJPYnN0YWNsZXM7IGkrKykge1xyXG4gICAgICBsZXQgb2JzdGFjbGUgPSB0aGlzLnRyb3V2ZXJDYXNlVmlkZSgpO1xyXG5cclxuICAgICAgdGhpcy5jYXNlc1BsZWluZXMucHVzaChvYnN0YWNsZSk7XHJcbiAgICAgIHRoaXMuY2FzZXNPYnN0YWNsZXMucHVzaChvYnN0YWNsZSk7XHJcblxyXG4gICAgICBvYnN0YWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9ic3RhY2xlKTtcclxuICAgICAgb2JzdGFjbGUuY2xhc3NMaXN0LmFkZChcImNlbGx1bGUtb2JzdGFjbGVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBub21icmVBbGVhdG9pcmUobWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcclxuICB9XHJcblxyXG4gIHBsYWNlclBlcnNvbm5hZ2UocGVyc29ubmFnZSkge1xyXG4gICAgbGV0IGlkID0gdGhpcy50cm91dmVyQ2FzZVV0aWxpc2FibGUoKTtcclxuICAgIHRoaXMuY2FzZXNQbGVpbmVzLnB1c2goaWQpO1xyXG4gICAgY29uc29sZS5sb2coYGNhc2VzIHBlcnNvcyA6ICR7dGhpcy5jYXNlc1BlcnNvc31gKTtcclxuICAgIGxldCBjZWxsdWxlUGVyc29ubmFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGNlbGx1bGVQZXJzb25uYWdlLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgIGBjZWxsdWxlLSR7cGVyc29ubmFnZS5jbGFzc2V9YCxcclxuICAgICAgXCJjZWxsdWxlLXBlcnNvXCJcclxuICAgICk7XHJcbiAgICBjZWxsdWxlUGVyc29ubmFnZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBlcnNvXCIsIFwiXCIgKyBwZXJzb25uYWdlLmNsYXNzZSk7XHJcbiAgICBwZXJzb25uYWdlLnBvc2l0aW9uID0gY2VsbHVsZVBlcnNvbm5hZ2UuaWQ7XHJcbiAgfVxyXG5cclxuICBwbGFjZXJBcm1lKGFybWVzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFybWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBpZEFybWUgPSB0aGlzLnRyb3V2ZXJDYXNlVmlkZSgpO1xyXG5cclxuICAgICAgdGhpcy5jYXNlc1BsZWluZXMucHVzaChpZEFybWUpO1xyXG4gICAgICB0aGlzLmNhc2VzQXJtZXMucHVzaChpZEFybWUpO1xyXG5cclxuICAgICAgbGV0IGNlbGx1bGVBcm1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRBcm1lKTtcclxuICAgICAgY2VsbHVsZUFybWUuY2xhc3NMaXN0LmFkZChgY2VsbHVsZS0ke2FybWVzW2ldLnR5cGV9YCk7XHJcbiAgICAgIGNlbGx1bGVBcm1lLmNsYXNzTGlzdC5hZGQoXCJjZWxsdWxlLWFybWVcIik7XHJcbiAgICAgIGNlbGx1bGVBcm1lLnNldEF0dHJpYnV0ZShcImRhdGEtaWRBcm1lXCIsIFwiXCIgKyBpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJtZXM7XHJcbiAgfVxyXG5cclxuICB0cm91dmVyQ2FzZVZpZGUoKSB7XHJcbiAgICBsZXQgeCA9IHRoaXMubm9tYnJlQWxlYXRvaXJlKHRoaXMucmFuZ2Vlcyk7XHJcbiAgICBsZXQgeSA9IHRoaXMubm9tYnJlQWxlYXRvaXJlKHRoaXMuY29sb25uZXMpO1xyXG4gICAgY29uc3QgY2VsbHVsZSA9IFN0cmluZyh5KSArIFwiL1wiICsgU3RyaW5nKHgpO1xyXG5cclxuICAgIGlmICh0aGlzLmNhc2VzUGxlaW5lcy5pbmNsdWRlcyhjZWxsdWxlKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy50cm91dmVyQ2FzZVZpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2VsbHVsZTtcclxuICB9XHJcblxyXG4gIHRyb3V2ZXJDYXNlVXRpbGlzYWJsZSgpIHtcclxuICAgIGxldCBjZWxsdWxlID0gdGhpcy50cm91dmVyQ2FzZVZpZGUoKTtcclxuXHJcbiAgICBpZiAodGhpcy5jYXNlR2F1Y2hlTGlicmUoY2VsbHVsZSkpIHtcclxuICAgICAgcmV0dXJuIGNlbGx1bGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2FzZUhhdXRlTGlicmUoY2VsbHVsZSkpIHtcclxuICAgICAgcmV0dXJuIGNlbGx1bGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2FzZUJhc0xpYnJlKGNlbGx1bGUpKSB7XHJcbiAgICAgIHJldHVybiBjZWxsdWxlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNhc2VEcm9pdGVMaWJyZShjZWxsdWxlKSkge1xyXG4gICAgICByZXR1cm4gY2VsbHVsZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy50cm91dmVyQ2FzZVV0aWxpc2FibGUoKTtcclxuICB9XHJcblxyXG4gIGNhc2VIYXV0ZUxpYnJlKGNlbGx1bGUpIHtcclxuICAgIGxldCByZXN1bHQgPSB0cnVlO1xyXG4gICAgY29uc3QgY2VsbHVsZUhhdXRlID0gUGxhdGVhdS5tYWpJZChjZWxsdWxlLCAwLCAtMSk7XHJcbiAgICBjb25zdCBuUG9zaXRpb24gPSBQbGF0ZWF1LmNvbnZlcnNpb25JZEVuQ29vcmQoY2VsbHVsZUhhdXRlKTtcclxuXHJcbiAgICBpZihuUG9zaXRpb24ueSA8IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNhc2VzUGxlaW5lcy5pbmNsdWRlcyhjZWxsdWxlSGF1dGUpKSB7XHJcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBjYXNlQmFzTGlicmUoY2VsbHVsZSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcbiAgICBjb25zdCBjZWxsdWxlQmFzc2UgPSBQbGF0ZWF1Lm1haklkKGNlbGx1bGUsIDAsIDEpO1xyXG4gICAgY29uc3QgblBvc2l0aW9uID0gUGxhdGVhdS5jb252ZXJzaW9uSWRFbkNvb3JkKGNlbGx1bGVCYXNzZSk7XHJcblxyXG4gICAgaWYoblBvc2l0aW9uLnkgPj0gdGhpcy5yYW5nZWVzKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHRoaXMuY2FzZXNQbGVpbmVzLmluY2x1ZGVzKGNlbGx1bGVCYXNzZSkpIHtcclxuICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGNhc2VHYXVjaGVMaWJyZShjZWxsdWxlKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIGNvbnN0IGNlbGx1bGVHYXVjaGUgPSBQbGF0ZWF1Lm1haklkKGNlbGx1bGUsIC0xLCAwKTtcclxuICAgIGNvbnN0IG5Qb3NpdGlvbiA9IFBsYXRlYXUuY29udmVyc2lvbklkRW5Db29yZChjZWxsdWxlR2F1Y2hlKTtcclxuXHJcbiAgICBpZihuUG9zaXRpb24ueCA8IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuY2FzZXNQbGVpbmVzLmluY2x1ZGVzKGNlbGx1bGVHYXVjaGUpKSB7XHJcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBjYXNlRHJvaXRlTGlicmUoY2VsbHVsZSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcbiAgICBjb25zdCBjZWxsdWxlRHJvaXRlID0gUGxhdGVhdS5tYWpJZChjZWxsdWxlLCAxLCAwKTtcclxuICAgIGNvbnN0IG5Qb3NpdGlvbiA9IFBsYXRlYXUuY29udmVyc2lvbklkRW5Db29yZChjZWxsdWxlRHJvaXRlKTtcclxuXHJcbiAgICBpZihuUG9zaXRpb24ueCA+PSB0aGlzLmNvbG9ubmVzKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmNhc2VzUGxlaW5lcy5pbmNsdWRlcyhjZWxsdWxlRHJvaXRlKSkge1xyXG4gICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgZGVwbGFjZXJEcm9pdGUocGVyc29ubmFnZSkge1xyXG4gICAgLy9MZSBqb3VldXIgw6AgbGUgZHJvaXQgZGUgc2UgZMOpcGxhY2VyIGRlIDMgY2FzZXMgbWF4XHJcbiAgICBsZXQgcG9zaXRpb24gPSBwZXJzb25uYWdlLnBvc2l0aW9uO1xyXG4gICAgbGV0IGNlbGx1bGVEcm9pdGUgPSBQbGF0ZWF1Lm1haklkKHBvc2l0aW9uLCAxLCAwKTtcclxuICAgIGNvbnN0IG5Qb3NpdGlvbiA9IFBsYXRlYXUuY29udmVyc2lvbklkRW5Db29yZChjZWxsdWxlRHJvaXRlKTtcclxuXHJcbiAgICBpZihuUG9zaXRpb24ueCA8IHRoaXMuY29sb25uZXMgJiYgdGhpcy5lc3RDZVF1ZUxhQ2FzZUVzdExpYnJlKGNlbGx1bGVEcm9pdGUpKSB7XHJcbiAgICAgIHBlcnNvbm5hZ2UubW91dmVtZW50ID0gcGVyc29ubmFnZS5kZXBsYWNlcihwb3NpdGlvbiwgY2VsbHVsZURyb2l0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZXBsYWNlckdhdWNoZShwZXJzb25uYWdlKSB7XHJcbiAgICAvL0xlIGpvdWV1ciDDoCBsZSBkcm9pdCBkZSBzZSBkw6lwbGFjZXIgZGUgMyBjYXNlcyBtYXhcclxuICAgIGxldCBwb3NpdGlvbiA9IHBlcnNvbm5hZ2UucG9zaXRpb247XHJcbiAgICBjb25zdCBjZWxsdWxlR2F1Y2hlID0gUGxhdGVhdS5tYWpJZChwb3NpdGlvbiwgLTEsIDApO1xyXG4gICAgY29uc3QgblBvc2l0aW9uID0gUGxhdGVhdS5jb252ZXJzaW9uSWRFbkNvb3JkKGNlbGx1bGVHYXVjaGUpO1xyXG5cclxuICAgIGlmKG5Qb3NpdGlvbi54IDwgMCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxhIGNvbG9ubmUgZXN0IGVnYWxlIMOgIDBcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoblBvc2l0aW9uLnggPj0gMCAmJiB0aGlzLmVzdENlUXVlTGFDYXNlRXN0TGlicmUoY2VsbHVsZUdhdWNoZSkpIHtcclxuICAgICAgcGVyc29ubmFnZS5tb3V2ZW1lbnQgPSBwZXJzb25uYWdlLmRlcGxhY2VyKHBvc2l0aW9uLCBjZWxsdWxlR2F1Y2hlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlcGxhY2VySGF1dChwZXJzb25uYWdlKSB7XHJcbiAgICAvL0xlIGpvdWV1ciDDoCBsZSBkcm9pdCBkZSBzZSBkw6lwbGFjZXIgZGUgMyBjYXNlcyBtYXhcclxuICAgIGxldCBwb3NpdGlvbiA9IHBlcnNvbm5hZ2UucG9zaXRpb247XHJcbiAgICBjb25zdCBjZWxsdWxlSGF1dGUgPSBQbGF0ZWF1Lm1haklkKHBvc2l0aW9uLCAwLCAtMSk7XHJcbiAgICBjb25zdCBuUG9zaXRpb24gPSBQbGF0ZWF1LmNvbnZlcnNpb25JZEVuQ29vcmQoY2VsbHVsZUhhdXRlKTtcclxuXHJcbiAgICBpZihuUG9zaXRpb24ueSA8IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmVzdENlUXVlTGFDYXNlRXN0TGlicmUoY2VsbHVsZUhhdXRlKSkge1xyXG4gICAgICBwZXJzb25uYWdlLm1vdXZlbWVudCA9IHBlcnNvbm5hZ2UuZGVwbGFjZXIocG9zaXRpb24sIGNlbGx1bGVIYXV0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZXBsYWNlckJhcyhwZXJzb25uYWdlKSB7XHJcbiAgICAvL0xlIGpvdWV1ciDDoCBsZSBkcm9pdCBkZSBzZSBkw6lwbGFjZXIgZGUgMyBjYXNlcyBtYXhcclxuICAgIGxldCBwb3NpdGlvbiA9IHBlcnNvbm5hZ2UucG9zaXRpb247XHJcbiAgICBjb25zdCBjZWxsdWxlQmFzc2UgPSBQbGF0ZWF1Lm1haklkKHBvc2l0aW9uLCAwLCAxKTtcclxuICAgIGNvbnN0IG5Qb3NpdGlvbiA9IFBsYXRlYXUuY29udmVyc2lvbklkRW5Db29yZChjZWxsdWxlQmFzc2UpO1xyXG5cclxuICAgIGlmKG5Qb3NpdGlvbi55ID49IHRoaXMucmFuZ2Vlcykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5lc3RDZVF1ZUxhQ2FzZUVzdExpYnJlKGNlbGx1bGVCYXNzZSkpIHtcclxuICAgICAgcGVyc29ubmFnZS5tb3V2ZW1lbnQgPSBwZXJzb25uYWdlLmRlcGxhY2VyKHBvc2l0aW9uLCBjZWxsdWxlQmFzc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXN0Q2VRdWVMYUNhc2VFc3RMaWJyZShjZWxsdWxlKSB7XHJcbiAgICBsZXQgY2VsbCA9IFN0cmluZyhjZWxsdWxlKTtcclxuICAgIGxldCBpZFBlcnNvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbHVsZSk7XHJcblxyXG4gICAgaWYodGhpcy5jYXNlc09ic3RhY2xlcy5pbmNsdWRlcyhjZWxsKSB8fCBpZFBlcnNvLmNsYXNzTGlzdC5jb250YWlucyhcImNlbGx1bGUtcGVyc29cIikpIHtcclxuICAgICAgYWxlcnQoXCJMYSBjYXNlIG4nZXN0IHBhcyBsaWJyZSAhXCIpO1xyXG5cclxuICAgICAgaWYoaWRQZXJzby5jbGFzc0xpc3QuY29udGFpbnMoXCJjZWxsdWxlLXBlcnNvXCIpKSB7XHJcbiAgICAgICAgYWxlcnQoXCJWb3VzIHBvdXZleiBhdHRhcXVlciBsZSBwZXJzb25uYWdlXCIpO1xyXG4gICAgICAgICQoJyNidG4tYXR0YXF1ZXInKS5zaG93KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVzdENlUXVlTGFDYXNlQVVuZUFybWUoY2VsbCk7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBlc3RDZVF1ZUxhQ2FzZUFVbmVBcm1lKGNlbGx1bGUpIHtcclxuICAgIGxldCBjZWxsID0gU3RyaW5nKGNlbGx1bGUpO1xyXG4gICAgbGV0IHBlcnNvbm5hZ2U7XHJcbiAgICBsZXQgaWRBcm1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbCk7XHJcblxyXG4gICAgaWYodGhpcy5jYXNlc0FybWVzLmluY2x1ZGVzKGNlbGwpKSB7XHJcbiAgICAgIGxldCBkYXRhSWRBcm1lID0gaWRBcm1lLmdldEF0dHJpYnV0ZShcImRhdGEtaWRBcm1lXCIpO1xyXG4gICAgICBhbGVydChcIlByZW5kcmUgbCdhcm1lICFcIik7XHJcblxyXG4gICAgICBwZXJzb25uYWdlID0gamV1LnBldXRKb3VlcjtcclxuXHJcbiAgICAgIHBlcnNvbm5hZ2UuZGVwb3NlcihpZEFybWUpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJsIDMzMSA6IGRhdGFJZEFybWUgOiBcIiArIGRhdGFJZEFybWUpO1xyXG4gICAgICBwZXJzb25uYWdlLnByZW5kcmUoZGF0YUlkQXJtZSk7XHJcblxyXG4gICAgICAkKFwiI21vbi1hcm1lXCIpLmh0bWwocGVyc29ubmFnZS5hcm1lLmRlZ2F0cykuYXR0cihcImNsYXNzXCIsIGBjZWxsdWxlLSR7cGVyc29ubmFnZS5hcm1lLnR5cGV9IGltZy10aHVtYm5haWxgKTtcclxuXHJcbiAgICAgIGlkQXJtZS5jbGFzc0xpc3QucmVtb3ZlKGBjZWxsdWxlLSR7cGVyc29ubmFnZS5hcm1lLnR5cGV9YCk7XHJcbiAgICAgIGlkQXJtZS5jbGFzc0xpc3QucmVtb3ZlKFwiY2VsbHVsZS1hcm1lXCIpO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUGxhdGVhdSB9O1xyXG4iLCJpbXBvcnQgeyBQZXJzb25uYWdlIH0gZnJvbSAnLi9QZXJzb25uYWdlLmpzJztcclxuXHJcbmNsYXNzIFJvaUphZWRlbiBleHRlbmRzIFBlcnNvbm5hZ2Uge1xyXG4gICAgY29uc3RydWN0b3IocHNldWRvKSB7XHJcbiAgICAgICAgc3VwZXIocHNldWRvLCBcInJvaS1qYWVkZW5cIik7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5leHBvcnQgeyBSb2lKYWVkZW4gfTsiLCJpbXBvcnQgeyBQZXJzb25uYWdlIH0gZnJvbSAnLi9QZXJzb25uYWdlLmpzJztcclxuXHJcbmNsYXNzIFJvaUxpY2ggZXh0ZW5kcyBQZXJzb25uYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKHBzZXVkbykge1xyXG4gICAgICAgIHN1cGVyKHBzZXVkbywgXCJyb2ktbGljaFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUm9pTGljaCB9OyIsImZ1bmN0aW9uIGh0bWwobWVzc2FnZSkge1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0ZScpO1xyXG4gICAgZGl2LmlubmVySFRNTCArPSBtZXNzYWdlO1xyXG59XHJcblxyXG5leHBvcnQgeyBodG1sIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IEpldSB9IGZyb20gJy4vY2xhc3Nlcy9KZXUuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGpldSA9IG5ldyBKZXUoKTtcclxuXHJcbmpldS5hZmZpY2hlclNjb3JlKCk7XHJcbmpldS5ham91dGVySm91ZXVyKGpldS5qYWVkZW4pO1xyXG5qZXUuYWpvdXRlckpvdWV1cihqZXUubGljaCk7XHJcbmpldS5hZmZpY2hlckFybWUoKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgYWxlcnQoYCR7amV1LmpvdWV1cnNbMF19IHZvdXMgY29tbWVuY2V6IGxhIHBhcnRpZSAhYCk7XHJcbiAgICAkKCcubm9tLXBlcnNvbm5hZ2UnKS5odG1sKGpldS5qYWVkZW4uY2xhc3NlKS5hdHRyKCdpZCcsIGAke2pldS5qYWVkZW4uY2xhc3NlfS1oMmApO1xyXG4gICAgJCgnI21vbi1hcm1lJykuaHRtbChqZXUuamFlZGVuLmFybWUuZGVnYXRzKS5hdHRyKCdjbGFzcycsIGAke2pldS5qYWVkZW4uY2xhc3NlfSBjZWxsdWxlLSR7amV1LmphZWRlbi5hcm1lLnR5cGV9IGltZy10aHVtYm5haWxgKTtcclxuICAgICQoJyNidG4tYXR0YXF1ZXInKS5oaWRlKCk7XHJcblxyXG4gICAgLy9MZXMgYm91dG9ucyBkZXMgbW91dmVtZW50c1xyXG4gICAgJCgnI2J0bi1kcm9pdGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYoamV1LnBldXRKb3VlciA9PT0gamV1LmphZWRlbikge1xyXG4gICAgICAgICAgICBqZXUudmVyaWZNb3V2ZW1lbnQoamV1LmphZWRlbiwgamV1LmxpY2gpO1xyXG4gICAgICAgICAgICBqZXUucGxhdGVhdS5kZXBsYWNlckRyb2l0ZShqZXUuamFlZGVuKTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxpY2ggOiBwZXV0IGpvdWVyXCIgKyBqZXUucGV1dEpvdWVyLmNsYXNzZSk7XHJcbiAgICAgICAgICAgIGpldS52ZXJpZk1vdXZlbWVudChqZXUubGljaCwgamV1LmphZWRlbik7ICBcclxuICAgICAgICAgICAgamV1LnBsYXRlYXUuZGVwbGFjZXJEcm9pdGUoamV1LmxpY2gpOyAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNidG4tZ2F1Y2hlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmKGpldS5wZXV0Sm91ZXIgPT09IGpldS5qYWVkZW4pIHtcclxuICAgICAgICAgICAgamV1LnZlcmlmTW91dmVtZW50KGpldS5qYWVkZW4sIGpldS5saWNoKTtcclxuICAgICAgICAgICAgamV1LnBsYXRlYXUuZGVwbGFjZXJHYXVjaGUoamV1LmphZWRlbik7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMaWNoIDogcGV1dCBqb3VlclwiICsgamV1LnBldXRKb3Vlci5jbGFzc2UpXHJcbiAgICAgICAgICAgIGpldS52ZXJpZk1vdXZlbWVudChqZXUubGljaCwgamV1LmphZWRlbik7XHJcbiAgICAgICAgICAgIGpldS5wbGF0ZWF1LmRlcGxhY2VyR2F1Y2hlKGpldS5saWNoKTsgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNidG4taGF1dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHsgIFxyXG4gICAgICAgIGlmKGpldS5wZXV0Sm91ZXIgPT09IGpldS5qYWVkZW4pIHtcclxuICAgICAgICAgICAgamV1LnZlcmlmTW91dmVtZW50KGpldS5qYWVkZW4sIGpldS5saWNoKTtcclxuICAgICAgICAgICAgamV1LnBsYXRlYXUuZGVwbGFjZXJIYXV0KGpldS5qYWVkZW4pO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGljaCA6IHBldXQgam91ZXJcIiArIGpldS5wZXV0Sm91ZXIuY2xhc3NlKVxyXG4gICAgICAgICAgICBqZXUudmVyaWZNb3V2ZW1lbnQoamV1LmxpY2gsIGpldS5qYWVkZW4pO1xyXG4gICAgICAgICAgICBqZXUucGxhdGVhdS5kZXBsYWNlckhhdXQoamV1LmxpY2gpOyAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2J0bi1iYXMnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYoamV1LnBldXRKb3VlciA9PT0gamV1LmphZWRlbikge1xyXG4gICAgICAgICAgICBqZXUudmVyaWZNb3V2ZW1lbnQoamV1LmphZWRlbiwgamV1LmxpY2gpO1xyXG4gICAgICAgICAgICBqZXUucGxhdGVhdS5kZXBsYWNlckJhcyhqZXUuamFlZGVuKTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxpY2ggOiBwZXV0IGpvdWVyXCIgKyBqZXUucGV1dEpvdWVyLmNsYXNzZSlcclxuICAgICAgICAgICAgamV1LnZlcmlmTW91dmVtZW50KGpldS5saWNoLCBqZXUuamFlZGVuKTtcclxuICAgICAgICAgICAgamV1LnBsYXRlYXUuZGVwbGFjZXJCYXMoamV1LmxpY2gpOyAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQm91dG9uIGQnYXR0YXF1ZVxyXG4gICAgJCgnI2J0bi1hdHRhcXVlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpldS5jb21iYXQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEJvdXRvbiBwb3VyIHRlcm1pbmVyIGxlIHRvdXJcclxuICAgICQoJyNidG4tdGVybWluZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYoamV1LnBldXRKb3VlciA9PSBqZXUuamFlZGVuKSB7XHJcbiAgICAgICAgICAgIGpldS5jaGFuZ2VySm91ZXVyKGpldS5saWNoKTtcclxuICAgICAgICAgICAgamV1LmxpY2gubW91dmVtZW50ID0gMDtcclxuICAgICAgICAgICAgYWxlcnQoYCR7amV1LmpvdWV1cnNbMF19IHZvdXMgcGFzc2VyIHZvdHJlIHRvdXIgIWApO1xyXG4gICAgICAgICAgICBhbGVydChgVm91cyBwb3V2ZXogam91ZXIgJHtqZXUuam91ZXVyc1sxXX0sIHZvdHJlIGFkdmVyc2FpcmUgw6AgcGFzc8OpIHNvbiB0b3VyICFgKTsgICAgICAgICAgXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgamV1LmNoYW5nZXJKb3VldXIoamV1LmphZWRlbik7XHJcbiAgICAgICAgICAgIGpldS5qYWVkZW4ubW91dmVtZW50ID0gMDtcclxuICAgICAgICAgICAgYWxlcnQoYCR7amV1LmpvdWV1cnNbMV19IHZvdXMgcGFzc2VyIHZvdHJlIHRvdXIgIWApO1xyXG4gICAgICAgICAgICBhbGVydChgVm91cyBwb3V2ZXogam91ZXIgJHtqZXUuam91ZXVyc1swXX0sIHZvdHJlIGFkdmVyc2FpcmUgw6AgcGFzc8OpIHNvbiB0b3VyICFgKTsgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBEw6lwbGFjZW1lbnQgcGFyIGxlcyBmbMOqY2hlcyBkdSBjbGF2aWVyXHJcbiAgICAkKCdodG1sJykua2V5ZG93bihmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmKGUua2V5ID09ICdBcnJvd1JpZ2h0Jykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoamV1LnBldXRKb3VlciA9PSBqZXUuamFlZGVuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkplYWRlbiA6IHBldXQgam91ZXJcIitqZXUucGV1dEpvdWVyLmNsYXNzZSk7XHJcbiAgICAgICAgICAgICAgICBqZXUudmVyaWZNb3V2ZW1lbnQoamV1LmphZWRlbiwgamV1LmxpY2gpO1xyXG4gICAgICAgICAgICAgICAgamV1LnBsYXRlYXUuZGVwbGFjZXJEcm9pdGUoamV1LmphZWRlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxpY2ggOiBwZXV0IGpvZXVyXCIramV1LnBldXRKb3Vlci5jbGFzc2UpO1xyXG4gICAgICAgICAgICAgICAgamV1LnZlcmlmTW91dmVtZW50KGpldS5saWNoLCBqZXUuamFlZGVuKTtcclxuICAgICAgICAgICAgICAgIGpldS5wbGF0ZWF1LmRlcGxhY2VyRHJvaXRlKGpldS5saWNoKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH0gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIGlmKGUua2V5ID09ICdBcnJvd0xlZnQnKSB7XHJcbiAgICAgICAgICAgIGlmKGpldS5wZXV0Sm91ZXIgPT0gamV1LmphZWRlbikge1xyXG4gICAgICAgICAgICAgICAgamV1LnZlcmlmTW91dmVtZW50KGpldS5qYWVkZW4sIGpldS5saWNoKTtcclxuICAgICAgICAgICAgICAgIGpldS5wbGF0ZWF1LmRlcGxhY2VyR2F1Y2hlKGpldS5qYWVkZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgamV1LnZlcmlmTW91dmVtZW50KGpldS5saWNoLCBqZXUuamFlZGVuKTtcclxuICAgICAgICAgICAgICAgIGpldS5wbGF0ZWF1LmRlcGxhY2VyR2F1Y2hlKGpldS5saWNoKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZS5rZXkgPT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgICAgICAgIGlmKGpldS5wZXV0Sm91ZXIgPT0gamV1LmphZWRlbikge1xyXG4gICAgICAgICAgICAgICAgamV1LnZlcmlmTW91dmVtZW50KGpldS5qYWVkZW4sIGpldS5saWNoKTtcclxuICAgICAgICAgICAgICAgIGpldS5wbGF0ZWF1LmRlcGxhY2VySGF1dChqZXUuamFlZGVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGpldS52ZXJpZk1vdXZlbWVudChqZXUubGljaCwgamV1LmphZWRlbik7XHJcbiAgICAgICAgICAgICAgICBqZXUucGxhdGVhdS5kZXBsYWNlckhhdXQoamV1LmxpY2gpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihlLmtleSA9PSAnQXJyb3dEb3duJykge1xyXG4gICAgICAgICAgICBpZihqZXUucGV1dEpvdWVyID09IGpldS5qYWVkZW4pIHtcclxuICAgICAgICAgICAgICAgIGpldS52ZXJpZk1vdXZlbWVudChqZXUuamFlZGVuLCBqZXUubGljaCk7XHJcbiAgICAgICAgICAgICAgICBqZXUucGxhdGVhdS5kZXBsYWNlckJhcyhqZXUuamFlZGVuKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgamV1LnZlcmlmTW91dmVtZW50KGpldS5saWNoLCBqZXUuamFlZGVuKTtcclxuICAgICAgICAgICAgICAgIGpldS5wbGF0ZWF1LmRlcGxhY2VyQmFzKGpldS5saWNoKVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=332)}({332:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,"jeu",(function(){return z}));var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._casesPleines=[],this._casesObstacles=[],this._casesArmes=[],this._colonnes=t,this._rangees=n,this.creer()}var t,n,o;return t=e,(n=[{key:"creer",value:function(){for(var e=document.getElementById("plateau-de-jeu"),t=document.createElement("table"),n=document.createElement("tbody"),r=0;r<this.rangees;r++){var o=document.createElement("tr");o.setAttribute("ligne",""+r),o.classList.add("cellule-plateau");for(var a=0;a<this.colonnes;a++){var s=document.createElement("td");s.setAttribute("data-ligne",""+r),s.setAttribute("data-colonne",""+a),s.setAttribute("id",""+r+a),s.classList.add("cellule-plateau"),o.appendChild(s)}n.appendChild(o)}t.appendChild(n),e.append(t),t.setAttribute("border","2"),t.setAttribute("width","500"),t.setAttribute("height","500")}},{key:"genererObstacle",value:function(e){for(var t=0;t<e;t++){var n=this.trouverCaseVide();this.casesPleines.push(n),this.casesObstacles.push(n),(n=document.getElementById(n)).classList.add("cellule-obstacle")}}},{key:"nombreAleatoire",value:function(e){return Math.floor(Math.random()*e)}},{key:"placerPersonnage",value:function(e){var t=this.trouverCaseUtilisable();this.casesPleines.push(t),console.log("cases persos : ".concat(this.casesPersos," "));var n=document.getElementById(t);n.classList.add("cellule-".concat(e.classe),"cellule-perso"),n.setAttribute("data-perso",""+e.classe),e.position=n.id}},{key:"placerArme",value:function(e){for(var t=0;t<e.length;t++){var n=this.trouverCaseVide();this.casesPleines.push(n),this.casesArmes.push(n);var r=document.getElementById(n);r.classList.add("cellule-".concat(e[t].type)),r.classList.add("cellule-arme"),r.setAttribute("data-idArme",""+t)}return e}},{key:"trouverCaseVide",value:function(){var e=this.nombreAleatoire(this.rangees),t=this.nombreAleatoire(this.colonnes),n=String(e)+String(t);return this.casesPleines.includes(n)?this.trouverCaseVide():n}},{key:"trouverCaseUtilisable",value:function(){var e=this.trouverCaseVide();return this.caseGaucheLibre(e)||this.caseHauteLibre(e)||this.caseBasLibre(e)||this.caseDroiteLibre(e)?e:this.trouverCaseUtilisable()}},{key:"caseHauteLibre",value:function(e){var t=!0,n=document.getElementById(e);n.getAttribute("data-ligne")<10&&(t=!1);var r=n-10;return r<10&&(r="0"+r),r=r.toString(),this.casesPleines.includes(r)&&(t=!1),t}},{key:"caseBasLibre",value:function(e){var t=!0;89==e&&(t=!1);var n=e+10;return n=n.toString(),this.casesPleines.includes(n)&&(t=!1),t}},{key:"caseGaucheLibre",value:function(e){var t=!0;e%10==0&&(t=!1);var n=e-1;return n<10&&(n="0"+n),n=n.toString(),this.casesPleines.includes(n)&&(t=!1),t}},{key:"caseDroiteLibre",value:function(e){var t=!0;99==e&&(t=!1);var n=e+1;return n<10&&(n="0"+n),n=n.toString(),this.casesPleines.includes(n)&&(t=!1),t}},{key:"estCeQueLaCaseEstLibre",value:function(e){var t=String(e),n=document.getElementById(e);return this.casesObstacles.includes(t)||n.classList.contains("cellule-perso")?(alert("La case n'est pas libre !"),n.classList.contains("cellule-perso")&&alert("Vous pouvez attaquer le personnage"),!1):(this.estCeQueLaCaseAUneArme(t),!0)}},{key:"estCeQueLaCaseAUneArme",value:function(e){var t,n=String(e),r=document.getElementById(n);if(this.casesArmes.includes(n)){var o=r.getAttribute("data-idArme");return alert("Prendre l'arme !"),(t=z.peutJouer===z.jaeden.classe?z.jaeden:z.lich).prendre(o),$("#mon-arme").html(t.arme.degats).attr("class","cellule-".concat(t.arme.type," img-thumbnail")),r.removeAttribute("data-idArme"),r.classList.remove("cellule-".concat(t.arme.type)),r.classList.remove("cellule-arme"),this.casesArmes.splice(this.casesArmes.indexOf(n),1),!0}return!1}},{key:"deplacerDroite",value:function(e){var t=e.position;if(99==t)return!1;var n=parseInt(t)+1;n<=9&&(n="0"+n),this.estCeQueLaCaseEstLibre(n)&&(e.mouvement=e.deplacer(t,n))}},{key:"deplacerGauche",value:function(e){var t=e.position;if("00"==t)return!1;var n=parseInt(t)-1;n<=9&&(n="0"+n),this.estCeQueLaCaseEstLibre(n)&&(e.mouvement=e.deplacer(t,n))}},{key:"deplacerHaut",value:function(e){var t=e.position;if(t<=9)return!1;var n=parseInt(t)-10;n<=9&&(n="0"+n),this.estCeQueLaCaseEstLibre(n)&&(e.mouvement=e.deplacer(t,n))}},{key:"deplacerBas",value:function(e){var t=e.position;if(t>=99)return!1;var n=parseInt(t)+10;this.estCeQueLaCaseEstLibre(n)&&(e.mouvement=e.deplacer(t,n))}},{key:"casesPleines",get:function(){return this._casesPleines},set:function(e){this._casesPleines=e}},{key:"casesObstacles",get:function(){return this._casesObstacles},set:function(e){this._casesObstacles=e}},{key:"casesArmes",get:function(){return this._casesArmes},set:function(e){this._casesArmes=e}},{key:"colonnes",get:function(){return this._colonnes},set:function(e){this._colonnes=e}},{key:"rangees",get:function(){return this._rangees},set:function(e){this._rangees=e}}])&&r(t.prototype,n),o&&r(t,o),e}();function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){f(this,e),this._type=t,this._degats=n}var t,n,r;return t=e,(n=[{key:"type",get:function(){return this._type},set:function(e){this._type=e}},{key:"degats",get:function(){return this._degats},set:function(e){this._degats=e}}])&&h(t.prototype,n),r&&h(t,r),e}(),d=function(e){s(n,e);var t=u(n);function n(){return f(this,n),t.call(this,"hache",17)}return n}(p),m=function(e){s(n,e);var t=u(n);function n(){return f(this,n),t.call(this,"epee",15)}return n}(p),v=function(e){s(n,e);var t=u(n);function n(){return f(this,n),t.call(this,"glaive",18)}return n}(p),y=function(e){s(n,e);var t=u(n);function n(){return f(this,n),t.call(this,"baguette-magique",20)}return n}(p),b=function(e){s(n,e);var t=u(n);function n(){return f(this,n),t.call(this,"couteau",10)}return n}(p);function g(e){document.querySelector("#texte").innerHTML+=e}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._pseudo=t,this._classe=n,this._sante=100,this._position=r,this._mouvement=0,this._arme=new b,this._score={}}var t,n,r;return t=e,(n=[{key:"attaquer",value:function(e){if(e===this&&g("Vous êtes fous, vous êtes en train de vous taper !<br>"),e.vie)return g("".concat(this.pseudo," attaque ").concat(e.pseudo," avec son ").concat(this.arme.type," qui fait ").concat(this.arme.degats," dégâts.<br> ").concat(e.pseudo," vous perdez ").concat(this.arme.degats," points de vie.<br>")),e.sante-=this.arme.degats,this.arme&&(g("".concat(this.pseudo," attaque ").concat(e.pseudo," avec son ").concat(this.arme.type," qui fait ").concat(this.arme.degats," dégâts.<br> ").concat(e.pseudo," vous perdez ").concat(this.arme.degats," points de vie.<br>")),e.informer()),e.vie?void 0:(e.mourir(),void this.gagner());g("Vous ne pouvez pas attaquer un mort !<br>")}},{key:"gagner",value:function(){g("".concat(this.pseudo," Bravo, vous avez gagné !<br>"))}},{key:"informer",value:function(){g("".concat(this.pseudo," ").concat(this.classe," a ").concat(this.sante," points de vie.<br>"))}},{key:"mourir",value:function(){g("".concat(this.pseudo," Vous avez perdu, vous êtes mort !<br>"))}},{key:"deplacer",value:function(e,t){return document.getElementById(e).classList.remove("cellule-".concat(this.classe),"cellule-perso"),document.getElementById(e).removeAttribute("data-perso"),document.getElementById(t).classList.add("cellule-".concat(this.classe),"cellule-perso"),document.getElementById(t).setAttribute("data-perso",""+this.classe),this.position=t,this.mouvement++,this.mouvement}},{key:"prendre",value:function(e){switch(e){case"0":this.arme=z.armes[0],console.log("".concat(this.classe," vous avez : ").concat(this.arme.type," qui fait ").concat(this.arme.degats," de dégats"));break;case"1":this.arme=z.armes[1],console.log("".concat(this.classe," vous avez : ").concat(this.arme.type," qui fait ").concat(this.arme.degats," de dégats"));break;case"2":this.arme=z.armes[2],console.log("".concat(this.classe," vous avez : ").concat(this.arme.type," qui fait ").concat(this.arme.degats," de dégats"));break;case"3":this.arme=z.armes[3],console.log("".concat(this.classe," vous avez : ").concat(this.arme.type," qui fait ").concat(this.arme.degats," de dégats"));break;default:console.log("".concat(this.classe," vous avez : ").concat(this.arme.type," qui fait ").concat(this.arme.degats," de dégats"))}}},{key:"pseudo",get:function(){return this._pseudo},set:function(e){this._pseudo=e}},{key:"classe",get:function(){return this._classe},set:function(e){this._classe=e}},{key:"sante",get:function(){return this._sante},set:function(e){this._sante=e}},{key:"vie",get:function(){return!(this._sante<=0)}},{key:"position",get:function(){return this._position},set:function(e){this._position=e}},{key:"mouvement",get:function(){return this._mouvement},set:function(e){this._mouvement=e}},{key:"arme",get:function(){return this._arme},set:function(e){this._arme=e}},{key:"score",get:function(){return this._score},set:function(e){this._score=e}}])&&j(t.prototype,n),r&&j(t,r),e}();function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=L(e);if(t){var o=L(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return A(this,n)}}function A(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(n,e);var t=O(n);function n(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t.call(this,e,"roi-jaeden")}return n}(_);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=M(e);if(t){var o=M(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return C(this,n)}}function C(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(n,e);var t=J(n);function n(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t.call(this,e,"roi-lich")}return n}(_);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.jaeden=new P(this.pseudo),this.lich=new B(this.pseudo),this._armes=[],this.armes=new m,this.armes=new d,this.armes=new v,this.armes=new y,this._plateau=new o(10,10),this.plateau.genererObstacle(1),this.plateau.placerArme(this.armes),this._joueurs=[],this._peutJouer=this.jaeden.classe,this._msgAlert=""}var t,n,r;return t=e,(n=[{key:"ajouterJoueur",value:function(e){this.joueurs=e,this.plateau.placerPersonnage(e),console.log(this.armes)}},{key:"afficherScore",value:function(){var e=this.inscrireJoueur();this.jaeden.score={idJaeden:$("#jaeden").html(e[0]),scoreJaeden:$("#score-jaeden").html(" : ".concat(this.jaeden.sante))},this.lich.score={idLich:$("#lich").html(e[1]),scoreLich:$("#score-lich").html(" : ".concat(this.lich.sante))}}},{key:"afficherArme",value:function(){var e,t=[],n=$("#armes");this.armes.forEach((function(r){e='<p class="pl-4">\n            <img src="images/'.concat(r.type,'.png" alt="Image ').concat(r.type,'" class="img-thumbnail" id="').concat(r.type,'">\n            <span class="degats">').concat(r.degats,'</span>\n            <br>\n            <span class="nom-arme">').concat(r.type,"</span>\n            </p>"),t.push(e),n.html(t.join(""))}))}},{key:"inscrireJoueur",value:function(){do{this.jaeden.pseudo=prompt("Veuillez saisir le prénom du premier joueur :")}while(""==this.jaeden.pseudo);null==this.jaeden.pseudo&&(window.location.href="index.html");do{this.lich.pseudo=prompt("Veuillez saisir le prénom du deuxième joueur :")}while(""==this.lich.pseudo);return null==this.lich.pseudo&&(window.location.href="index.html"),this.joueurs=this.jaeden.pseudo,this.joueurs=this.lich.pseudo,this.joueurs}},{key:"verifMouvement",value:function(e,t){e.mouvement>=100&&(this.changerJoueur(t.classe),alert("".concat(this.joueurs[0]," vous avez fini votre tour !")),alert("Vous pouvez jouer ".concat(this.joueurs[1])),$(".nom-personnage").html(t.classe).attr("id","".concat(t.classe,"-h2")),$("#mon-arme").html(t.arme.degats).attr("class","".concat(t.classe," cellule-").concat(t.arme.type," img-thumbnail")),e.mouvement=0,t.mouvement=0,console.log("perso 1 : ".concat(e.mouvement)),console.log("perso 2 : ".concat(t.mouvement)))}},{key:"changerJoueur",value:function(e){this.peutJouer=e}},{key:"joueurs",get:function(){return this._joueurs},set:function(e){this._joueurs.push(e)}},{key:"plateau",get:function(){return this._plateau},set:function(e){this._plateau=e}},{key:"armes",get:function(){return this._armes},set:function(e){this._armes.push(e)}},{key:"peutJouer",get:function(){return this._peutJouer},set:function(e){this._peutJouer=e}},{key:"msgAlert",get:function(){return this._msgAlert},set:function(e){this._msgAlert=e}}])&&R(t.prototype,n),r&&R(t,r),e}());z.afficherScore(),z.ajouterJoueur(z.jaeden),z.ajouterJoueur(z.lich),z.afficherArme(),$(document).ready((function(){alert("".concat(z.joueurs[0]," vous commencez la partie !")),$(".nom-personnage").html(z.jaeden.classe).attr("id","".concat(z.jaeden.classe,"-h2")),$("#mon-arme").html(z.jaeden.arme.degats).attr("class","".concat(z.jaeden.classe," cellule-").concat(z.jaeden.arme.type," img-thumbnail")),$("#btn-droite").on("click",(function(e){z.peutJouer==z.jaeden.classe?(z.verifMouvement(z.jaeden,z.lich),z.plateau.deplacerDroite(z.jaeden)):(console.log("Lich : peut joeur"+z.peutJouer),z.verifMouvement(z.lich,z.jaeden),z.plateau.deplacerDroite(z.lich))})),$("#btn-gauche").on("click",(function(e){z.peutJouer==z.jaeden.classe?(z.verifMouvement(z.jaeden,z.lich),z.plateau.deplacerGauche(z.jaeden)):(console.log("Lich : peut joeur"+z.peutJouer),z.verifMouvement(z.lich,z.jaeden),z.plateau.deplacerGauche(z.lich))})),$("#btn-haut").on("click",(function(e){z.peutJouer==z.jaeden.classe?(z.verifMouvement(z.jaeden,z.lich),z.plateau.deplacerHaut(z.jaeden)):(console.log("Lich : peut joeur"+z.peutJouer),z.verifMouvement(z.lich,z.jaeden),z.plateau.deplacerHaut(z.lich))})),$("#btn-bas").on("click",(function(e){z.peutJouer==z.jaeden.classe?(z.verifMouvement(z.jaeden,z.lich),z.plateau.deplacerBas(z.jaeden)):(console.log("Lich : peut joeur"+z.peutJouer),z.verifMouvement(z.lich,z.jaeden),z.plateau.deplacerBas(z.lich))})),$("#btn-attaquer").on("click",(function(){})),$("#btn-terminer").on("click",(function(e){z.peutJouer==z.jaeden.classe?(z.changerJoueur(z.lich.classe),z.lich.mouvement=0,alert("".concat(z.joueurs[0]," vous passer votre tour !")),alert("Vous pouvez jouer ".concat(z.joueurs[1],", votre adversaire à passé son tour !"))):(z.changerJoueur(z.jaeden.classe),z.jaeden.mouvement=0,alert("".concat(z.joueurs[1]," vous passer votre tour !")),alert("Vous pouvez jouer ".concat(z.joueurs[0],", votre adversaire à passé son tour !")))})),$("html").keydown((function(e){e.preventDefault(),"ArrowRight"==e.key&&(z.peutJouer==z.jaeden.classe?(console.log("Jeaden : peut jouer"+z.peutJouer),z.verifMouvement(z.jaeden,z.lich),z.plateau.deplacerDroite(z.jaeden)):(console.log("Lich : peut joeur"+z.peutJouer),z.verifMouvement(z.lich,z.jaeden),z.plateau.deplacerDroite(z.lich))),"ArrowLeft"==e.key&&(z.peutJouer==z.jaeden.classe?(z.verifMouvement(z.jaeden,z.lich),z.plateau.deplacerGauche(z.jaeden)):(z.verifMouvement(z.lich,z.jaeden),z.plateau.deplacerGauche(z.lich))),"ArrowUp"==e.key&&(z.peutJouer==z.jaeden.classe?(z.verifMouvement(z.jaeden,z.lich),z.plateau.deplacerHaut(z.jaeden)):(z.verifMouvement(z.lich,z.jaeden),z.plateau.deplacerHaut(z.lich))),"ArrowDown"==e.key&&(z.peutJouer==z.jaeden.classe?(z.verifMouvement(z.jaeden,z.lich),z.plateau.deplacerBas(z.jaeden)):(z.verifMouvement(z.lich,z.jaeden),z.plateau.deplacerBas(z.lich)))}))}))}});
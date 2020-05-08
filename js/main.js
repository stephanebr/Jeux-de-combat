import { Jeu } from './classes/Jeu.js';

const jeu = new Jeu();

jeu.afficherScore();
jeu.ajouterJoueur(jeu.jaeden);
jeu.ajouterJoueur(jeu.lich);
jeu.afficherArme();

$(document).ready(function() {
    $(`.${jeu.lich.classe}-btns`).attr('disabled', 'disabled');
    alert(`${jeu.joueurs[0]} vous commencez la partie !`);

    //Les boutons de mouvement du roi Jaeden
    $('#jaeden-btn-droite').on('click', function(e) {
        jeu.verifMouvement(jeu.jaeden, jeu.lich, `.${jeu.jaeden.classe}-btns`, `.${jeu.lich.classe}-btns`);
        jeu.plateau.deplacerDroite(jeu.jaeden);
    });

    $('#jaeden-btn-gauche').on('click', function(e) {
        jeu.verifMouvement(jeu.jaeden, jeu.lich, `.${jeu.jaeden.classe}-btns`, `.${jeu.lich.classe}-btns`);
        jeu.plateau.deplacerGauche(jeu.jaeden);
    });

    $('#jaeden-btn-haut').on('click', function(e) {  
        jeu.verifMouvement(jeu.jaeden, jeu.lich, `.${jeu.jaeden.classe}-btns`, `.${jeu.lich.classe}-btns`);
        jeu.plateau.deplacerHaut(jeu.jaeden);
    });

    $('#jaeden-btn-bas').on('click', function(e) {
        jeu.verifMouvement(jeu.jaeden, jeu.lich, `.${jeu.jaeden.classe}-btns`, `.${jeu.lich.class}-btns`);
        jeu.plateau.deplacerBas(jeu.jaeden);
    });

    $('#jaeden-btn-attaquer').on('click', function() {
        jeu.jaeden.attaquer(jeu.lich);
    });

    $('#jaeden-btn-terminer').on('click', function(e) {
        jeu.jaeden.mouvement = 3;  
        jeu.desactiverBoutons(`.${jeu.jaeden.classe}-btns`, jeu.joueurs[1]);
        jeu.activerBoutons(`.${jeu.lich.classe}-btns`, jeu.joueurs[0]);
    });
            
    //Les boutons de mouvements du roi Lich
    $('#lich-btn-droite').on('click', function(e) {
        jeu.verifMouvement(jeu.lich, jeu.jaeden, `.${jeu.lich.classe}-btns`, `.${jeu.jaeden.classe}-btns`);
        jeu.plateau.deplacerDroite(jeu.lich);
    });

    $('#lich-btn-gauche').on('click', function(e) {
        jeu.verifMouvement(jeu.lich, jeu.jaeden, `.${jeu.lich.classe}-btns`, `.${jeu.jaeden.classe}-btns`);
        jeu.plateau.deplacerGauche(jeu.lich);
    });

    $('#lich-btn-haut').on('click', function(e) {
        jeu.verifMouvement(jeu.lich, jeu.jaeden, `.${jeu.lich.classe}-btns`, `.${jeu.jaeden.classe}-btns`);
        jeu.plateau.deplacerHaut(jeu.lich);
    });

    $('#lich-btn-bas').on('click', function(e) {
        jeu.verifMouvement(jeu.lich, jeu.jaeden, `.${jeu.lich.classe}-btns`, `.${jeu.jaeden.classe}-btns`);
        jeu.plateau.deplacerBas(jeu.lich);
    });

    $('#lich-btn-terminer').on('click', function(e) {  
        jeu.lich.mouvement = 3;
        jeu.desactiverBoutons(`.${jeu.lich.classe}-btns`, jeu.joueurs[1]);
        jeu.activerBoutons(`.${jeu.jaeden.classe}-btns`, jeu.joueurs[0]);
    });

    $("html").keydown(function(e){
        e.preventDefault();

        if(e.key == 'ArrowRight') {
            if(jeu.peutJouer == jeu.jaeden.classe) {
                jeu.verifMouvement(jeu.jaeden, jeu.lich, `.${jeu.jaeden.classe}-btns`, `.${jeu.lich.classe}-btns`);
                jeu.plateau.deplacerDroite(jeu.jaeden);
            }
            else {
                jeu.verifMouvement(jeu.lich, jeu.jaeden, `.${jeu.lich.classe}-btns`, `.${jeu.jaeden.classe}-btns`);
                jeu.plateau.deplacerDroite(jeu.lich);
            }            
        }                

        if(e.key == 'ArrowLeft') {
            if(jeu.peutJouer == jeu.jaeden.classe) {
                jeu.verifMouvement(jeu.jaeden, jeu.lich, `.${jeu.jaeden.classe}-btns`, `.${jeu.lich.classe}-btns`);
                jeu.plateau.deplacerGauche(jeu.jaeden);
            }
            else {
                jeu.verifMouvement(jeu.lich, jeu.jaeden, `.${jeu.lich.classe}-btns`, `.${jeu.jaeden.classe}-btns`);
                jeu.plateau.deplacerGauche(jeu.lich);
            }            
        }

        if(e.key == 'ArrowUp') {
            if(jeu.peutJouer == jeu.jaeden.classe) {
                jeu.verifMouvement(jeu.jaeden, jeu.lich, `.${jeu.jaeden.classe}-btns`, `.${jeu.lich.classe}-btns`);
                jeu.plateau.deplacerHaut(jeu.jaeden);
            }
            else {
                jeu.verifMouvement(jeu.lich, jeu.jaeden, `.${jeu.lich.classe}-btns`, `.${jeu.jaeden.classe}-btns`);
                jeu.plateau.deplacerHaut(jeu.lich);
            }            
        }

        if(e.key == 'ArrowDown') {
            if(jeu.peutJouer == jeu.jaeden.classe) {
                jeu.verifMouvement(jeu.jaeden, jeu.lich, `.${jeu.jaeden.classe}-btns`, `.${jeu.lich.classe}-btns`);
                jeu.plateau.deplacerBas(jeu.jaeden)
            }
            else {
                jeu.verifMouvement(jeu.lich, jeu.jaeden, `.${jeu.lich.classe}-btns`, `.${jeu.jaeden.classe}-btns`);
                jeu.plateau.deplacerBas(jeu.lich)
            }           
        }
    });
});
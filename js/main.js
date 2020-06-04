import { Jeu } from './classes/Jeu.js';

/**
 * Export de la class Jeu
 * Instance de la class Jeu
 */
export const jeu = new Jeu();

/**
 * Appelle des méthodes de la class Jeu
 */
jeu.afficherJoueur();
jeu.afficherScore();
jeu.ajouterJoueur(jeu.jaeden);
jeu.ajouterJoueur(jeu.lich);
jeu.afficherArme();

$(document).ready(function() {
    alert(`${jeu.jaeden.pseudo} vous commencez la partie !`);
    $('.nom-personnage').html(jeu.jaeden.classe).attr('id', `${jeu.jaeden.classe}-h2`);
    $('#mon-arme').html(jeu.jaeden.arme.degats).attr('class', `${jeu.jaeden.classe} cellule-${jeu.jaeden.arme.type} img-thumbnail offset-4`);
    $('#btn-attaquer').hide();
    $('#btn-defendre').hide();
    $('#description').hide();

    //Les boutons des mouvements
    $('#btn-droite').on('click', function(e) {
        if(jeu.persoActif === jeu.jaeden) {
            jeu.verifMouvement(jeu.jaeden, jeu.lich);
            jeu.plateau.deplacerDroite(jeu.jaeden);            
        } else {
            jeu.verifMouvement(jeu.lich, jeu.jaeden);  
            jeu.plateau.deplacerDroite(jeu.lich);         
        }
    });

    $('#btn-gauche').on('click', function(e) {
        if(jeu.persoActif === jeu.jaeden) {
            jeu.verifMouvement(jeu.jaeden, jeu.lich);
            jeu.plateau.deplacerGauche(jeu.jaeden);
           
        } else {
            jeu.verifMouvement(jeu.lich, jeu.jaeden);   
            jeu.plateau.deplacerGauche(jeu.lich);        
        }
    });

    $('#btn-haut').on('click', function(e) {  
        if(jeu.persoActif === jeu.jaeden) {
            jeu.verifMouvement(jeu.jaeden, jeu.lich);
            jeu.plateau.deplacerHaut(jeu.jaeden);
           
        } else {
            jeu.verifMouvement(jeu.lich, jeu.jaeden);
            jeu.plateau.deplacerHaut(jeu.lich);           
        }
    });

    $('#btn-bas').on('click', function(e) {
        if(jeu.persoActif === jeu.jaeden) {
            jeu.verifMouvement(jeu.jaeden, jeu.lich);
            jeu.plateau.deplacerBas(jeu.jaeden);
           
        } 
        else {
            jeu.verifMouvement(jeu.lich, jeu.jaeden);
            jeu.plateau.deplacerBas(jeu.lich);           
        }
    });

    // Bouton pour terminer le tour
    $('#btn-terminer').on('click', function(e) {
        if(jeu.persoActif === jeu.jaeden) {
            jeu.changerJoueur(jeu.lich);
            jeu.lich.mouvement = 0;
            alert(`${jeu.jaeden.pseudo} vous passer votre tour !`);
            alert(`Vous pouvez jouer ${jeu.lich.pseudo}, votre adversaire à passé son tour !`);          
        } 
        else {
            jeu.changerJoueur(jeu.jaeden);
            jeu.jaeden.mouvement = 0;
            alert(`${jeu.lich.pseudo} vous passer votre tour !`);
            alert(`Vous pouvez jouer ${jeu.jaeden.pseudo}, votre adversaire à passé son tour !`);   
        }
    });

    // Bouton d'attaque
    $('#btn-attaquer').on('click', function() {
        jeu.combat();
    });

    // Bouton parer
    $('#btn-defendre').on('click', function() {
        jeu.persoActif.defenseActive = true;
        alert(`${jeu.persoActif.pseudo} vous vous défendez contre la prochaine attaque !`);

        if(jeu.persoActif === jeu.jaeden) {
            jeu.changerJoueur(jeu.lich);
        } else {
            jeu.changerJoueur(jeu.jaeden);
        }
    });

    // Déplacement par les flêches du clavier
    $('html').keydown(function(e){
        e.preventDefault();

        if(e.key == 'ArrowRight') {
            if(jeu.persoActif === jeu.jaeden) {
                jeu.verifMouvement(jeu.jaeden, jeu.lich);
                jeu.plateau.deplacerDroite(jeu.jaeden);
            }
            else {
                jeu.verifMouvement(jeu.lich, jeu.jaeden);
                jeu.plateau.deplacerDroite(jeu.lich);
            }            
        }                

        if(e.key == 'ArrowLeft') {
            if(jeu.persoActif === jeu.jaeden) {
                jeu.verifMouvement(jeu.jaeden, jeu.lich);
                jeu.plateau.deplacerGauche(jeu.jaeden);
            }
            else {
                jeu.verifMouvement(jeu.lich, jeu.jaeden);
                jeu.plateau.deplacerGauche(jeu.lich);
            }            
        }

        if(e.key == 'ArrowUp') {
            if(jeu.persoActif === jeu.jaeden) {
                jeu.verifMouvement(jeu.jaeden, jeu.lich);
                jeu.plateau.deplacerHaut(jeu.jaeden);
            }
            else {
                jeu.verifMouvement(jeu.lich, jeu.jaeden);
                jeu.plateau.deplacerHaut(jeu.lich);
            }            
        }

        if(e.key == 'ArrowDown') {
            if(jeu.persoActif === jeu.jaeden) {
                jeu.verifMouvement(jeu.jaeden, jeu.lich);
                jeu.plateau.deplacerBas(jeu.jaeden);
            }
            else {
                jeu.verifMouvement(jeu.lich, jeu.jaeden);
                jeu.plateau.deplacerBas(jeu.lich)
            }           
        }
    });
});
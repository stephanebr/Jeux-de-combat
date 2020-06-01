import { Jeu } from './classes/Jeu.js';

export const jeu = new Jeu();

jeu.afficherJoueur();
jeu.afficherScore();
jeu.ajouterJoueur(jeu.jaeden);
jeu.ajouterJoueur(jeu.lich);
jeu.afficherArme();

$(document).ready(function() {
    alert(`${jeu.joueurs[0]} vous commencez la partie !`);
    $('.nom-personnage').html(jeu.jaeden.classe).attr('id', `${jeu.jaeden.classe}-h2`);
    console.log(jeu.jaeden);
    $('#mon-arme').html(jeu.jaeden.arme.degats).attr('class', `${jeu.jaeden.classe} cellule-${jeu.jaeden.arme.type} img-thumbnail`);
    $('#btn-attaquer').hide();
    $('#btn-defendre').hide();

    //Les boutons des mouvements
    $('#btn-droite').on('click', function(e) {
        if(jeu.persoActif === jeu.jaeden) {
            jeu.verifMouvement(jeu.jaeden, jeu.lich);
            jeu.plateau.deplacerDroite(jeu.jaeden);
        } else {
            console.log("Lich : peut jouer" + jeu.persoActif.classe);
            jeu.verifMouvement(jeu.lich, jeu.jaeden);  
            jeu.plateau.deplacerDroite(jeu.lich);         
        }
    });

    $('#btn-gauche').on('click', function(e) {
        if(jeu.persoActif === jeu.jaeden) {
            jeu.verifMouvement(jeu.jaeden, jeu.lich);
            jeu.plateau.deplacerGauche(jeu.jaeden);
           
        } else {
            console.log("Lich : peut jouer" + jeu.persoActif.classe)
            jeu.verifMouvement(jeu.lich, jeu.jaeden);
            jeu.plateau.deplacerGauche(jeu.lich);           
        }
    });

    $('#btn-haut').on('click', function(e) {  
        if(jeu.persoActif === jeu.jaeden) {
            jeu.verifMouvement(jeu.jaeden, jeu.lich);
            jeu.plateau.deplacerHaut(jeu.jaeden);
           
        } else {
            console.log("Lich : peut jouer" + jeu.persoActif.classe)
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
            console.log("Lich : peut jouer" + jeu.persoActif.classe)
            jeu.verifMouvement(jeu.lich, jeu.jaeden);
            jeu.plateau.deplacerBas(jeu.lich);           
        }
    });

    // Bouton pour terminer le tour
    $('#btn-terminer').on('click', function(e) {
        if(jeu.persoActif === jeu.jaeden) {
            jeu.changerJoueur(jeu.lich);
            jeu.lich.mouvement = 0;
            alert(`${jeu.joueurs[0]} vous passer votre tour !`);
            alert(`Vous pouvez jouer ${jeu.joueurs[1]}, votre adversaire à passé son tour !`);          
        } 
        else {
            jeu.changerJoueur(jeu.jaeden);
            jeu.jaeden.mouvement = 0;
            alert(`${jeu.joueurs[1]} vous passer votre tour !`);
            alert(`Vous pouvez jouer ${jeu.joueurs[0]}, votre adversaire à passé son tour !`);   
        }
    });

    // Bouton d'attaque
    $('#btn-attaquer').on('click', function() {
        jeu.combat();
    });

    // Bouton parer
    $('#btn-defendre').on('click', function() {
        jeu.persoActif.defenseActive = true;
        console.log(`${jeu.persoActif.classe} se défend`);

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
                console.log("Jeaden : peut jouer"+jeu.persoActif.classe);
                jeu.verifMouvement(jeu.jaeden, jeu.lich);
                jeu.plateau.deplacerDroite(jeu.jaeden);
            }
            else {
                console.log("Lich : peut joeur"+jeu.persoActif.classe);
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
                jeu.plateau.deplacerBas(jeu.jaeden)
            }
            else {
                jeu.verifMouvement(jeu.lich, jeu.jaeden);
                jeu.plateau.deplacerBas(jeu.lich)
            }           
        }
    });
});
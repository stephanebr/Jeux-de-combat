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
            if(jeu.peutSeDeplacer(jeu.persoActif)) {
                jeu.plateau.deplacerDroite(jeu.persoActif);
            }

        } else {
            if(jeu.peutSeDeplacer(jeu.persoActif)) {
                jeu.plateau.deplacerDroite(jeu.persoActif);
            }
        }           
    });

    $('#btn-gauche').on('click', function(e) {
        if(jeu.persoActif === jeu.jaeden) {
            if(jeu.peutSeDeplacer(jeu.persoActif)) {
                jeu.plateau.deplacerGauche(jeu.persoActif);
            }
           
        } else {
            if(jeu.peutSeDeplacer(jeu.persoActif)) {
                jeu.plateau.deplacerGauche(jeu.persoActif); 
            }                    
        }
    });

    $('#btn-haut').on('click', function(e) {  
        if(jeu.persoActif === jeu.jaeden) {
            if(jeu.peutSeDeplacer(jeu.persoActif)) {
                jeu.plateau.deplacerHaut(jeu.persoActif);
            }           
        } else {
            if(jeu.peutSeDeplacer(jeu.persoActif)) {
                jeu.plateau.deplacerHaut(jeu.persoActif);
            }                       
        }
    });

    $('#btn-bas').on('click', function(e) {
        if(jeu.persoActif === jeu.jaeden) {
            if(jeu.peutSeDeplacer(jeu.persoActif)) {
                jeu.plateau.deplacerBas(jeu.persoActif);
            }           
        } 
        else {
            if(jeu.peutSeDeplacer(jeu.persoActif)) {
                jeu.plateau.deplacerBas(jeu.persoActif); 
            }                      
        }
    });

    // Bouton pour terminer le tour
    $('#btn-terminer').on('click', function(e) {
        if(jeu.persoActif === jeu.jaeden) {
            alert(`${jeu.persoActif.pseudo} vous passer votre tour !`);
            jeu.changerJoueur();
            alert(`Vous pouvez jouer ${jeu.persoActif.pseudo}, votre adversaire à passé son tour !`);          
        } 
        else {
            alert(`${jeu.persoActif.pseudo} vous passer votre tour !`);
            jeu.changerJoueur();
            alert(`Vous pouvez jouer ${jeu.persoActif.pseudo}, votre adversaire à passé son tour !`);   
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
            jeu.changerJoueur();
        } else {
            jeu.changerJoueur();
        }
    });

    // Déplacement par les flêches du clavier
    $('html').keydown(function(e){
        e.preventDefault();

        if(e.key == 'ArrowRight') {
            if(jeu.persoActif === jeu.jaeden) {
                if(jeu.peutSeDeplacer(jeu.persoActif)) {
                    jeu.plateau.deplacerDroite(jeu.persoActif);
                }
            }
            else {
                if(jeu.peutSeDeplacer(jeu.persoActif)) {
                    jeu.plateau.deplacerDroite(jeu.persoActif);
                }
            }            
        }                

        if(e.key == 'ArrowLeft') {
            if(jeu.persoActif === jeu.jaeden) {
                if(jeu.peutSeDeplacer(jeu.persoActif)) {
                    jeu.plateau.deplacerGauche(jeu.persoActif);
                }                
            }
            else {
                if(jeu.peutSeDeplacer(jeu.persoActif)) {
                    jeu.plateau.deplacerGauche(jeu.persoActif);
                }                
            }            
        }

        if(e.key == 'ArrowUp') {
            if(jeu.persoActif === jeu.jaeden) {
                if(jeu.peutSeDeplacer(jeu.persoActif)) {
                    jeu.plateau.deplacerHaut(jeu.persoActif);
                }

            } else {
                if(jeu.peutSeDeplacer(jeu.persoActif)) {
                    jeu.plateau.deplacerHaut(jeu.persoActif);
                }                
            }            
        }

        if(e.key == 'ArrowDown') {
            if(jeu.persoActif === jeu.jaeden) {
                if(jeu.peutSeDeplacer(jeu.persoActif)) {
                    jeu.plateau.deplacerBas(jeu.persoActif);
                }                
            }
            else {
                if(jeu.peutSeDeplacer(jeu.persoActif)) {
                    jeu.plateau.deplacerBas(jeu.persoActif);
                }                
            }           
        }
    });
});
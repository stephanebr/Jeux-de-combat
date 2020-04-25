import { Jeu } from './classes/Jeu.js';

const jeu = new Jeu();

jeu.afficherScore();
jeu.ajouterJoueur(jeu.jaeden);
jeu.ajouterJoueur(jeu.lich);
jeu.afficherArmes();


$(document).ready(function() {
            if(jeu.jaeden.mouvement < 3) {
                alert('je suis dans la condition');

                $('#jaeden-btn-droite').on('click', function(e) {
                    jeu.plateau.deplacerDroite(jeu.jaeden);
                    console.log("jeu.jadeden.mouvement", jeu.jaeden.mouvement);      
                });

                $('#jaeden-btn-gauche').on('click', function(e) {  
                    jeu.plateau.deplacerGauche(jeu.jaeden);
                });

                $('#jaeden-btn-haut').on('click', function(e) {  
                    jeu.plateau.deplacerHaut(jeu.jaeden);
                });

                $('#jaeden-btn-bas').on('click', function(e) {  
                    jeu.plateau.deplacerBas(jeu.jaeden);
                });
            }
            else {
                $('.jaeden-btns').off('click');
            }

            $('#jaeden-btn-terminer').on('click', function(e) {  
                $('.jaeden-btns').off('click');
            });
        

        $('#lich-btn-droite').on('click', function(e) {
            jeu.desactiverBoutons(jeu.lich, '.lich-btns');  
            jeu.plateau.deplacerDroite(jeu.lich);
        });

        $('#lich-btn-gauche').on('click', function(e) {
            jeu.desactiverBoutons(jeu.lich, '.lich-btns');  
            jeu.plateau.deplacerGauche(jeu.lich);
        });

        $('#lich-btn-haut').on('click', function(e) {
            jeu.desactiverBoutons(jeu.lich, '.lich-btns');  
            jeu.plateau.deplacerHaut(jeu.lich);
        });

        $('#lich-btn-bas').on('click', function(e) {
            jeu.desactiverBoutons(jeu.lich, '.lich-btns');  
            jeu.plateau.deplacerBas(jeu.lich);
        });
});
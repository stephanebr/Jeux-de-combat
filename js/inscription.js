function inscription(nomPerso1, nomPerso2) {
    document.getElementById('valider').addEventListener('click', function() {
            nomPerso1     = document.getElementById('perso1').value;

            nomPerso2     = document.getElementById('perso2').value;
    });
}

export { inscription };
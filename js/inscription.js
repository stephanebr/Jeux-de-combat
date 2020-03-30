let nomPerso1 = "";
let nomPerso2 = "";

document.getElementById('valider').addEventListener('submit', function() {
    nomPerso1 = document.getElementById('perso1').value;

    nomPerso2 = document.getElementById('perso2').value;
});

export { nomPerso1, nomPerso2 };
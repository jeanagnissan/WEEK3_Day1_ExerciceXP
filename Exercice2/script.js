
/*
 Exercice 1
 */
 console.log(`---------------  Exercice 2 --------------`);

// 1- Ajoutez le code ci-dessus à votre fichier HTML
// ok 

// 2- Ajoutez une couleur d'arrière-plan "bleu clair" et un peu de rembourrage au fichier <div>.
document.querySelector('div').style.backgroundColor = 'lightblue';
document.querySelector('div').style.padding = '20px';

// 3- Ne pas afficher le <li> qui contient le nœud de texte "John".
document.querySelector('li:first-child').style.display = 'none';

// 4- Ajoutez une bordure au <li> qui contient le nœud de texte "Pete".
document.querySelector('li:last-child').style.border = '1px solid black';

// 5- Modifiez la taille de la police de tout le corps.
document.querySelector('body').style.fontSize = '20px';

// 6- Bonus : Si la couleur de fond du div est "bleu clair", alertez "Bonjour x et y" (x et y sont les utilisateurs dans la div).
if (document.querySelector('div').style.backgroundColor === 'lightblue') {
    alert(`Bonjour ${document.querySelector('li:first-child').innerHTML} et Pete ${document.querySelector('li:last-child').innerHTML}`);
}

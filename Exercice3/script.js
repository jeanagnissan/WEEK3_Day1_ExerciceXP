
/*
 Exercice 3
 */
 console.log(`---------------  Exercice 3 --------------`);

// 1- Ajoutez le code ci-dessus à votre fichier HTML
// ok

// 2- Dans le <div>, modifiez la valeur de l'attribut id de navBar à socialNetworkNavigation , à l'aide de la setAttributeméthode .
const navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");


// 3- Nous allons ajouter un nouveau <li>au <ul>.

    // 1- Tout d'abord, créez une nouvelle <li> balise (utilisez la createElementméthode).
    const li = document.createElement("li");

    // 2- Créez un nouveau nœud de texte avec "Déconnexion" comme texte spécifié.
    const textNode = document.createTextNode("Déconnexion");
 
    // 3- Ajoutez le nœud de texte au nœud de liste nouvellement créé ( <li>).
    li.appendChild(textNode);

    // 4- Enfin, ajoutez ce nœud de liste mis à jour à la liste non ordonnée ( <ul>), en utilisant la appendChild méthode.
    const ul = document.querySelector("ul");
    ul.appendChild(li);

// 4- Prime
    // Utilisez les firstElementChild  et lastElementChild propriétés pour récupérer le premier et le dernier  élément <li> de leur élément parent (<ul>). Affichez le texte de chaque lien. ( Astuce : utilisez la textContent propriété).
    const ulElement = document.querySelector("ul");
    const firstLi = ulElement.firstElementChild;
    const lastLi = ulElement.lastElementChild;

    console.log(firstLi.textContent);
    console.log(lastLi.textContent);

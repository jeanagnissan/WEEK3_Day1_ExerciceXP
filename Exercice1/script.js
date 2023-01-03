
/*
 Exercice 1
 */
 console.log(`---------------  Exercice 1 --------------`);

// 1- Ajoutez le code ci-dessus à votre fichier HTML
// ok

// 2-Utilisation de Javascript :
    // 1- Récupérez le div et console.log it
        console.log(document.getElementById("container").innerHTML);

    // 2- Changez le nom "Pete" en "Richard".
        let ulElementList = document.getElementsByClassName("list")[0].lastElementChild;
        console.log(ulElementList.innerHTML = "Richard");

    // 3- Remplacez chaque prénom des deux <ul>'par votre nom.
        // let ulElementListd = document.getElementsByClassName("list");
        let elements = document.querySelectorAll('.list > li');
            for (const element of elements) {
                console.log(element.innerHTML = "Agnissan");
            }

    // 4- Supprimez le <li>qui contient le nœud de texte "Sarah".
        let item = document.querySelectorAll('.list > li')[3];
        console.log(item.remove());

// 3- Bonus - Utilisation de Javascript :
    // 1- Ajoutez une classe appelée student_list aux deux <ul>.
    let getElement = document.querySelectorAll('.list');
    for (const element of getElement) {
        console.log(element.classList.add("student_list"));
    }

    // 2- Ajoutez les classes university et attendance au premier <ul>.
    let items = document.getElementsByClassName("list")[0];
    console.log(items.classList.add("university", "attendance"));




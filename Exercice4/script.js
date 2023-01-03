
/*
 Exercice 1
 */
 console.log(`---------------  Exercice  --------------`);

// 1- Dans le corps de la page HTML, créez un div vide : <div class="listBooks"></div>
// ok

// 2- Dans le fichier js, créez un tableau appelé allBooks. Il s'agit d'un tableau d'objets. Chaque objet est un livre qui possède 4 clés (soit 4 propriétés) :
let allBooks = [
    {
        titre: String,
        auteur: String,
        image: String,
        isRead: Boolean
    }
]

// 3- Initiez le tableau avec 2 livres de votre choix (c'est-à-dire ajoutez manuellement 2 objets livres dans le tableau)
    allBooks = [
        {
            titre: 'Le Seigneur des anneaux',
            auteur: 'J.K. Rowling',
            image: 'https://actualitte.com/media/cache/contain_944x600_center_webp/uploads/images/Le-Seigneur-des-anneaux-f296ddbd-88c1-43d2-a6f0-a37fb2d7be8a.jpg',
            isRead: true
        },
        {
            titre: 'Bernard Minier',
            auteur: 'Suzanne Collins',
            image: 'https://www.babelio.com/couv/CVT_La-chasse_4267.jpg',
            isRead: false
        }
    ];
  

// 4- Exigences : Toutes les instructions ci-dessous doivent être codées dans le fichier js :

    // 1- À l'aide du DOM, rendez les livres dans un tableau HTML (le tableau HTML doit être ajouté au <div>créé dans la partie 1).
    const listBooksItem = document.querySelector('.listBooks');

    const table = document.createElement('table');
    table.style.border = '1px solid black';
    table.style.padding = '5px';

    table.innerHTML = `
        <thead>
            <tr>
                <th>Titre</th>
                <th>Auteur</th>
                <th>Image</th>
                <th>Deja lu</th>
            </tr>
        </thead>
        <tbody></tbody>
        `;

    const tbody = table.querySelector('tbody');

    allBooks.forEach(book => {

          const row = document.createElement('tr');

          const titre = document.createElement('td');
          titre.textContent = book.titre;
          row.appendChild(titre);
        
          const auteur = document.createElement('td');
          auteur.textContent = book.auteur;
          row.appendChild(auteur);

          const image = document.createElement('td');
          const img = document.createElement('img');
          img.src = book.image;
          img.style.width = '100px';
          img.style.height = '100px';
          image.appendChild(img);
          row.appendChild(image);

          const lecture = document.createElement('td');
          book.isRead ? lecture.textContent = "Lu" : lecture.textContent = "Non lu";
          row.appendChild(lecture);
          if (book.isRead) {
            row.style.color = 'red';
          }

          tbody.appendChild(row);
    });
        
    listBooksItem.appendChild(table);




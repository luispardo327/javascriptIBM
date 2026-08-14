let xhr = new XMLHttpRequest();
let url = './health_article.json';


// solicitud GET a la URL (GET = obtener) y true para operacion asincrona
xhr.open('GET', url, true);


// se informa al objeto XMLHttpRequest que la respuesta esperada del servidor debe estar en formato JSON
xhr.responseType = 'json';

//manjeo de evento 'onload' (onload = al cargar)
let articles = xhr.response.articles;
let articlesDiv = document.getElementById('articles');

// iterar datos de salud para obtener en la pagina principal utilizando un blucle con un forEach

articles.forEach(function(article) {
    let  articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    let title = document.createElement('h2');
    title.textContent = article.title;

    let description = document.createElement('p');
    description.textContent = article.description;

    let waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Formas de Lograrlo:';

    let waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(function(way) {
      let listItem = document.createElement('li');
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });

    let benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Beneficios:';

    let benefitsList = document.createElement('ul');
    article.benefits.forEach(function(benefit) {
      let listItem = document.createElement('li');
      listItem.textContent = benefit;
      benefitsList.appendChild(listItem);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);

    articlesDiv.appendChild(articleDiv);
  });


  xhr.send();
const menuDesayuno = ['Panqueques- $12', 'Huevos Benedictinos- $5', 'Avena- $3', 'Tortilla de huevo- $7'];
const menuPlatoPrincipal = ['Filete- $18', 'Pasta- $12', 'Hamburguesa- $15', 'Salmon- $18'];
const menuPostres = ['Torta- $8', 'Helado- $6', 'Pudin- $8', 'Ensalada de Frutas- $8'];

const breakfastMenuItemsHTML = menuDesayuno.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let elementosPlatoPrincipal = '';
menuPlatoPrincipal.forEach((item, index) => {
elementosPlatoPrincipal += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = elementosPlatoPrincipal;

let listaPostres = '';
for (let i = 0; i < menuPostres.length; i++) {
    listaPostres += `<p>Item ${i + 1}: ${menuPostres[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = listaPostres;
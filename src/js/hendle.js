"use strict";
export default class Users{
 createUserElement(user) {
  return `<li><img alt="imagem" src="${user.picture.thumbnail}"/><p>${user.name.first}, ${user.dob.age}</p></li>`;
 }

 createStatisticElement(qtdMasculino, qtdFeminino, somaDasIdades, mediaDasIdades) {
  mediaDasIdades = (isNaN(mediaDasIdades)) ? 0 : mediaDasIdades;
  return `
  <ul>
    <li>Sexo masculino:${qtdMasculino}</li>
    <li>Sexo feminino:${qtdFeminino}</li>
    <li>Soma das idades:${somaDasIdades}</li>
    <li>Média das idades:${mediaDasIdades.toFixed(2)}</li>
  </ul>
  `;
 }

 generateStatistic(users, statisticaElement) {
  const qtdMasculino = users.filter((user) => user.gender === 'male').length;
  const qtdFeminino = users.filter((user) => user.gender === 'female').length;
  const somaDasIdades = users.reduce((total, user) => user.dob.age + total, 0);
  const mediaDasIdades = somaDasIdades / (qtdMasculino + qtdFeminino);
  const statisticsHTML = this.createStatisticElement(qtdMasculino, qtdFeminino, somaDasIdades, mediaDasIdades);
  statisticaElement.innerHTML = statisticsHTML;
 }

 async render(listElement, users, qtdElement, statisticaElement) {
  this.generateStatistic(users, statisticaElement);
  let lista = await users.map((u, i, arr) => {
   return this.createUserElement(u);
  });

  lista = lista.join('');
  qtdElement.textContent = `${users.length} usuário(s) encontrados`; 
  listElement.innerHTML = `<ul>${lista}</ul>`;
 }
}

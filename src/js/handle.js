import * as estatisticas from "./estatisticas.js";

export default class Users{
  
  constructor(document) {
    this.estatisticas = estatisticas.default.bind();
    this.usersHtml = document.getElementById('results');
    this.qtdUsersFound = document.getElementById('qtd-users-found');
    this.resultadoEstatistica = document.getElementById('resultado-estatistica');
  }

  createUserElement(user) {
    return `<li><img alt="imagem" src="${user.picture.thumbnail}"/><p>${user.name.first} ${user.name.last}, ${user.dob.age}</p></li>`;
  }
  
  createStatisticElement(data) {
    let { qtdMasculino, qtdFeminino, somaDasIdades, mediaDasIdades } = data;
    mediaDasIdades = (isNaN(mediaDasIdades)) ? 0 : mediaDasIdades;
    this.resultadoEstatistica.innerHTML = `
    <ul>
    <li>Sexo masculino:${qtdMasculino}</li>
    <li>Sexo feminino:${qtdFeminino}</li>
    <li>Soma das idades:${somaDasIdades}</li>
    <li>Média das idades:${mediaDasIdades.toFixed(2)}</li>
    </ul>
    `;
  }
  
  async render(users) {
    const data = await estatisticas.default.prototype.generateStatistic(users);
    this.createStatisticElement(data);
    let lista = await users.map((u, i, arr) => {
      return this.createUserElement(u);
    });
    
    lista = lista.join('');
    this.qtdUsersFound.textContent = `${users.length} usuário(s) encontrados`; 
    this.usersHtml.innerHTML = `<ul>${lista}</ul>`;
  }
}

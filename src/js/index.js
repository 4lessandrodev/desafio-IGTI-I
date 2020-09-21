import * as buscar from './fetch.js';
import * as User from './hendle.js';
const usersHtml = document.getElementById('results');
const qtdUsersFound = document.getElementById('qtd-users-found');
const formPesquisar = document.getElementById('form-pesquisar');
const resultadoEstatistica = document.getElementById('resultado-estatistica');
const inputForm = document.getElementById('name');
let usuariosEncontrado = [];

async function findUsers() {
 usuariosEncontrado = await buscar.default(`https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo`);
}

const renderizar = async (users) => {
 const handler = new User.default();
 await handler.render(usersHtml, users, qtdUsersFound, resultadoEstatistica);
};

const filtrar = (event) => {
 event.preventDefault();
 const name = document.getElementById('name').value;
 const usuarioEncontrados = usuariosEncontrado.filter((user) => {
  
  if (user.name.first.includes(name) || user.name.last.includes(name)
  ||user.name.first.includes(name.toUpperCase()) || user.name.last.includes(name.toUpperCase())) {
   return user;
  }

 });
 renderizar(usuarioEncontrados);
};

window.addEventListener('load', () => {
 findUsers();
 formPesquisar.addEventListener('submit', filtrar);
 inputForm.addEventListener('keyup', filtrar);
});
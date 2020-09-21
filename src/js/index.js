import * as buscar from './fetch.js';
import * as User from './hendle.js';
const usersHtml = document.getElementById('results');
const qtdUsersFound = document.getElementById('qtd-users-found');
const formPesquisar = document.getElementById('form-pesquisar');
const resultadoEstatistica = document.getElementById('resultado-estatistica');
let usuariosEncontrado = [];

async function findUsers() {
 usuariosEncontrado = await buscar.default(`https://randomuser.me/api/?seed=javascript&results=70&nat=BR&noinfo`);
}

const renderizar = async (users) => {
 const handler = new User.default();
 await handler.render(usersHtml, users, qtdUsersFound, resultadoEstatistica);
};

const filtrar = (event) => {
 event.preventDefault();
 const name = document.getElementById('name').value;
 const usuarioEncontrados = usuariosEncontrado.filter((user) => user.name.first.includes(name));
 renderizar(usuarioEncontrados);
};

window.addEventListener('load', () => {
 findUsers();
 formPesquisar.addEventListener('submit', filtrar);
});
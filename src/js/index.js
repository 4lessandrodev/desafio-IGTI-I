import * as ouvirEventoSubmitNoFormDePesquisa from './listener.js';
import * as Fetch from './fetch.js';
import * as buscarUsuarios from './findUser.js';
import * as database from './users.js';



window.addEventListener('load', async () => {
 database.default.USERS = await buscarUsuarios.default(Fetch.default);
 ouvirEventoSubmitNoFormDePesquisa.default();
});
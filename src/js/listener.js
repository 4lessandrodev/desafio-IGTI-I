import * as filtrar from './filter.js';
export default () => {
 const formPesquisar = document.getElementById('form-pesquisar');
 const inputForm = document.getElementById('name');
 formPesquisar.addEventListener('submit', filtrar.default);
 inputForm.addEventListener('keyup', filtrar.default);
}
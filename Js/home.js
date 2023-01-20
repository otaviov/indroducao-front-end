
// Caso o campo busca esteja vazio! mostra um popup de erro.
/* 
function validaBusca() {
    if (document.querySelector('#q').value == '') {
        alert('O campo busca está vazio!');
        return false;
    }
}
*/

// Caso o campo esteja vazio, a barra de pesquisa ira ficar vermelha
document.querySelector('#form-busca').onsubmit = function () {
    if (document.querySelector('#q').value == '') {
        document.querySelector('#form-busca').style.background = 'red';
        document.getElementById('#form-busca').style.backgroundColor = 'Green'
        return false;
    }
};

// fazendo a associação da função com o evento
document.querySelector('#form-busca').onsubmit = validaBusca;
document.querySelector('#form-busca').onfocus = validaBusca;

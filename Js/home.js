
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
        return false;
    }
}

// fazendo a associação da função com o evento
document.querySelector('#form-busca').onsubmit = validaBusca;

// Banner Rotativo
var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.destaque img').src = banners[bannerAtual];
}
//trocar a imagem a cada 4 segundos (o js mede tempo em MILÉSIMOS)
//a variável controle adicionará um botão de pause ao banner
var timer = setInterval(trocaBanner, 4000);
var controle = document.querySelector('.pause');

controle.onclick = function () {
    if (controle.className === 'pause') {
        clearInterval(timer);
        controle.className = 'play';
    } else {
        timer = setInterval(trocaBanner, 4000);
        controle.className = 'pause';
    }

    return false;
};
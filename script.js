let btn = document.querySelector('.btn-fechar-ocult');
let abrir = document.querySelector('.indo-projeto');
const abrirImc = document.querySelector('#btn-abtrir-IMC');

abrirImc.addEventListener('click', ()=>{

    let imc = document.querySelector('#projeto-imc-ocult')
    imc.style.display = "flex";

});

abrir.addEventListener('click', ()=>{

    let div = document.querySelector('.div-oculta');

    div.style.display = "flex";

});


btn.addEventListener('click', ()=>{

    let div = document.querySelector('.div-oculta');

    div.style.display = "none";

});
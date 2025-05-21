let numerosSorteados = [];

function sortear(){
    let quantidadeNumeros = document.getElementById('quantidade').value;
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    for(let i = 0; i < quantidadeNumeros; i++){

        numeroSorteado = Math.floor(Math.random() * (ate - de + 1) + de);

        while(numerosSorteados.includes(numeroSorteado)){
            numeroSorteado = Math.floor(Math.random() * (ate - de + 1) + de);
        }

        numerosSorteados.push(numeroSorteado);

    }

    document.querySelector('#resultado .texto__paragrafo').innerHTML = `Números sorteados: ${numerosSorteados}`;
    console.log(numerosSorteados);

    inverteBotoes('btn-reiniciar', 'btn-sortear');
}

function reiniciar(){
    numerosSorteados = [];
    // document.getElementById('quantidade').value = '';
    // document.getElementById('de').value = '';
    // document.getElementById('ate').value = '';
    document.querySelector('#resultado .texto__paragrafo').innerHTML = 'Números sorteados:  nenhum até agora';

    inverteBotoes('btn-sortear', 'btn-reiniciar');
}

function inverteBotoes (btnAtivo, btnInativo){
    document.getElementById(btnAtivo).setAttribute('class', 'container__botao');
    document.getElementById(btnAtivo).removeAttribute('disabled');
    document.getElementById(btnInativo).setAttribute('class', 'container__botao-desabilitado');
    document.getElementById(btnInativo).setAttribute('disabled', 'true');
}
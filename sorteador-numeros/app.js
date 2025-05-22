let numerosSorteados = [];

function sortear(){
    let quantidadeNumeros = document.getElementById('quantidade').value;
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    console.log(de);
    console.log(ate);
    console.log(de >= ate);
    
    
    if(de >= ate){
        alert("O valor do primeiro numero do intervalo deve ser menor que o segundo.");
        return;
    }

    if(quantidadeNumeros > (ate - de) + 1){
        alert("A quantidade de números a serem sorteados deve ser menor ou igual o intervalo.");
        return;
    }

    if(quantidadeNumeros < 0 || quantidadeNumeros > 15){
        alert("A quantidade deve estar entre 1 e 15");
        return;
    }

    if(de < 1 || de > 100 || ate < 1 || ate > 100){
        alert("O intervalo máximo permitido é entre 1 e 100."); // mudar
        return;
    }

    for(let i = 0; i < quantidadeNumeros; i++){
        numeroSorteado = Math.floor(Math.random() * (ate - de + 1) + de);

        while(numerosSorteados.includes(numeroSorteado)){
            numeroSorteado = Math.floor(Math.random() * (ate - de + 1) + de);
        }
        numerosSorteados.push(numeroSorteado);
    }

    document.querySelector('#resultado .texto__paragrafo').innerHTML = `Números sorteados: ${numerosSorteados}`;

    inverteBotoes('btn-reiniciar', 'btn-sortear');
}

function reiniciar(){
    numerosSorteados = [];

    document.querySelector('#resultado .texto__paragrafo').innerHTML = 'Números sorteados:  nenhum até agora';

    inverteBotoes('btn-sortear', 'btn-reiniciar');
}

function inverteBotoes (btnAtivo, btnInativo){
    document.getElementById(btnAtivo).setAttribute('class', 'container__botao');
    document.getElementById(btnAtivo).removeAttribute('disabled');
    document.getElementById(btnInativo).setAttribute('class', 'container__botao-desabilitado');
    document.getElementById(btnInativo).setAttribute('disabled', 'true');

}
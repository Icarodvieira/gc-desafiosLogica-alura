let qtdPista = parseInt(document.getElementById('qtd-pista').innerHTML);
let qtdCadeiraSuperior = parseInt(document.getElementById('qtd-superior').innerHTML);
let qtdCadeiraInferior = parseInt(document.getElementById('qtd-inferior').innerHTML);

function comprar(){
    let tipoIng = document.getElementById('tipo-ingresso').value;
    let qtde =  parseInt(document.getElementById('qtd').value);
    
    switch(tipoIng){
        case 'inferior':
            if(qtdCadeiraInferior < qtde || (qtdCadeiraInferior - qtde) < 0){
                alert("Ingressos insuficientes para essa operação.");
                return;
            }
            qtdCadeiraInferior -= qtde;
            document.getElementById('qtd-inferior').innerHTML = qtdCadeiraInferior;
            break;
        case 'superior':
            if(qtdCadeiraSuperior < qtde || (qtdCadeiraSuperior - qtde) < 0){
                alert("Ingressos insuficientes para essa operação.");
                return;
            }
            qtdCadeiraSuperior -= qtde;
            document.getElementById('qtd-superior').innerHTML = qtdCadeiraSuperior;
            break;
        case 'pista':
            if(qtdPista < qtde || (qtdPista - qtde) < 0){
                alert("Ingressos insuficientes para essa operação.");
                return;
            }
            qtdPista -= qtde;
            document.getElementById('qtd-pista').innerHTML = qtdPista;
            break;
    }
}
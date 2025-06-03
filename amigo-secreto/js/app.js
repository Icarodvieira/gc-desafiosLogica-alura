let amigos = [];

function adicionar(){
    nome = document.getElementById('nome-amigo').value;
    if(!nome || !isNaN(nome)){ 
        alert("Insira um nome válido.");
    }
    amigos.push(nome);
    document.getElementById('lista-amigos').innerHTML = amigos;
    document.getElementById('nome-amigo').value = '';
}

function sortear(){
    document.getElementById('lista-sorteio').innerHTML = '';
    let sorteados = [];
    if(amigos.length % 2 != 0){
        alert("A quantidade de amigos cadastrados deve ser par para formar as duplas.");
    }
    
    amigosEmbaralhado = amigos.slice().sort(() => Math.random() - 0.5);

    for(let i = 0; i < amigosEmbaralhado.length; i++){
        if(i == amigosEmbaralhado.length - 1){
            dupla = [amigosEmbaralhado[i], amigosEmbaralhado[0]];
            sorteados.push(dupla);
            break;
        }
        dupla = [amigosEmbaralhado[i], amigosEmbaralhado[i+1]];
        sorteados.push(dupla);
    }
    
    listaSorteio = document.getElementById('lista-sorteio');
    
    sorteados.forEach(dupla => listaSorteio.innerHTML += `${dupla[0]} --> ${dupla[1]}<br>`);
    
}

function reiniciar(){
    amigos = [];
    sorteados = [];
    amigosEmbaralhado = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
}
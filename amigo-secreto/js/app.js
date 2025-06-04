let amigos = [];

function adicionar(){
    let nome = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');
    if(!nome || !isNaN(nome)){ 
        alert("Insira um nome válido.");
        return;
    }
    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado!');
        return;
    }
    amigos.push(nome);

    if (lista.textContent == '') {
        lista.textContent = nome;
    } else {
        lista.textContent = lista.textContent + ', ' + nome;
    }
    document.getElementById('nome-amigo').value = '';
}

function sortear(){
    if (amigos.length < 4) {
        alert("Adicione pelo menos 4 amigos");
        return;
    }
    document.getElementById('lista-sorteio').innerHTML = '';
    let sorteados = [];
    
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
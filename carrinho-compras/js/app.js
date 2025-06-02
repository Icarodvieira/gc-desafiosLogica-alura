
let total;
limpar();
function adicionar(){
    let nomeProduto = (document.getElementById('produto').value).split('-')[0].trim();
    let valorUnitario = parseInt((document.getElementById('produto').value).split('R$')[1].trim());
    let qtd = parseInt(document.getElementById('quantidade').value);
    
    let preco = quantidade.value * valorUnitario;
    
    let carrinho = document.getElementById('lista-produtos');
    
        carrinho.innerHTML = carrinho.innerHTML + 
    `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${qtd}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
    </section>`;
    total += preco;
    document.getElementById('valor-total').textContent = `R$ ${total}`;
}

function limpar(){
    total = 0;
    document.querySelector('.carrinho__produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
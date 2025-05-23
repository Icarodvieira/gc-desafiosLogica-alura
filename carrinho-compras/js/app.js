
function adicionar(){
    produto = document.getElementById('produto').value;
    nomeProduto = (document.getElementById('produto').value).split('-')[0].trim();
    valorUnitario = (document.getElementById('produto').value).split('R$')[1].trim();
    qtd = parseInt(document.getElementById('quantidade').value);
    
    let preco = quantidade.value * valorUnitario;
    alert(preco);
    
    // document.querySelector('.carrinho__produtos__produto').innerHTML = `<section class="carrinho__produtos__produto"><span class="texto-azul">${qtd}x</span> ${produto} <span class="texto-azul">${valor}</span> </section>`
}
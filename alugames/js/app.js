let qtdAlugueis = document.querySelectorAll('.dashboard__item__img--rented').length;
function alterarStatus (id){

    let gameStatus = document.querySelector('#game-' + id + ' a').innerHTML;
    let gameButton = document.querySelector('#game-' + id + ' .dashboard__item__button');
    let gameImage = document.querySelector('#game-' + id + ' .dashboard__item__img');

    if(gameStatus === 'Devolver'){
        if(confirm("Tem certeza que deseja devolver este jogo?")){
            gameButton.innerHTML = 'Alugar';
            gameButton.classList.remove('dashboard__item__button--return');
            gameImage.classList.remove('dashboard__item__img--rented');
        }
    }else if(gameStatus === "Alugar"){
        gameButton.innerHTML = 'Devolver';
        gameButton.classList.add('dashboard__item__button--return');
        gameImage.classList.add('dashboard__item__img--rented');
        console.log(`Quantidade de jogos alugados: ${++qtdAlugueis}`);
    }else{
        alert("Operação inválida.");
    }
}
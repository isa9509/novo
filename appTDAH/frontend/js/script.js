const opcoes = document.querySelectorAll('.opcao');
opcoes.forEach(function(opcao) {
    opcao.addEventListener('click', function() {
       
    opcoes.forEach(function(item) {
        item.classList.remove('selecionado');
    });
    opcao.classList.add('selecionado');

    const emocao = opcao.querySelector('img').alt;
    console.log('Emoção selecionada:', emocao);
});
});
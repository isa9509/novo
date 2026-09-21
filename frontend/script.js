const opcoes = document.querySelectorAll(".opcao");

opcoes.forEach(function (opcao) {
    opcao.addEventListener("click", function () {
        // Remove a seleção das outras opções
        opcoes.forEach(function (item) {
            item.classList.remove("selecionada");
        });

        // Seleciona a opção clicada
        opcao.classList.add("selecionada");

        const emocao = opcao.dataset.emocao;

        console.log(emocao);
    });
});

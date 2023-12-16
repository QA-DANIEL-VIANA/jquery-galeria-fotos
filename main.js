$(document).ready(function () {
    // Mostrar formulário ao clicar no botão no cabeçalho
    $('header button').click(function () {
        $('form').slideDown();
    });

    // Ocultar formulário ao clicar no botão de cancelar
    $("#botaoCancelar").click(function () {
        $('form').slideUp();
    });

    // Manipular envio do formulário
    $('form').on('submit', function (e) {
        e.preventDefault(); // Correção do nome do método (era preventDefaut())

        // Obter o endereço da nova imagem do campo de entrada
        const enderecoDaNovaImagem = $('#input-Imagem').val();

        // Criar um novo item de lista
        const novoItem = $('<li style="display: none"></li>');

        // Adicionar imagem ao novo item de lista
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);

        // Adicionar overlay de link à imagem
        $(`
            <div class="overlay-image-link">
                <a href="${enderecoDaNovaImagem}" title="Ver imagem tamanho Real" target="_blank">
                    Ver imagem tamanho Real
                </a>
            </div>
        `).appendTo(novoItem);

        // Adicionar novo item à lista
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(3000);
        $('#input-Imagem').val('');
    });
});

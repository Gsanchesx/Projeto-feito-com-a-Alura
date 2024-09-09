function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada item (dado) na lista de dados
    for (let dado of dados) {
        // Cria uma nova div para cada resultado, formatando o HTML com os dados do item
        resultados += `
            <div class="item-resultado">
                <h2>${dado.nomeDoSite}</h2> <p class="descricao-meta">${dado.sobre}</p> <a href="${dado.link}" target="_blank">Saiba mais</a> </div>
        `;
    }

    // Atribui a string com todos os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
}

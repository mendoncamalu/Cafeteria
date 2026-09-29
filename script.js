let produtos = [];
let proximoId = 1;

function cadastrarProduto() {
    let nome = document.getElementById("nomedoproduto").value;
    let tipo = document.getElementById("tipo").value;
    let tamanho = document.getElementById("tamanho").value;

    let produto = {
        id: proximoId,
        nome: nome,
        tipo: tipo,
        tamanho: tamanho
    };

    produtos.push(produto);
    proximoId++;

    
    document.getElementById("nomedoproduto").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("tamanho").value = "";

    mostrarProdutos();
}

function mostrarProdutos() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let i = 0; i < produtos.length; i++) {
        lista.innerHTML += `
        <tr>
            <td>${produtos[i].id}</td>
            <td>${produtos[i].nome}</td>
            <td>${produtos[i].tipo}</td>
            <td>${produtos[i].tamanho}</td>
        </tr>`;
    }
}

function buscarItem() {
    let itemDesejado = document.getElementById("busca").value;
    let aparecerBusca = document.getElementById("aparecerBusca");

    const busca = produtos.findIndex(p => p.nome.toLowerCase() === itemDesejado.toLowerCase());

    if (busca === -1) {
        alert("Item não encontrado!");
        aparecerBusca.innerHTML = "";
    } else {
        aparecerBusca.innerHTML = `
        <tr>
            <td>${produtos[busca].id}</td>
            <td>${produtos[busca].nome}</td>
            <td>${produtos[busca].tipo}</td>
            <td>${produtos[busca].tamanho}</td>
        </tr>`;
    }
}

function deletarPorId() {
    let itemDel = document.getElementById("deleteId").value;
    const buscaDel = produtos.findIndex(p => p.id == itemDel);

    if (buscaDel === -1) {
        alert("Item não encontrado!");
    } else {
        produtos.splice(buscaDel, 1);
        alert("Produto deletado com sucesso!");
        mostrarProdutos();
    }
}

function limpa() {
    produtos = [];
    document.getElementById("aparecerBusca").innerHTML = "";
    mostrarProdutos();
}
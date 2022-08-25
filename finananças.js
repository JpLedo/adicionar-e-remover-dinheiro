let saldo = parseFloat(prompt("Qual a quantidade inicial de dinheiro inicial?"));
let opção = ""

do {
    opção = prompt(
        "Saldo Disponivel: " + saldo +
        "\nEscolha uma das opções abaixo: " +
        "\n1 - Adicionar dinheiro" +
        "\n2 - Remover dinheiro" +
        "\n3 - Sair")
    switch (opção) {
        case "1":
            saldo += parseFloat(prompt("Informe o valor a ser adicionado: "))
            break;
        case "2":
            saldo -= prompt("Informe o valor a ser removido")
            break;
        case "3":
            alert("Saindo...")
        default:
            alert("Entrada invalida")
    }
} while (opção !== "3") {
    
}
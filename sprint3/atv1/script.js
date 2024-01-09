function pularLinha() {
  document.write("<br><br>");
}

function linha() {
  document.write("<hr>");
}

function mostrar(frase) {
  document.write(frase);
}

function mostrarCabecalho() {
  mostrar("<h1>" + ">> COMEX <<" + "</h1>");
  mostrar("<h2>" + " :: Lista de Clientes " + "</h2>");
  linha()
}

function mostrarRodape() {
  mostrar("<p>" + "<strong>" + " .:: Alura LEVEL UP ::. " + "</strong>" + "</p>");
}


let anoAtual = parseInt(prompt("Digite o ano atual"));
if (anoAtual <= 0) {
  alert("ERRO: Digite um ano válido")
  location.reload();
} else {
  let quantidadeClientes = parseInt(prompt("Digite o número de clientes para fazer o cadastro"));
  if (quantidadeClientes <= 0) {
      alert("ERRO: Digite a quantidade certa de clientes")
      location.reload();
  }
}
let quantidadeAtual = 1;


mostrarCabecalho()


let somaIdades = 0;


for (; quantidadeAtual <= quantidadeClientes; quantidadeAtual++) {
  let nomeCliente = prompt("Digite nome do cliente " + quantidadeAtual);
  let mesCliente = parseInt(prompt("Digite o mês de nascimento do cliente " + quantidadeAtual));
  let anoCliente = parseInt(prompt("Digite o ano de nascimento do cliente " + quantidadeAtual));

  mostrar("<h3> - Código: " + quantidadeAtual + "</h3>");
  mostrar("<p>" + "Nome: " + nomeCliente + "</p>");
  mostrar("<p>" + "Mês de nascimento: " + mesCliente + "</p>");
  mostrar("<p>" + "Ano de nascimento: " + anoCliente + "</p>");
  linha()

  
  let idade = anoAtual - anoCliente
  somaIdades = somaIdades + idade
}


let mediaIdades = somaIdades / quantidadeClientes;
mostrar("*** Estatística: ***" + "<br>");
mostrar("Soma das idades: " + somaIdades + "<br>");
mostrar("Média das idades: " + Math.round(mediaIdades));
linha();


mostrarRodape();
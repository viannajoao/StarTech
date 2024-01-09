let codigo = 1;


function addCategoria() {
  let adcCategoria = document.getElementById("categoria").value;


  if (adcCategoria.length <= 0) {
    alert("ERROR: Campo Obrigatorio.");
    return;
  }

  let listaCategorias = document.getElementById("listaCategorias");
  let novaCategoria = document.createElement("p");

  novaCategoria.textContent = "Código: " + codigo + " —— " + adcCategoria;

  listaCategorias.appendChild(novaCategoria);

  document.getElementById("categoria").value = "";

  codigo++;

  alert("Categoria adicionada!");
}
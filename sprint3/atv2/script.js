
let codigo = 1;


function addCategoria() {
  let adcCategoria = document.getElementById("categoria").value;
  let listaCategorias = document.getElementById("listaCategorias");
  let novaCategoria = document.createElement("p");

 
  if (adcCategoria.length <= 0) {
    alert("ERROR: Campo Obrigatorio");
    return;
  }

  novaCategoria.textContent = "Código: " + codigo + " —— " + adcCategoria;

  listaCategorias.appendChild(novaCategoria);

  document.getElementById("categoria").value = "";

  codigo++
}
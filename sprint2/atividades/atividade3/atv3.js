alert("SEJA BEM VINDO AO COMEX")

function showContent(){

  document.write(`

  <div>

    <h1> >>COMEX<< </h1>
    <h2>:: Cadastro de categorias</h2>
    <br>
    <hr>

    <div>
    
    <p>NOME:</p>
    <input type="text" id="cate" placeholder="Digite uma categoria" / >
    <br>
    <br>
    <button id="add" onclick="category(this)">Criar</button>
    <button id="list" onclick="category(this)">Exibir lista</button>
    <hr>
    </div>

    <h2>:: Lista de categorias</h2>
    <hr>


  </div>
  
  
  `)

  // lista()

}

let categorys = [{name: 'Livros'}, {name: 'Terror'}];
let input = document.getElementById("cate");
console.log(input);



function category(event){

  if(event.id == 'add'){
    alert("Categoria adicionada")
    showContent()
    categorys.push({name: input.value})
    console.log(categorys)
  } else if(event.id == 'list'){
    alert("Listado todas as categorias")
    // showContent()
    for(i = 0; i <= categorys.length;){
      console.log(categorys[i].name);
      console.log(categorys)
      document.write(`<li>NOME: ${categorys[i].name}</li>`)
      i++
    }
  }
}

// function lista(){

//   for(i = 0; i <= categorys.length;){
//     console.log(categorys[i].name);
//     console.log(categorys)
//    JSON.stringify( document.write(`<li>${categorys[i].name}</li>`))
//     i++
//   }
// }

showContent()
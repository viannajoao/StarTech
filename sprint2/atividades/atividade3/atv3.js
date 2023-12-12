alert("SEJA BEM VINDO AO COMEX")

function showContent(){


}

let categorys = [{name: 'Livros'}, {name: 'Terror'}];
let input = document.getElementById("cate");
let results = document.querySelector(".results");
console.log(input);



function category(event){

  if(event.id == 'add' && input.value != '' ){
    alert("Categoria adicionada")

    categorys.push({name: input.value})
    input.value = ""
    console.log(categorys)
  } else if(event.id == 'list'){
    alert("Listado todas as categorias")
   
    for(i = 0; i <= categorys.length;){
      console.log(categorys)
      
      results.innerHTML += `<li>${categorys[i].name}</li>`
      
      i++
    }
  }
}

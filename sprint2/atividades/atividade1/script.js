alert("***SEJA BEM VINDO AO COMEX***");
      
function line(){
    document.write(" <hr>");

}
function up(){
    document.write("<br><br>");

}
function showTitle(msg){
    
    document.write("<h1>"+"&gt;&gt;"+msg+"&lt;&lt;"+"</h1>");
    line();
    up();

}
function showContent(msg){

    document.write("<h2>"+msg+"</h2>");
    up();

}
function showCode(msg){

document.write("<h3> - "+msg+"</h3>");


}
function showFooter(msg){
    line();
    document.write("<h5>"+msg+"</h5>");
    up();

}

let titulo = "COMEX";
let primeiro = ":: LISTA DE CLIENTES";
let segundo = "CODIGO ";

let ano = window.prompt("INFORME O ANO:");



let meses = ["JANEIRO", 'FEVEREIRO', 'MARCO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO']





showTitle(titulo);
showContent(primeiro);
line();
let numeroDeCode= window.prompt("QUANTIDADE DE PESSOAS");
let somat = 0;

for( i = 0; i < numeroDeCode; i++){
  let random = Math.round(Math.random() * 11);
showCode( segundo+(1+i));
let nome1 = window.prompt("NOME DA PRIMEIRA PESSOA "+(1+i));
let soma = window.prompt("ANO DE NASCIMENTO DA PESSOA: "+(1+i));

document.write("<ul>");

document.write("<li>"+"NOME: "+nome1+"</li>");
up();
document.write(`<li> MES DE NASCIMENTO: ${meses[random]} </li>`);
up();
document.write("<li>"+"ANO DE NASCIMENTO:"+ soma+"</li>");

if((ano-soma) <= 17){
up();
document.write("<li> Classificação Etária: ADOLESCENTE </li>");

}else if(ano-soma<=29  ){
  up();
document.write("<li> Classificação Etária: JOVEM </li>");

}else if(ano-soma<=59 ){
  up();
document.write("<li> Classificação Etária: ADULTO </li>");

}else if(ano-soma>=60){
  up();
document.write("<li> Classificação Etária: IDOSO </li>");

}else{
  up();
document.write("<li>  ALGO  DE ERRADO NÃO ESTÁ CERTO! </li>");

}
document.write("</ul>");
line();
somat = ano-soma;

}



document.write("***ESTATISTICA***");
up();
up();
document.write("SOMA DAS IDADES "+somat );

up();
 let media = somat/numeroDeCode;
document.write("MEDIA DAS IDADES "+ Math.round(media));


showFooter(".::ALURA LEVEL UP::.");
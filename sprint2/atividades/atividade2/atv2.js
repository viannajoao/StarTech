alert("***SEJA BEM VINDO AO COMEX***");
      
function line(){
    document.write(" <hr>");

}
function up(){
    document.write("<br><br>");

}
function showTitle(text){
    
    document.write("<h1>"+"&gt;&gt;"+text+"&lt;&lt;"+"</h1>");
    line();
    up();

}
function showContent(text){

    document.write("<h2>"+text+"</h2>");
    up();

}
function showCode(text){

document.write("<h3> - "+text+"</h3>");


}
function showFooter(text){
    line();
    document.write("<h5>"+text+"</h5>");
    up();

}

let titulo = "COMEX";
let primeiro = ":: LISTA DE CLIENTES";
let segundo = "CODIGO ";

let ano = window.prompt("INFORME O ANO:");



showTitle(titulo);
showContent(primeiro);
line();

let numeroDeCode = prompt("QUANTIDADE DE PESSOAS");
let somat = 0;

for( i = 1; i <= numeroDeCode; i++){

showCode( segundo+(i));
let nome = prompt("NOME DA PESSOA " + (i));
let mes = prompt("DIGITE SEU MES DE NASCIMENTO " + (i));
let nascimento = prompt("ANO DE NASCIMENTO DA PESSOA: " + (i));

document.write(`<ul>

<li> NOME: ${nome} </li>
<li> MES DE NASCIMENTO: ${mes} </li>
<li> ANO DE NASCIMENTO: ${nascimento} </li>

</ul>`);

document.write("</ul>");
line();
somat = (ano - nascimento);

}



document.write("***ESTATISTICA***");
up();
up();
document.write("SOMA DAS IDADES "+somat );

up();
 let media = somat/numeroDeCode;
document.write("MEDIA DAS IDADES "+ Math.round(media));


showFooter(".::ALURA LEVEL UP::.");
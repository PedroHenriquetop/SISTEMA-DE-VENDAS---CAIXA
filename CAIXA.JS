console.log("My Code!");



//O CÓDIGO ABAIXO FOI FEITO PARA GERAR 
//A IMAGEM DE UM CÓDIGO DE BARRAS ABAIXO
//A IMAGEM DO PRODUTO//


//const input = document.querySelector("input");
//const barcode = document.querySelector("#barcode");

//document.addEventListener("keypress", (e) => {
//    if (e.key === "Enter") {
//        generateBarcode();
//    }
//});


//function generateBarcode() {
//    if (!input.value) return
//    JsBarcode("#barcode", barcodeText.value, {
//        format: "CODE128",
//        lineColor: "#0D2C3C",
//        widht: 1,
//        height: 40,
//        displayValue: false
//    });}

//LOGO ABAIXO SE ENCONTRA O CÓDIGO DOS INPUT'S DE CALCULO

function calc() {
    var n1 = parseFloat(document.getElementById('v1').value);
    var n2 = parseFloat(document.getElementById('v2').value);
    var resultado = document.getElementById('result')


    var oper = document.getElementById('operators').value;

    if (oper === 'avista') {
        resultado.value = n1 + n2;
    }

    if (oper === 'aprazo') {
        valor = n1
        porcentagem = n2
        divisão = porcentagem / 100
        multiplicação = divisão * valor
        resultado.value = multiplicação + valor
    }

    if (oper === 'desconto') {
        valor = n1
        porcentagem = n2
        divisão = porcentagem / 100
        multiplicação = divisão * valor
        resultado.value = multiplicação - valor
    }

    if (oper === 'troco') {
        resultado.value = n1 - n2;
    }
}

//LOGO ABAIXO SE ENCONTRA O CÓDIGO DA LISTA DE REGISTRO DOS PRODUTOS



//inner HTML

var prod = document.querySelector('.pro');
var pro = prod.textContent;
console.log(pro);
var marc = document.querySelector('.mar');
var mar = marc.textContent;
console.log(mar);
var valo = document.querySelector('.val');
var val = valo.textContent;
console.log(val);
var esto = document.querySelector('.est');
var est = esto.textContent;
console.log(est);
var forn = document.querySelector('.for');
var fo = forn.textContent;
console.log(fo);
var barc = document.querySelector('.bar');
var bar = barc.textContent;
console.log(bar);

function mostrar1() {
    var produto = [];

    produto[1] =
    "<tr>"
    + "<th id='tit'>" + "PRODUTO" + "</th>"
    + "<th id='tit'>" + "MARCA" + "</th>"
    + "<th id='tit'>" + "QANTIDADE" + "</th>"
    + "<th id='tit'>" + "V.UN" + "</th>"
    + "<th id='tit'>" + "TOTAL" + "</th>"
    + "</tr>"
    + "<tr>" 
    +  "<td id='tit2'>" + "BOLO" + "</td>"
    +  "<td id='tit2'>" + "DONA BENTA" + "</td>"
    +  "<td id='tit2'>" + "40UN" + "</td>"
    +  "<td id='tit2'>" + "R$10.00" + "</td>"
    +  "<td id='tit2'>" + "R$10.00" + "</td>"
    +"</tr>"
    ;

    var centro = document.getElementById("center");
    for (const i = 1; i < 2; i++) {
        centro.innerHTML += "<table id='tab'>" + produto[i] + "</table>";
    }
}







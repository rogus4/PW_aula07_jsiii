function selectById() {
    const titulo = document.getElementById("titulo");

    console.log(titulo);
}

function selectByClass() {
    const paragrafos = document.getElementsByClassName("paragrafo");

    console.log(paragrafos)
}

function selectByElementName(){
    const itens = document.getElementsByTagName("li");

    console.log(itens);
}

function testQuerySelector(){
    const paragrafo = document.querySelector("p.paragrafo")

    console.log(paragrafo);
}

function testQuerySelectorAll(){
    const paragrafos = document.querySelectorAll("p.paragrafo")

    console.log(paragrafos);
}

selectById();
selectByClass();
selectByElementName();
testQuerySelector();
testQuerySelectorAll();
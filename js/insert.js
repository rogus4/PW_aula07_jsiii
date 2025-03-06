function testAppendChild(){
    const paragrafo = document.createElement('p');

    paragrafo.textContent = 'Texto do paragrafo';

    const secao = document.querySelector(".paragrafos");

    secao.appendChild(paragrafo);
}

// concertar erro a baixo 
function testAppendMany(){ 
    const section = document.querySelector("section.lista");

    const uList = document.createElement('ul');

    [1, 2, 3].forEach((item) => {
        const li = document.createElement("li");

        li.textContent = `Item ${item}`;
        uList.appendChild(li);
    });
    section.appendChild(uList);
}

function testInsertBefore(){
    const item = document.createElement("li");
    item.textContent = "Item 4";

    const lista = document.querySelector("selection.lista ul");
    const terceiroItem = lista.querySelector("li:nth-child(3)");
    lista.insertBefore (item, terceiroItem);
}

testAppendChild();

testAppendMany();
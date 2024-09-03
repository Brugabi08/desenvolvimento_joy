// const titulo = document.getElementById("titulo")
// console.log(titulo);

// Se quisermos avessar vários elementos de uma só vez
// const textos = document.getElementsByClassName("texto simples");
// console.log(textos);

// Se quisermos acessar, por exemplo, o primeiro elemento da lista, usaríamos a seguinte linha de código:
// console.log(textos[0]);

// Acessando a DOM com seletores CSS
// Queremos acessar o segundo elemento h2 da nossa página, usaremos o aninhamento de dois seletores CSS: “div h2”
// const segundoTitulo = document.querySelector("div h2");
// console.log(segundoTitulo)

// Vamos acessar os mesmos elementos que acessamos no segundo exemplo da seção anterior 
// const textosPorClasse = document.querySelectorAll(".texto simples");
// console.log(textosPorClasses)

let elementoH1 = document.querySelector("h1");
console.log(elementoH1);
console.log(elementoH1.innerText);
elementoH1.innerText = "Novo título com JS";

let elementoMain = document.querySelector("main");
console.log(elementoMain);
console.log(elementoMain.innerText);
console.log(elementoMain.innerHTML);
elementoMain.innerHTML =`
<h2>Novo subtítulo</h2>
<ul>
<li>Elemento de lista JS 01</li>
<li>Elemento de lista JS 02</li>
<li>Elemento de lista JS 03</li>
</ul>
`;

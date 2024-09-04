let elementoJavaScript = document.createElement("li");
console.log(elementoJavaScript);
elementoJavaScript.innerText = "JavaScript"
elementoJavaScript.id = "ling-js"

let listaLinguagem = document.querySelector(".lista-linguagem");
listaLinguagem.appendChild(elementoJavaScript);

const postagemJavaScript = document.createElement("div");
postagemJavaScript.innerHTML = `<h2 class="post-titulo">JavaScript</h2>
<p class="post-texto">
 JavaScript é uma linguagem de programação
</p>`;
const postagens = document.querySelector(".postagens");
postagens.appendChild(postagemJavaScript);

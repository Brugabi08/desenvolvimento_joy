const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');

titulo.innerText = "Sejam Bem Vindos!";
link.innerText = "Veja mais";

listaNaoOrdenada.innerHTML = `
     <li>1</li>
     <li>2</li>
     <li>3</li>
`;

listaOrdenada.innerHTML =`
     <li><a href="https://www.google.com">Google</a>
     </li><li><a href="https://www.youtube.com">YouTube</a></li>
     <li><a href="https://www.github.com">GitHub</a></li>
`;



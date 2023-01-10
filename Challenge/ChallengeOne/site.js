const content = {};
content.navbar = ` 
<nav class="navbar" > 
        <img class="imagenLogo" src="./imagenes/image(4).svg" alt="logo"/>
</nav>
`;
content.button1 = `Encriptar!`;
content.button2 = `Desencriptar!`;
content.button3 = `Copiar`;
content.parrafo1 = `Solo letras minúsculas y sin acentos`
content.parrafo2 = `Ningun mensaje fue encontrado`
content.parrafo3 = `Ingresa el texto que desees encriptar o desencriptar.`




// Emulate a mini template engine:
document.addEventListener('DOMContentLoaded', () => {
  let html = document.body.innerHTML;
  Object.entries(content).forEach(([tag, data]) => {
    html = html.replaceAll(`{${tag}}`, data);
  });
  document.body.innerHTML = html;
});
function getScrollHeight(elm){
    var savedValue = elm.value
    elm.value = ''
    elm._baseScrollHeight = elm.scrollHeight
    elm.value = savedValue
  }
  
  function onExpandableTextareaInput({ target:elm }){
    // make sure the input event originated from a textarea and it's desired to be auto-expandable
    if( !elm.classList.contains('texto') || !elm.nodeName == 'textarea' ) return
    
    var minRows = elm.getAttribute('data-min-rows')|0, rows;
    !elm._baseScrollHeight && getScrollHeight(elm)
  
    elm.rows = minRows
    rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16)
    elm.rows = minRows + rows
  }
  
  

function ReglaEncriptación(texto){

  return 
}
  
function encriptador() {
  let texto = document.getElementById("texto").value.toLowerCase();
  let arrayTexto = texto.split("")
  let arrayEncriptado = []
  arrayTexto.map((letra, index) => {
    switch (letra) {
      case "e":
        arrayEncriptado[index] = "enter";
        break;
      case "i":
        arrayEncriptado[index] = "imes";
        break;
      case "a":
        arrayEncriptado[index] = "ai";
        break;
      case "o":
        arrayEncriptado[index] = "ober";
        break;
      case "u":
        arrayEncriptado[index] = "ufat";
        break;
      default:
        arrayEncriptado[index] = letra;
    }
  })

  console.log(arrayEncriptado.join(''))
  //texto.map((letra) => console.log(letra))
}

function desencriptador() {
  let texto = document.getElementById("texto").value.toLowerCase();
  texto = texto.replaceAll("enter", "e")
  texto = texto.replaceAll("imes", "i")
  texto = texto.replaceAll("ai", "a")
  texto = texto.replaceAll("ober", "o")
  texto = texto.replaceAll("ufat", "u")
  console.log(texto)
}


  // global delegated event listener
  document.addEventListener('input', onExpandableTextareaInput)

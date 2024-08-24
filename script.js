const textArea = document.querySelector(".caja-mensaje");
const imagenResultado = document.querySelector(".imagen-result");
const spinner = document.querySelector(".loader");
const resultadoTitulo = document.querySelector(".titulo-resultado");
const resultadoParrafo = document.querySelector(".parrafo-resultado");
const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const botonCopiar = document.querySelector(".btn-copiar");

const llaves = [
  ["a", "ai"],
  ["e", "enter"],
  ["i", "imes"],
  ["o", "ober"],
  ["u", "ufat"],
];

function encriptarMensaje(mensaje) {
  let mensajeEncriptado = "";
  for (let i = 0; i < mensaje.length; i++) {
    let letra = mensaje[i];
    let encriptada = letra;
    for (let j = 0; j < llaves.length; j++) {
      if (letra.toLowerCase() === llaves[j][0]) {
        encriptada = llaves[j][1];
        break;
      }
    }
    mensajeEncriptado += encriptada;
    console.log(mensajeEncriptado);
  }
  return mensajeEncriptado;
}
function desencriptarMensaje(mensaje) {
  let mensajeDesencriptado = mensaje;
  for (let i = 0; i < llaves.length; i++) {
    let regex = new RegExp(llaves[i][1], "g");
    mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    
  }
  console.log(mensajeDesencriptado);
  return mensajeDesencriptado;
}


textArea.addEventListener("input", (e) => {
  imagenResultado.style.display = "none";
  spinner.classList.remove("hidden");
  resultadoTitulo.textContent = "Capturando mensaje";
  resultadoParrafo.textContent = "";
});

botonEncriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let mensaje = textArea.value;
  let mensajeEncriptado = encriptarMensaje(mensaje);
  resultadoParrafo.textContent = mensajeEncriptado;
  botonCopiar.classList.remove("hidden");
  spinner.classList.add("hidden");
  resultadoTitulo.textContent = "El resultado es: ";
});

botonDesencriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let mensaje = textArea.value;
  let mensajeDesencriptado = desencriptarMensaje(mensaje);
  resultadoParrafo.textContent = mensajeDesencriptado;
  botonCopiar.classList.remove("hidden");
  spinner.classList.add("hidden");
});

botonCopiar.addEventListener("click", (e)=> {
  let textoCopiado = resultadoParrafo.textContent;
  navigator.clipboard.writeText(textoCopiado);
})
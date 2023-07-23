
function adicionarValor(caracter) {

  const input = document.getElementById('campoTexto')

  input.value += caracter
}

function mostrarResultado() {

  const input = document.getElementById('campoTexto')

  const resultado = eval(input.value)

  if (input.value != '') {

    document.getElementById('resultado').value = resultado

  }


}

function limparCampo() {
  document.getElementById('campoTexto').value = ''
}

function isTeclaPermitida(tecla) {

  const teclasPermitidas = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '+', '-', '*', '/', '(', ')', '%', '.',
  ];

  return teclasPermitidas.includes(tecla);
}

document.addEventListener('keydown', function (event) {
  const teclaPressionada = event.key;

  if (!isTeclaPermitida(teclaPressionada) && teclaPressionada !== 'Backspace' && teclaPressionada !== 'Enter') {
    event.preventDefault();
  }

  if (teclaPressionada === 'Enter') {
    const input = document.getElementById('campoTexto')
    if (input.value != '') {
      mostrarResultado()
    }
  }
});

function copiarResultado() {

  const resultado = document.getElementById('resultado').value;

  navigator.clipboard.writeText(resultado);

  alert("Copiado para a área de transferência");

}



const darkModeColors = {
  backgroundColor: "#212529",
  textColor: "#000000",
  buttonColor: "#4dff91",
  borderButton: "#none",
  tittle: "#FFFFFF",
  borderInput: "#FFFFFF",
  copyColor: "#FFFFFF"
};

const lightModeColors = {
  backgroundColor: "#FFFFFF",
  textColor: "#000000",
  buttonColor: "#4dff91",
  borderColor: "#000000",
  tittle: "#000000",
  borderInput: "#000000",
  copyColor: "#000000"
};

let currentTheme = "dark";

function switchTheme() {

  const switchButton = document.getElementById("switchTheme");

  if (currentTheme === "dark") {
    switchButton.textContent = "Switch Theme Light/Dark";
    applyTheme(lightModeColors);
    currentTheme = "light";
  }

  else {
    switchButton.textContent = "Switch Theme Dark/Light";
    applyTheme(darkModeColors);
    currentTheme = "dark";
  }
}

function applyTheme(theme) {

  const body = document.body;

  const inputField = document.getElementById("campoTexto");
  const resultField = document.getElementById("resultado");
  const buttons = document.getElementsByTagName("button");
  const tittle = document.getElementById('tittle')
  const copyright = document.getElementById('rodape')


  body.style.backgroundColor = theme.backgroundColor;
  body.style.color = theme.textColor;

  inputField.style.backgroundColor = theme.backgroundColor;
  inputField.style.borderButton = theme.borderButton;
  inputField.style.borderColor = theme.borderInput;
  inputField.style.color = theme.borderInput;
  tittle.style.color = theme.tittle;
  copyright.style.color = theme.copyColor;

  resultField.style.backgroundColor = theme.backgroundColor;
  resultField.style.borderColor = theme.borderInput
  resultField.style.borderButton = theme.borderButton;
  resultField.style.color = theme.borderInput;

  for (let i = 0; i < buttons.length; i++) {

    buttons[i].style.backgroundColor = theme.buttonColor;

    buttons[i].style.color = theme.textColor;

    buttons[i].style.borderButton = theme.borderButton;
  }
}

function isDispositivoMovel() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const meuInput = document.getElementById('campoTexto');

if (isDispositivoMovel()) {
  meuInput.disabled = true;
}
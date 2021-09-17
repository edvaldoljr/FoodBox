let prato;
let bebida;
let sobremesa;

function escolherFrango() {
  document.getElementById("Frango").style.borderColor = "green";
  document.getElementById("Carne").style.borderColor = "white";
  prato = "Frango Yin-Yang";
}
function escolherCarne() {
  document.getElementById("Carne").style.borderColor = "green";
  document.getElementById("Frango").style.borderColor = "white";
  prato = "Carne e Salada";
}

function escolherCoca() {
  document.getElementById("Coca").style.borderColor = "green";
  document.getElementById("Suco").style.borderColor = "white";
  bebida = "Coca-Cola";
}
function escolherSuco() {
  document.getElementById("Suco").style.borderColor = "green";
  document.getElementById("Coca").style.borderColor = "white";
  bebida = "Suco de Laranja";
}

function escolherPudim() {
  document.getElementById("Pudim").style.borderColor = "green";
  document.getElementById("Sorvete").style.borderColor = "white";
  sobremesa = "Pudim";
}
function escolherSorvete() {
  document.getElementById("Sorvete").style.borderColor = "green";
  document.getElementById("Pudim").style.borderColor = "white";
  sobremesa = "Sorvete de Morango";
}
function finalizarPedido() {
  let mensagem;

  mensagem =
    "Olá gostaria de pedir um combo: " +
    prato +
    ", " +
    bebida +
    " e um " +
    sobremesa;
  alert(mensagem);
}

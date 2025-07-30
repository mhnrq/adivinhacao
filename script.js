const conjuntos = gerarCartoes(); // gera os 6 conjuntos de números
let respostas = [];
let etapa = 0;

function comecar() {
  respostas = [];
  etapa = 0;
  document.getElementById('fundo').src = 'imagens/FOTO 2.png';
  mostrarEtapa();
}

function mostrarEtapa() {
  if (etapa < conjuntos.length) {
    const fala = `Seu número está aqui?\n\n${conjuntos[etapa].join(', ')}`;
    document.getElementById('fala').innerText = fala;
    document.getElementById('btn1').style.display = 'none';
    document.getElementById('btn2').style.display = 'block';
    document.getElementById('btn3').style.display = 'block';
  } else {
    // Final
    const numero = calcularNumero(respostas);
    document.getElementById('fundo').src = 'imagens/FOTO 1.png';
    document.getElementById('fala').innerText = `Então o número que você pensou é: ${numero}!\nAcertei?`;
    document.getElementById('btn1').innerText = 'Jogar de novo';
    document.getElementById('btn1').style.display = 'block';
    document.getElementById('btn2').style.display = 'none';
    document.getElementById('btn3').style.display = 'none';
  }
}

function responder(valor) {
  respostas.push(valor);
  etapa++;
  mostrarEtapa();
}

function calcularNumero(respostas) {
  let numero = 0;
  for (let i = 0; i < respostas.length; i++) {
    if (respostas[i]) {
      numero += Math.pow(2, i);
    }
  }
  return numero;
}

function gerarCartoes() {
  const cartoes = [];
  for (let i = 0; i < 6; i++) {
    const cartao = [];
    for (let n = 1; n <= 63; n++) {
      if ((n & Math.pow(2, i)) !== 0) {
        cartao.push(n);
      }
    }
    cartoes.push(cartao);
  }
  return cartoes;
}

var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;
var elementoResultado = document.getElementById("resultado");

function chutar() {
  var chute = parseInt(document.getElementById("valor").value);

  if (tentativas >= 1) {
    if (numeroSecreto == chute) {
      elementoResultado.innerHTML = "Acertou! Parabéns >.<";
      tentativas = 0;
    } else if (chute > numeroSecreto) {
      elementoResultado.innerHTML = "Quase! O número secreto é menor";
      tentativas = tentativas - 1;
      if (tentativas == 0) {
        elementoResultado.innerHTML =
          "Suas chances acabaram :C. O número secreto era " + numeroSecreto;
      }
    } else if (chute < numeroSecreto) {
      elementoResultado.innerHTML = "Quase! O número secreto é maior";
      tentativas = tentativas - 1;
      if (tentativas == 0) {
        elementoResultado.innerHTML =
          "Suas chances acabaram :C. O número secreto era " + numeroSecreto;
      }
    }
  }
}

function reload() {
  elementoResultado.disabled = false;
  const resultado = document.getElementById("resultado");
  const numeroSecreto = parseInt(Math.random() * 11);
  resultado.innerHTML = "Vamos jogar de novo!";
  tentativas = 3;
}
let perguntas = [
  {
    codigo: "x = 2\nprint(x * 3)",
    opcoes: ["5", "6", "7", "8"],
    resposta: "6"
  },
  {
    codigo: "x = 5\nprint(x - 2)",
    opcoes: ["2", "3", "4", "5"],
    resposta: "3"
  }
];

let atual = 0;
let pontos = 0;
let selecionada = "";

function carregarPergunta() {
  let p = perguntas[atual];

  document.getElementById("codigo").innerText = p.codigo;

  let htmlOpcoes = "";

  p.opcoes.forEach(op => {
    htmlOpcoes += `
      <label>
        <input type="radio" name="opcao" value="${op}" onclick="selecionada='${op}'">
        ${op}
      </label><br>
    `;
  });

  document.getElementById("opcoes").innerHTML = htmlOpcoes;
  document.getElementById("resultado").innerText = "";
}


function responder() {

  if (selecionada === "") {
    document.getElementById("resultado").innerText = "⚠️ Escolha uma opção!";
    return;
  }

  let correta = perguntas[atual].resposta;

  if (selecionada === correta) {
    document.getElementById("resultado").innerText = "✅ Acertou!";
    pontos += 10;
  } else {
    document.getElementById("resultado").innerText = "❌ Errou!";
  }

  document.getElementById("pontos").innerText = pontos;
}


function proximaPergunta() {
  atual++;

  if (atual >= perguntas.length) {
    document.getElementById("codigo").innerText = "🏁 Fim do jogo!";
    document.getElementById("opcoes").innerHTML = "";
    document.getElementById("resultado").innerText = "";
    return;
  }

  selecionada = "";
  carregarPergunta();
}


carregarPergunta();
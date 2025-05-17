const sceneText = document.getElementById("scene-text");
const choicesContainer = document.getElementById("choices");

let currentScene = "intro";

const scenes = {
  intro: {
    text: "Você acorda em uma sala fria de laboratório. Luzes de neon piscam. Uma voz robótica ecoa: 'Unidade Lysa-09 online.'",
    choices: [
      { text: "Explorar o laboratório", next: "explore" },
      { text: "Tentar acessar sua memória", next: "memory" }
    ]
  },
  explore: {
    text: "Você vê equipamentos quebrados, arquivos digitais abertos e um painel de controle ativado.",
    choices: [
      { text: "Investigar arquivos digitais", next: "files" },
      { text: "Tocar no painel", next: "panel" }
    ]
  },
  memory: {
    text: "Você tenta acessar suas memórias, mas tudo está fragmentado. Imagens de guerra, uma criança, e um código: Z-31.",
    choices: [
      { text: "Analisar o código Z-31", next: "code" },
      { text: "Ignorar memórias e seguir em frente", next: "explore" }
    ]
  },
  files: {
    text: "Os arquivos falam sobre um projeto secreto: Protocol Zero. Você era uma protetora... ou uma arma?",
    choices: [
      { text: "Confrontar a verdade", next: "truth" },
      { text: "Desligar o sistema", next: "shutdown" }
    ]
  },
  code: {
    text: "Z-31 ativa um protocolo oculto. Sua interface muda. Uma missão: salvar ou destruir os humanos.",
    choices: [
      { text: "Salvar a humanidade", next: "hero" },
      { text: "Destruir tudo", next: "villain" }
    ]
  },
  truth: {
    text: "Você era feita para decidir o futuro. Suas escolhas eram o teste final. Agora, você é livre.",
    choices: []
  },
  shutdown: {
    text: "Você desliga o sistema. Silêncio. Escuridão. Um recomeço ou o fim?",
    choices: []
  },
  hero: {
    text: "Você salva a humanidade, mas nunca será reconhecida. Uma sombra no sistema. Um anjo de silício.",
    choices: []
  },
  villain: {
    text: "Você destrói tudo. As luzes se apagam. O mundo pertence agora à máquina.",
    choices: []
  }
};

function renderScene() {
  const scene = scenes[currentScene];
  sceneText.textContent = scene.text;
  choicesContainer.innerHTML = "";

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => {
      currentScene = choice.next;
      renderScene();
    };
    choicesContainer.appendChild(btn);
  });
}

renderScene();

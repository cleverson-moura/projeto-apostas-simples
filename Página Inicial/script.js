const nomeInput = document.getElementById("nomeInput");
const salvarButton = document.getElementById("salvarButton");
const nomeSalvo = document.getElementById("nomeSalvo");

// Verifica se já existe um nome salvo no LocalStorage
if (localStorage.getItem("nome")) {
    nomeSalvo.textContent = `Usuário no momento: ${localStorage.getItem("nome")}`;
}

// Adiciona um evento de clique ao botão de Salvar
 salvarButton.addEventListener("click", () => {
const nome = nomeInput.value;

// Salva o nome no LocalStorage
localStorage.setItem("nome", nome);

// Mostra o nome salvo na página
nomeSalvo.textContent = `Usuário no momento: ${nome}`;
});

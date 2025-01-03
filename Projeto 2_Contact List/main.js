alert('Seja bem vind@! Adicione contatos à sua agenda virtual');
// selecionando elementos do DOM
const nomeInput = document.getElementById('input-nome');
const telefoneInput = document.getElementById('input-tel');
const emailInput = document.getElementById('input-email');
const cadastrarButton = document.getElementById('cadastrar-button');
const tabelaBody = document.querySelector('tbody');

cadastrarButton.addEventListener('click', function() {
    // obtendo valores dos inputs 
    const nome = nomeInput.value.trim(); //tratando os dados
    const telefone = telefoneInput.value.trim();
    const email = emailInput.value.trim();

    if (!nome || !telefone || !email) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const novaLinha = document.createElement('tr');

    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
        <td>${email}</td>
    `;

    tabelaBody.appendChild(novaLinha);

    nomeInput.value = '';
    telefoneInput.value = '';
    emailInput.value = '';

    alert('Contato adicionado com sucesso!');

});
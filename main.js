const form = document.getElementById('form-adicionar');
const pessoas = [];
const numerosTelefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    novaLinha();
    atualizarAgenda();
    atualizaNumeroPessoas();
})

function novaLinha() {
    const inputNome = document.getElementById('nome-pessoa');
    const inputTelefone = document.getElementById('numero-telefone');

    if(pessoas.includes(inputNome.value)){
        alert(`A pessoa inserida: ${inputNome.value} já existe`)
    }
    else{
        pessoas.push(inputNome.value);
        numerosTelefone.push(parseInt(inputTelefone));

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizarAgenda() {
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;
}

function atualizaNumeroPessoas() {
    document.getElementById('total-pessoas').innerHTML = pessoas.length;
}
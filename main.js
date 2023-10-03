

const form = document.getElementById('form-materia');   
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Celebrando"'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Triste"'
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNomeMateria = document.getElementById("nome-materia");
    const inputNotaMateria = document.getElementById("nota-materia");


    let linha = '<tr>'
    linha += `<td>${inputNomeMateria.value}</td>`;
    linha += `<td>${inputNotaMateria.value}</td>`;
    linha += `<td>${inputNotaMateria.value >=7 ? imgAprovado : imgReprovado} </td>`;
    linha += `</tr>`;

    linhas += linha;

const corpoTabela = document.querySelector('tbody');
corpoTabela.innerHTML = linhas

inputNomeMateria.value = ''
inputNotaMateria.value = ''
  //  alert(`Materia: ${inputNomeMateria.value} - Nota: ${inputNotaMateria.value}`);

});

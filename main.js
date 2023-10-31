

const form = document.getElementById('form-materia');   
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Celebrando"'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Triste"'
const materias [];
const notas [];
    let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputNomeMateria = document.getElementById("nome-materia");
    const inputNotaMateria = document.getElementById("nota-materia");

    materias.push(inputNomeMateria.value);
    notas.push(inputNotaMateria.value);


    let linha = '<tr>'
    linha += `<td>${inputNomeMateria.value}</td>`;
    linha += `<td>${inputNotaMateria.value}</td>`;
    linha += `<td>${inputNotaMateria.value >=7 ? imgAprovado : imgReprovado} </td>`;
    linha += `</tr>`;

    linhas += linha;



inputNomeMateria.value = '';
inputNotaMateria.value = '';


}

function atualizaTabela(){

const corpoTabela = document.querySelector('tbody');
corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    console.log (materias);
    console.log (notas);
}
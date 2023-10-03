

const form = document.getElementById('form-materia');   

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNomeMateria = document.getElementById("nome-materia");
    const inputNotaMateria = document.getElementById("nota-materia");

    let linha = '<tr>'
    linha += `<td>${inputNomeMateria.value}</td>`;
    linha += `<td>${inputNotaMateria.value}</td>`;
    linha += `<td>${inputNotaMateria.value >=7 ? 'Aprovado' : 'Reprovado'} </td>`;
    linha += `</tr>`;

const corpoTabela = document.querySelector('tbody');
corpoTabela.innerHTML = linha

    alert(`Materia: ${inputNomeMateria.value} - Nota: ${inputNotaMateria.value}`);

});

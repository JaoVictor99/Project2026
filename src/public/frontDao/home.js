async function carregarAlunos() {
  const response = await fetch('http://localhost:3000/alunos');
  const { sucesso, dados } = await response.json();

  if (sucesso) {
    exibirAlunos(dados);
  }
};
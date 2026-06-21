


// async function deletarAluno(id) {
//     try {
//         if (!confirm("Tem certeza que deseja excluir este aluno?")) return;

//         const resposta = await fetch(`http://localhost:3000/alunos/${id}`, {
//             method: "DELETE"
//         });

//         const dados = await resposta.json();

//         if (dados.sucesso) {
//             alert("Aluno deletado com sucesso!");
//             window.location.reload(); // atualiza a lista
//         } else {
//             alert(dados.mensagem);
//         }
//     } catch (error) {
//         console.error(error);
//         alert("Erro interno do servidor");
//     }
// }
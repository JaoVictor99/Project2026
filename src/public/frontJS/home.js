const  mostrarAlunos = async ()  => {


    try{ 
    const listAlunos = await fetch("http://localhost:3000/cadastroAluno", {
        method: "GET",
        headers: {
            "content-Type": "application/json"
        },
    })

    console.log(listAlunos);

    }catch(error){
        console.error(error);
        return alert("Erro interno no servidor");
    }
}
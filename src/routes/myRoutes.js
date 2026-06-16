const express = require("express");
const router = express.Router();

const LoginController = require("../controllers/loginControllers");
const AlunoController = require("../controllers/alunoControllers");

router.get("/", (req, res) => {
    res.redirect("/login");
});



router.get('/cadastroAluno', (req,res) => {
    res.render('cadastroAluno');
})

router.get('/cadastroLivro', (req, res) => {
    res.render('cadastroLivro');
});

// router.get('/home', (req,res) => {
//     res.render('home');
// })



router.get('/home', AlunoController.home);   
router.get('/alunos', AlunoController.listar); 
router.post("/cadastroAluno", AlunoController.cadastrar);
router.get('/alunos/:id', AlunoController.buscarPorId);
router.get('/aluno/editar/:id', AlunoController.telaEditar);
router.put('/alunos/:id', AlunoController.atualizar);
router.delete('/alunos/:id', AlunoController.deletar);








router.get("/login", LoginController.telaLogin);
router.post("/login", LoginController.login);


module.exports = router;

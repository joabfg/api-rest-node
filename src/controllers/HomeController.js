import Aluno from "../model/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Joab",
      sobrenome: "galdino",
      email: "joab@a",
      idade: 30,
      peso: 91.5,
      altura: 1.73,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();

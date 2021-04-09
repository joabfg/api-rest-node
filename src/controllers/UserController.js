import User from "../model/User";
import User from "../model/User";

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (erro) {
      res.status(400).json({
        erros: erro.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ["Missing ID."] });
      }

      const userBD = await User.findByPk(req.params.id);
      if (!userBD) {
        return res.status(400).json({ errors: ["Invalid ID."] });
      }
      const novoUser = await userBD.update(req.body);

      return res.json(req.body);
    } catch (erro) {
      console.log(erro);
      res.status(400).json({
        erros: erro.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ["Missing ID."] });
      }

      const userBD = await User.findByPk(req.params.id);
      if (!userBD) {
        return res.status(400).json({ errors: ["Invalid ID."] });
      }
      await userBD.destroy();

      return res.json(req.body);
    } catch (erro) {
      console.log(erro);
      res.status(400).json({
        erros: erro.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();

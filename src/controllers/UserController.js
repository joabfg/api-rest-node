import User from "../model/User";
import User from "../model/User";

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);

      res.json(novoUser);
    } catch (erro) {
      res.status(400).json({
        erros: erro.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();

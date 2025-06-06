import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController.js";
import { AgendamentoController } from "../controllers/AgendamentosController.js";
import authAdmin from "../middlewares/authAdmin.js";
import { LoginController } from "../controllers/LoginController.js";
import auth from "../middlewares/auth.js";

const router = Router();
const usuarioController = new UsuarioController();
const agendamentoController = new AgendamentoController();
const loginController = new LoginController();

router.get("/usuarios", usuarioController.buscarUsuarios)
router.get("/usuario/:id", usuarioController.buscarUsuarioPorId);
router.post("/usuario", usuarioController.salvarUsuario)
router.put("/usuario/:id", usuarioController.atualizarUsuario)
router.delete("/usuario/:id", usuarioController.deletarUsuario)

router.post("/agendamento", agendamentoController.salvarAgendamento)
router.get("/agendamento/:id", agendamentoController.buscarAgendamento)
router.get("/agendamentos", agendamentoController.buscarAgendamentos)
router.delete("/agendamento/:id", agendamentoController.deletarAgendamento)

router.post("/login", loginController.login)

export { router }
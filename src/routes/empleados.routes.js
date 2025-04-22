import {Router} from "express";
import { methodEmpleados as empleadoController } from "../controllers/empleado.controllers.js";

const router = Router();

router.get("/", empleadoController.getEmpleados);

export default router;
import {Router} from "express";
import { methodProductos as productosController } from "../controllers/producto.controllers.js";

const router = Router();

router.get("/", productosController.getProductos);
router.put("/:id", productosController.updateProducto);

export default router;
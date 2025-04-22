import express from 'express';
import categoriasRoutes from "./routes/categorias.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";
import productosRoutes from "./routes/productos.routes.js";
import cors from "cors";

const app = express();

app.use(cors());

// Middleware
app.use(express.json());

app.set("port", 5000)

app.use("/api/categorias", categoriasRoutes);
app.use("/api/clientes", clientesRoutes);
app.use("/api/empleados", empleadosRoutes);
app.use("/api/productos", productosRoutes);
export default app;
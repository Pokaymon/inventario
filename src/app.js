import express from 'express';
import categoriasRoutes from "./routes/categorias.routes.js"
import cors from "cors";

const app = express();

app.use(cors());

app.set("port", 5000)

app.use("/api/categorias",categoriasRoutes)
export default app;
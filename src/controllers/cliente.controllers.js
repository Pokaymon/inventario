import getConnection from "./../db/database.js"

const getClientes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(
            "SELECT ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax FROM clientes"
        );
        res.json(result);
    } catch (error) {
        console.error("❌ Error al obtener los clientes:", error.message);
        res.status(500).json({
            mensaje: "Hubo un error al obtener los clientes",
            error: error.message
        });
    }
};

const postClientes = async (req, res) => {
    try {
        const {ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax} = req.body;
        const client = {
            ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax
        }
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO clientes SET ?", client);
        res.json(result)
    } catch (error) {
        console.error("❌ Error al crear el cliente:", error.message);
        res.status(500).json({
            mensaje: "Hubo un error al crear el cliente",
            error: error.message
        });
    }
}

export const methodClientes = {
    getClientes,
    postClientes
};
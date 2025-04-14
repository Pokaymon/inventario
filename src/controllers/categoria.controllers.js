import getConnection from "./../db/database.js"

const getCategorias = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(
            "SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias"
        );
        res.json(result);
    } catch (error) {
        console.error("❌ Error al obtener las categorías:", error.message);
        res.status(500).json({
            mensaje: "Hubo un error al obtener las categorías",
            error: error.message
        });
    }
};

export const methodHTTP = {
    getCategorias
};


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

const getCategory = async (req, res) => {
    try {
        console.log(req.params);
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query(
            "SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE CategoriaID = ?", id 
        );
        res.json(result)
    } catch (error) {
        console.error("❌ Error al obtener la categoría:", error.message);
        res.status(500).json({
            mensaje: "Hubo un error al obtener la categoría",
            error: error.message
        });
    }
}

const deleteCategory = async (req, res) => {
    try {
        console.log("id categoria a borrar: ", req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query(
            "DELETE FROM categorias WHERE CategoriaID = ?", id 
        );
        res.json(result)
    } catch (error) {
        console.error("❌ Error al eliminar la categoría:", error.message);
        res.status(500).json({
            mensaje: "Hubo un error al eliminar la categoría",
            error: error.message
        });
    }
}

const updateCategory = async (req, res) => {
    try {
        const {id} = req.params
        const {CategoriaNombre, Descripcion, Imagen} = req.body;
        const category = {CategoriaNombre, Descripcion, Imagen}
        const connection = await getConnection();
        const result = await connection.query(
            "UPDATE categorias SET ? WHERE CategoriaID = ?", [category, id]
        )
        res.json(result)
    } catch (error) {
        console.error("❌ Error al actualizar la categoria:", error.message);
        res.status(500).json({
            mensaje: "Hubo un error al actualizar la categoria",
            error: error.message
        });
    }
}

const postCategorias = async (req, res) => {
    try {
        const {CategoriaNombre, Descripcion, Imagen} = req.body;
        const category = {
            CategoriaNombre, Descripcion, Imagen
        }
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO categorias SET ?", category);
        res.json(result)
    } catch (error) {
        console.error("❌ Error al crear la categoria:", error.message);
        res.status(500).json({
            mensaje: "Hubo un error al crear la categoria",
            error: error.message
        });
    }
}

export const methodHTTP = {
    getCategorias,
    getCategory,
    postCategorias,
    deleteCategory,
    updateCategory
};


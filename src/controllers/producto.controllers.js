import getConnection from "./../db/database.js"

const getProductos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(
            "SELECT ProductoID, ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado FROM productos"
        );
        res.json(result);
    } catch (error) {
        console.error("❌ Error al obtener los productos:", error.message);
        res.status(500).json({
            mensaje: "Hubo un error al obtener los productos",
            error: error.message
        });
    }
};

const updateProducto = async (req, res) => {
    try {
        const {id} = req.params
        const {ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado} = req.body;
        const product = {ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado}
        const connection = await getConnection();
        const result = await connection.query(
            "UPDATE productos SET ? WHERE ProductoID = ?", [product, id]
        )
        res.json(result)
    } catch (error) {
        console.error("❌ Error al actualizar los productos:", error.message);
        res.status(500).json({
            mensaje: "Hubo un error al actualizar los productos",
            error: error.message
        });
    }
}

export const methodProductos = {
    getProductos,
    updateProducto
};
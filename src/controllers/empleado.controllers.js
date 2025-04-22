import getConnection from "./../db/database.js";

const getEmpleados = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(
            "SELECT EmpleadoID, Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto FROM empleados"
        );
        res.json(result);
    } catch (error) {
        console.error("❌ Error al obtener los Empleados:", error.message);
        res.status(500).json({
            mensaje: "Hubo un error al obtener los Empleados",
            error: error.message
        });
    }
};

export const methodEmpleados = {
    getEmpleados
};
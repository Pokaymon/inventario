// Ruta del backend (ajústala si es diferente)
const API_URL = "http://localhost:5000/api/categorias";

// Esperar a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const imagenInput = document.getElementById("imagen");
    const tipoCategoria = document.getElementById("tipoCategoria").value;

    if (!nombre || !descripcion || !tipoCategoria) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    // Obtener el archivo de imagen seleccionado
    const imagenFile = imagenInput.files[0];
    const reader = new FileReader();

    reader.onloadend = async () => {
      const imagenBase64 = reader.result;

      // Construcción del objeto para enviar
      const nuevaCategoria = {
        CategoriaNombre: nombre,
        Descripcion: descripcion,
        Imagen: imagenBase64,
        Tipo: tipoCategoria // Por si en el futuro se maneja
      };

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(nuevaCategoria)
        });

        if (!response.ok) {
          throw new Error("Error al registrar la categoría");
        }

        const data = await response.json();
        console.log("✅ Categoría registrada:", data);
        alert("Categoría creada exitosamente");

        // Reiniciar el formulario
        formulario.reset();
        // Cerrar el modal
        const modal = bootstrap.Modal.getInstance(document.getElementById("registerCategory"));
        modal.hide();

        // Aquí podrías refrescar la tabla o redirigir

      } catch (error) {
        console.error("❌ Error al enviar la categoría:", error.message);
        alert("Hubo un error al registrar la categoría");
      }
    };

    if (imagenFile) {
      reader.readAsDataURL(imagenFile); // Convertir a base64
    } else {
      reader.onloadend(); // Ejecutar directamente si no hay imagen
    }
  });
});

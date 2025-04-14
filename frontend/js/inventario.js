import {obtainCategories} from "../apiConnection/consumeApi.js";

/*
const url = "http://localhost:5000/api/categorias"

fetch(url)
.then(resultado=>{
    console.log(resultado);
    return resultado.json();
})
.then(data=>{
    console.log(data);
    showndata(data);
})
*/

document.addEventListener("DOMContentLoaded", ()=>{
    getCategories();
});

async function getCategories(){
  const categoriesObtained = await obtainCategories();
    const container = document.querySelector('tbody');
    categoriesObtained.forEach((category)=>{
        const {CategoriaID, CategoriaNombre, Descripcion, Imagen} = category
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
         ${CategoriaID}
        </td>
        <td>
         ${CategoriaNombre}
        </td>
        <td>
         ${Descripcion}
        </td>
        <td>
         <img src="${Imagen}" width="100px" class="cuenta">
        </td>
        <td>
         <button class="btn color5">Details</button>
        </td>
        <td>
         <button class="btn color6">Editar</button>
        </td>
        <td>
         <button class="btn color7">Borrar</button>
        </td>
        `;
        container.appendChild(row)
    });
}
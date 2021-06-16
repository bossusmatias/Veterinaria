const listaMascotas= document.getElementById('listaMascotas');
const tipo = document.getElementById('tipoMascota');
const nombre = document.getElementById('nombreMascota');
const dueño = document.getElementById('nombreDueño');
const form = document.getElementById('form');
const btnGuardar = document.getElementById('guardar');

let mascotas = [{
    tipo: "Perro",
    nombre: "Luly",
    dueño: "Matias Bossus"
}];



function listarMascotas() {
    const htmlMascotas = mascotas.map((mascota, indice) => `
    
    <tr>
        <th scope="row">${indice}</th>
            <td>${mascota.tipo}</td>
            <td>${mascota.nombre}</td>
            <td>${mascota.dueño}</td>
              <td>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                  <button type="button" class="btn btn-outline-primary"><img src="/imagenes/pencil.svg" alt="" width="30" height="24"></i></button>
                  <button type="button" class="btn btn-danger"><img src="/imagenes/delete.svg" alt="" width="30" height="24"></i></button>
                </div>
              </td>
    </tr>`).join("");
    listaMascotas.innerHTML = htmlMascotas;
};

function enviarDatos(evento) {
  evento.preventDefault();
  const datos = {
    tipo: tipo.value,
    nombre: nombre.value,
    dueño: dueño.value
  };

  mascotas.push(datos);
  listarMascotas()
};


listarMascotas();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;
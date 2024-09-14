//----------------------- Tratamiento ---------------------------------------------------------
const urlTratamiento = 'http://localhost:8080/estetica/tratamiento/';
var enlistar = "get";
var agregar = "create";

function limpiarLista(){
  location.reload();
}

function enlistarTratamientos(){
  fetch(urlTratamiento + enlistar)
  .then(response => response.json())
  .then(data => {
    const tabla = document.getElementById('listaTratamiento');

    data.forEach(element => {
      const fila = document.createElement('tr');
      fila.className = 'item';
      fila.innerHTML = `
        <td>${element.idTratamiento}</td>
        <td>${element.nombre}</td>
        <td>${element.tiempo}</td>
        <td>${element.cantidadSesiones}</td>
        <td>${element.precio}</td>
      `;
      tabla.querySelector('tbody').appendChild(fila);
    });
  })
.catch(error => console.error("Error al obtener tratamientos", error));
}

window.addEventListener('load', enlistarTratamientos());

/* ------------------------------------------------------------------------------------------------------------- */
function APIbuscarTratamiento(url){
  return fetch(url + enlistar)
  .then(response => response.json());
};

function buscarTratamiento() {
  APIbuscarTratamiento(urlTratamiento)
  .then(data => {
      const nombreTratamientoBuscar = document.getElementById('nombreTratamientoBuscar')
      const nombreTratamiento = nombreTratamientoBuscar.value.toLowerCase();
      const tabla = document.getElementById('listaTratamiento');

      const listaTratamientoABuscar = [];
      
      if(nombreTratamiento == ''){
        return;
      }else {
        for (k of data){
          const nombre = k.nombre.toLowerCase();
          if(nombre.includes(nombreTratamiento)){
            listaTratamientoABuscar.push(k);
          }
        }
      };
      

      document.getElementById("listaTratamiento").querySelector("tbody").innerHTML="";
      
      for (tratamiento of listaTratamientoABuscar){
        const fila = document.createElement('tr');
          fila.innerHTML = `
            <td>${tratamiento.idTratamiento}</td>
            <td>${tratamiento.nombre}</td>
            <td>${tratamiento.tiempo}</td>
            <td>${tratamiento.cantidadSesiones}</td>
            <td>${tratamiento.precio}</td>
          `;
          tabla.querySelector('tbody').appendChild(fila);
      }
  })
};

function agregarTratamiento() {

  var formulario = document.getElementById('formularioAgregarTratamiento');

  const obj = {
    "nombre": formulario[0].value,
    "cantidadSesiones": parseInt(formulario[1].value),
    "tiempo": formulario[2].value,
    "tiempoSuperpuesto": formulario[3].value,
    "precio": parseInt(formulario[4].value)
  };

  let urlAgregar = urlTratamiento + agregar;
  
	fetch(urlAgregar, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj),
	});

  //location.reload();
  limpiarLista();
};
/*-------------------------------- Buscar tratamiento --------------------------------------------------------*/
var buscarTratamientoModal = document.getElementById('botonBuscarTratamientoModal');

buscarTratamientoModal.addEventListener('click', buscarTratamiento);

/*-------------------------------- Agregar tratamiento --------------------------------------------------------*/
var agregarTratamientoModal = document.getElementById('botonAgregarTratamientoModal');

agregarTratamientoModal.addEventListener('click', agregarTratamiento);

/*-------------------------------- Limpiar lista tratamiento --------------------------------------------------------*/
var limpiarListaTratamiento = document.getElementById('limpiarListaTratamiento');

limpiarListaTratamiento.addEventListener('click', limpiarLista);

/*-------------------------------- Editar tratamiento --------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  const tratamientos = document.getElementById('listaTratamiento');

  tratamientos.addEventListener('click', (event) => {
    // event.target obtiene el elemento especifico dentro de la tabla que fue clickeada.
    // tagName verifica si el click sobre un td
    if(event.target.tagName === 'TD'){

      // obtiene la fila clickeada
      const row = event.target.closest('tr');

      // obtiene todo las celdas de la fila
      const celdas = row.getElementsByTagName('td');

      // accedo a cada elemento de la fila
      const id = celdas[0];

      console.log(id);
    }
  })
})
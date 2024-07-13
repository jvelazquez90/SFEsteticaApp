//----------------------- Tratamiento ---------------------------------------------------------
const urlTratamiento = 'http://localhost:8080/EsteticaBackend/tratamiento';

function enlistarTratamientos(){
  fetch(urlTratamiento)
  .then(response => response.json())
  .then(data => {
    const tabla = document.getElementById('listaTratamiento');

    data.forEach(element => {
      const fila = document.createElement('tr');
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
  return fetch(url)
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
  const formulario = document.forms['formularioAgregarTratamiento'];
  //console.log(agregarTratamientoModal);
  const datos = [];

  for (let elemento of formulario) {
    datos.push(elemento.value);
  }
  const nombre = datos[0];
  const cantidadSesiones = datos[1];
  const tiempo = datos[2];
  const superposicion = datos[3];
  const precio = datos[4];

  //console.log(nombre);
  
  const tabla = document.getElementById('listaTratamiento');

  const fila = document.createElement('tr');
  fila.innerHTML = `
      <td>${7}</td>
      <td>${datos[0] + ' ' + datos[1]}</td>
      <td>${datos[2]}</td>
      <td>${datos[3]}</td>
      <td>F</td>
  `
  tabla.querySelector('tbody').appendChild(fila);
};

/*-------------------------------- Buscar paciente --------------------------------------------------------*/
var buscarTratamientoModal = document.getElementById('botonBuscarTratamientoModal');

buscarTratamientoModal.addEventListener('click', buscarTratamiento);

/*-------------------------------- Agregar paciente --------------------------------------------------------*/
var agregarTratamientoModal = document.getElementById('botonAgregarTratamientoModal');

agregarTratamientoModal.addEventListener('click', agregarTratamiento);

/*-------------------------------- Limpiar lista paciente --------------------------------------------------------*/
//----------------------- API Paciente ---------------------------------------------------------
const urlPaciente = '../js/json/paciente.json';


/*-------------------- Funciones ----------------------------------------------------------------- */
function enlistarPacientes() {
  fetch(urlPaciente)
  .then(response => response.json())
  .then(data => {
    const tabla = document.getElementById('listaPaciente');

    data.forEach(element => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${element.id}</td>
        <td>${element.nombre}</td>
        <td>${element.dni}</td>
        <td>${element.telefono}</td>
        <td>${element.sexo}</td>
      `;
      tabla.querySelector('tbody').appendChild(fila);
    });
  })
  .catch(error => console.error("Error al obtener pacientes", error));
};

window.addEventListener('load', enlistarPacientes());

/*-------------------------------- Buscar paciente --------------------------------------------------------*/
var buscarPacienteModal = document.getElementById('botonBuscarPacienteModal');

buscarPacienteModal.addEventListener('click', function buscarPaciente() {
  fetch(urlPaciente)
    .then(response => response.json())
    .then(data => {

      const nombrePacienteBuscar = document.getElementById('nombrePacienteBuscar')
      console.log(nombrePacienteBuscar);
      const nombrePaciente = nombrePacienteBuscar.value.toLowerCase();
      const tabla = document.getElementById('listaPaciente');

      for (k of data){
        const nombre = k.nombre.toLowerCase();
        if(nombrePaciente !== '' && nombre.includes(nombrePaciente)){
          const fila = document.createElement('tr');
          fila.innerHTML = `
            <td>${k.id}</td>
            <td>${k.nombre}</td>
            <td>${k.dni}</td>
            <td>${k.telefono}</td>
            <td>${k.sexo}</td>
          `;
          document.getElementById("listaPaciente").querySelector("tbody").innerHTML="";
          tabla.querySelector('tbody').appendChild(fila);
        }
      }
    })
  }
)

/*-------------------------------- Agregar paciente --------------------------------------------------------*/
var agregarPacienteModal = document.getElementById('botonAgregarPacienteModal');

agregarPacienteModal.addEventListener('click', function agregarPacienteModal() {
  const formulario = document.forms['formularioAgregarPaciente'];
  //console.log(agregarPacienteModal);
  const datos = [];

  for (let elemento of formulario) {
    datos.push(elemento.value);
  }
  const nombre = datos[0];
  const apellido = datos[1];
  const dni = datos[2];
  const telefono = datos[3];

  //console.log(nombre + ' ' + apellido);
  
  const tabla = document.getElementById('listaPaciente');

  const fila = document.createElement('tr');
  fila.innerHTML = `
      <td>${7}</td>
      <td>${datos[0] + ' ' + datos[1]}</td>
      <td>${datos[2]}</td>
      <td>${datos[3]}</td>
      <td>F</td>
  `
  tabla.querySelector('tbody').appendChild(fila);
})

/*-------------------------------- Limpiar lista paciente --------------------------------------------------------*/
function limpiarListaPaciente() {
  enlistarPacientes();
}
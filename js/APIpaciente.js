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

function APIbuscarPaciente(url){
  return fetch(url)
  .then(response => response.json());
};

function buscarPaciente() {
  APIbuscarPaciente(urlPaciente)
  .then(data => {
      const nombrePacienteBuscar = document.getElementById('nombrePacienteBuscar')
      const nombrePaciente = nombrePacienteBuscar.value.toLowerCase();
      const tabla = document.getElementById('listaPaciente');

      const listaPacienteABuscar = [];
      
      if(nombrePaciente == ''){
        return;
      }else {
        for (k of data){
          const nombre = k.nombre.toLowerCase();
          if(nombre.includes(nombrePaciente)){
            listaPacienteABuscar.push(k);
          }
        }
      };
      

      document.getElementById("listaPaciente").querySelector("tbody").innerHTML="";
      
      for (paciente of listaPacienteABuscar){
        const fila = document.createElement('tr');
          fila.innerHTML = `
            <td>${paciente.id}</td>
            <td>${paciente.nombre}</td>
            <td>${paciente.dni}</td>
            <td>${paciente.telefono}</td>
            <td>${paciente.sexo}</td>
          `;
          tabla.querySelector('tbody').appendChild(fila);
      }
  })
};

function agregarPaciente() {
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
};

/*-------------------------------- Buscar paciente --------------------------------------------------------*/
var buscarPacienteModal = document.getElementById('botonBuscarPacienteModal');

buscarPacienteModal.addEventListener('click', buscarPaciente);

/*-------------------------------- Agregar paciente --------------------------------------------------------*/
var agregarPacienteModal = document.getElementById('botonAgregarPacienteModal');

agregarPacienteModal.addEventListener('click', agregarPaciente);

/*-------------------------------- Limpiar lista paciente --------------------------------------------------------*/
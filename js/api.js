//import {buscarPaciente} from "./APIpaciente.js";

//----------------------- API Paciente ---------------------------------------------------------
const urlPaciente = './js/json/agendaDelDia.json';

//----------------------- Agenda del dia ----------------------------------------------------
function agendaDelDia(){
  fetch(urlPaciente)
  .then(response => response.json())
  .then(data => {
    const tabla = document.getElementById('agendaDelDia');

    data.forEach(element => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${element.horario}</td>
        <td>${element.paciente}</td>
        <td>${element.tratamiento}</td>
      `;
      tabla.querySelector('tbody').appendChild(fila);
    });
  })
  .catch(error => console.error("Error al obtener agenda", error));
};

window.addEventListener('load', agendaDelDia);

  
  /*-------------------------------- Buscar paciente --------------------------------------------------------*/
  
  /*var turnoBuscarPacienteModal = document.getElementById('turnoBuscarPaciente');

  console.log(turnoBuscarPacienteModal);
  
  turnoBuscarPacienteModal.addEventListener('click', buscarPaciente);*/
  
  /*-------------------------------- Agregar paciente --------------------------------------------------------*/
  /*var agregarPacienteModal = document.getElementById('botonAgregarPacienteModal');
  
  agregarPacienteModal.addEventListener('click', agregarPaciente);*/
//----------------------- Paciente ---------------------------------------------------------
fetch('../js/json/paciente.json')
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
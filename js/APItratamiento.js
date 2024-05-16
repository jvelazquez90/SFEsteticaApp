//----------------------- Tratamiento ---------------------------------------------------------
  fetch('../js/json/tratamiento.json')
  .then(response => response.json())
  .then(data => {
    const tabla = document.getElementById('listaTratamiento');
  
    data.forEach(element => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${element.id}</td>
        <td>${element.nombre}</td>
        <td>${element.duracion}</td>
        <td>${element.sesiones}</td>
        <td>${element.precio}</td>
      `;
      tabla.querySelector('tbody').appendChild(fila);
    });
  })
  .catch(error => console.error("Error al obtener pacientes", error));
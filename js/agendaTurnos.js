fetch('./js/json/agendaDelDia.json')
  /*
  .then((response) => response.json())
  .then((json) => console.log(json))
  */
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
  .catch(error => console.error("Error al obtener los datos", error));
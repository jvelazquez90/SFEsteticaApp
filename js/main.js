document.getElementById("inicioSesion").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  var username = document.getElementById("inputUsuario").value;
  var password = document.getElementById("inputPassword").value;

  // Realizar la solicitud Fetch para obtener los datos del JSON
  fetch("http://localhost:8080/estetica/usuario/get")
  .then(response => {
      if (!response.ok) {
          throw new Error("No se pudo cargar el archivo JSON.");
      }
      return response.json();
  })
  .then(data => {
      var usuarios = data;

      // Validar el usuario y la contraseña
      var usuarioValido = usuarios.find(function(user) {
          return user.user === username && user.password === password;
      });

      if (usuarioValido) {
          // Redireccionar a otra página si los datos son válidos
          window.location.href = "./panel.html";
      } else {
          alert("Usuario o contraseña incorrectos");
      }
  })
  .catch(error => {
      console.error("Error:", error);
      alert("Hubo un error al cargar los datos.");
  });
});
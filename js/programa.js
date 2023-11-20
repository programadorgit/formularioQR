form.addEventListener("submit", (e) => {
    e.preventDefault();
    Enviar();
});
  

  function Enviar() {
    var data = {
      version: "3.0",
      firstName: window.nombre.value,
      lastName: window.apellido.value,
      cellPhone: window.telefono.value,
      email: window.correo.value,
    };
  
    console.log(data);
    var teleMovil = document.getElementById("telefono").value;
    var patronTele = /^\d{3}\-\d{3}\-\d{4}$/;
  
    if (teleMovil.match(patronTele)) {
      window.div_qr.innerHTML = qrCode.createVCardQr(data, {
        typeNumber: 15,
        cellSize: 3,
      });
    }
  }


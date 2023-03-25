const enviarEmail = document.getElementById('enviarEmail');

enviarEmail.addEventListener('click', (e) => {
  function validarFormulario() {
    let userName = document.getElementById("username").value;
    console.log(userName)
    
    if (userName == '') {

      alert("Por favor, preencha com seu e-mail.");
      e.preventDefault()
      return false;
    }
  }
  validarFormulario();
});

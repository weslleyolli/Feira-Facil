const buttonSend = document.getElementById('enter');

buttonSend.addEventListener('click', (e) => {
  function validarFormulario() {
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(userName)
    console.log(password)
    if (userName == '' || password == '') {

      alert("Por favor, preencha todos os campos.");
      e.preventDefault()
      return false;
    }
  }
  validarFormulario();
});






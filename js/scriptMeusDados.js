const botaoSalvar = document.getElementById('salvar');

botaoSalvar.addEventListener('click', (e) => {
  function validarFormulario() {
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    console.log(userName)
    console.log(password)
    console.log(name)
    console.log(phoneNumber)
    
    if (userName == '' || password == '' || name == '' || phoneNumber == '' ) {

      alert("Por favor, preencha todos os campos.");
      e.preventDefault()
      return false;
    }
  }
  validarFormulario();
});

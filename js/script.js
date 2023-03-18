const buttonSend = document.getElementById('enter')


buttonSend.addEventListener('click', (e) => {
  e.preventDefault()
  validarFormulario()
})

function validarFormulario() {
  const userName = document.getElementById("username");
  const password = document.getElementById("password");
  console.log(userName)

  if (userName === null || password === null) {
    alert("Por favor, preencha todos os campos.");
    return false;
  }
}




const buttonUser = document.getElementById('button-user')
const popover = document.getElementById('popover')

buttonUser.addEventListener('click', () => {
    if (popover.classList.contains('invisible')) {
      popover.classList.remove('invisible')
    } else {
      popover.classList.add('invisible')
    }
  })
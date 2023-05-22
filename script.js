const button = document.getElementById('buttonThing');
const email = document.querySelector('.email')


button.addEventListener('click', () => {
  email.classList.toggle('active')
})

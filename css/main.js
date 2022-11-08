// Show Menu

const showMenu = (toggleId,navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

          if(toggle && nav){
            toggle.addEventListener('click',() => {
                nav.classList.toggle('show')
            });
          }
}
showMenu('nav-toggle','nav-menu')

// Active & Remove Active

const navLink = document.querySelectorAll('.nav-link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction (){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active') 

    // sidebar Hidden
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click',linkAction))  
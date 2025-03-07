const navToggle = document.querySelector('.mobile-nav-toggle')
const navContent = document.querySelector('.primary-navigation')
// navContent.setAttribute('inert', 'true')

const viewportWidth = window.innerWidth
if(viewportWidth <= 768) {
    navContent.setAttribute('inert', 'true')
}

function ToggleNavMenu() {
    if(navToggle.getAttribute('aria-expanded') === 'true') {
        navToggle.setAttribute('aria-expanded', 'false')
        navContent.setAttribute('aria-hidden', 'true')
        navContent.setAttribute('inert', 'true')
    } else {
        navToggle.setAttribute('aria-expanded', 'true')
        navContent.setAttribute('aria-hidden', 'false')
        navContent.removeAttribute('inert')
    }
}

navToggle.addEventListener('click', () => {
    ToggleNavMenu()
})

navToggle.addEventListener('keydown', (e) => {
    //esc key
    if(e.keyCode === 27) {
        navToggle.setAttribute('aria-expanded', 'false')
        navContent.setAttribute('aria-hidden', 'true')
        navContent.setAttribute('inert', 'true')
        navToggle.focus()
    }
})







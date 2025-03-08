const navToggle = document.querySelector('.mobile-nav-toggle')
const navContent = document.querySelector('.primary-navigation')
const header = document.querySelector('.primary-header')

const viewportWidth = window.innerWidth
if(viewportWidth <= 768) {
    navContent.setAttribute('inert', 'true')
    navContent.setAttribute('aria-hidden', 'true')
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

// function focusIsInside(element) {
//     return element.contains(document.activeElement)
// }

// function collapseAll() {
//     navToggle.setAttribute('aria-expanded', 'false')
//     navContent.setAttribute('aria-hidden', 'true')
//     navContent.setAttribute('inert', 'true')
// }


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

// document.addEventListener('keyup', (e) => {
//     // tab
//     if(e.keyCode === 9 && !focusIsInside(navContent)) {
//         collapseAll()
//         navToggle.focus()
//     }
// })







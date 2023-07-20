const navContainer = document.getElementById('navigation-container')
const navToggle = document.querySelector('.mobile-nav-toggle')
// const navList = document.querySelectorAll('.nav-link')

navToggle.addEventListener('click', () => {
    navContainer.classList.toggle('nav-open')
})

// navList.forEach((link) => {

//     link.addEventListener('click', () => {
//         console.log(link)
//     })
   
// })






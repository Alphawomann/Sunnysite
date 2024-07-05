document.addEventListener('DOMContentLoaded', function(){
    let menuToggle = document.getElementById('menu-toggle')
    let menuLinks = document.getElementById('menulinks') 

    menuToggle.addEventListener('click', function(){
    menuLinks.classList.toggle('active') 

    })
})
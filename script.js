const hamburger = document.querySelector('.hamburger')
const ham_nav = document.querySelector('.ham-nav')
const close_btn = document.querySelector('.close')
hamburger.addEventListener('click',(e)=>{
        ham_nav.classList.add("slideIn")
        ham_nav.classList.remove("slideOut")
        close_btn.style.display = "block"
    })


close_btn.addEventListener('click',(e)=>{
    ham_nav.classList.add("slideOut")
    ham_nav.classList.remove("slideIn")
    close_btn.style.display = "none"

})

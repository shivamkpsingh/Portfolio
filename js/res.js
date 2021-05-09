burger=document.querySelector('.burger')
navcontent=document.querySelector('.nav-containt')
burger.addEventListener('click',()=>{
 navcontent.classList.toggle('v-class')
 navcontent.classList.toggle('h-nav')
})
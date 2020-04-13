

const navslide = ()=>{
    const burger = document.querySelector('.burger');
    const navlist = document.querySelector('.navbar-list');
    const navlinks = document.querySelectorAll('.navbar-list li');
    burger.addEventListener('click', ()=>{
        navlist.classList.toggle('open');

        
        navlinks.forEach((link, index)=>{
            if (link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navbar-link-animation 0.5s ease forwards ${index/7+0.1}s`;
            }
            
        });
        burger.classList.toggle('open');
    });
}

navslide();
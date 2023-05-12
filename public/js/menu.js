window.addEventListener('load', ()=> {
    console.log("estoy aca");
    // capturo el elemento con clase hamburger
    const hamburger = document.querySelector(".hamburger");

    //Le defino un evento onclick
    hamburger.addEventListener('click', ()=>{
        //capturo el elemento con clase nav-bar
        navbar = document.querySelector('.navbar');
        //valido si algun elemento tiene la clase activo
        navbar.classList.toggle("activo");
    })
})
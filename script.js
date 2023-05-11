//document.write("Hola");

window.addEventListener("scroll", scrollanimacion);

function scrollanimacion(){
    var objetoAnimar = document.getElementById("header");
    var posObj = objetoAnimar.getBoundingClientRect().top;

    //console.log(window.scrollY);

    if(window.scrollY >= 2800){
        objetoAnimar.style.backgroundColor = "var(--secondcolor)";
    }
    else if(window.scrollY >= 200){
        objetoAnimar.style.backgroundColor = "rgb(8,27,41)";
    }
    
    else{
        objetoAnimar.style.backgroundColor = "transparent";
    }
    

    var home = document.getElementById("nb-home");
    var about = document.getElementById("nb-about");
    var services = document.getElementById("nb-services");
    var portfolio = document.getElementById("nb-portfolio");

    if(window.scrollY < 600){
        home.classList.add("active");
        about.classList.remove("active");
    } 

    if (window.scrollY >= 600){
        home.classList.remove("active");
        services.classList.remove("active");
        about.classList.add("active");
    }
    

    if(window.scrollY >= 1600){
        about.classList.remove("active");
        services.classList.add("active");
        portfolio.classList.remove("active");
    }

    if(window.scrollY >= 2500){
        about.classList.remove("active");
        services.classList.remove("active");
        portfolio.classList.add("active");
    }
}


// INTERSECTION OBSERVER:

const hiddenElements = document.querySelectorAll(".hidden");



const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    })
});

hiddenElements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries2) =>{
    entries2.forEach((entry) => {
        if(entry.isIntersecting){
            document.querySelector(".about-name").style.setProperty("--namebeforeanim","showRight 1.2s ease-in-out forwards");
            document.querySelector(".about-p").style.setProperty("--namebeforeanim","showRight 1.2s ease-in-out forwards");
        }
    })
})

const observer3 = new IntersectionObserver((entries3) =>{
    entries3.forEach((entry) => {
        if(entry.isIntersecting){
            document.getElementById("service-card1").classList.add("show2");
            document.getElementById("service-card2").classList.add("show2");
        }
    })
})

const observer4 = new IntersectionObserver((entries4) =>{
    entries4.forEach((entry) => {
        if(entry.isIntersecting){
            document.querySelectorAll(".portfolio-card").forEach((el5) => {
                el5.style.animationName = "cardspawn"
                
            })
        }
    })
})

observer2.observe(document.querySelector(".about-name"));
observer3.observe(document.getElementById("service-card1"));
observer4.observe(document.querySelector(".portfolio-grid"));
document.querySelectorAll(".hidden4").forEach((el4) => observer4.observe(el4));


const gridCards = document.getElementById("portfolio-grid");

//gridCards.addEventListener("mouseover", hovercard);




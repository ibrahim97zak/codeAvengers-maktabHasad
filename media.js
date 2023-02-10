// fix-drop-down-for-navbar
let navlink = document.querySelectorAll('.nav-link')
let nextsib = document.querySelectorAll('.nextsib');




const mediaQuery = window.matchMedia('(max-width: 992px)')
let showdiv = function(show){
  if (mediaQuery.matches) {
    
navlink.forEach((e,i)=>{
  
  e.addEventListener("click", () => {
  e.nextElementSibling.classList.toggle("d-none")
    });
});
};
}
showdiv();


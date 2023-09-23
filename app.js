const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList.contains('random'));
  // console.log(links.classList.contains('links'));
  // so here if we have the show-links class with the original height of the links, we are going to remove it. if not, we are going to add it
  // if(links.classList.contains('show-links')){
  //   links.classList.remove("show-links");
  // }
  // else{
  //   links.classList.add('show-links')
  // }
  // to avoid writing so many lines of code, we can simply use the toggle function to get this done.
  links.classList.toggle("show-links");
});

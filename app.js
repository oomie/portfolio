var hamburger = document.querySelector(".hamburger");
var sidenav = document.querySelector(".sidenav");

hamburger.addEventListener('click', function(){
    sidenav.classList.toggle("sidenav-open");
});

//create the same query from css
const mobileChangeMediaQuery = window.matchMedia('(max-width: 768px)')

function handleMobileChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched! Entered mobile size')
  }
  else {
    if(sidenav.classList.contains("sidenav-open"))
      sidenav.classList.remove("sidenav-open");
  }
}

// Register event listener
mobileChangeMediaQuery.addListener(handleMobileChange)
// Initial check
handleMobileChange(mobileChangeMediaQuery)

var intro = document.getElementById("intro");
var music = document.getElementById('music');

intro.addEventListener('click',()=> {
  // intro.style.display = "none"
  music.play();
})

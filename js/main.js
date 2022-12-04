/* Toggle between adding and removing the "responsive" class to the nav-bar when the user clicks on the icon */
function expandNavBar() {
  let x = document.getElementById("nav-bar");
  if(x.className === "nav-bar") {
    x.className += " responsive";
  }
  else {
    x.className = "nav-bar";
  }
}

window.addEventListener("scroll", function () {
    let navbar = document.getElementById("menu_bar");
    if (window.pageYOffset >= 50) {
      navbar.classList.add('sticky');
    }else{
      navbar.classList.remove('sticky');
    }
  });
  
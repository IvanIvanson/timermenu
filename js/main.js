document.querySelector("#add_btn").addEventListener("click", function () {
  let a = document.getElementById("add_btn");
  let departure = document.getElementById("good_departure").value;
  let destination = document.getElementById("good_destination").value;

  if (departure && destination) {
    document.getElementById("good_departure").value = "";
    document.getElementById("good_destination").value = "";
    a.getAttribute("href");
    a.setAttribute("href", "./station.html");
  } else {
    Swal.fire({
      icon: "error",
      title: "ошибка",
      text: "пожалуйста заполните все поля!",
    });
  }
});

// nav menu
const btnNav = document.querySelector('.icon-menu');
let blockNav = document.querySelector('.block-menu');
let iconMenuImg = document.querySelector(".icon-menu_img");
let flag = true;
btnNav.addEventListener("click", function () {
  blockNav.classList.toggle('menu-open');
  if (flag == true) {
    flag =false;
    iconMenuImg.src = "./image/close-icon.png";
  }else if (flag == false) {
    flag = true;
    iconMenuImg.src = "./image/icons-menu.png";
  }
    
});
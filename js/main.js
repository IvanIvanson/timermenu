import renderPage1 from "./renderPage1.js";
import renderPage2 from "./renderPage2.js";
import openNav from "./openNav.js";
import selectStation from "./selectStation.js";
import renderModal from "./renderModal.js";
import renderNavbar from "./renderNavbar.js";
import menuOpenList from "./menuOpenList.js";
import {stationBlueBranch} from "./station.js";
import { stationGreenBranch } from "./station.js";

// menu list
menuOpenList();
// navbar
renderNavbar();
// nav menu
openNav();

// renderPage1
renderPage1();
// renderModal
renderModal();
//modal window and select station
document.querySelector("#add_btn").addEventListener("click", function () {
  let a = document.getElementById("add_btn");
  let departure = document.getElementById("good_departure").value;
  let destination = document.getElementById("good_destination").value;

  if (departure && destination) {
    document.getElementById("good_departure").value = "";
    document.getElementById("good_destination").value = "";
    // a.getAttribute("href");
    // a.setAttribute("href", "./station.html");
     
    renderPage2();
   
// --------
    let block = document.getElementById("block");
    let ul = document.createElement('ul');
    
   
    block.appendChild(ul);
 let list = selectStation(
      stationBlueBranch,
      stationGreenBranch,
      departure,
      destination
    );
    for (let i = 0; i < list.length; i++){
      let li = document.createElement("li");
       ul.appendChild(li);
      li.innerText = list[i];
    };
  
// --------
   
// --------

  } else {
    Swal.fire({
      icon: "error",
      title: "ошибка",
      text: "пожалуйста заполните все поля!",
      timer: 3000
    });
  }
});


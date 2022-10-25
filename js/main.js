import renderPage2 from "./station.js";

 
const selectStation = function (arrA, arrB, inp1, inp2) {
  let inputStation1 = arrA.indexOf(inp1);
  let inputStation2 = arrB.indexOf(inp2);

  let intersection = arrA.filter((x) => arrB.includes(x));
  let cross = intersection[0];
  let crossIndexA = arrA.indexOf(cross);
  let crossIndexB = arrB.indexOf(cross);

  // alert(arrA.indexOf(cross));
  // alert(arrB.indexOf(cross));
  // alert(inputStation1);
  let arr = [];
  if (inputStation2 == crossIndexB) {
    return arrA;
  }
  if (inputStation1 < crossIndexA) {
    for (let i = 0; i <= crossIndexA; i++) {
      arr.push(arrA[i]);
    }
  }
  //  -----
  if (inputStation1 > crossIndexA) {
    arrA.reverse();
    crossIndexA = arrA.length - crossIndexA;
    for (let i = 0; i < crossIndexA; i++) {
      arr.push(arrA[i]);
    }
    alert(crossIndexA);
  }
  // -------

  if (inputStation2 > crossIndexB) {
    for (let i = 0; i <= crossIndexB; i++) {
      arrB.shift(arrB[i]);
    }
  }
  if (inputStation2 < crossIndexB) {
    let dif = arrB.length - crossIndexB;
    for (let i = 0; i < dif; i++) {
      arrB.pop(arrB[i]);
    }
    arrB.reverse();
  }

  arrA = arr;
  let concatArr = [...arrA, ...arrB];
  alert(concatArr);
  
 
  
  return concatArr;
};


// ---------


 const stationBlueBranch = [
   "Парнас",
   "Проспект просвещения",
   "Удельная",
   "Пионерская",
   "Чёрная речка",
   "Петроградская",
   "Горьковская",
   "Невский проспект",
   "Сенная площадь",
   "Технологический институт2",
   "Фрунзенская",
   "Московские ворота",
   "Электросила",
   "Парк победы",
   "Московская",
   "Звёздная",
   "Купчино",
 ];

 const stationGreenBranch = [
   "Бегова",
   "Зенит",
   "Приморская",
   "Василеостровская",
   "Невский проспект",
   "Маяковская",
   "Площадь Александра Невского1",
   "Елизаровская",
   "Ломоносовская",
   "Пролетарская",
   "Обухово",
   "Рыбацкое",
 ];
 const stationRedBranch = [];
 const stationVioletBranch = [];
 const stationOrangeBranch = [];

// --------


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
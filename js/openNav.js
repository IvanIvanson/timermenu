const openNav = function () {
    const btnNav = document.querySelector(".icon-menu");
    let blockNav = document.querySelector(".block-menu");
    let iconMenuImg = document.querySelector(".icon-menu_img");
    let flag = true;
    btnNav.addEventListener("click", function () {
        blockNav.classList.toggle("menu-open");
        if (flag == true) {
            flag = false;
            iconMenuImg.src = "./image/close-icon.png";
        } else if (flag == false) {
            flag = true;
            iconMenuImg.src = "./image/icons-menu.png";
        }
    });
}

export default openNav;
const renderNavbar = function () {
    let navbarBlock = document.querySelector('.navbar-block');
    navbarBlock.innerHTML = `
    <nav class="navbar">
    <div class="container-fluid container-nav">
        <a class="navbar-brand" href="#">
            <img src="./image/timer-icon.png" alt="clock" 
                class="d-inline-block align-text-top">
           
        </a>
        <h5>METRO TIMER</h5>
        <button class="icon-menu"><img class="icon-menu_img" src="./image/icons-menu.png" alt="menu"></button>

    </div>
</nav>
    `;
}

export default renderNavbar;
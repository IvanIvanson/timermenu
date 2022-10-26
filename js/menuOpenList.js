import renderPage1 from "./renderPage1.js";


const menuOpenList = function () {
  class Menu {
    constructor(elem) {
      this.elem = elem;
      elem.onclick = this.onclick.bind(this);
    }
    home() {
     renderPage1();
    }
      sheme() {
          Swal.fire({
            title: "Sheme metro",
            imageUrl: "/image/sheme.png",
            imageWidth: 300,
            imageHeight: 350,
            timer: 10000,
            confirmButtonText: "Close",
          });
    }
    about() {}
    contacts() {}
    onclick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    }
  }
  let ul = document.querySelector("#menu");
  new Menu(ul);
};

export default menuOpenList;

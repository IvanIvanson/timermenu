function draw() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    // let w = canvas.width; 
    // let h = canvas.height;
    canvas.width = innerWidth/2;
    canvas.height = innerHeight;
    const bgImg = new Image();
    bgImg.onload = () => {
        ctx.drawImage(bgImg, 0, 0);
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(200, 200);
        ctx.stroke();
    };
    bgImg.src = ".././image/karta_metro.jpg";
       
       

}
// draw();
// let myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {
//   keyboard: false,
// });

const renderPage2 = function() {
  let container = document.querySelector('.container');
  container.innerHTML = ` 
  <div class="row justify-content-lg-center">
        <div class="col col-lg-12">
  <h1>Station list</h1>
                     <div id="block" class="canvas-img text-start">
                    <!-- <canvas class="img-fluid" id="canvas"></canvas> -->
                </div>
                 <button class="home">Назад</button> 
                 </div>
                 </div>
                `;
  let returnHome = document.querySelector(".home");
  returnHome.addEventListener("click", function () {
    location.reload();
  });
  document.querySelector(".modal").setAttribute("aria-hidden", "false");
  
}


 
export default renderPage2;

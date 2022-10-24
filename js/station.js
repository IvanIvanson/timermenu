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
draw();
// let myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {
//   keyboard: false,
// });



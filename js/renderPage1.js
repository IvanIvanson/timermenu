const renderPage1 = function () {
    let container = document.querySelector(".container");
    container.innerHTML = `
     <div class="row justify-content-lg-center">
        <div class="col col-lg-12">
            <img class="img-train img-fluid" src="./image/trainImg.png" alt="train">
            <div class="btn-block">
                <button class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Поехали!</button> 
                <img src="./image/bullet-train.png" alt="train">
            </div>
            <div class="humans-block">
            <img class="img-humans img-fluid" src="./image/humans.png" alt="humans">
            <img class="img-humans img-fluid" src="./image/humans.png" alt="humans">
            </div>
        
        </div>
        </div>
    `;
}

export default renderPage1;
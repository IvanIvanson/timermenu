const renderModal = function () {
    let modalBlock = document.querySelector('.modal-block');

    modalBlock.innerHTML = `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Выберите станции</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <label for="good_name" class="form-label">Станция отправления</label>
                <input type="text" class="form-control mb-3" id="good_departure" maxlength="40">
                <label for="good_price" class="form-label">Станция назначения</label>
                <input type="text" class="form-control mb-3" id="good_destination">

                <a href="#" type="submit" class="btn btn-success" id="add_btn">Далее</a>
            </div>

        </div>
    </div>
</div>
    `;
}

export default renderModal;
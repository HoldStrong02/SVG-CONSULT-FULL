document.addEventListener('DOMContentLoaded', () => {
    let open = document.getElementById('open');
    let modal_container = document.getElementById('modal_container');
    let close = document.getElementById('close');

    let open1 = document.getElementById('open1');
    let modal_container1 = document.getElementById('modal_container1');
    let close1 = document.getElementById('close1');

    let open2 = document.getElementById('open2');
    let modal_container2 = document.getElementById('modal_container2');
    let close2 = document.getElementById('close2');

    let blur = document.getElementById('blur');


    function popUp() {

        open.addEventListener('click', () => {
            modal_container.classList.add('show');
            modal_container.classList.add('position');
        });
        
        close.addEventListener('click', () => {
            modal_container.classList.remove('show');
        });
        
        open1.addEventListener('click', () => {
            modal_container1.classList.add('show');
            modal_container1.classList.add('position');
        });
        
        close1.addEventListener('click', () => {
            modal_container1.classList.remove('show');
        });

        open2.addEventListener('click', () => {
            modal_container2.classList.add('show');
            modal_container2.classList.add('position');
        });
        
        close2.addEventListener('click', () => {
            modal_container2.classList.remove('show');
        });
    }
    popUp();
});

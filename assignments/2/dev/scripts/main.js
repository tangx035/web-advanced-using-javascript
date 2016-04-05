window.onload = function () {
    'use strict';

    //declaring html body
    var body = document.getElementsByTagName('body')[0];

    //modal transparency...check css

    var myModal = document.createElement('div');
    myModal.id = 'myModal';
    body.appendChild(myModal);


    //creating the modal
    var modalFront = document.createElement('div');
    modalFront.id = 'modalFront';
    modalFront.textContent = 'My modal.';
    body.appendChild(modalFront);

    //popup modal
    var modalTextButton = document.getElementsByTagName('li')[9];
    function showModal(){
        document.getElementById('myModal').style.display = 'block';
        document.getElementById('modalFront').style.display = 'block';
    }
    modalTextButton.addEventListener('click', showModal, false);

    //exit
    function exitModal() {
        document.getElementById('myModal').style.display = 'none';
        document.getElementById('modalFront').style.display = 'none';
    }
    myModal.addEventListener('click', exitModal, false);

    //menu show and hide
    var menu = document.getElementsByTagName('li')[8];
    function showMenu(){
        document.getElementsByTagName('ul')[0].style.visibility = 'visible';
        document.getElementsByTagName('ul')[0].style.top = '0';
    }
    menu.addEventListener('click', showMenu, false);

    function hiddenMenu(){}

};
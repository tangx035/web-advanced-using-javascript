window.onload = function () {
    'use strict';

    //TRANSPARENT LAYER
    var transparentLayer = document.createElement('div');
    transparentLayer.id = 'blackLayer';
    document.body.appendChild(transparentLayer);

    //MODAL
    var myModal = document.createElement('div');
    myModal.id = 'modal';
    myModal.textContent = 'Hello! My name is Modal';
    document.body.appendChild(myModal);

    var button = document.getElementsByTagName('li')[9];

    //OPEN MODAL

    function showModal () {
        transparentLayer.style.display = 'block';
        myModal.style.display = 'block';
  
    }

    button.addEventListener('click',showModal,false);

    //CLOSE MODAL BY CLICKING ON BACKGROUND

    function closeModal (){
        transparentLayer.style.display = 'none';
        myModal.style.display = 'none';

    }

    transparentLayer.addEventListener('click',closeModal,false);

    //CLOSE MODAL ON ESC

    window.onkeydown = function(e){
        if (e.keyCode == 27){
            closeModal();
        }
    };


};

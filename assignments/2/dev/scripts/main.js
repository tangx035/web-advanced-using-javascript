window.onload = function () {
    'use strict';
///////////////////////////MODAL///////////////////////////////

    var body = document.getElementsByTagName('body')[0];
   //TRANSPARENT LAYER
    var transparentLayer = document.createElement('div');
    transparentLayer.id = 'transparentLayer';
    body.appendChild(transparentLayer);

   //MODAL BOX
    var modalBox = document.createElement('div');
    modalBox.id = 'modalBox';
    modalBox.textContent = 'This is modal.';
    body.appendChild(modalBox);

    var modalButton = document.getElementsByTagName('li')[9];
    
    // //EXIT BUTTON
    // var exitButton= document.createElement('div');
    // exitButton.textContent = 'X';

    //OPEN MODAL BOX FUNCTION
    function openModal () {
        transparentLayer.style.display = 'block';
        modalBox.style.display= 'block';
    }

    modalButton.addEventListener('click',openModal,false);

    //EXIT MODAL BOX FUNCTION
    function exitModal () {
        transparentLayer.style.display = 'none';
        modalBox.style.display = 'none';
    }
    transparentLayer.addEventListener('click',exitModal,false);
    
    //EXIT BY esc
    window.onkeydown = function(e){
        if (e.keyCode == 27){
            exitModal();
        }
    };
};

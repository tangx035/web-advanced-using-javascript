window.onload = function () {
    'use strict';

    var modal = document.createElement('div');
    modal.id = 'backlayer';
    document.body.appendChild(modal);

    var modaltwo = document.createElement('div');
    modaltwo.id = 'frontlayer';
    modaltwo.textContent = 'Hi, Im a Modal';
    document.body.appendChild(modaltwo);

    var button = document.getElementsByTagName('li')[9];
    button.addEventListener('click',showModal,false);
    modal.addEventListener('click',closeModal,false);

    function showModal(){
        modal.style.display = 'block';
        modaltwo.style.display = 'block';
    }

    function closeModal(){
        modal.style.display = 'none';
        modaltwo.style.display = 'none';
    }

    window.onkeydown = function(e){
        if(e.keyCode == 27){
            closeModal();
        }
    };
};




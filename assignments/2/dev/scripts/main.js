window.onload = function () {
    'use strict';

//DECLARE BODY
    var body = document.getElementsByTagName('body')[0];



//CREATE TRANSPARENT DIV FOR MODAL, NAME ID
    var transparentModal = document.createElement('div');
    transparentModal.id = 'transparentModal';
    body.appendChild(transparentModal);



//CREATE TOP MODAL DIV AND APPEND
    var topModal = document.createElement('div');
    topModal.id = 'topModal';
    topModal.textContent = 'This is a modal.';
    body.appendChild(topModal);



//SHOW MODAL AND TRANSPARENT DIV
    var modalButton = document.getElementsByTagName('li')[9];
    function showModal(){
        document.getElementById('transparentModal').style.visibility = 'visible';
        document.getElementById('topModal').style.visibility = 'visible';
    }
    modalButton.addEventListener('click', showModal, false);



//EXIT MODAL AND TRANSPARENT DIV
    function exitModal() {
        document.getElementById('transparentModal').style.visibility = 'hidden';
        document.getElementById('topModal').style.visibility = 'hidden';
    }
    transparentModal.addEventListener('click', exitModal, false);

    document.onkeydown = function(ESCkey) {
        if (ESCkey.keyCode == 27) {
            document.getElementById('transparentModal').style.visibility = 'hidden';
            document.getElementById('topModal').style.visibility = 'hidden';
        }
    };


//SHOW AND HIDE MENU
    var menuButton = document.getElementsByTagName('li')[8];
    var menu = document.getElementsByTagName('ul')[0];
    menuButton.onclick = function() {
        if (menu.style.visibility !== 'visible') {
            menu.style.visibility = 'visible';
            menuButton.innerHTML = 'Hide Menu';
            menuButton.style.color = 'white';
            if (window.innerWidth <= 736) {
                menu.classList.add('reveal-nav');
                window.addEventListener('resize', function () { 
                    window.location.reload(); 
                });
            }
        }
        else {
            menu.style.visibility = 'hidden';
            menuButton.innerHTML = 'Show Menu';
            menuButton.style.color = 'white';
        }
    };
};

window.onload = function () {
    'use strict';
    
    // ---------------- modal ---------------------

    // create elements for modal
    var blackModal = document.createElement('div');
    blackModal.id = 'backLayer';
    document.body.appendChild(blackModal);

    var innerModal = document.createElement('div');
    innerModal.id = 'frontLayer';
    innerModal.textContent = 'Hello!';
    document.body.appendChild(innerModal);
    
    //variables for eventlisteners
    var button = document.getElementsByTagName('li')[9];
    button.addEventListener('click', showModal, false);
    blackModal.addEventListener('click', closeModal, false);
    //function to show modal
    function showModal(){
        blackModal.style.display = 'block';
        innerModal.style.display = 'block';
    }
    //function to close modal using escape key
    function closeModal(){
        blackModal.style.display = 'none';
        innerModal.style.display = 'none';		
    }
    window.onkeydown = function(e){
        if(e.keyCode == 27){
            closeModal();	       
        }
    };

    // ---------------- navigation ---------------------
    var nav = document.querySelector('nav > ul');
    nav.style.display = 'none';
    var menudown = document.getElementsByTagName('li')[8];
    menudown.addEventListener('click', showMenu, false);
    menudown.addEventListener('click', hideMenu, false);

    function showMenu(){
        nav.style.display = 'block';
    }

    function hideMenu(){
        nav.style.display = 'block';
    }
};
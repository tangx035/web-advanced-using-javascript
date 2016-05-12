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
        myModal.style.top = '0';
        myModal.style.transition = 'all 500ms ease-in-out';
        hideMenu();
  
    }

    button.addEventListener('click',showModal,false);

    //CLOSE MODAL BY CLICKING ON BACKGROUND

    function closeModal (){
        transparentLayer.style.display = 'none';
        myModal.style.top = '-1000px';
        myModal.style.transition = 'all 500ms ease-in-out';
    }

    transparentLayer.addEventListener('click',closeModal,false);

    //CLOSE MODAL ON ESC

    window.onkeydown = function(e){
        if (e.keyCode == 27){
            closeModal();
        }
    };

    //___________________________________________________

    //DROP DOWN MENU AND SIDE TRAY

    
    var menuButton = document.getElementsByTagName('li')[8];
    var nav = document.getElementsByTagName('ul')[0];



    nav.style.visibility = 'hidden';
    menuButton.style.color = 'white';

    function showMenu (){
        nav.style.visibility = 'visible';
        nav.style.top = '80px';
        nav.style.transition = 'all 500ms ease-in-out';
        menuButton.innerHTML = 'Hide Menu';
    }
    
    function hideMenu (){
        nav.style.visibility = 'hidden';
        nav.style.top = '-200px';
        nav.style.transition = 'all 500ms ease-in-out';
        menuButton.innerHTML = 'Show Menu';
    }  

    menuButton.onclick = function() {
        if (nav.style.visibility !== 'visible') {
            showMenu();
            menuButton.cursor = 'pointer';
            if (window.innerWidth <= 736) {
                nav.classList.add('showSideTray');
                window.addEventListener('resize', function () { 
                    window.location.reload();                
                });
            }
        }
        else {
            hideMenu();
        }
    };

};

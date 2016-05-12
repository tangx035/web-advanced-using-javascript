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

    var menuB = document.getElementsByTagName('li')[8];
    var menu = document.getElementsByTagName('ul')[0];
    menuB.onclick = function(){
        if(menu.style.visibility !== 'visible'){
            menu.style.visibility = 'visible';
            menu.style.position = 'absolute';
            menu.style.top = '0';
            menuB.style.color = 'white';
            menu.style.transition = 'left 500ms ease';
            if(window.innerWidth <= 736){
                menu.classList.add('SideTray');
                window.addEventListener('resize', function(){
                    window.location.reload();
                });
            }
        }
else{
            menu.style.visibility = 'hidden';
            menuB.style.color = 'white';
            menu.style.position = 'absolute';
            menu.style.top = '-500px';
            menu.style.transition = 'all 500ms ease';	
        }
    };
};



    







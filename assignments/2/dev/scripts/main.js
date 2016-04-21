window.onload = function () {
    'use strict';

    var body = document.getElementsByTagName('body')[0];

    var modalMe = document.createElement('div');
    modalMe.id = 'modalMe';
    body.appendChild(modalMe);

    var modalLayer = document.createElement('div');
    modalLayer.id = 'modalLayer';
    modalLayer.textContent = 'hey yo!';
    body.appendChild(modalLayer);

    var modalButton = document.getElementsByTagName('li')[9];
    function showModal(){
        document.getElementById('modalMe').style.display = 'block';
        document.getElementById('modalMe').style.transition = '500ms';
        document.getElementById('modalLayer').style.display = 'block';
        document.getElementById('modalLayer').style.transition = '500ms';
    }
    modalButton.addEventListener('click', showModal, false);

    function exitModal() {
        document.getElementById('modalMe').style.display = 'none';
        document.getElementById('modalMe').style.transitionDuration = '500ms';
        document.getElementById('modalLayer').style.display = 'none';
        document.getElementById('modalLayer').style.transition = '500ms';
    }
    modalMe.addEventListener('click', exitModal, false);

    document.onkeydown = function(esc) {
        if (esc.keyCode == 27) {
            document.getElementById('modalMe').style.visibility = 'hidden';
            document.getElementById('modalMe').style.transition = '500ms';
            document.getElementById('modalLayer').style.visibility = 'hidden';
            document.getElementById('modalLayer').style.transition= '500ms';    
        }
    };

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

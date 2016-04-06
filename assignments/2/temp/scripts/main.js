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

    // ---------------- drop down ---------------------

    // var nav = document.querySelector('nav > ul');
    // nav.style.position = 'absolute';
    // nav.style.marginTop = '-200px';
    // var menu = document.getElementsByTagName('li')[8];
    
    // function showMenu(){
    //     nav.style.marginTop = '0px';
    //     nav.style.transition = 'all 500ms ease-in-out';
    // }
    // menu.addEventListener('click', showMenu, false);
    // nav.addEventListener('mouseover', showMenu, false);

    // function hideMenu(){
    //     nav.style.position = 'absolute';
    //     nav.style.marginTop = '-200px';
    //     nav.style.transition = 'all 500ms ease-in-out';
    // }
    // nav.addEventListener('mouseout', hideMenu, false);

    function slideDown(){
        var nav = document.querySelector('nav > ul');
        nav.style.position = 'absolute';
        nav.style.marginTop = '-200px';
        nav.style.visibility = 'hidden';
        nav.style.marginLeft = '0px';
        var menu = document.getElementsByTagName('li')[8];
    
        function showMenu(){
            nav.style.visibility = 'visible';
            nav.style.marginTop = '0px';
            nav.style.transition = 'all 500ms ease-in-out';
        }
        menu.addEventListener('click', showMenu, false);
        nav.addEventListener('mouseover', showMenu, false);

        function hideMenu(){
            nav.style.position = 'absolute';
            nav.style.marginTop = '-200px';
            nav.style.transition = 'all 500ms ease-in-out';
        }
        nav.addEventListener('mouseout', hideMenu, false);
    }

    function slideIn(){
        var side = document.querySelector('nav > ul');
        side.style.position = 'absolute';
        side.style.visibility = 'hidden';
        side.style.marginTop = '0px';
        side.style.marginLeft = '-500px';
        var menuButton = document.getElementsByTagName('li')[8];
    
        function showMenu(){
            side.style.visibility = 'visible';
            side.style.marginTop = '0px';
            side.style.marginLeft = '0px';
            side.style.transition = 'all 500ms ease-in-out';
        }
        menuButton.addEventListener('click', showMenu, false);
        side.addEventListener('mouseover', showMenu, false);

        function hideMenu(){
            side.style.position = 'absolute';
            side.style.marginTop = '0px';
            side.style.marginLeft = '-500px';
            side.style.transition = 'all 500ms ease-in-out';
        }
        side.addEventListener('mouseout', hideMenu, false);
    }
        
    window.onresize = toggleMenu;

    function toggleMenu(){
        if(window.outerWidth <= 768){
            slideIn();
        }
        else{
            slideDown();
        }
    }
    
};
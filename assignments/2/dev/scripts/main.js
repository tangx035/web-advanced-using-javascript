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
        hideMenu();
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
    var nav = document.querySelector('nav > ul');
    nav.style.position = 'absolute';
    nav.style.marginTop = '-200px';
    var menudown = document.getElementsByTagName('li')[8];
    menudown.addEventListener('click', showMenu, false);
    
    // ---------------- sidebar ---------------------

    window.onresize = function(){
        var width = window.innerWidth;
        if(width < 736){
            // console.log('dropping');
            sideMenuHide();
            menudown.addEventListener('click', sideMenuShow, false);
            nav.addEventListener('mouseover', sideMenuShow, false);
            nav.addEventListener('mouseout', sideMenuHide, false);
        }
        else{
            console.log('rising');
            hideMenu();
            menudown.addEventListener('click', showMenu, false);
            nav.addEventListener('mouseover', showMenu, false);
            nav.addEventListener('mouseout', hideMenu, false);
        }
    };
    function showMenu(){
        nav.style.position = 'absolute';
        nav.style.marginTop = '0px';
        nav.style.transition = 'all 500ms ease-in';
    }

    function hideMenu(){
        nav.style.position = 'absolute';
        nav.style.marginTop = '-200px';
        nav.style.transition = 'all 500ms ease-out';
    }


    function sideMenuShow(){
        nav.style.marginTop = '0px';
        nav.style.marginLeft = '0px';
    }

    // function sideMenuHide(){
    //     nav.style.marginTop = '0px';
    //     nav.style.marginLeft = '-1000px';
    // }

    // if (matchMedia) {
    //     var breakpoint = window.matchMedia('(max-width: 736px)');
    //     breakpoint.addListener(WidthChange);
    //     WidthChange(breakpoint);
    // }

    // function WidthChange(breakpoint) {
    //     if (breakpoint.matches) {
    //         sideMenuHide();
    //         menudown.addEventListener('click', sideMenuShow, false);
    //         nav.addEventListener('mouseover', sideMenuShow, false);
    //         nav.addEventListener('mouseout', sideMenuHide, false);

    //     } else {
    //         hideMenu();
    //         menudown.addEventListener('click', showMenu, true);
    //         nav.addEventListener('mouseover', showMenu, false);
    //         nav.addEventListener('mouseout', hideMenu, false);
    //         // menudown.addEventListener('click', si, false);
    //     }
    // }
    
    // function showSideMenu(){
    //     nav.style.position = 'absolute';
    //     nav.style.float = 'right';
    //     nav.style.marginRight = '100px'
    //     nav.style.transition = 'all 500ms ease-in';
    // }
    
};
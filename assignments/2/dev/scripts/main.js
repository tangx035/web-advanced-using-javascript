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

    //MENU
    var showMenuButton = document.getElementsByTagName('li')[8];
    var menu = document.getElementsByTagName('ul')[0];
    showMenuButton.onclick = function() {
        if (menu.style.visibility !== 'visible') {
            showMenu();
            if (window.innerWidth <= 736) {
                menu.classList.add('showSideTray');
                window.addEventListener('resize', function() { 
                    window.location.reload(); 
                });
            }
        }
        else {
            hideDropdown();
            // menu.classList.add('hideSideTray');
        }
    };

    function showMenu() {  
        menu.style.visibility = 'visible';
        menu.style.top = '0px';
        menu.style.transition = 'left 500ms ease';
        menu.style.position = 'absolute';
    }

    //HIDE DROPDOWN MENU
    function hideDropdown(){
        menu.style.visibility = 'hidden';
        menu.style.position = 'absolute';
        menu.style.top = '-500px';
        menu.style.transition = 'all 500ms ease-in-out';
    }

    // function hideSideTray(){
    //     menu.style.visibility = 'hidden';
    //     showMenuButton.style.color = 'white';
    //     menu.style.position = 'absolute';
    //     menu.style.left = '-500px';
    //     menu.style.transition = 'left 500ms ease';

    // };
};


    //DROPDOWN WHEN SCREEN LARGER THAN 736-pixel
    // var breakpoint = window.matchMedia('screen and (min-width: 736px)');
    // if (breakpoint.matches) {
    //     showMenuButton.addEventListener('click', showMenu, false);
    // }

    // if (matchMedia) {
    //     var breakpoint = window.matchMedia('screen and (min-width: 736px)');
    //     breakpoint.addListener(widthChange);
    //     widthChange(breakpoint);
    // }

    // function widthChange(breakpoint) {
    //     if (breakpoint.matches) {
    //         menu.addEventListener('click', showMenu, false);
    //     } else {
    //         menu.style.display = 'none';
    //     }
    // }

    //ASSIGN ID 
    // menu.classList.add('menuClass');

    // window.onresize = function(){
    //     var width = window.innerWidth;
    //     if (width <= 736){
    //         menu.classList.add('menuClass');
    //         showSideTray();
    //     }else if (width > 736){
    //         hideSidetray();
    //         showMenu();
    //     }
    // };


    //SIDETRAY WITH RESIZE
  
    // function showSideTray(){
    //     menu.style.position = 'fixed';
    //     menu.style.display = 'block';
    //     menu.style.marginTop = '0px';
    //     menu.style.marginLeft = '0px';
    //     menu.style.transition = 'all 500ms ease-in-out';
    // }

    // function hideSidetray(){
    //     menu.style.marginTop = '0px';
    //     menu.style.marginLeft = '-200px';
    //     menu.style.display = 'inline';
    // }

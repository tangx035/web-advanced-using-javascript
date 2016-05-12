window.onload = function () {
    'use strict';



    var modalButton = document.querySelector('#js-triggers > li + li');
    var menuButton = document.querySelector('#js-triggers > li > a');

    var menu_1 = document.querySelector('nav > ul > li:nth-child(1)');
    var menu_2 = document.querySelector('nav > ul > li:nth-child(2)');
   
    menu_1.setAttribute('style','visibility:hidden');
    menu_2.setAttribute('style','visibility:hidden');

    menu_1.setAttribute('class','up');
    menu_2.setAttribute('class','up');

    menuButton.addEventListener('click', function(){

        if(window.innerWidth > 736){
            menu_1.style.visibility = 'visible';
            menu_1.classList.toggle('down');
            menu_1.classList.toggle('up');

            menu_2.style.visibility = 'visible';
            menu_2.classList.toggle('down');
            menu_2.classList.toggle('up');
        }
        else if(window.innerWidth < 736){
            sidetray.classList.toggle('left');
            sidetray.classList.toggle('right');
        }

    },false);



    //sidetray
    var header = document.querySelector('header');
    var sidetray = document.createElement('img');
    sidetray.setAttribute ('class','left');
    sidetray.setAttribute ('src','img/sidetray.png');
    header.appendChild(sidetray);

    
    var modalContent = document.createElement('img');
    var modalbg = document.createElement('div');

    modalContent.id = 'modalview';
    modalContent.setAttribute('src','img/modalview.png');
    modalContent.setAttribute('style','visibility:hidden');
    modalButton.appendChild(modalContent);
    modalbg.id = 'modalbg';
    modalbg.setAttribute('style','visibility:hidden');
    modalButton.appendChild(modalbg);

    //click on the modalButton will turn on the visibility of
    //both background and modal view

    modalButton.addEventListener('click', function(){
        modalContent.style.visibility = 'visible';
        modalbg.style.visibility = 'visible';
    }, false);


    window.onclick = function(event) {
        if (event.target == modalbg) {
            modalContent.style.visibility ='hidden';
            modalbg.style.visibility = 'hidden';
        }
    };

    //this part was not working 
    window.addEventListener('keypress', function(event){
        if(event.keyCode == 27){
            alert('Esc key pressed.');
            modalContent.style.visibility ='hidden';
            modalbg.style.visibility = 'hidden';
        }
    });



    window.addEventListener('resize', function(){
        // console.log('resizing');
        if(window.innerWidth < 736){
        // console.log('small window');
            // menuContent.style.visibility = 'hidden';
            menu_1.style.visibility = 'hidden';
            menu_2.style.visibility = 'hidden';
            sidetray.classList.remove ('left');
            sidetray.classList.add('right');

        }
        else if(window.innerWidth > 736){
            sidetray.classList.add('left');
            sidetray.classList.remove('right');
        }

    },false);
        



};


(function(){
// Create cross browser requestAnimationFrame method:
    window.requestAnimationFrame = window.requestAnimationFrame
     || window.mozRequestAnimationFrame
     || window.webkitRequestAnimationFrame
     || window.msRequestAnimationFrame
     || function(f){setTimeout(f, 1000/60);};
 
    var mineImg = document.getElementById('blank');
 
    function parallaxImg(){
        var scrolltop = window.pageYOffset; 
        mineImg.style.top = -scrolltop * .2 + 'px'; 
    }
 
    window.addEventListener('scroll', function(){ 
        requestAnimationFrame(parallaxImg); 
    }, false);
})();

 
window.onload = function () {
    'use strict';

    /******************************************************************************/
    //set the variables of modal trigger button
    /*find the 2st li within #js-triggers*/
    var firstModalBtn = document.querySelector ('#js-triggers li:nth-of-type(2)');

    //set the append modal.
    var firstModal = document.createElement ('div');
    firstModal.id = 'first-modal';
    firstModal.setAttribute ('class', 'first-modal');

    var firstModalContent = document.createElement ('P');    
    firstModalContent.setAttribute ('class', 'first-modal-content');

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(firstModal);
    firstModal.appendChild(firstModalContent);
   // firstModalContent.textContent = 'I am the modal!!!';

    function openFirstModal() {
        firstModal.style.display ='block';     
    }

    //set the function to close the first modal.
    function xClose() {
        firstModal.style.display ='none';   
    }

    function escClose(event) {
        var x = event.keyCode;
        if (x == 27) {  // 27 is the ESC key
            xClose();
        }
    }

    // call the toggleModal function.
    firstModalBtn.addEventListener ('click', openFirstModal, false);
    body.addEventListener ('keydown', escClose, false);  
    firstModal.addEventListener ('click', xClose, false);    

    /******************************************************************************/
    //set the variables of drop-down menu trigger button
    /*find the 1st li within #js-triggers*/
    var dropDownBtn = document.getElementById ('/js-triggers');

    var dropDownMenu = document.getElementById ('/container');


    function hideMenu() {
        dropDownMenu.style.display ='none';
    }
    function appendMenu() {
        dropDownMenu.style.display ='block';
    }


    //set the click toggle drop-down menu function.
    function toggleMenu() {
        if (dropDownMenu.style.display != 'block') {
            appendMenu();
        } else {
            hideMenu();
        }
    }

    dropDownBtn.addEventListener ('click', toggleMenu, false);

};

/************************************************/
/////////works.html////////








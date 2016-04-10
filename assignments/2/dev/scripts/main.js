
/*jslint browser: true*/

window.onload = function () {
    'use strict';

    var navElement = document.querySelector('nav');
    var menuHidden = true;
    var screenBreakpoint = 736; 
    var anchorTags = document.getElementById('js-triggers');
    var menuTrigger = anchorTags.getElementsByTagName('a')[0];
    var modalTrigger = anchorTags.getElementsByTagName('a')[1];
        
    // create modal elements dynamically
    var modalDiv = document.createElement('div');
    modalDiv.id = 'overlay';
    var modalInnerDiv = document.createElement('div');
    modalInnerDiv.className = 'inner';
    var modalUl = document.createElement('ul');
    var modalLi = document.createElement('li');
    var modalAnchorTag = document.createElement('a');
    modalAnchorTag.className = 'close';
    modalAnchorTag.innerHTML = 'Close Modal';
    modalAnchorTag.setAttribute('href', '#');
    document.getElementsByTagName('body')[0].appendChild(modalDiv);
    modalDiv.appendChild(modalInnerDiv);
    modalInnerDiv.appendChild(modalUl);
    modalUl.appendChild(modalLi);
    modalLi.appendChild(modalAnchorTag);

    var sq = document.createElement('div');
    sq.id = 'square';
    document.getElementsByTagName('body')[0].appendChild(sq);
    


    function showModal() {
        modalDiv.classList.add('modal');
    }

    function hideModal() {
        modalDiv.classList.remove('modal');
    }


    function getScreenSize() {

        var screenSize = window.innerWidth;
        if (screenSize > screenBreakpoint) {
            toggleTopMenu();
        }
        else if (screenSize <= screenBreakpoint) {
            toggleSideMenu();
        }
    }

    
    function toggleTopMenu() {
        navElement.classList.remove('reveal-side-menu');
        
        if (menuHidden == true) {
            navElement.classList.add('reveal-top-menu');
            menuHidden = false;
        }
        else if (menuHidden == false) {
            navElement.classList.remove('reveal-top-menu');
            menuHidden = true;
        }
    }

    

    function toggleSideMenu() {
        navElement.classList.remove('reveal-top-menu');

        if (menuHidden == true) {
            navElement.classList.add('reveal-side-menu');
            menuHidden = false;
        }
        else if (menuHidden == false) { 
            navElement.classList.remove('reveal-side-menu');
            menuHidden = true;
        }        
    }


    menuTrigger.addEventListener(
        'click',
        getScreenSize,
        false
    );

    modalTrigger.addEventListener(
        'click',
        showModal,
        false
    );

    modalAnchorTag.addEventListener(
        'click',
        hideModal,
        false
    );



};
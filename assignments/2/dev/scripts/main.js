/*jslint browser: true, plusplus: true */
/*eslint-disable no-console */
/*eslint-disable indent */
/*eslint-disable no-mixed-spaces-and-tabs */
/*eslint-disable max-len */
/*global window, document */
window.onload = function () {
    'use strict';

    var menuButton = document.querySelector('#js-triggers li:first-of-type a');
    menuButton.addEventListener('click',function(e){
        e.preventDefault();
        toggleMenu();
    },false);

    var modalButton = document.querySelector('#js-triggers li:last-of-type a');
    modalButton.addEventListener('click',function(e){
        e.preventDefault();
        toggleModal(true);
    },false);


    document.onkeydown = function(event){
    	if( 27 === event.keyCode ){
            toggleModal(false);
    	}
    };
    var toggleMenu = function(state){
        var navigationPanel = document.querySelector('nav>ul');
        if( state === undefined || state === null ){
            if ( navigationPanel.classList.contains('nav-open') ){
                navigationPanel.classList.remove('nav-open');
            }else{
                navigationPanel.classList.add('nav-open');
            }
            
        }else if( state === false ){
            if ( navigationPanel.classList.contains('nav-open') ){
                navigationPanel.classList.remove('nav-open');
            }
        }else if ( state === true ){
            if ( !navigationPanel.classList.contains('nav-open') ){
                navigationPanel.classList.add('nav-open');
            }
        }
    }
    var toggleModal = function(state){
        var modalPanel = document.querySelector('.modal-panel');
        if( modalPanel.style.display === ''){
            modalPanel.style.display = 'none';
        }
        var modalPanelContent = modalPanel.querySelector('.modal-content');
        //handling the state and toggling
        if( state === undefined || state === null ){
            // to avoid duplicates of click handler, remove them every time 
            // that new one wants to get added
            modalPanelContent.removeEventListener('click',modalPanelContentClickHandler);
            modalPanelContent.addEventListener('click',modalPanelContentClickHandler,false);
            modalPanel.removeEventListener('click',modalPanelClickHandler);
            modalPanel.addEventListener('click',modalPanelClickHandler,false);

            if( modalPanel.style.display == 'none'){
                //disbale body scroll temporarily
                document.body.classList.add('modal-panel-is-open');
                toggleMenu(false);//closing the menu
                modalPanel.style.display = 'flex';
            }else{
                //enable body scroll
                document.body.classList.remove('modal-panel-is-open');
                modalPanel.style.display = 'none';
            }
        }else if( state === false ){//only closing
            modalPanelContent.removeEventListener('click',modalPanelContentClickHandler);
            modalPanel.removeEventListener('click',modalPanelClickHandler);
            document.body.classList.remove('modal-panel-is-open');
            modalPanel.style.display = 'none';
        }else if ( state === true ){//only opening
            toggleMenu(false);//closing the menu
            modalPanelContent.addEventListener('click',modalPanelContentClickHandler,false);
            modalPanel.addEventListener('click',modalPanelClickHandler,false);
            document.body.classList.add('modal-panel-is-open');
            modalPanel.style.display = 'flex';
        }

    };
    var modalPanelContentClickHandler= function(e){
        e.stopPropagation();
    };
    var modalPanelClickHandler= function(e){
        e.stopPropagation();
        toggleModal(false);        

    };
};



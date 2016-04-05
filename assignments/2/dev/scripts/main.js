/*jslint browser: true, plusplus: true */
/*eslint-disable no-console */
/*eslint-disable indent */
/*eslint-disable no-mixed-spaces-and-tabs */
/*eslint-disable max-len */
/*global window, document */
window.onload = function () {
    'use strict';


    var modalButton = document.querySelector('#js-triggers li:last-of-type a');
    modalButton.addEventListener('click',function(e){
        e.preventDefault();
        toggleModal();
    },false);


    document.onkeydown = function(event){
    	if( 27 === event.keyCode ){
            toggleModal();
    	}
    };
    var toggleModal = function(state){
        if( !state ){
            var modalPanel = document.querySelector('.modal-panel');
            if( modalPanel.style.display === ''){
                modalPanel.style.display = 'none';
            }
            var modalPanelContent = modalPanel.querySelector('.modal-content');

            // to avoid duplicates of click handler, remove them everytime 
            // that new one wants to get added
            modalPanelContent.removeEventListener('click',modalPanelContentClickHandler);
            modalPanelContent.addEventListener('click',modalPanelContentClickHandler,false);
            modalPanel.removeEventListener('click',modalPanelClickHandler);
            modalPanel.addEventListener('click',modalPanelClickHandler,false);

            if( modalPanel.style.display == 'none'){
                //disbale body scroll temporarily
                document.body.classList.add('modal-panel-is-open');
                modalPanel.style.display = 'flex';
            }else{
                //enable body scroll
                document.body.classList.remove('modal-panel-is-open');
                modalPanel.style.display = 'none';
            }
        }

    };
    var modalPanelContentClickHandler= function(e){
        e.stopPropagation();
        
    };
    var modalPanelClickHandler= function(e){
        e.stopPropagation();
        toggleModal();        
    };
};



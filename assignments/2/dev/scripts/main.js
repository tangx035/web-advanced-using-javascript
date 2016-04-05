/*jslint browser: true, plusplus: true */
/*eslint-disable no-console */
/*eslint-disable indent */
/*eslint-disable no-mixed-spaces-and-tabs */
/*global window, document */
window.onload = function () {
    'use strict';
    document.onkeydown = function(event){
    	if( 27 === event.keyCode ){
    		var modalPanel = document.querySelector('.modal-panel');
    		if( modalPanel.style.display == 'none')
    			modalPanel.style.display = 'block';
    		else
    			modalPanel.style.display = 'none';
    		
    	}
    };
};

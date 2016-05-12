window.onload = function () {
    'use strict';
    
    // ---------------- modal ---------------------

//modal

var modalbox = document.createElement('div');
modalbox.id = 'modalbox';
modalbox.textContent = 'I love Jason Mraz !';
document.body.appendChild(modalbox);

var modaltrans = document.createElement('div');
modaltrans.id = 'modaltrans';
document.body.appendChild(modaltrans);

var button = document.getElementsByTagName('li')[9];
button.addEventListener('click', showModal, false);

function showModal(){
    modaltrans.style.display = 'block';
    modalbox.style.display = 'block';
}

modaltrans.addEventListener('click', hideModal, false);

function hideModal(){
    modaltrans.style.display = 'none';
    modalbox.style.display = 'none';
}

window.onkeydown = function(e){
    if(e.keyCode == 27){
        hideModal();
    }
}

//SideTray & dropdown
var showMenuButton = document.getElementsByTagName('li')[8];
var nav = document.getElementsByTagName('ul')[0];


function showMenu(){
    nav.style.position = 'absolute';
    nav.style.top = '-250px';
    nav.style.transition = 'all 300ms ease-in-out';
    nav.style.visibility = 'visible';
}

function hideMenu(){
    nav.style.position = 'absolute';
    nav.style.top = '-50px';
    nav.style.transition = 'all 300ms ease-in-out';
    nav.style.visibility = 'hidden';
}

showMenuButton.onclick = function(){
    showMenu();
    if(window.innerWidth <= 736){
        menu.classList.add('SideTray');
        window.addEventListener('resize',function(){
            window.location.reload();
        });
        }
    }
    else{
        hideMenu();
    }
}


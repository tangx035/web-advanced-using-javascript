window.onload = function () {
    'use strict';

    //declaring html body
    var body = document.getElementsByTagName('body')[0];

    //modal
    var myModal = document.createElement('div');
    myModal.id = 'myModal';
    body.appendChild(myModal);

    //creating the modal
    var modalFront = document.createElement('div');
    modalFront.id = 'modalFront';
    modalFront.textContent = 'My modal.';
    body.appendChild(modalFront);

    //popup modal
    var modalTextButton = document.getElementsByTagName('li')[9];
    function showModal(){
        document.getElementById('myModal').style.display = 'block';
        document.getElementById('myModal').style.transition = '500ms';
        document.getElementById('modalFront').style.display = 'block';
        document.getElementById('modalFront').style.transition = '500ms';
    }
    modalTextButton.addEventListener('click', showModal, false);

    //exit
    function exitModal() {
        document.getElementById('myModal').style.display = 'none';
        document.getElementById('myModal').style.transitionDuration = '500ms';
        document.getElementById('modalFront').style.display = 'none';
        document.getElementById('modalFront').style.transition = '500ms';
    }
    myModal.addEventListener('click', exitModal, false);

	//exit modal with key
    document.onkeydown = function(esc) {
        if (esc.keyCode == 27) {
            document.getElementById('myModal').style.visibility = 'hidden';
            document.getElementById('myModal').style.transition = '500ms';
            document.getElementById('modalFront').style.visibility = 'hidden';
            document.getElementById('modalFront').style.transition= '500ms';    
        }
    };

	// menu show and menu hide
    var myMenu = document.getElementsByTagName('ul')[0];
    var menuTextButton = document.getElementsByTagName('li')[8];

    menuTextButton.onclick = function (){
        if (myMenu.style.visibility !== 'visible'){
            menuTextButton.innerHTML = 'Hide Menu';
            menuTextButton.style.color = 'white';
            myMenu.style.visibility = 'visible';
            myMenu.style.top = '0';

            if (window.innerWidth <= 736){
                myMenu.classList.add('shownav');
                window.addEventListener('resize-window', function(){
                    window.location.reload();
                });
            }
        } else {
            myMenu.style.visibility = 'hidden';
            menuTextButton.innerHTML = 'Show Menu';
            menuTextButton.style.color = 'white';
            myMenu.style.transition = '500ms';
        }       
    };
};






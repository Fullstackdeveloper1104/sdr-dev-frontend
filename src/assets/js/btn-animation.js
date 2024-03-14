let isFirstClick = true;
let hider;
var button = document.getElementById('animateButton');

button.addEventListener('click', function() {
    // Calculate the new position (you can adjust these values as needed)

	if(isFirstClick)
	{
		isFirstClick=false;
		hider=button.textContent;
			document.getElementById("heading").style.display="none"
    var newPositionX = -200; // Change this to your desired X-coordinate
    var newPositionY = 0; // Change this to your desired Y-coordinate

    // Apply the transformation to move the button to the new position

	button.style.display = 'none';
    // Listen for the transitionend event
  
	var windowWidth = window.innerWidth;
	if (windowWidth < 600) {
        // Apply styles for screens smaller than 600 pixels
		document.getElementById("animateButton2").style.transform='translate( -70px, -72px)';
		document.getElementById("animateButton2").style.minWidth='130px';
	document.getElementById("animateButton3").style.transform='translate( 70px, -131px)';
	document.getElementById("animateButton3").style.minWidth='130px';
	document.getElementById("animateButton4").style.transform='translate( 0px, -135px)';
	document.getElementById("animateButton4").style.minWidth='130px';
    }
	else if(windowWidth>1900)
	{
		document.getElementById("animateButton2").style.transform='translate( -130px, -72px)';
		document.getElementById("animateButton2").style.minWidth='130px';
	document.getElementById("animateButton3").style.transform='translate( 10px, -131px)';
	document.getElementById("animateButton3").style.minWidth='130px';
	document.getElementById("animateButton4").style.transform='translate( 165px, -190px)';
	document.getElementById("animateButton4").style.minWidth='130px';

	}
	else{
		document.getElementById("animateButton2").style.transform='translate( -80px, -72px)';
		document.getElementById("animateButton3").style.transform='translate( 100px, -131px)';
		document.getElementById("animateButton4").style.transform='translate( 10px, -125px)';

	} 
	
	document.getElementById("animateButton2").addEventListener('transitionend', function() {
        // After the transition is complete, hide the button
        // button.style.display = 'none';
		var parentDiv = document.getElementById("parentDiv");
		parentDiv.innerHTML += `<div class="mt-6 mb-3 space-y-4">
		<p class="text-base font-medium lg:text-lg xl:text-xl">
			Hi Andrea, this is Charles from ProspectIQ. How is your
			day going so far?
		</p>
		<p class="text-base font-medium lg:text-lg xl:text-xl">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit,
			sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore eu
			fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit
			anim id est laborum.
		</p>
		<p class="text-base font-medium lg:text-lg xl:text-xl">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit,
			sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat.
		</p></div>`;
		
    }, { once: true }); // The { once: true } option ensures that the event listener is removed after it's triggered once



document.getElementById("dial").style.display="none";
document.getElementById("process").style.display="inline-flex";

	}
	else{

		let x= button.textContent;
		button.textContent=hider;
		hider=x;
	}


});



var button2 = document.getElementById('animateButton2');

button2.addEventListener('click', function() {
    // Calculate the new position (you can adjust these values as needed)

	if(isFirstClick)
	{
		hider=button2.textContent;
		isFirstClick=false;
	document.getElementById("heading").style.display="none"
    var newPositionX = -200; // Change this to your desired X-coordinate
    var newPositionY = 0; // Change this to your desired Y-coordinate

    // Apply the transformation to move the button to the new position
  
	button2.style.display = 'none';
    // Listen for the transitionend event

	
	var windowWidth = window.innerWidth;

	if (windowWidth < 600) {
		document.getElementById("animateButton").style.transform='translate( -70px , -10px)';
		document.getElementById("animateButton").style.minWidth='130px';
		document.getElementById("animateButton3").style.transform='translate( 70px , -131px)';
		document.getElementById("animateButton3").style.minWidth='130px';
		document.getElementById("animateButton4").style.transform='translate( 10px , -135px)';
	}
	else if(windowWidth>1900)
	{
		document.getElementById("animateButton").style.transform='translate( -130px , -10px)';
		document.getElementById("animateButton").style.minWidth='130px';
		document.getElementById("animateButton3").style.transform='translate( 10px , -131px)';
		document.getElementById("animateButton3").style.minWidth='130px';
		document.getElementById("animateButton4").style.transform='translate( 165px , -190px)';

	}
	else{
		document.getElementById("animateButton").style.transform='translate( -80px , -10px)';
		document.getElementById("animateButton3").style.transform='translate( 100px , -131px)';
		document.getElementById("animateButton4").style.transform='translate( 10px , -125px)';
	

	}
	
    document.getElementById("animateButton").addEventListener('transitionend', function() {
        // After the transition is complete, hide the button
        button2.style.display = 'none';
		var parentDiv = document.getElementById("parentDiv");
		parentDiv.innerHTML += `<div class="mt-6 mb-3 space-y-4">
		<p class="text-base font-medium lg:text-lg xl:text-xl">
			Hi Andrea, this is Charles from ProspectIQ. How is your
			day going so far?
		</p>
		<p class="text-base font-medium lg:text-lg xl:text-xl">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit,
			sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore eu
			fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit
			anim id est laborum.
		</p>
		<p class="text-base font-medium lg:text-lg xl:text-xl">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit,
			sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat.
		</p></div>`;
		
    }, { once: true }); // The { once: true } option ensures that the event listener is removed after it's triggered once


// document.getElementById("dial").style.display="none";
// document.getElementById("process").style.display="inline-flex";

	}
	else{
		let x= button2.textContent;
		button2.textContent=hider;
		hider=x;
	}
});



var button3 = document.getElementById('animateButton3');

button3.addEventListener('click', function() {
    // Calculate the new position (you can adjust these values as needed)
	if(isFirstClick)
	{
		isFirstClick=false;
		hider=button3.textContent;
	document.getElementById("heading").style.display="none"
    var newPositionX = -200; // Change this to your desired X-coordinate
    var newPositionY = 0; // Change this to your desired Y-coordinate

    // Apply the transformation to move the button to the new position

	button3.style.display = 'none';
    // Listen for the transitionend event
 // The { once: true } option ensures that the event listener is removed after it's triggered once
	

	var windowWidth = window.innerWidth;

	if (windowWidth < 600) {
	document.getElementById("animateButton").style.transform='translate( -70px , -10px)';
	document.getElementById("animateButton").style.minWidth='130px';
	document.getElementById("animateButton2").style.transform='translate( 70px , -70px)';
	document.getElementById("animateButton2").style.minWidth='130px';
	document.getElementById("animateButton4").style.transform='translate( 10px , -135px)';
	}
	else if(windowWidth>1900)
	{
		document.getElementById("animateButton").style.transform='translate( -130px , -10px)';
		document.getElementById("animateButton").style.minWidth='130px';
		document.getElementById("animateButton2").style.transform='translate( 10px , -70px)';
		document.getElementById("animateButton2").style.minWidth='130px';
		document.getElementById("animateButton4").style.transform='translate( 165px , -190px)';

	}
	else{
		document.getElementById("animateButton").style.transform='translate( -80px , -10px)';
		document.getElementById("animateButton2").style.transform='translate( 100px , -70px)';
		document.getElementById("animateButton4").style.transform='translate( 10px , -125px)';

	}

	document.getElementById("animateButton").addEventListener('transitionend', function() {
        // After the transition is complete, hide the button
       
		var parentDiv = document.getElementById("parentDiv");
		parentDiv.innerHTML += `<div class="mt-6 mb-3 space-y-4">
		<p class="text-base font-medium lg:text-lg xl:text-xl">
			Hi Andrea, this is Charles from ProspectIQ. How is your
			day going so far?
		</p>
		<p class="text-base font-medium lg:text-lg xl:text-xl">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit,
			sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore eu
			fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit
			anim id est laborum.
		</p>
		<p class="text-base font-medium lg:text-lg xl:text-xl">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit,
			sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat.
		</p></div>`;
		
    }, { once: true });

document.getElementById("dial").style.display="none";
document.getElementById("process").style.display="inline-flex";

	}
	else{
		let x= button3.textContent;
		button3.textContent=hider;
		hider=x;

	}
});



var button4 = document.getElementById('animateButton4');
button4.addEventListener('click', function() {
    // Calculate the new position (you can adjust these values as needed)
	if(isFirstClick)
	{
		hider=button4.textContent;
		isFirstClick=false;
	document.getElementById("heading").style.display="none"
    var newPositionX = -200; // Change this to your desired X-coordinate
    var newPositionY = 0; // Change this to your desired Y-coordinate

    // Apply the transformation to move the button to the new position

	button4.style.display = 'none';
    // Listen for the transitionend event
 // The { once: true } option ensures that the event listener is removed after it's triggered once

	var windowWidth = window.innerWidth;

	if (windowWidth < 600) {
	document.getElementById("animateButton").style.transform='translate( -70px , -10px)';
	document.getElementById("animateButton").style.minWidth='130px';
	document.getElementById("animateButton2").style.transform='translate( 70px , -70px)';
	document.getElementById("animateButton2").style.minWidth='130px';
	document.getElementById("animateButton3").style.transform='translate( 10px , -75px)';
	}
	else if(windowWidth>1900)
	{
		document.getElementById("animateButton").style.transform='translate( -130px , -10px)';
		document.getElementById("animateButton").style.minWidth='130px';
		document.getElementById("animateButton2").style.transform='translate( 10px , -70px)';
		document.getElementById("animateButton2").style.minWidth='130px';
		document.getElementById("animateButton3").style.transform='translate( 165px , -130px)';

	}
	else{

		document.getElementById("animateButton").style.transform='translate( -80px , -10px)';
		document.getElementById("animateButton2").style.transform='translate( 100px , -70px)';
		document.getElementById("animateButton3").style.transform='translate( 10px , -70px)';
	}


	document.getElementById("animateButton").addEventListener('transitionend', function() {
        // After the transition is complete, hide the button
        button4.style.display = 'none';
		var parentDiv = document.getElementById("parentDiv");
		parentDiv.innerHTML += `<div class="mt-6 mb-3 space-y-4">
		<p class="text-base font-medium lg:text-lg xl:text-xl">
			Hi Andrea, this is Charles from ProspectIQ. How is your
			day going so far?
		</p>
		<p class="text-base font-medium lg:text-lg xl:text-xl">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit,
			sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore eu
			fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit
			anim id est laborum.
		</p>
		<p class="text-base font-medium lg:text-lg xl:text-xl">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit,
			sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat.
		</p></div>`;
		
    }, { once: true }); 

// document.getElementById("dial").style.display="none";
// document.getElementById("process").style.display="inline-flex";



	}
	else{

		let x= button4.textContent;
		button4.textContent=hider;
		hider=x;
	}
});


function disableAllButtons() {
    var buttons = document.getElementsByClassName('animateButton');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}
'use strict';


// App name space
var pave = pave || {};

// User data entry
pave.startAddress = "";
pave.endAddress = "";
pave.radius = "";
pave.srchCond = "tourist attraction";

// search type
pave.flip = 0;

// Embed a google map widget into the website
pave.initMap = function() {
	var uluru = {lat: -25.363, lng: 131.044};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 4,
	  center: uluru
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
}

pave.dispType = function(num){
	pave.flip = num;
 
 	// food
	if(num == 0) {
		document.getElementById("showTour").style.background = "#3a3a3a";
		document.getElementById("showFood").style.background = "#616161";
		pave.srchCond = "tourist attraction";
	} else {
		document.getElementById("showFood").style.background = "#3a3a3a";
		document.getElementById("showTour").style.background = "#616161";
		pave.srchCond = "good restaurants";
	}
}

// Manipulate sidenav bar
pave.openNav = function() {
    document.getElementById("mySidenav").style.width = "250px";
}

pave.closeNav = function() {
    document.getElementById("mySidenav").style.width = "0";
}

pave.openHelp = function(){
	document.getElementById("helpDropDown").style.height = "240px";
	document.getElementById("helpDropDown").style.width = "100%";
	document.getElementById("closeHelpNav").style.height = "320px";
	//document.getElementById("closeHelpNav").style.width = "40";
}

pave.closeHelp = function(){	
	document.getElementById("helpDropDown").style.width = "0";
	document.getElementById("helpDropDown").style.height = "0px";
    document.getElementById("closeHelpNav").style.height = "0px";
	//document.getElementById("closeHelpNav").style.width = "0";
}

// Submit form
pave.enterPrefs = function(){
	pave.startAddress = document.getElementById("startAddress").value;
	pave.endAddress = document.getElementById("endAddress").value;
	pave.radius = document.getElementById("radius").value;

	calculateAndDisplayRoute();

}

// insert this waypoint between start and end points
pave.addWaypoint = function(place){
	var tmp = document.getElementById("addLoc");
	var tmpSpan = document.createElement("p");
	var tmpImg = document.createElement("img");
	var textField = document.createTextNode(place + "\n");
	var tmpbr = document.createElement("br");
	var tmpDown = document.createElement("img");

	// create icon
	tmpImg.src = "icon_add_white.svg";
	tmpImg.className = "wayPointcl";
	tmpImg.width = "26";

	tmpDown.src = "icon_darrow_white.svg";
	tmpDown.className = "downArrow";

	// add image + name of event
	tmpSpan.appendChild(tmpImg);
	tmpSpan.appendChild(textField);

	tmp.appendChild(tmpSpan);
	tmp.appendChild(tmpDown);
	tmp.appendChild(tmpbr);

}



// Init function
pave.init = function() {
	pave.initMap();
}


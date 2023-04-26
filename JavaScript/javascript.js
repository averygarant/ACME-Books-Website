// Change div contents with button Javascript

// get the element
var infodiv = document.getElementById('infocontent');
var historydiv = document.getElementById('historycontent');
var trackingdiv = document.getElementById('trackingcontent');
var settingsdiv = document.getElementById('settingscontent');

// Account Info Selected
function showInfo(){
	infodiv.hidden = false;
	historydiv.hidden = true;
	trackingdiv.hidden = true;
	settingsdiv.hidden = true;
}

//Order History selected
function showHistory(){
	infodiv.hidden = true;
	historydiv.hidden = false;
	trackingdiv.hidden = true;
	settingsdiv.hidden = true;
}

//Order Tracking selected


//Account Settings selected


infodiv.addEventListener("click", showInfo);
historydiv.addEventListener("click", showHistory);
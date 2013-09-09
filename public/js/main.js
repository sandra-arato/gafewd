
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};

function sendEmailAddress () {

	var emailAddress = $("input").val();

	if( !isValidEmailAddress(emailAddress) ) {
		alert("Hmm, looks like there's something wrong with that email. Try again!")
	}
	else {
		alert("Cool! Now go and check your inbox for the first issue ;)");
	}
}

function faqHandler (e) {
	var answerShow = $("#faq-answer-display").html();
	if (answerShow == "hide all") {
		$(".faq-site h3 + p").slideUp();
		$(".faq-site h3").css("line-height", "0.4");
		$("#faq-answer-display").html("show all");
	}
	else {
		$(".faq-site h3 + p").slideDown();
		$("#faq-answer-display").html("hide all");
	}

}

function renderStaffPhotos (){

	var myDiv = $("div#company-structure + div");
	myDiv.addClass("all-team-members");

	for (var index in staff ) {

		var newDiv = $("<div />", { 
			id: staff[index].id, 
			text: staff[index].name,
		});

		newDiv.css("background-image", "url(images/" + staff[index].id + ".jpg)");
		myDiv.append(newDiv);

	}

}

function showTeamMembers() {

	myDiv = $("div.team");
	
	for (var index in staff ) {
	
		newDiv = $("<div />");
		newDiv.addClass("vcard element " + staff[index].team);

		employeePhoto = $("<div />", { 
			id: staff[index].id, 
			text: staff[index].name,
		});
		employeePhoto.css("background-image", "url(images/" + staff[index].id + ".jpg)");

		phoneNumber =$("<span><i class='icon-phone-sign'></i><br />" + staff[index].phone +"</span>");

		employeeData =$(
			"<ul><li>" + staff[index].name + "</li><li>" + staff[index].team + "</li><li>" + staff[index].role + "</li><li>" + staff[index].email + "</li></ul>");

		newDiv.append(employeePhoto, phoneNumber, employeeData);
		// newDiv.css("display", "none");

		myDiv.append(newDiv);
		
	}
}


function showTeam () {

	$("div#company-structure + div").css("display", "none");

	var buttonId = event.target.id;
	showTeamMembers();
	$("div.team").isotope({ filter: "." + buttonId});
}

function lookForRoom (roomDivTitle) {
	for (var index in rooms) {
		if (roomDivTitle == rooms[index].room) {
			var currentRoom = rooms[index];
			return currentRoom;
		}

	}
}

function changeRoom (roomId) {
	switch (roomId) {
		case "creative-space":
			var roomDivTitle = "creative";
			break;
		case "office-space": 
			var roomDivTitle = "office";
			break;
		case "reception-space":
			var roomDivTitle = "rec";
			break;
		case "proto-space": 
			var roomDivTitle = "protolab";
			break;
		case "lounge-space":
			var roomDivTitle = "lounge";
			break;
		case "kitchen-space":
			var roomDivTitle = "kitchen";
			break;
		default:
			console.log("something happens in the switch");
			break;
	}

	// function changeRoom(roomID) {
	// var arr = split("-");
	// var roomDivTitle = arr[0]; tbd: rename recrec-space, proto-space rename to protolab-space
	}
	
	var currentRoom = lookForRoom(roomDivTitle);

	console.log(currentRoom);
	$("#room-description h2").html(currentRoom.title).css("font-size", "48px");
	$("div#room-description span + p").html(currentRoom.about);

	if (currentRoom.workingarea) {
		for (var index in staff ) {
			newDiv = $("<div />", {
				id: staff[index].id,
				text: staff[index].name
			});
			newDiv.css("background-image", "url(images/" + staff[index].id + ".jpg)");
			newDiv.addClass("photos element " + staff[index].room);
			$("#room-description").append(newDiv);

		}

		$("div#room-description").isotope({ filter: "." + currentRoom.room});
	}
	
	
	
	
}


$(document).ready(function() {
	$("#get-email-address").click(sendEmailAddress);
	console.log("page loaded");

	// $("div#company-structure a").click(faqHandler); 				WATCH OUT!!

	// renderStaffPhotos(); 										
	// $("div#company-structure a").click(showTeam);

	$("#map div").click(function() {
		$("div#container > h2").fadeOut(1200);
		changeRoom(event.target.id);
	});




	// $("a").smoothScroll({speed: "500"}); 						CHECK FOR BUG

	


});

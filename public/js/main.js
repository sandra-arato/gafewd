
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
	console.log(answerShow);
	if (answerShow == "hide all") {
		$("#faq-site h3 + p").slideUp();
		$("#faq-site h3").css("line-height", "0.4");
		$("#faq-answer-display").html("show all");
	}
	else {
		$("#faq-site h3 + p").slideDown();
		$("#faq-answer-display").html("hide all");
	}

}

function renderStaffPhotos (){
	var div = $(".team");
	for (var index in staff) {
		var Div = $("<div />", {
    		id: staff[index].id
			});
		var photo = $("<div />")
			.html(staff[index].name)
			.addClass("photo")
			.css("background-image", "url(images/"+staff[index].id+".jpg)");
		var name = $("<p />").html(staff[index].name);
		var team = $("<p />").html(staff[index].team);
		$(Div).append(photo, name, team);
		$(div).append(Div); 
	}

}





function lookForRoom (roomDivTitle) {
	for (var index in rooms) {
		if (roomDivTitle == rooms[index].room) {
			var currentRoom = rooms[index];
			return currentRoom;
		}

	}
}




$(document).ready(function() {
	console.log("page loaded");
	$("#get-email-address").click(sendEmailAddress);
	$("#faq-answer-display").click(faqHandler);

	renderStaffPhotos(); 										
	



	// $("a").smoothScroll({speed: "500"}); 						CHECK FOR BUG

	


});

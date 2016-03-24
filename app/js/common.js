$(document).ready(function() {

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#main_form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you for sign up!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// Show and close form
	$("#btn_signup").click(function () {
		$(".all_grey_bg").show();
		$(".start_form ").show();
	});
	$("#close").click(function () {
		$(".all_grey_bg").hide();
		$(".start_form ").hide();
	});
	// $('.start_form input').focus(function(){
	// 	$(".start_form ").show();
	// });
	$(window).resize(function() {
		windowWidth = $(this).width();
		if ( windowWidth > 1070) {
			$(".start_form").css("display", "block");
			$(".all_grey_bg").hide(); 
		} else {
			$(".start_form").hide();   
		}
	});



});

// Email exist or not
function validateEmail(input) {

	var email_arr = [];
	
	$.ajax({
		url: "emails.txt",
		cache: false,
		async: true,
		success: function (data){
			console.log(data);   		
			email_arr = data.split(', ');
			email_arr.splice(email_arr.indexOf(), 1);
			console.log(email_arr);

			for(var i=0; i < email_arr.length; i++){
				if(input.value === email_arr[i]){
					alert("Sorry! This email address is exist. Please input another email address.");
					$("#email_input").val('');
					$("#email_input").blur();
				}
			}
		}
	});
}
$(document).ready(function () {
	
	$("#appa,#amma,#anna,#vaini").hide();
	$("#arrow").on("click",changePic);
	$('body').removeClass("hide");

});

function changePic(event) {

	var $currentActive = $(".active").eq(0),
		$nextActive;

	if($currentActive.hasClass("last")) {		
		$nextActive = $(".first").eq(0);		
	} 
	else {
		$nextActive = $currentActive.next();
	}	

	
	$currentActive.slideUp(200).removeClass("active");
	$nextActive.slideDown(200).addClass("active");


}
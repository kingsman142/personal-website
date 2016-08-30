$(document).ready(function(){
	$("#resume-div").hover(function(){
		$(".resume-buttons").each(function(){
			this.style.visibility = "visible";
		});
	});

	// $("#resume-div").mouseout(function(){
	// 	$(".resume-buttons").each(function(){
	// 		this.style.visibility = "hidden";
	// 	});
	// });
});

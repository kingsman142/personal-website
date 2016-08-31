$(document).ready(function(){
	$(".hoverable").hover(function(){
		$(".resume-buttons").each(function(){
			this.style.visibility = "visible";
		});
	});
});

$(document).ready(function(){
	$(".hoverable").mouseleave(function(){
		$(".resume-buttons").each(function(){
			this.style.visibility = "hidden";
		});
	});
});

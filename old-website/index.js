$(document).ready(function(){
	$(".hoverable").hover(function(){
		$(".resume-buttons").each(function(){
			this.style.visibility = "visible";
		});
	});

	$(".hoverable").mouseleave(function(){
		$(".resume-buttons").each(function(){
			this.style.visibility = "hidden";
		});
	});

	$("#education-wrapper > .section-header").click(function(){
		$("#school-div-main").slideToggle();
	});

	$("#experience-wrapper > .section-header").click(function(){
		$("#experience-div-main").slideToggle();
	});

	$("#projects-wrapper > .section-header").click(function(){
		$("#projects-div-main").slideToggle();
	});

	$(".action-button.animate.shadow.green").click(function(){
		var picVis = $("#my-picture")[0].style.display;
		if(picVis == "none" || picVis == ""){
			$("#my-picture")[0].style.display = "inline";
		} else if(picVis == "inline"){
			$("#my-picture")[0].style.display = "none";
		}
	});
});

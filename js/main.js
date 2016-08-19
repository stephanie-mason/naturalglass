$(document).ready(function(){
	//Menu
	$("#header").click(function(){
		$(".section").hide();
		$("#start").show("fade", 1800);
	});	
	
	$(".portfolio").click(function(){
		$("#portfolio").toggle("fade");
		$(".menu-item").removeClass("rotate");		
	});	
	
	$(".menu-item").click(function(){
		var name = $(this).attr("name");
		$(".section").hide();
		$("#" + name).show("fade", 1800);
    });	
	
	$("#toggle").click(function(){
		$("#hideable").toggle("slide","fast");
	});
		
});
/*
** add navigation event
*/
$("#navbtn_about").click(function(){
	$("#main_area").load("/about.html");
});
$("#navbar-buttons ul li").click(function(e){
	$("#navbar-buttons li.active").removeClass("active");
	var navbtn = $(this);
	if (!navbtn.hasClass("active")){
		navbtn.addClass("active");
	}
	// e.preventDefault();
});
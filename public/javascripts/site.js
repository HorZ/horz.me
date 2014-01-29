// global variables


/*
** set navbar active class
*/
function setNavActive(navbtn) {
	$("#navbar-buttons li.active").removeClass("active");
	if (!navbtn.hasClass("active")){
		navbtn.addClass("active");
	}
}
function setNavActiveById(navbtnID) {
	setNavActive($("#" + navbtnID));
}
$("#navbar-buttons ul li").click(function(e){
	var href = $(this).find("a").attr("href");
	History.pushState({rand: Math.random()}, "", href);
	e.preventDefault();
});

History.Adapter.bind(window, "statechange", function(){
	var url = History.getState().url;
	$("#main_area").load(url + ".html");
	setNavActiveById("navbtn_" + $.url("path", url).substr(1));
});
History.Adapter.trigger(window, "statechange");

$(document).ready(function(){
	// Onclick of the button element
	$("button").click(function(){
		// Change the text
		$("#acadgild").text("Change Text - Hello World");
		// Change the hyperlink
		$("a").attr("href", "http://www.google.com");
	});
});
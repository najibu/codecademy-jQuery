$(document).ready(function(){
	$('button').click(function(){
		var toAdd = $("input[name=message]").val();
		$('#message').append("<p>"+toAdd+"</p>");
	});
});

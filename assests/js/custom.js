$(document).ready( function () {
  $("input[type='text']").hide();
});

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var inputText = $(this).val();
		$(this).val("");
		if (inputText === "" | inputText === " ") {
			alert("Please Enter Todo!!");
		}
		else{
			$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + inputText + "</li>");
		}
		
	}

});

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
});

$("h1> i").click(function(){
	$(this).toggleClass("fa-pencil fa-ellipsis-h");
});

//	this is typed js function

$(function(){
	$(".element").typed({
		strings: ["Add New Todo", "Type Here New todo"],
		typeSpeed: 50,
		backSpeed: 100,
		backDelay: 1000,
		loop: true,
		loopCount: Infinity,
		showCursor: false,
		cursorChar: '|',
		autoInsertCss: false,
		attr: 'placeholder',
		bindInputFocusEvents: true,
		smartBackspace: true,
	});
});

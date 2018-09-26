// check off specific todos by clicking 
$("ul").on("click", "li", function(){	
	//if li is gray, turn it black
	$(this).toggleClass("completed");
});

//^^ WHEN AN LI INSIDE A UL, THIS EVENT WILL FIRE


//if click on a X then delete the thing
$("ul").on("click", "span", function(event){
		event.stopPropagation;
		$(this).parent().fadeOut(500,function(){
			$(this).remove();
		});
});

$("input[type='text']").keypress(function(e){
	if (e.which === 13){
		//grabbing text from input
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i>x</span> " + todoText + "</li>");
	
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});
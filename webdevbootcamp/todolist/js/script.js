//Toggle completed
$("ul").on("click","li",function() {
	$(this).toggleClass("completed");
});
//Click on X to delete ToDo
$("ul").on("click","span",function(event) {
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
//Create new ToDos
$('input[type="text"]').keypress(function(event){
	if(event.which === 13) {
		//Grabbing text from input field
		var todoText = $(this).val();
		//clrea input field
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");
	}
});
//toggle input form
$(".fa-plus").click(function(){
	$('input[type="text"]').fadeToggle();
});
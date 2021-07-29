$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");   
});

$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type = 'text'").keypress(function(e){
    if (e.which === 13) {
        var newTodo = $(this).val();
        $(this).val("");
        $("ul").append("<li>  <span>X</span> " + newTodo + "</li>")
    }
});
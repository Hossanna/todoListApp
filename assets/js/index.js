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

        if ($(this).val() === "" ) {
            alert("Please add a todo");
            return;
          }

        var newTodo = $(this).val();

        $(this).val("");
        $("ul").append("<li>  <span><i class='fa fa-trash'></i> </span> <i class='fa fa-edit'></i> " + newTodo + " <input class='checkbox' type='checkbox'> </li>")
    }
});

$(".fa-plus").click(function(){
    $("input[type = 'text'").fadeToggle();
});

$(".delete").click(function(e){
    $("input[type = 'checkbox']:checked").parent().fadeOut(1000, function(){
        $(this).remove();
    });
    e.stopPropagation();
});
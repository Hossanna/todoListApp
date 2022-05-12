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
        $("ul").append("<li>  <span><i class='fa fa-trash'></i> </span> " + newTodo + " <input class='checkbox' type='checkbox'> </li>")
    }
});

$("#add-btn").click(function(e){
    if ($("input[type = 'text'").val() === "" ) {
        alert("Please add a todo");
        return;
      }

    var newTodo = $("input[type = 'text'").val();

    $("input[type = 'text'").val("");
    $("ul").append("<li>  <span><i class='fa fa-trash'></i> </span>  " + newTodo + " <input class='checkbox' type='checkbox'> </li>")

});

$(".fa-plus").click(function(){
    $(".flex").fadeToggle();
});

$(".delete").click(function(e){
    $("input[type = 'checkbox']:checked").parent().fadeOut(1000, function(){
        $(this).remove();
    });
    e.stopPropagation();
});
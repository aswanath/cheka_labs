$("#message, #name, #email, #subject").on("keyup", function(){
    if($("#message").val().trim().length >=2  && $("#name").val().trim().length >=2
     && $("#email").val().trim().length >=6 && $("#email").val().indexOf('@') > -1 && $("#email").val().indexOf('.') > -1
  && $("#subject").val().trim().length >=2){
        $("#submitbutton").removeAttr("disabled");
    }
});

$("#message, #name, #email, #subject").on("keyup", function(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if($("#message").val().trim().length >=2  && $("#name").val().trim().length >=2
     && $("#email").val().match(mailformat)
  && $("#subject").val().trim().length >=2){
        $("#submitbutton").removeAttr("disabled");
        $("#submitbutton").removeClass('no-hover');
    }else{
        $("#submitbutton").attr('disabled','disabled');
        $("#submitbutton").addClass('no-hover');
    }
});

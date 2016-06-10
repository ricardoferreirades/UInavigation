$(document).ready(function(){
    var statement;

    $(".nav-toggle").on("click", function(event){
        event.preventDefault();

        //prevent double click
        if(statement)return false;
        statement = true;

        $("#container, #menu").toggleClass("open-nav");
        $(".nav-toggle").toggleClass("current");
        statement = false;
    });

});
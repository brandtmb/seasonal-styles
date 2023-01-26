    $("document").ready(function(){
        $('.seasons a').click(function(e){//find all a tags inside class of seasons
            e.preventDefault();//stop default submission
            var season = $(this).attr("href");//contents of href attribute of this element
           // alert(season);
            
           //make the season lower case
           season = season.toLowerCase();

           switch(season){
                case "spring":
                    $("#logo").attr("src","images/spring.gif");
                    $("#wear").attr("src","images/spring-wear.jpg");
                    $("html").css("background-color","honeydew");
                    $(".slogan").text("Spring is the new spring");
                break;

                case "summer":
                    $("#logo").attr("src","images/summer.gif");
                    $("#wear").attr("src","images/summer-wear.jpg");
                    $("html").css("background-color","mistyrose");
                    $(".slogan").text("Summer means Ice Cream Sweats");
                break;
                
                case "fall":
                    $("#logo").attr("src","images/fall.gif");
                    $("#wear").attr("src","images/fall-wear.jpg");
                    $("html").css("background-color","beige");
                    $(".slogan").text("Fall, where'd the sun go?!");
                break;

                case "winter":
                    $("#logo").attr("src","images/winter.gif");
                    $("#wear").attr("src","images/winter-wear.jpg");
                    $("html").css("background-color","aliceblue");
                    $(".slogan").text("Winter is too cold for me!");
                break;

                default:
                    $("#logo").attr("src","images/default-logo.gif"); 
                    $("#wear").attr("src","images/300x400.png");
                    $("html").css("background-color","#ccc");
                    $(".slogan").text("Jump into Spring");  
                break;
                // alert("No case matches");
            }
        });
        
    $("document").ready(function(){
        $('#dateForm').submit(function(e){//handle form submission event
            e.preventDefault();//stop default submission
            var datetext = $('input[name=dateField]').val();//grab data from textbox
            var formDate = new Date(datetext);//create a date from form input
            var today = new Date();
                
            if(formDate > today)
            {
                alert(datetext + " is in the future!");
            }else{
                alert(datetext + " is in the past!");
            }
        });
    });

 });
     





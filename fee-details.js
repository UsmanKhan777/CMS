$(document).ready(function(){

           var obj_std=null;

                $.get("/student-info", function(info){


          var data=JSON.parse(info);
               

                obj_std={std_id:data.emailid};

                //  alert("STUDENT ID is : "+obj_std.std_id);
                    });
 

                 $("#show-account").click(function(){

          $.get("/account-show",obj_std, function(item2){

                 // alert("it's working");
                

                  console.log(item2);

                  details=JSON.parse(item2);
                  

                  

                  $.each(details, function(i, field){

                    $(".outstanding").html(field.dues);
                    $(".pending").html(field.Fee);
                    $(".total").html(field.total);
                    $(".outstanding_tot").html(field.dues);
                    $(".pending_tot").html(field.Fee);
                    $(".total_tot").html(field.total);
                   
                                                
                                });

                
});
        });
});
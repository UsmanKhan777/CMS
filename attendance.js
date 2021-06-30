$(document).ready(function(){

           var obj_std=null;

                $.get("/student-info", function(info){


          var data=JSON.parse(info);
               

                obj_std={std_id:data.emailid};

                 // alert("STUDENT ID is : "+obj_std.std_id);
                    });
 

                 $("#show-attendance").click(function(){

          $.get("/show-attendance",obj_std, function(item2){

                 // alert("it's working");
                

                  console.log(item2);

                  attendance=JSON.parse(item2);
                  
                  dates=$('.date-std');     // classes are stored here in object "dates" where values will be displayed
                  status1=$('.status-std');

                 // alert("status"+attendance.date);

                  $.each(attendance, function(i, field){
                   $(dates[i]).html(field.date); // array is being used on object dates since it contains array of classes.
                  $(status1[i]).html(field.status);
                   
                                                //field.id are the values from server which are to be displayed on page.
                                });

                
});
        });
});
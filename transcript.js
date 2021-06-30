$(document).ready(function(){

           var obj_std=null;

                $.get("/student-info", function(info){


          var data=JSON.parse(info);
               

                obj_std={std_id:data.emailid};

                 // alert("STUDENT ID is : "+obj_std.std_id);
                    });
 

                 $("#show-transcript").click(function(){

          $.get("/transcript-show",obj_std, function(item2){

                  //alert("it's working");
                

                  console.log(item2);

                  grades=JSON.parse(item2);
                  

                  description_std=$('.description');
                  units_std=$('.units');
                  grade_points_std=$('.gradepoints');
                  grades_std=$('.grade');
                  
                  

                  $.each(grades, function(i, field){

                    $(description_std[i]).html(field.description);
                    $(units_std[i]).html(field.units);
                    $(grade_points_std[i]).html(field.gradepoints);
                    $(grades_std[i]).html(field.grade);

                    
                   
                                                //field.id are the values from server which are to be displayed on page.
                                });

                
});
        });

                  $("#gpa-btn").click(function(){

          $.get("/gpa-show",obj_std, function(item2){


              gpa=JSON.parse(item2);

              var gpa_field="<b>"+gpa.CGPA+"</b>";

              $("#gpa-btn").after(gpa_field);

           });

        });



});
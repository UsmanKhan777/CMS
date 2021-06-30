$(document).ready(function(){

           var obj_std=null;

                $.get("/student-info", function(info){


          var data=JSON.parse(info);
               

                obj_std={std_id:data.emailid};

                  //alert("STUDENT ID is : "+obj_std.std_id);
                    });
 

                 $("#show-grades").click(function(){

          $.get("/grades-show",obj_std, function(item2){

                  //alert("it's working");
                

                  console.log(item2);

                  grades=JSON.parse(item2);
                  

                  courses_std=$('.courses');
                  start_date_std=$('.start_date');
                  end_date_std=$('.end_date');
                  ctg_std=$('.ctg');
                  outof_std=$('.outof');
                  marks_std=$('.marks');     // classes are stored here in object "dates" where values will be displayed
                  avg_std=$('.avg');

                  

                  $.each(grades, function(i, field){

                    $(courses_std[i]).html(field.course);
                    $(start_date_std[i]).html(field.start_date);
                    $(end_date_std[i]).html(field.end_date);
                    $(ctg_std[i]).html(field.category);
                    $(outof_std[i]).html(field.outof);
                   $(marks_std[i]).html(field.marks); // array is being used on object dates since it contains array of classes.
                  $(avg_std[i]).html(field.class_avg);
                   
                                                //field.id are the values from server which are to be displayed on page.
                                });

                
});
        });
});
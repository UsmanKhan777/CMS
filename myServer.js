const MongoClient = require('mongodb').MongoClient;


var student4;
var item1;
var collection1;
var logininfo;
var collection_login;
var collection_course;
var collection_personal;
var hraza_student;
var hkhan_student;
var ukhan_student;
var fac={ name: ["Naima Altaf","Zaki Murtaza","Bilal Rauf","Nikola Tesla","Ayesha Naseer","Saeed Murtaza"],
 ed: ["PhD in Data Science","PhD in Data Structures","PhD in Networking","Father of Electricity","PhD in Database","PhD in Linear Algebra"],
  yrs:["10 years","14 years","6 years","8 years","18 years","20 years"],
   nat:["Pakistan","America","England","Serbia","Russia","Australia"]};


var overall_courses= null;

var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname+ '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/public/html/form.html');
});

MongoClient.connect("mongodb+srv://hussnainrezamir72:hussnainrezamir72@freecluster.xrggm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
   useNewUrlParser: true,
   useUnifiedTopology: true
 }, function (err, client) {
    let db = client.db("freecluster")
    console.log('Connected');


/*
         db.collection('course2', function (err, collection) {
        collection.insertOne({ id: 'CS-123', firstName: 'Software Engineering'  });
        collection.insertOne({ id: 'CS-124', firstName: 'Human Resource Management' });
        collection.insertOne({ id: 'CS-125', firstName: 'Professional Ethics' });
      }); */
     
     /*  db.collection('login_check125', function (err, collection) {
        collection.insertOne({ emailid: 'hraza', password: 'hraza', name: 'Husnain Raza', Course: 'XYZ24', Regno:'123456', Semester:'7th', CGPA: 3.76});
        collection.insertOne({ emailid: 'hkhan', password: 'hkhan', name: 'Haider Khan', Course: 'XYZ24', Regno:'654321', Semester:'7th', CGPA: 3.56});
        collection.insertOne({ emailid: 'ukhan', password: 'ukhan', name: 'Usman Ali Khan', Course: 'XYZ24', Regno:'789071', Semester:'7th', CGPA: 3.62 });

          //collection1=collection;
        });

    */  
     /* db.collection('faculty', function (err, collection) {
        collection.insertOne({ name: 'Naima Altaf', position: 'Lecturer', yrs_working:'10 years', education:'PhD in Networking', campus:'MCS'});
        collection.insertOne({ name: 'Mobeena Shahzad', position: 'Lecturer', yrs_working:'9 years', education:'PhD in OS', campus:'MCS'});
        collection.insertOne({ name: 'Zaki Murtaza', position: 'Lecturer', yrs_working:'12 years', education:'PhD in Information Security', campus:'MCS'});


        });
*/

/*    db.collection('student', function (err, collection) {
        collection.insertOne({ name: 'Husnain Raza', Course: 'XYZ24', Reg-no:'123456', Semester:'7th', CGPA: 3.56});
        collection.insertOne({ name: 'Haider Khan', Course: 'XYZ24', Reg-no:'654321', Semester:'7th', CGPA: 3.67});
        collection.insertOne({ name: 'Usman Ali Khan', Course: 'XYZ24', Reg-no:'789071', Semester:'7th', CGPA: 4.00 });

        */
      /*  db.collection('faculty6', function (err, collection) {
        collection.insertOne({'obj1':'{ "name": "Naima Altaf", "ed": "PhD in Networking", "yrs":"10 years", "nat":"Pakistan"}'});

       
        

        });
*/

/*
db.collection('hraza_att1', function (err, collection) {
        collection.insertOne({ number: 1,date: '5-3-21', status: 'Present'  });
        collection.insertOne({ number: 2,date: '6-3-21', status: 'Absent' });
        collection.insertOne({ number: 3,date: '7-3-21', status: 'Present' });
        collection.insertOne({ number: 4,date: '8-3-21', status: 'Absent' });
        collection.insertOne({ number: 5,date: '9-3-21', status: 'Present' });
        collection.insertOne({ number: 6,date: '10-3-21', status: 'Present' });
        collection.insertOne({ number: 7,date: '11-3-21', status: 'Present' });
        collection.insertOne({ number: 8,date: '12-3-21', status: 'Present' });
        collection.insertOne({ number: 9,date: '13-3-21', status: 'Present' });
        collection.insertOne({ number: 10,date: '14-3-21', status: 'Present' });
        collection.insertOne({ number: 11,date: '15-3-21', status: 'Absent' });
        collection.insertOne({ number: 12,date: '16-3-21', status: 'Absent' });
        collection.insertOne({ number: 13,date: '17-3-21', status: 'Absent' });
        collection.insertOne({ number: 14,date: '18-3-21', status: 'Present' });

      }); 

      db.collection('hkhan_att1', function (err, collection) {
        collection.insertOne({ number: 1,date: '5-3-21', status: 'Present'  });
        collection.insertOne({ number: 2,date: '6-3-21', status: 'Present' });
        collection.insertOne({ number: 3,date: '7-3-21', status: 'Absent' });
        collection.insertOne({ number: 4,date: '8-3-21', status: 'Absent' });
        collection.insertOne({ number: 5,date: '9-3-21', status: 'Absent' });
        collection.insertOne({ number: 6,date: '10-3-21', status: 'On Leave' });
        collection.insertOne({ number: 7,date: '11-3-21', status: 'On Leave' });
        collection.insertOne({ number: 8,date: '12-3-21', status: 'On Leave' });
        collection.insertOne({ number: 9,date: '13-3-21', status: 'Present' });
        collection.insertOne({ number: 10,date: '14-3-21', status: 'Present' });
        collection.insertOne({ number: 11,date: '15-3-21', status: 'Absent' });
        collection.insertOne({ number: 12,date: '16-3-21', status: 'Absent' });
        collection.insertOne({ number: 13,date: '17-3-21', status: 'Present' });
        collection.insertOne({ number: 14,date: '18-3-21', status: 'Present' });

      }); 

      db.collection('ukhan_att1', function (err, collection) {
        collection.insertOne({ number: 1,date: '5-3-21', status: 'On Leave'  });
        collection.insertOne({ number: 2,date: '6-3-21', status: 'On Leave' });
        collection.insertOne({ number: 3,date: '7-3-21', status: 'On Leave' });
        collection.insertOne({ number: 4,date: '8-3-21', status: 'On Leave' });
        collection.insertOne({ number: 5,date: '9-3-21', status: 'Present' });
        collection.insertOne({ number: 6,date: '10-3-21', status: 'Present' });
        collection.insertOne({ number: 7,date: '11-3-21', status: 'Absent' });
        collection.insertOne({ number: 8,date: '12-3-21', status: 'Absent' });
        collection.insertOne({ number: 9,date: '13-3-21', status: 'Absent' });
        collection.insertOne({ number: 10,date: '14-3-21', status: 'Absent' });
        collection.insertOne({ number: 11,date: '15-3-21', status: 'Present' });
        collection.insertOne({ number: 12,date: '16-3-21', status: 'Present' });
        collection.insertOne({ number: 13,date: '17-3-21', status: 'Present' });
        collection.insertOne({ number: 14,date: '18-3-21', status: 'Present' });

      }); 
      //Term  Outstanding Charges & Deposits  Pending Payments  Total Due
      db.collection('hraza_fee1', function (err, collection) {
        collection.insertOne({term:'Spring 2021',dues: 1000 , Fee: 105000, total:106000 }); 
        });
       
      db.collection('hkhan_fee1', function (err, collection) {
          collection.insertOne({term:'Spring 2021',dues: 1000 , Fee: 105000, total:106000 }); 
          });

      db.collection('ukhan_fee1', function (err, collection) {
            collection.insertOne({term:'Spring 2021',dues: 5000 , Fee: 105000, total:110000 }); 
            });

       db.collection('hraza_trpt2', function (err, collection) {
        collection.insertOne({ number: 1,description: 'Operating Systems', units: 4, gradepoints: 4, grade: 'A'});
        collection.insertOne({ number: 2,description: 'Web Engineering', units: 4, gradepoints: 4, grade: 'A'});
        collection.insertOne({ number: 3,description: 'Technical Writing', units: 3, gradepoints: 2, grade: 'B+'});
        collection.insertOne({ number: 4,description: 'Professional Ethics', units: 3, gradepoints: 3, grade: 'A'});
        collection.insertOne({ number: 5,description: 'SDA', units: 4, gradepoints: 2, grade: 'B'});
        collection.insertOne({ CGPA: 3.76});

         
        });
        db.collection('hkhan_trpt2', function (err, collection) {
          collection.insertOne({ number: 1,description: 'Operating Systems', units: 4, gradepoints: 4, grade: 'A'});
          collection.insertOne({ number: 2,description: 'Web Engineering', units: 4, gradepoints: 3, grade: 'B+'});
          collection.insertOne({ number: 3,description: 'Technical Writing', units: 3, gradepoints: 2, grade: 'B+'});
          collection.insertOne({ number: 4,description: 'Professional Ethics', units: 3, gradepoints: 2, grade: 'B+'});
          collection.insertOne({ number: 5,description: 'SDA', units: 4, gradepoints: 3, grade: 'B'});
          collection.insertOne({ CGPA: 3.54});
  
           
          });
          db.collection('ukhan_trpt2', function (err, collection) {
            collection.insertOne({ number: 1,description: 'Operating Systems', units: 4, gradepoints: 4, grade: 'A'});
            collection.insertOne({ number: 2,description: 'Web Engineering', units: 4, gradepoints: 2, grade: 'B'});
            collection.insertOne({ number: 3,description: 'Technical Writing', units: 3, gradepoints: 3, grade: 'A'});
            collection.insertOne({ number: 4,description: 'Professional Ethics', units: 3, gradepoints: 3, grade: 'A'});
            collection.insertOne({ number: 5,description: 'SDA', units: 4, gradepoints: 3, grade: 'B+'});
            collection.insertOne({ CGPA: 3.64});
    
             
            });
        


      db.collection('hraza_grades1', function (err, collection) {
        collection.insertOne({ course:'Operating Systems', start_date: '2-11-20', end_date:'30-1-21', category:'overall', marks:90 , outof:100, class_avg: 70 });
        collection.insertOne({ course:'Web Engineering', start_date: '2-11-20', end_date:'30-1-21', category:'overall' , marks:85 , outof:100, class_avg: 65 });
        collection.insertOne({ course:'Technical Writing', start_date: '2-11-20', end_date:'30-1-21', category:'overaall' , marks:80 , outof:100, class_avg: 81 });
        collection.insertOne({ course:'Professional Ethics', start_date: '2-11-20', end_date:'30-1-21', category:'overall' , marks:82 , outof:100, class_avg: 70 });
        collection.insertOne({ course:'SDA', start_date: '2-11-20', end_date:'30-1-21', category:'overall' , marks:75 , outof:100, class_avg:77 });



        });
        db.collection('hkhan_grades1', function (err, collection) {
          collection.insertOne({ course: 'Operating Systems', start_date: '2-11-20', end_date:'30-1-21', category:'overall', marks:90 , outof:100, class_avg: 70 });
          collection.insertOne({ course: 'Web Engineering', start_date: '2-11-20', end_date:'30-1-21', category:'overall' , marks:85 , outof:100, class_avg: 87 });
          collection.insertOne({ course: 'Technical Writing', start_date: '2-11-20', end_date:'30-1-21', category:'overaall' , marks:68 , outof:100, class_avg: 67 });
          collection.insertOne({ course: 'Professional Ethics', start_date: '2-11-20', end_date:'30-1-21', category:'overall' , marks:94 , outof:100, class_avg: 780 });
          collection.insertOne({ course: 'SDA', start_date: '2-11-20', end_date:'30-1-21', category:'overall' , marks:66 , outof:100, class_avg: 67 });
  
  
  
          });
          db.collection('ukhan_grades1', function (err, collection) {
            collection.insertOne({ course: 'Operating Systems', start_date: '2-11-20', end_date:'30-1-21', category:'overall', marks:90 , outof:100, class_avg: 70 });
            collection.insertOne({ course: 'Web Engineering', start_date: '2-11-20', end_date:'30-1-21', category:'overall' , marks:85 , outof:100, class_avg: 71 });
            collection.insertOne({ course: 'Technical Writing', start_date: '2-11-20', end_date:'30-1-21', category:'overaall' , marks:88 , outof:100, class_avg: 66 });
            collection.insertOne({ course: 'Professional Ethics', start_date: '2-11-20', end_date:'30-1-21', category:'overall' , marks:73 , outof:100, class_avg: 75 });
            collection.insertOne({ course: 'SDA', start_date: '2-11-20', end_date:'30-1-21', category:'overall' , marks:63 , outof:100, class_avg: 66 });
    
    
    
            });
  
  */
        db.collection('faculty-staff1', function (err, collection) {

         collection.insertOne({ object:fac});
         });

         

         //SHOW COURSES TABLE
      /*   db.collection('course5', function (err, collection) {
        collection.insertOne({ id: 'CS-123', courseName: 'Software Engineering', lecturer: 'Zaki Murtaza', credit_hrs: 3});
        collection.insertOne({ id: 'CS-124', courseName: 'Database Engineering', lecturer: 'Ayesha Naseer', credit_hrs: 4});
        collection.insertOne({ id: 'CS-125', courseName: 'Linear Algebra', lecturer: 'Saeed Murtaza', credit_hrs: 3});
        collection.insertOne({ id: 'CS-126', courseName: 'Data Mining', lecturer: 'Naima Altaf', credit_hrs: 4});
        collection.insertOne({ id: 'CS-127', courseName: 'Fundamentals of Cryptography', lecturer: 'Waleed Bin Shahid', credit_hrs: 4});
      });
*/

/*
              //SHOW hraza Personal COURSES TABLE
         db.collection('hraza_courses', function (err, collection) {
        collection.insertOne({ id: 'CS-123', courseName: 'Software Engineering', lecturer: 'Zaki Murtaza', credit_hrs: 3});
        collection.insertOne({ id: 'CS-126', courseName: 'Data Mining', lecturer: 'Naima Altaf', credit_hrs: 4});
        collection.insertOne({ id: 'CS-127', courseName: 'Fundamentals of Cryptography', lecturer: 'Waleed Bin Shahid', credit_hrs: 4});
      });

//SHOW hkhan Personal COURSES TABLE
         db.collection('hkhan_courses', function (err, collection) {
        collection.insertOne({ id: 'CS-125', courseName: 'Linear Algebra', lecturer: 'Saeed Murtaza', credit_hrs: 3});
        collection.insertOne({ id: 'CS-124', courseName: 'Database Engineering', lecturer: 'Ayesha Naseer', credit_hrs: 4});
        collection.insertOne({ id: 'CS-127', courseName: 'Fundamentals of Cryptography', lecturer: 'Waleed Bin Shahid', credit_hrs: 4});
      });

//SHOW ukhan Personal COURSES TABLE
         db.collection('ukhan_courses', function (err, collection) {
        collection.insertOne({ id: 'CS-123', courseName: 'Software Engineering', lecturer: 'Zaki Murtaza', credit_hrs: 3});
        collection.insertOne({ id: 'CS-125', courseName: 'Linear Algebra', lecturer: 'Saeed Murtaza', credit_hrs: 3});
        collection.insertOne({ id: 'CS-126', courseName: 'Data Mining', lecturer: 'Naima Altaf', credit_hrs: 4});
      });

*/
           myFunction = function(){ 
      
      collection_login=db.collection('login_check1');
          collection_course=db.collection('course5');
          hraza_student=db.collection('hraza_courses');
         hkhan_student=db.collection('hkhan_courses');
          ukhan_student=db.collection('ukhan_courses');
          faculty_info=db.collection('faculty-staff1');
          hraza_attendance=db.collection('hraza_att1');
          hkhan_attendance=db.collection('hkhan_att1');
          ukhan_attendance=db.collection('ukhan_att1');
          hraza_transcript=db.collection('hraza_trpt2');
          hkhan_transcript=db.collection('hkhan_trpt2');
          ukhan_transcript=db.collection('ukhan_trpt2');
          hraza_overallgrades=db.collection('hraza_grades1');
          hkhan_overallgrades=db.collection('hkhan_grades1');
          ukhan_overallgrades=db.collection('ukhan_grades1');
          hraza_dues=db.collection('hraza_fee1');
          hkhan_dues=db.collection('hkhan_fee1');
          ukhan_dues=db.collection('ukhan_fee1');

        }

    });

    // db.close();

//  ********************LOGIN ROUTE****************


app.post('/login-route', function (req, res) {

  myFunction();
collection_login.findOne({emailid:req.body.emailid}, (err,item) =>{

            console.log(item);
           // item1=JSON.stringify(item);

           logininfo=item;

           if(logininfo.password === req.body.password ){    

       // res.send(JSON.stringify(logininfo));
       res.sendFile(__dirname+'/public/html/index.html');
      }
      else if(logininfo.password !== req.body.password ){

        console.log("Wrong Input Given");
        res.send("Wrong Input");
      }
      else{
        console.log("ERROR!!! NULL");
      }
});



});

//  ********************LOGOUT ROUTE****************


app.get('/logout-route', function (req, res) {


  

    if(req.query.std_id=='hraza'){

      
      console.log(" User hraza has been logged out");
      res.redirect('/');
    }
    else if(req.query.std_id=='hkhan'){

     
      console.log(" User hkhan has been logged out");
      res.redirect('/');
    }
    else if(req.query.std_id=='ukhan'){

     
      console.log(" User ukhan has been logged out");
      res.redirect('/');
    }
      
    
    
  
    



});


/*
app.post('/submit-student-data', function (req, res) {




collection1.findOne({id:req.body.firstName}, (err,item) =>{

            console.log(item);
           // item1=JSON.stringify(item);



   // var name = req.body.firstName + ' ' + req.body.lastName;

    //res.send(course + '  Found!');     mongodb+srv://mackey:<password>@cluster0.vp88m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    res.send(JSON.stringify(item));
});

});

*/

    //**********************STUDENT PROFILE  ROUTE*********************************
app.get('/student-info', function (req, res) {

      res.send(JSON.stringify(logininfo));


    });

           //*************************Faculty Profile Info****************
  app.get('/faculty-info', function (req, res) {

     
    faculty_info.findOne({object:fac}, (err,item) =>{

            
           // item1=JSON.stringify(item);
           console.log(item);


      res.send(JSON.stringify(item));




        
      });

      
});

        //**********************SHOW GPA********************

  app.get("/gpa-show", function(req,res){

            collection_login.findOne({emailid:req.query.std_id}, (err,item) =>{

            console.log(item);

                res.send(JSON.stringify(item));
            });

 });


                     


                  //  ************show courses****************

 app.get("/show-courses", function(req,res){

            collection_course.find().toArray((err,items) =>{

              console.log(items);

                res.send(JSON.stringify(items));
            });

 });




//  ************show personal student courses****************

 app.get("/personal-courses", function(req,res){


        

      if(req.query.std_id=='hraza')
           { hraza_student.find().toArray((err,items) =>{

              console.log(items);

                res.send(JSON.stringify(items));
            });

       }
      else if(req.query.std_id=='hkhan')
           { hkhan_student.find().toArray((err,items) =>{

              console.log(items);

                res.send(JSON.stringify(items));
            });

       }

       else if(req.query.std_id=='ukhan')
           { ukhan_student.find().toArray((err,items) =>{

              console.log(items);

                res.send(JSON.stringify(items));
            });

       }

       else{

        res.send("No Database Found!");
       }

 });





                        // *********************ADD COURSES*******************

 app.get('/search-add-route', function (req, res) {


              console.log(req.query.id);

collection_course.findOne({id:req.query.id}, (err,item) =>{


            course_item=item;
            console.log(item);

            if(item==null){

              res.send("NO SUCH COURSE ID EXISTS, Please Enter a correct one");
            }

            else{

            if(req.query.std_id=='hraza'){

             hraza_student.findOne({id:req.query.id}, (err,item) =>{


           if(item==null){



          hraza_student.insertOne(course_item, (err,item) =>{

          });

             hraza_student.find().toArray((err,items) =>{

              console.log(items);


   // var name = req.body.firstName + ' ' + req.body.lastName;

    //res.send(course + '  Found!');     mongodb+srv://mackey:<password>@cluster0.vp88m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    
});

          res.send("Course has been added, Please Refresh Your Courses List");
}
else{

      res.send("COURSE ALREADY EXISTS");
}

});
}


            else if(req.query.std_id=='hkhan'){

             hkhan_student.findOne({id:req.query.id}, (err,item) =>{


           if(item==null){



          hkhan_student.insertOne(course_item, (err,item) =>{

          });

             hkhan_student.find().toArray((err,items) =>{

              console.log(items);


   // var name = req.body.firstName + ' ' + req.body.lastName;

    //res.send(course + '  Found!');     mongodb+srv://mackey:<password>@cluster0.vp88m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    
});

          res.send("Course has been added, Please Refresh Your Courses List");
}
else{

      res.send("COURSE ALREADY EXISTS");
}

});
}

 else if(req.query.std_id=='ukhan'){

             ukhan_student.findOne({id:req.query.id}, (err,item) =>{


           if(item==null){



          ukhan_student.insertOne(course_item, (err,item) =>{

          });

             ukhan_student.find().toArray((err,items) =>{

              console.log(items);


   // var name = req.body.firstName + ' ' + req.body.lastName;

    //res.send(course + '  Found!');     mongodb+srv://mackey:<password>@cluster0.vp88m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    
});

          res.send("Course has been added, Please Refresh Your Courses List");
}
else{

      res.send("COURSE ALREADY EXISTS");
}

});
}


  



}

});

}); // Add courses end brackets




                        //**************Delete Courses*******************


  app.get('/search-delete-route', function (req, res) {


              console.log(req.query.id);


      collection_course.findOne({id:req.query.id}, (err,item) =>{


            
            console.log(item);

            if(item==null){

              res.send("NO SUCH COURSE ID EXISTS, Please Enter a CORRECT ID");
            }

            else{

                if(req.query.std_id=='hraza'){

            hraza_student.findOne({id:req.query.id}, (err,item) =>{


           if(item!=null){



          hraza_student.deleteOne(item, (err,item) =>{

          });

             hraza_student.find().toArray((err,items) =>{

              console.log(items);


   // var name = req.body.firstName + ' ' + req.body.lastName;

    //res.send(course + '  Found!');     mongodb+srv://mackey:<password>@cluster0.vp88m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    
});

          res.send("Course has been Deleted, Please Refresh Your Courses List");
}
else{

      res.send("COURSE DOES NOT EXIST IN YOUR COURSES");
}

});
}


     else if(req.query.std_id=='ukhan'){

        ukhan_student.findOne({id:req.query.id}, (err,item) =>{


               if(item!=null){



              ukhan_student.deleteOne(item, (err,item) =>{

              });

                 ukhan_student.find().toArray((err,items) =>{

                  console.log(items);


       // var name = req.body.firstName + ' ' + req.body.lastName;

        //res.send(course + '  Found!');     mongodb+srv://mackey:<password>@cluster0.vp88m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
        
    });

              res.send("Course has been Deleted, Please Refresh Your Courses List");
    }
    else{

          res.send("COURSE DOES NOT EXIST IN YOUR COURSES");
    }

    });

    }


else if(req.query.std_id=='hkhan'){
        hkhan_student.findOne({id:req.query.id}, (err,item) =>{


               if(item!=null){



              hkhan_student.deleteOne(item, (err,item) =>{

              });

                 hkhan_student.find().toArray((err,items) =>{

                  console.log(items);


       // var name = req.body.firstName + ' ' + req.body.lastName;

        //res.send(course + '  Found!');     mongodb+srv://mackey:<password>@cluster0.vp88m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
        
    });

              res.send("Course has been Deleted, Please Refresh Your Courses List");
    }
    else{

          res.send("COURSE DOES NOT EXIST IN YOUR COURSES");
    }

    });


}

   

}

});

});


 //############################### ATTENDANCE #################################################
app.get("/show-attendance", function(req,res){


    console.log("Request ID is = "+JSON.stringify(req.query.std_id));
    console.log("Entered ATTENDANCE");


  if(req.query.std_id=='hraza')
       { 

        console.log("Entered hrazaATTENDANCE");
        hraza_attendance.find().toArray((err,items) =>{


          console.log(items);

            res.send(JSON.stringify(items));
        });

   }
  else if(req.query.std_id=='hkhan')
       { hkhan_attendance.find().toArray((err,items) =>{

          console.log(items);

            res.send(JSON.stringify(items));
        });

   }

   else if(req.query.std_id=='ukhan')
       { ukhan_attendance.find().toArray((err,items) =>{

          console.log(items);

            res.send(JSON.stringify(items));
        });

   }

   else{

    console.log("Rejected!!!!");
    res.send("No Database Found!");
   }

});

//############################### Show Grades & Marks #################################################
app.get("/grades-show", function(req,res){


  if(req.query.std_id=='hraza')
       { hraza_overallgrades.find().toArray((err,items) =>{

          console.log(items);

            res.send(JSON.stringify(items));
        });

   }
  else if(req.query.std_id=='hkhan')
       { hkhan_overallgrades.find().toArray((err,items) =>{

          console.log(items);

            res.send(JSON.stringify(items));
        });

   }

   else if(req.query.std_id=='ukhan')
       { ukhan_overallgrades.find().toArray((err,items) =>{

          console.log(items);

            res.send(JSON.stringify(items));
        });

   }

   else{

    res.send("No Database Found!");
   }

});


//############################### Show Account Inquiry #################################################
app.get("/account-show", function(req,res){


  if(req.query.std_id=='hraza')
       { hraza_dues.find().toArray((err,items) =>{

          console.log(items);

            res.send(JSON.stringify(items));
        });

   }
  else if(req.query.std_id=='hkhan')
       { hkhan_dues.find().toArray((err,items) =>{

          console.log(items);

            res.send(JSON.stringify(items));
        });

   }

   else if(req.query.std_id=='ukhan')
       { ukhan_dues.find().toArray((err,items) =>{

          console.log(items);

            res.send(JSON.stringify(items));
        });

   }

   else{

    res.send("No Database Found!");
   }

});

//######################################### Show Transcript #######################################333

app.get("/transcript-show", function(req,res){


  if(req.query.std_id=='hraza')
       { hraza_transcript.find().toArray((err,items) =>{

          console.log(items);

            res.send(JSON.stringify(items));
        });

   }
  else if(req.query.std_id=='hkhan')
       { hkhan_transcript.find().toArray((err,items) =>{

          console.log(items);

            res.send(JSON.stringify(items));
        });

   }

   else if(req.query.std_id=='ukhan')
       { ukhan_transcript.find().toArray((err,items) =>{

          console.log(items);

            res.send(JSON.stringify(items));
        });

   }

   else{

    res.send("No Database Found!");
   }

});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});

/*         collection.insertOne({ id: 'CS-123', firstName: 'SE', lastName: 'Jobs' });
        collection.insertOne({ id: 'CS-124', firstName: 'HRM', lastName: 'Gates' });
        collection.insertOne({ id: 'CS-125', firstName: 'PE', lastName: 'Bond' });
*/

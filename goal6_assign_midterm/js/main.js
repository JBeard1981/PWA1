/*
	* Mid Terms for PWA-1
    Jonathan Beard 
*/

//start of self exicuting function
(function(){
        
        var start = document.querySelector("#info_btn a");
        var stu = [{name:'Steve Rogers', address:{street:'3300 University Blvd', city:'Winter Park', state:'Fl'},grades:[2.5,3.0,4.0]}, {name:'James Logan', address:{street:'Somewear in the swamp', city:'Seminole', state:'Fl'},grades:[2.4,2.3,2.6]}];
        
    
        
    for (var i=0; i < stu.length; i++)
    console.log("Name: "+stu[i].name, + "\nAddress: "+stu[i].address.street, "\nCity: "+stu[i].address.city, "\nState: "+stu[i].address.state, +"\nGPA: "+stu[i].grades);

        start.onclick = function(e) { 
        e.preventDefault();
        if(stu.length<3){
        addStu();
        
                //console.log("Name: "+stu[i].name, + "\nAddress: "+stu[i].address.street, "\nCity: "+stu[i].address.city, "\n State: "+stu[i].address.state, +"\n GPA: "+stu[i].grades);
        stu.push(addStu);
            
        }else{ console.log("Sorry but we are all out of students to display, Try again some other time.") }    
    }
    
  var addStu =  function(name, address, grades){
        var newStudent ={name:'Scott Summers', address:{street:'1407 Graymalkin Lane', city:'North Salem', state:'New York'},grades:[3.2, 4.0, 3.4]}; 
    return newStudent;
    };    
            
    var fillInfo = function(stu){
        
        //stu[];
        
        var studentName = document.querySelector("#name p")
       // studentName.innerHTML=stu[i].name
      //  var studentStreet = document.querySelector("#address p")
      //  studentStreet.innerHTML=stu[i].address
        var today = document.querySelector("#date p")
        today.innerHTML=new Date();
        //var studentState = document.querySelector("")
       // studentState.innerHTML=stu[i].address.state
      //  var studentGpa = document.querySelector("")
      //  studentGpa.innerHTML=stu[i].gpa
        }
     /*    
    var logit = function(stu){
        logit = stu
        console.log("Name: "+stu[i].name, + "\nAddress: "+stu[i].address.street, "\nCity: "+stu[i].address.city, "\nState: "+stu[i].address.state, +"\nGPA: "+stu[i].grades);
    
    }
    logit();
 */
    
    })(); // end wrapper
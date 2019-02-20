const myarr = [];
let myarrget = [];
        let coursearr = [];
        let myPreviousDataLen;
        // admin add participant
        

        // Getting data from localStorage
        getAllData();
    	function getAllData(){
			let demo = localStorage.getItem('courses');
    		console.log(localStorage.getItem('courses'));
    		console.log(JSON.parse(localStorage.getItem('courses')));
    		coursearr = JSON.parse(localStorage.getItem('courses'));
    		myPreviousDataLen=coursearr.length;
    		console.log("length of Previous Data:"+myPreviousDataLen);
		}
        // creating json to table formate
        function showCourses() {
            let demo = localStorage.getItem('courses');
            alert(demo);
            // console.log(localStorage.getItem('user'));
            // console.log(JSON.parse(localStorage.getItem('user')));
            coursearr = JSON.parse(localStorage.getItem('courses'));
            let col = [];
            for (var i = 0; i < coursearr.length; i++) {
                for (var key in coursearr[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }
            // creating dynamic table
            var table = document.createElement("table");
            table.setAttribute("class", "border_class");

             
            var tr = table.insertRow(-1);

            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");      // TABLE HEADER.
                th.innerHTML = col[i];
                tr.appendChild(th);
            }

            // ADD JSON DATA TO THE TABLE AS ROWS.
            for (var i = 0; i < coursearr.length; i++) {

                tr = table.insertRow(-1);

                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = coursearr[i][col[j]];
                }
            }
            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            var divContainer = document.getElementById("showData");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);

        }
        function addToC(){
            // getAllData();
            var coursehistory = JSON.parse(localStorage.getItem("courses")) || [];
            let tmpObj = {};
            tmpObj["CourseID"]= document.getElementById("CID").value;
            tmpObj["CourseName"]= document.getElementById("cname").value;
            tmpObj["CourseLink"]= document.getElementById("clink").value;
            // myarr.push(tmpObj);
            // console.log(myarr);
            // localStorage.setItem('courses', JSON.stringify(myarr));
            coursehistory.push(tmpObj);
            localStorage.setItem("courses", JSON.stringify(coursehistory));
        }

        function removeDataC(){
            coursearr = JSON.parse(localStorage.getItem('courses'));
            console.log(coursearr);
            var select=document.getElementById("CourseList");
            for(let a in coursearr){
                console.log(coursearr[a].CourseName);  
                let optionC=document.createElement("option"); 
                optionC.text=coursearr[a].CourseName;  
                select.add(optionC);
            }
        }

        function removeDataBtnFunC(){
            alert("hii");
            var select=document.getElementById("CourseList");
            var optC = select.options[select.selectedIndex].value
            alert(optC);
            console.log(optC);
            var coursehistory = JSON.parse(localStorage.getItem("courses")) || [];
            let tmpObj = {};
            coursehistory.pop(optC);
            console.log(coursehistory);
            console.log(tmpObj);
            localStorage.setItem("courses", JSON.stringify(coursehistory));
        }       
        

        function assigncourse(){
            coursearr = JSON.parse(localStorage.getItem('courses'));
            console.log(coursearr);
            var select=document.getElementById("CourseListAssign");
            for(let a in coursearr){
                console.log(coursearr[a].CourseName);  
                let optionC=document.createElement("option"); 
                optionC.text=coursearr[a].CourseName;  
                select.add(optionC);     
            }
        }
        function assignPart(){
            myarrget = JSON.parse(localStorage.getItem('user'));
            var select=document.getElementById("PartListAssign");
            for(let k in myarrget){
                console.log(myarrget[k].name);  
                let option=document.createElement("option");
                option.text=myarrget[k].name;
                select.add(option);
            }
        }


        function assignPartBtnFun(){
            var select=document.getElementById("PartListAssign"); 
            var opt = select.options[select.selectedIndex].value
            alert(opt);
            var select=document.getElementById("CourseListAssign");
            var optC = select.options[select.selectedIndex].value;
            alert(optC + "Assigned to ");
            

            var existing = localStorage.getItem('user');
            existing = existing ? JSON.parse(existing) : {};
            for(let a in existing){
                if( existing[a].name == opt ){
                    existing[a].Courses = existing[a].Courses ? existing[a].Courses + "," +optC : optC;
                }
                localStorage.setItem('user', JSON.stringify(existing));
            }
           // existing = existing ? existing.split(',') : [];
            //tmpObj["Courses"]= document.getElementById("pcourse").value;

            
        }
    
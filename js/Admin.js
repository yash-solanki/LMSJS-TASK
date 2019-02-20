const myarr = [];
    	let myarrget = [];
    	let myPreviousDataLen;
    	// admin add participant
 	   	getAllData();
 	   	function addTo(){
 	   		// getAllData();
 	   		var drophistory = JSON.parse(localStorage.getItem("user")) || [];
 	   		let tmpObj = {};
            tmpObj["Courses"]= document.getElementById("pcourse").value;
            tmpObj["CoursesStatus"]= document.getElementById("pcoursestatus").value;
 	   		tmpObj["name"]= document.getElementById("pname").value;
 	   		tmpObj["pass"]= document.getElementById("ppass").value;
 	   		// myarr.push(tmpObj);
 	   		// console.log(myarr);
    		// localStorage.setItem('user', JSON.stringify(myarr));
    		drophistory.push(tmpObj);
    		localStorage.setItem("user", JSON.stringify(drophistory));
		}

		function removeData(){
			myarrget = JSON.parse(localStorage.getItem('user'));
			var select=document.getElementById("userList");
			for(let k in myarrget){
				console.log(myarrget[k].name);	
				let option=document.createElement("option");
				option.text=myarrget[k].name;
				select.add(option);
			}
		}

		function removeDataBtnFun(){
			var select=document.getElementById("userList");
			var opt = select.options[select.selectedIndex].value
			console.log(opt);
			var drophistory = JSON.parse(localStorage.getItem("user")) || [];
 	   		let tmpObj = {};
 	   		
			drophistory.pop(opt);
    		console.log(drophistory);
    		console.log(tmpObj);
    		localStorage.setItem("user", JSON.stringify(drophistory));

		}		
	

		// creating json to table formate
		function showData() {
			let demo = localStorage.getItem('user');
    		alert(demo);
    		// console.log(localStorage.getItem('user'));
    		// console.log(JSON.parse(localStorage.getItem('user')));
    		myarrget = JSON.parse(localStorage.getItem('user'));
			let col = [];
			for (var i = 0; i < myarrget.length; i++) {
            	for (var key in myarrget[i]) {
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
        	for (var i = 0; i < myarrget.length; i++) {

            	tr = table.insertRow(-1);

            	for (var j = 0; j < col.length; j++) {
                	var tabCell = tr.insertCell(-1);
                	tabCell.innerHTML = myarrget[i][col[j]];
            	}
        	}
        	// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        	var divContainer = document.getElementById("showData");
        	divContainer.innerHTML = "";
        	divContainer.appendChild(table);

		}

		function getAllData(){
			let demo = localStorage.getItem('user');
    		console.log(localStorage.getItem('user'));
    		console.log(JSON.parse(localStorage.getItem('user')));
    		myarrget = JSON.parse(localStorage.getItem('user'));
    		myPreviousDataLen=myarrget.length;
    		console.log("length of Previous Data:"+myPreviousDataLen);
		}

        function courses(){
            window.location="courses.html";
        }

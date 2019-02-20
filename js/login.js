// Below function Executes on click of login button.
function validate(){
	let partarr = [];
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	coursearr = JSON.parse(localStorage.getItem('user'));
	// Validation of id pass
	if ( username == "Admin" && password == "Admin"){
 	// Redirecting to other page.
		alert ("Login Sucessfully");
		window.location="MyAdmin.html";
		return true;
	}

	else {
		//partarr = JSON.parse(localStorage.getItem('user')); 
		alert ("!1s");  
		for(let a in coursearr){  
			if(username == coursearr[a].name && password == coursearr[a].pass){
				alert ("Login Sucessfully");
				sessionStorage.setItem("partL", coursearr[a].name);
				window.location = "Participant.html"; // Redirecting to other page.
				return false;
			}
		}	
	}
}
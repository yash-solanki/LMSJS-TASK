alert( "username = " + sessionStorage.getItem("partL"));
let partcarr = [];


function demo(){
	partcarr = JSON.parse(localStorage.getItem('user'));

	for(let a in partcarr){
		if( partcarr[a].name == sessionStorage.getItem("partL")) {
			alert(partcarr[a].Courses);
			alert(partcarr[a].CoursesStatus);
		} 
	}
}


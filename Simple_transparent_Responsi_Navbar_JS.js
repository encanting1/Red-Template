document.getElementById("STRNicon").onclick = function(){
		if(document.getElementById("STRNnav").style.display == "block"){
		document.getElementById("STRNnav").style.display = "none";}
		else{
			document.getElementById("STRNnav").style.display = "block";
		}
	}

	document.body.onresize = function(){
		if(window.innerWidth <= 700){
			document.getElementById("STRNnav").style.display = "none";
		}
		else{
			document.getElementById("STRNnav").style.display = "block";
		}
	}
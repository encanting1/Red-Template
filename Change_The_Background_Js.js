bg = document.getElementById("cdbbg");
imcover = document.getElementById("cdbimcover");

imcover.onclick = function(X){

	id = X.target.id;
	src = document.getElementById(id).getAttribute("src");
	if(src == null){
		src = document.getElementById("cdbim1").getAttribute("src");
	}
	bg.style.backgroundImage = "url("+src+")";
}
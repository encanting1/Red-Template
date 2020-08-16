	/*variabel*/
	status = 0;
	var random;
	var intval;
	var intval2;
	baseCard = document.getElementById("base-card");
	gambar = document.getElementById("gambar");
	text = document.getElementById("text");
	/*variabel*/

	function randomx(){
		car = document.querySelectorAll(".karakter");
		bio = document.querySelectorAll(".bio");
		random = Math.floor(Math.random() * car.length);
		gambar.setAttribute("src",car[random].innerHTML);
		intval2 = setInterval(function(){
		text.innerHTML = bio[random].innerHTML;	
		clearInterval(intval2);
		},2000);
		alert(size.length);
	}
	function rotate(){
		if(status == 0){
		baseCard.style.transform = "rotate(360deg) rotateY(0deg)";
		status = 1;
		intval = setInterval(rotate,1000);
		}
		else{
		clearInterval(intval);	
		status = 0;
		baseCard.style.transform = "rotate(360deg) rotateY(180deg)";	
		}
	}
	baseCard.onmouseenter = function(){
		rotate();
		randomx();
	}
	baseCard.onmouseleave = function(){
		clearInterval(intval);
		clearInterval(intval2);
		status = 0;
		baseCard.style.transform = "rotateY(0deg) rotateY(0deg)";
		text.innerHTML = "Seperti siapakah anda di anime naruto?";
	}
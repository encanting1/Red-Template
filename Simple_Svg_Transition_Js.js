    sisvtrx = document.querySelectorAll("[id=sisvtrcover]");
    sisvtry = document.querySelectorAll("[id=sisvtrkotak]");
    var data;

    function m0(){
       sisvtry[0].style.strokeDashoffset = "-1200"; 
       clearInterval(data);
    }

    sisvtrx[0].onmouseenter = function(){
        sisvtrx[0].style.transform = "translateY(50px)";
        sisvtry[0].style.strokeDashoffset = "0";
        data = setInterval(m0,1000);
    }

    sisvtrx[0].onmouseleave = function(){
        clearInterval(data);
        sisvtrx[0].style.transform = "translateY(0)";
        sisvtry[0].style.strokeDashoffset = "1200";
    }

    function m1(){
       sisvtry[1].style.strokeDashoffset = "-1200"; 
       clearInterval(data);
    }

    sisvtrx[1].onmouseenter = function(){
        sisvtrx[1].style.transform = "translateY(50px)";
        sisvtry[1].style.strokeDashoffset = "0";
        data = setInterval(m1,1000);
    }

    sisvtrx[1].onmouseleave = function(){
        clearInterval(data);
        sisvtrx[1].style.transform = "translateY(0)";
        sisvtry[1].style.strokeDashoffset = "1200";
    }

    function m2(){
       sisvtry[2].style.strokeDashoffset = "-1200"; 
       clearInterval(data);
    }

    sisvtrx[2].onmouseenter = function(){
        sisvtrx[2].style.transform = "translateY(50px)";
        sisvtry[2].style.strokeDashoffset = "0";
        data = setInterval(m2,1000);
    }

    sisvtrx[2].onmouseleave = function(){
        clearInterval(data);
        sisvtrx[2].style.transform = "translateY(0)";
        sisvtry[2].style.strokeDashoffset = "1200";
    }
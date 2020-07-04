    x = document.querySelectorAll("[id=sisvtrcover]");
    y = document.querySelectorAll("[id=sisvtrkotak]");
    var data;

    function m0(){
       y[0].style.strokeDashoffset = "-1200"; 
       clearInterval(data);
    }

    x[0].onmouseenter = function(){
        x[0].style.transform = "translateY(50px)";
        y[0].style.strokeDashoffset = "0";
        data = setInterval(m0,1000);
    }

    x[0].onmouseleave = function(){
        clearInterval(data);
        x[0].style.transform = "translateY(0)";
        y[0].style.strokeDashoffset = "1200";
    }

    function m1(){
       y[1].style.strokeDashoffset = "-1200"; 
       clearInterval(data);
    }

    x[1].onmouseenter = function(){
        x[1].style.transform = "translateY(50px)";
        y[1].style.strokeDashoffset = "0";
        data = setInterval(m1,1000);
    }

    x[1].onmouseleave = function(){
        clearInterval(data);
        x[1].style.transform = "translateY(0)";
        y[1].style.strokeDashoffset = "1200";
    }

    function m2(){
       y[2].style.strokeDashoffset = "-1200"; 
       clearInterval(data);
    }

    x[2].onmouseenter = function(){
        x[2].style.transform = "translateY(50px)";
        y[2].style.strokeDashoffset = "0";
        data = setInterval(m2,1000);
    }

    x[2].onmouseleave = function(){
        clearInterval(data);
        x[2].style.transform = "translateY(0)";
        y[2].style.strokeDashoffset = "1200";
    }
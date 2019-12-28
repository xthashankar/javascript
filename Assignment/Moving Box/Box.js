var red=document.getElementById("bob");
red.style.width="150px";
red.style.height="100px";
red.style.background="red";
red.style.left="0px";
red.style.top='0px';
red.style.position="absolute";
// document.body.appendChild(red);

document.body.onkeyup=function()
{
    var e=event.keyCode,
    Top=parseInt(document.getElementById("bob").style.top);
    Left=parseInt(document.getElementById("bob").style.left);
    if(e==40)//down function 
    { 
        document.getElementById("bob").style.top=(Top)+10+"px";
    }
    else if(e==37)//left function
    { 
        document.getElementById("bob").style.left=(Left)-10+"px";
    }
    else if(e==39)//right function
    {
        document.getElementById("bob").style.left=(Left)+10+"px";
    } 
    else if(e==38)//up function
     { 
        document.getElementById("bob").style.top=(Top)-10+"px";
    }

}

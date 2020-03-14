
var textbox=document.getElementById('textbox');
var textbox1=document.getElementById('textbox1');
var dropdown =document.getElementById('dropdown');
var dropdown1=document.getElementById('dropdown1');
var dropdownvalue=dropdown.value;
var dropdown1value=dropdown1.value;
//using addEventlistener
textbox.addEventListener("keypress",converter);
dropdown.addEventListener("change",converter);
dropdown1.addEventListener("change",converter);

function converter()
{
    
    dropdownvalue=dropdown.value;
    dropdown1value=dropdown1.value;
    if(dropdownvalue==="cm" && dropdown1value==="km")
    {
        textbox1.value=Number(textbox.value)/10000;
              
    }
    else if(dropdownvalue==="cm" &&dropdown1value==="mm")
    {
        textbox1.value=Number(textbox.value)*10;
    } 
    else if(dropdownvalue==="cm" && dropdown1value==="cm")
    {
        textbox1.value=textbox.value;
    }
    if(dropdownvalue==="km" && dropdown1value==="cm")
    {
        textbox1.value=Number(textbox.value)*100000;
    }
    else if(dropdownvalue==="km" &&dropdown1value==="mm")
    {
        textbox1.value=Number(textbox.value)*1000000;
    }
    else if(dropdownvalue==="km" && dropdown1value==="km")
    {
        textbox1.value=textbox.value;
    }
    if(dropdownvalue==="mm" && dropdown1value==="cm")
    {
        textbox1.value=Number(textbox.value)/10;
    }
    else if(dropdownvalue==="mm" &&dropdown1value==="km")
    {
        textbox1.value=Number(textbox.value)/1000000;
    }
    else if(dropdownvalue==="mm" && dropdown1value==="mm")
    {
        textbox1.value=textbox.value;
    }
}
function reset()
{
    // var resetButton=document.getElementById("textbox");
    // var resetButton=document.getElementById("textbox1");
    // if(resetButton)
    // {
    //     resetButton.value="";
    // }
    textbox.value="";
    textbox1.value="";
}

let i=0;



var days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thusday", "Friday", "Saturday", "Sunday"];
document.getElementById("day").innerHTML = days[i];

function pre()
{
    i=i-1;
    if(i==(-1))
    {
        i=6;
    }
    document.getElementById("day").innerHTML = days[i];
    
}
function next()
{
    i=i+1;
    if(i==7)
    {
        i=0;
    }
    document.getElementById("day").innerHTML = days[i];
}
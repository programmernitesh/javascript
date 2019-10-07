function calc_value()
{
    let x = document.getElementById("input_value").value;
    let p = Number(x);
    let delay_t=((100-p)*100)+100;
    
    
    let timerId = setInterval(function(){ 
                let range = ["0-40","40-70","70-100"];
                let color =["red","yellow","green"];

                let l = range.length;
            
                let i=0;
                while(i<l)
                {
                    let val = range[i].split("-");
                    
                    let q = Number(val[0]);
                    let r = Number(val[1]);
                    if(p>=q)
                    {
                        if(p<r)
                        {
                            change_color(color[i]);
                            break;
                        }
                    }
                    i++;
                }
                if(i==l)
                {
                    change_color("white");
                }
                

                function change_color(select_color)
                {
                    document.getElementById("cir").style.backgroundColor = select_color;
                }
        p++;
    }, 100);


    setTimeout(() => { clearInterval(timerId);},delay_t);
}



/*
var getdata = new datuakLortu();
var erantzuna =getdata.execute();
var data;
erantzuna.then(
    (result)=>{
        setData(result);
        console.log(result);
    },
    (error)=>{console.log(error);}

);*/

//console.log(data);

function get_pdata(){
    return window.pdata;
}

function min_price_h(geo){
    var data= window.pdata.indicator.values;
    var minp=9999;//price minimun
    var mint="";//time when price is minimun
    var lag;//help with time transformation split string
    
    for(var i=0;i<data.length;i++){
        if(data[i].geo_id==geo){
            lag = data[i].value;           
            if(minp>lag){
                minp=lag;
                mint=data[i].datetime.split("T")[1].split("+")[0].split(".")[0];
            }
        }
    }

    return mint;
}

export function set_udata(data){
    console.log(data);
    window.udata=data;
    return true;
}




export function average(){
   /* var avg=0;
    var sum=0;
    for(var i=0; i<data.indicator.values.length; i++){
        if(data.indicator.values[i].geo_id=="Peninsula"){
            avg=avg+data.indicator.values[i].value;
            sum=sum+1;
        };
    }
    var average=avg/sum;
    console.log(average);
    return average;*/
    return null;
    
}



export {min_price_h, get_pdata};
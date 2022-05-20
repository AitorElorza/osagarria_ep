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

function user_avg(geo,hozk,izozk,router){
    var data= window.pdata.indicator.values;
    var avg=0;
    
    for(var i=0;i<data.length;i++){
        if(data[i].geo_id==geo){
            avg =avg + data[i].value*(hozk+izozk+router);
        }
    }
    return avg;
}


export function set_udata(data){
    console.log(data);
    window.udata=data;
    return true;
}




function average(geo){
    var data= window.pdata.indicator.values;
    var avg=0;
    
    for(var i=0;i<data.length;i++){
        if(data[i].geo_id==geo){
            avg =avg + data[i].value;
        }
    }
    return avg/24;
    
}



export {min_price_h, get_pdata, user_avg,average};
import {datuakLortu} from "../datuak/datuakLortu";

var getdata = new datuakLortu();
var data =getdata.execute();

console.log(data);

export function get_data(){
    return this.data;
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




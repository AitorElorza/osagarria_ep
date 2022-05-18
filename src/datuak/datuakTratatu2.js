import {datuakLortu} from "./datuakLortu";


export class DatuakTratatu{
    data;
    constructor(){
        var getdata = new datuakLortu();
        var erantzuna =getdata.execute();
        var datuak;
        erantzuna.then(
            (result)=>{
            datuak=result;
            console.log("success");
            //console.log(result);
            },
            (error)=>{
                datuak=error;
                console.log(error);}

            );
            this.data=datuak;
        }
    get_data(){
        return this.data;
    }

    average(){
        var avg=0;
         var sum=0;
         for(var i=0; i<this.data.indicator.values.length; i++){
             if(this.data.indicator.values[i].geo_id=="Peninsula"){
                 avg=avg+this.data.indicator.values[i].value;
                 sum=sum+1;
             };
         }
         var average=avg/sum;
         console.log(average);
         return average;
         //return null;
         
     }
}
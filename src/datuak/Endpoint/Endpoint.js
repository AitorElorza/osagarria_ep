const { today } = require("ionicons/icons");

class Endpoint{
    url;
    paramenters;

    constructor(paramenters){
        this.url="https://api.esios.ree.es/indicators/";
        var today = Date.new();
        this.paramenters={
            start_date: today.toISOString(),
        };
    }
}

module.exports=Endpoint;
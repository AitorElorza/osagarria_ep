import { executeQuotaErrorCallbacks } from "workbox-core/_private";

const axios =require("axios");
//const fs =require('fs');

export class datuakLortu{
    token;
    endpointInstance;

    constructor(){
        this.endpointInstance = "https://api.esios.ree.es/indicators/1001";
        console.log("datuakLortu konstruktorea");
        
    }
    async execute(){
        const config = {
            headers: {
                "Accept": "application/json; application/vnd.esios-api-v1+json",
                "Content-Type": "application/json",
                "Authorization": 'Token token=""'
            }
        }

        //call the api

        const response = await axios.get(this.endpointInstance,config);

        switch(response.status){
            case 200: break;
            default: throw new Error(`${response.status} ${response.statusText}`);
        }
        const data=JSON.stringify(response.data);
        console.log(data);
        //fs.writeFile('prezioak.json',data);
        return data;
    }
}


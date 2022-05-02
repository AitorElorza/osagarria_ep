import { executeQuotaErrorCallbacks } from "workbox-core/_private";
const axios =require("axios");

class datuakLortu{
    token;
    endpointInstance;

    constructor(endpointInstance,token){
        this.endpointInstance = "https://api.esios.ree.es/indicators/";
        this.token = token;
    }
    async executeQuotaErrorCallbacks(){
        const config = {
            headers: {
                "Accept": "application/json; application/vnd.esios-api-v1+json",
                "Content-Type": "application/json",
                "Authorization": 'Token token="${this.token}"'
            }
        }

        //call the api

        const response = await axios.get(this.endpointInstance,config);

        switch(response.status){
            case 200: break;
            default: throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.data;
    }
}
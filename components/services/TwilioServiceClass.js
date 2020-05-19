import axios from "axios";

function wait(ms, value) {
    return new Promise(resolve => setTimeout(resolve, ms, value));
}

class TwilioServiceClass {
    constructor()
    {
        this.server = axios.create({   
            baseURL: 'https://twilio-lookup.p.rapidapi.com/PhoneNumbers',        
            headers: {
              common: {        
                "x-rapidapi-host": "twilio-lookup.p.rapidapi.com",
                "x-rapidapi-key": "343dccfcefmshe3771705f66d4b2p14503fjsn8e939e581029"
              }
            }
          });

          this.server.interceptors.response.use(
            value => wait(1000, value));
    }

    async getCallerNameByPhoneNumber(phoneNumber)
    {
        return this.server.get('/caller-name', {
            params: {
                phoneNumber: phoneNumber                
            }
        } ).then(value => wait(1000, value));
        // return axios.get('https://twilio-lookup.p.rapidapi.com/PhoneNumbers/caller-name?phoneNumber=3127148503',)
    }
}

export const TwilioService = new TwilioServiceClass();
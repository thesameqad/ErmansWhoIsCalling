import axios from "axios";

class FacebookServiceClass {
    constructor()
    {
        this.server = axios.create({   
            baseURL: 'https://graph.facebook.com'
          });
    }

    getUserInfo(token)
    {
        return this.server.get('/me', {
            params: {
                'access_token': token                
            }
        } );
    }
}

export const FacebookService = new FacebookServiceClass();
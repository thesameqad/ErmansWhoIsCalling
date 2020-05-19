import * as Facebook from 'expo-facebook';
import * as Google from "expo-google-app-auth";

import { FacebookService } from '../components/services/FacebookService';

const IOS_CLIENT_ID =
  "958821988701-lm17o1ejc0bfs0h02v2n7o00lkvsasjb.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
  "958821988701-8cc1up2l64m5fmt3us95j82itloudddr.apps.googleusercontent.com";

export const signInWithFacebook = async () => {
    try {
        const {
            type,
            token
        } = await Facebook.logInWithReadPermissionsAsync("854476641733349", {
            permissions: ["public_profile", "email"]
        });

        if (type === "success") {
            
            const response = await FacebookService.getUserInfo(token);
            console.log("user name:", response.data);
        } else {
            console.error(`Facebook Login Error: Cancelled`);
        }
    } catch ({ message }) {
        console.error(`Facebook Login Error: ${message}`);
    }
}
export const signInWithGoogle = async () => {
try {
  const result = await Google.logInAsync({
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
    scopes: ["profile", "email"]
  });

  console.log(result);

  if (result.type === "success") {
    console.log("successfully loggedin", result.user);
    return result.accessToken;
  } else {
    return { cancelled: true };
  }
} catch (e) {
  console.log('LoginScreen.js.js 30 | Error with login', e);
  return { error: true };
}
};
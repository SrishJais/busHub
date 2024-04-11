import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "bushub-133a9.firebaseapp.com",
  projectId: "bushub-133a9",
  storageBucket: "bushub-133a9.appspot.com",
  messagingSenderId: "252699182799",
  appId: "1:252699182799:web:48243ee821a53ade2f99ba"
};
// Initialize Firebase
const myApp = initializeApp(firebaseConfig);
//export it
export default myApp;

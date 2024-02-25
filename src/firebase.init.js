
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCLY-1Sz-JDDTHHjVcut7Q6rJV79Uc9ZiQ",
  authDomain: "twitter-project-8421f.firebaseapp.com",
  projectId: "twitter-project-8421f",
  storageBucket: "twitter-project-8421f.appspot.com",
  messagingSenderId: "825288927765",
  appId: "1:825288927765:web:f216d59ddefc797e93fc1c",
  measurementId: "G-16QFXNR2ZS"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
export default auth;
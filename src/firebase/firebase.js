// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMX4nwywd8d9Wil-ZE1LEYBceFI_Tk6VU",
    authDomain: "crud-operation-client-9a349.firebaseapp.com",
    projectId: "crud-operation-client-9a349",
    storageBucket: "crud-operation-client-9a349.firebasestorage.app",
    messagingSenderId: "1082522048460",
    appId: "1:1082522048460:web:1384f50e63d6393f366f69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
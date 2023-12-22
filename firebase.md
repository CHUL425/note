//shoppy-10d54
//project-922929847232
//dktt0ssz4
//zcoqqdre

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAGfMH8_lhk4ViniEBpTmyz_7CzFN5iD_A",
authDomain: "shoppy-10d54.firebaseapp.com",
databaseURL: "https://shoppy-10d54-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "shoppy-10d54",
storageBucket: "shoppy-10d54.appspot.com",
messagingSenderId: "922929847232",
appId: "1:922929847232:web:28aa48e1c1c3b4bcf1c625",
measurementId: "G-P7R544LZQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//=========================================================
//Cloudinary
import {Cloudinary} from "@cloudinary/url-gen";

const App = () => {
const cld = new Cloudinary({cloud: {cloudName: 'dktt0ssz4'}});
};

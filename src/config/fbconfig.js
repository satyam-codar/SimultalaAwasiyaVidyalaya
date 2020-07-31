/** @format */

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage"
import "firebase/database"
// import 'firebase/storage';
var firebaseConfig = {
	apiKey: "AIzaSyA1Jg37mzPfeH2lLYzqA06YThtCWpCb2Cc",
	authDomain: "sav-website-v1.firebaseapp.com",
	databaseURL: "https://sav-website-v1.firebaseio.com",
	projectId: "sav-website-v1",
	storageBucket: "sav-website-v1.appspot.com",
	messagingSenderId: "680555296696",
	appId: "1:680555296696:web:76c5c97530d9c31f8ac14d",
	measurementId: "G-TCDZ0MWVCD",
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.firestore().setting({ timestampsInSnapshots: true });

firebase.initializeApp(firebaseConfig);
// export var db = firebase.firestore();
firebase.firestore();
const storage=firebase.storage();
const database = firebase.database()
// firebase.settings({timestampsInSnapshots: true,});
export {storage,database, firebase as default}

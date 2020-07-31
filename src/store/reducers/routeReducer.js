/** @format */

import authReducer from "./authReducer";
import profileReducer, {
	profileReducerFor11,
	profileReducerFor12,
	profileReducerFor13,
} from "./profileReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
	auth: authReducer,
	profile: profileReducer,
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	profile11: profileReducerFor11,
	profile12: profileReducerFor12,
	profile13: profileReducerFor13,
});
export default rootReducer;

/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/routeReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import { createFirestoreInstance, getFirestore } from "redux-firestore";
import firebase from "./config/fbconfig";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		// ReactReduxFirebaseProvider(firebase), // redux binding for firebase
		// createFirestoreInstance(fbConfig) // redux bindings for firestore
	)
);

// Initialize firebase instance

const rrfProps = {
	firebase,
	config: {},
	dispatch: store.dispatch,
	createFirestoreInstance, // <- needed if using firestore
};
function AuthIsLoaded({ children }) {
	const auth = useSelector((state) => state.firebase.auth);
	if (!isLoaded(auth))
		return (
			<div className="text-center">
				<div
					className="spinner-grow text-primary"
					style={{ width: "7rem", height: "7rem" }}
					role="status"
				>
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		);
	return children;
}

ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<AuthIsLoaded>
				<App />
			</AuthIsLoaded>
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

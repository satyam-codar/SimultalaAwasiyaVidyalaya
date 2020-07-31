/** @format */

export const signIn = (creds) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();
		firebase
			.auth()
			.signInWithEmailAndPassword(creds.email, creds.password)
			.then(() => {
				dispatch({ type: "LOGIN_SUCCESS" });
			})
			.catch((err) => {
				console.log(err);
				var message = err.message+" Please check your credentials!";
				// alert("An error occured! please check you login credentials.")
				alert(message);
				dispatch({ type: "LOGIN_ERROE", err });
			});
	};
};
export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();
		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch({ type: "SIGN_OUT" });
			});
	};
};

export const signUp = (userData) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirebase().firestore();
		const firebase = getFirebase();
		firebase
			.auth()
			.createUserWithEmailAndPassword(userData.email, userData.password)
			.then((res) => {
				console.log(res.user.uid);
				firestore
					.collection("users")
					.doc(res.user.uid)
					.set({
						firstName: userData.firstName,
						lastName: userData.lastName,
						gender: userData.gender,
						initials: userData.firstName[0] + userData.lastName[0],
						admissionYear: userData.admissionYear,
						admissionNo: userData.admissionNo,
						email: userData.email,
						pw: userData.password,
						phoneNumber: userData.phoneNumber,
						collegeName: userData.collegeName,
						degreeName: userData.degreeName,
						studentId: res.user.uid,
					});
			})
			.then((dataBeforeEmail) => {
				firebase.auth().onAuthStateChanged(function (user) {
					if (!user.emailVerified) {
						user.sendEmailVerification();
						alert(
							"An email has been sent to you. Please verify and login again to view your profile."
						);
					}
				});
			})
			.then((dataAfterEmail) => {
				firebase.auth().onAuthStateChanged(function (user) {
					if (user.emailVerified) {
						// Email is verified
						dispatch({
							type: "SIGNUP_SUCCESS",
							payload:
								"Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox.",
						});
					} else {
						// Email is not verified
						dispatch({
							type: "SIGNUP_ERROR",
							payload:
								"Something went wrong, we couldn't create your account. Please try again.",
						});
					}
				});
			})
			.then((success) => {
				console.log("hurrey");
				dispatch({ type: "SIGNUP_SUCCESSFUL" });
			})
			.catch((err) => {
				console.error("Error adding document: ", err.message);
				var message = "Error adding document: " + err.message;
				alert(message);
				dispatch({ type: "SIGNUP_ERROE", err });
			});
	};
};

// export const updateProfile = (userData, uid) => {
// 	return (dispatch, getState, { getFirebase, getFirestore }) => {
// 		const firestore = getFirebase().firestore();
// 		// const firebase = getFirebase();
// 		console.log("update profile plz");
// 		console.log(uid);
// 		firestore
// 			.collection("users")
// 			.doc(uid)
// 			.set(
// 				{
// 					// firstName: userData.firstName,
// 					// lastName: userData.lastName,
// 					// initials: userData.firstName[0] + userData.lastName[0],
// 					admissionYear: userData.admissionYear,
// 					admissionNo: userData.admissionNo,
// 					phoneNumber: userData.phoneNumber,
// 					phoneNumber2: userData.phoneNumber2,
// 				},
// 				{ merge: true }
// 			)
// 			.then((success) => {
// 				console.log("hurrey");
// 				dispatch({ type: "SIGNUP_SUCCESSFUL" });
// 			})
// 			.catch((err) => {
// 				console.error("Error adding document: ", err);
// 				dispatch({ type: "SIGNUP_ERROE", err });
// 			});
// 	};
// };

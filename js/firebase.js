const firebaseConfig = {
	apiKey: "AIzaSyAMsIV05-wUBHQ2AQ5o3XaObJbGEbl7GIU",
	authDomain: "firbase-app-1.firebaseapp.com",
	databaseURL: "https://firbase-app-1.firebaseio.com",
	projectId: "firbase-app-1",
	storageBucket: "firbase-app-1.appspot.com",
	messagingSenderId: "131587306460",
	appId: "1:131587306460:web:e569931a89c6e088939519",
	measurementId: "G-DZ7EDVS9G4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);




//create user 
function register(event) {
	event.preventDefault();

	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	firebase.auth().createUserWithEmailAndPassword(email, password)
	  .then((userCredential) => {
	    // Signed in 
	    const user = userCredential.user;
	    // ...
	    alert('Thanks for joining!')
	    window.location.replace("members.html");
	  })
	  .catch((error) => {
	    const errorCode = error.code;
	    const errorMessage = error.message;
	     
	    alert(errorMessage);
	  });

}

function signIn(event) {
	event.preventDefault();

	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    
    alert('You are Signed In');
	window.location.replace("members.html");

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage);
  });
}

function bye() {
	event.preventDefault();
	firebase.auth().signOut().then(() => {
		// Sign-out successful.
		alert('Bye!')
	    window.location.replace("/");
	}).catch((error) => {
		// An error happened.
		alert('You were not signed out')
	});
	
}


//alert('added');

const db = firebase.firestore();

// hide content from logged off users
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/v8/firebase.User
    const uid = user.uid;
    document.querySelector('#logged-in').style.display = 'block';
    document.querySelector('#logged-out').style.display = 'none';
    // ...
  } else {
    // User is signed out
    document.querySelector('#logged-out').style.display = 'block';
    document.querySelector('#logged-in').style.display = 'none';

  }
});

function addTask(event) {
	event.preventDefault();
	const task = document.getElementById('task').value;
	const description = document.getElementById('description').value;
	const date = document.getElementById('date').value;

	// Add a new document in collection 
	db.collection("tasks").doc(task).set({
	    task: task,
	    description: description,
	    due: date 

	})
	.then(() => {
	    alert("Document successfully written!");
	    console.log("Document successfully written!");
	    document.getElementById("task-form").reset();
	})
	.catch((error) => {
	    console.error("Error writing document: ", error);
	});

}
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
	    location.reload();
	})
	.catch((error) => {
	    console.error("Error writing document: ", error);
	});

}

//delete task
function deleteDB(a) {
db.collection('tasks').doc(a).delete().then(() => {
    console.log("Document successfully deleted!");
    alert("Document successfully deleted!");
    location.reload();
}).catch((error) => {
    console.error("Error removing document: ", error);
});
}

	db.collection("tasks").get().then((querySnapshot) => {

    querySnapshot.forEach((doc) => {
        //document.getElementById('task-list').innerHTML = (`<h3>${doc.id} </h3><br/><br/> <p>${doc.data().description}</p> <br/><br/> <h4>${doc.data().due}</h4>`);
        console.log(`${doc.id} => ${doc.data().description} => ${doc.data().due}</h3>`);

			const div = document.createElement("div");
			div.innerHTML = `<h4>${doc.id} </h4><p>${doc.data().description}</p><p><strong>Due:</strong> ${doc.data().due}</p><br/>
			<button onclick="deleteDB('${doc.id}')">Delete</button><hr />`;
			document.getElementById('task-list').appendChild(div);

    });
});
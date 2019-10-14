var firebaseConfig = {
   apiKey: "AIzaSyBLTOqhCRppMffGfRicR3mtHRMs0WuF24g",
   authDomain: "crud-b6603.firebaseapp.com",
   databaseURL: "https://crud-b6603.firebaseio.com",
   projectId: "crud-b6603",
   storageBucket: "crud-b6603.appspot.com",
   messagingSenderId: "340249113939",
   appId: "1:340249113939:web:cfc672ace8fdc22e8bdda6",
   measurementId: "G-P3FC2JCW8K"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


 var d = new Date();

 var t = d.getTime();


 var counter = t;

 document.getElementById("form").addEventListener("submit", (e)=>{
   var task = document.getElementById('task').value;
   var description = document.getElementById('description').value;
   e.preventDefault();
   console.log(task + description);
   form.reset();
 });

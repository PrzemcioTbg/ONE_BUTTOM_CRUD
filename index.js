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
 firebase.analytics();



 var d = new Date();

 var t = d.getTime();


 var counter = t;

 document.getElementById("form").addEventListener("submit", (e)=>{
   var task = document.getElementById('task').value;
   e.preventDefault();
   createTask(task);
   form.reset();
 });

 function createTask(taskName){
   console.log(counter);
   counter+=1;
   console.log(counter);
   console.lo
   var task = {
     id : counter,
     task : taskName
   }
   let db = firebase.database().ref("tasks/"+ counter);
   db.set(task);
   document.getElementById("cardSection").innerHTML='';
   readTask();
 }

 function readTask(){
    var task = firebase.database().ref("tasks/");
    task.on("child_added", function(data){
      var taskValue = data.val();
      document.getElementById("cardSection").innerHTML+=`
      <div class = "card mb-3">
        <div class ="card-body">
          <h5 class = "card-title">${taskValue.task}</h5>
          <button type = "submit" style ="color:black" class = "btn btr-warning"
          onclick = "updateTask(${taskValue.id}, '${taskValue.task}')">
          Edit Task</button>
        </div>
      </div>
      `
    });
}

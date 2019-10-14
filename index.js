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
          <button type = "submit" style ="color:white" class = "btn btn-warning"
          onclick = "updateTask(${taskValue.id}, '${taskValue.task}')">
          <i class="far fa-edit"></i> Edit Task</button>
          <button type = "submit" class = "btn btn-danger" onclick="deleteTask(${taskValue.id})"><i class="far fa-trash-alt"></i> Delete Task</button>
        </div>
      </div>
      `
    });
}

function reset(){
  document.getElementById("firstSection").innerHTML=`
  <form class="border p-4 mb-4" id="form">

    <div class="form-group">
      <label>Task</label>
      <input type="text" class="form-control" id="task" placeholder="Enter Task">
    </div>

    <button type="submit" id="button1"  class="btn btn-primary"><i class="far fa-plus-square"></i> ADD TASK</button>
    <button style="display: none" id="button2" class="Btn btn-success"><i class="fas fa-retweet"></i> UPDATE TASK</button>
    <button style="display: none" id="button3" class="Btn btn-danger"><i class="far fa-window-close"></i> CANCEL</button>

  </form>`;

  document.getElementById("form").addEventListener("submit", (e)=>{
    var task = document.getElementById('task').value;
    e.preventDefault();
    createTask(task);
    form.reset();
  });
}

function updateTask(id, name){
  document.getElementById("firstSection").innerHTML=`
  <form class="border p-4 mb-4" id="form2">

    <div class="form-group">
      <label>Task</label>
      <input type="text" class="form-control" id="task" placeholder="Enter Task">
    </div>

    <button style="display: none" id="button1"  class="btn btn-primary"><i class="far fa-plus-square"></i> ADD TASK</button>
    <button type = "submit" style="display: inline-block" id="button2" class="btn btn-success"><i class="fas fa-retweet"></i> UPDATE TASK</button>
    <button style="display: inline-block" id="button3" class="btn btn-danger"><i class="far fa-window-close"></i> CANCEL</button>

  </form>`;

  document.getElementById("form2").addEventListener("submit", (e)=>{
    e.preventDefault();
  });
  document.getElementById("button3").addEventListener("click", (e)=>{
    reset();
  });
  document.getElementById("button2").addEventListener("click", (e)=>{
    updateTask2(id, document.getElementById("task").value);
  });
  document.getElementById("task").value=name;
}

function updateTask2(id, name){
  var taskUpdated = {
    task: name,
    id:id
  }
  let db = firebase.database().ref("tasks/" + id);
  db.set(taskUpdated)

  document.getElementById("cardSection").innerHTML=''
  readTask();
  reset();
}

function deleteTask(id){
  var task = firebase.database().ref("tasks/" +id);
  task.remove();
  reset();
  document.getElementById("cardSection").innerHTML="";
  readTask();
}

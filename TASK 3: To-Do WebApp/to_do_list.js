//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Display Today's Date
function todayDate(){
  var today = new Date();
  var y = today.getFullYear();
  var m = today.getMonth()+1;
  var d = today.getDate();
  var date =d+"-"+m+"-"+y;
  document.getElementById("date").innerText = date; 
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Display Current Time
function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh == 0) { hh = 12; }
  if(hh > 12) { hh = hh - 12; session = "PM"; }
  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;  
  let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Add item to the list
function addLi() {
        var taskInput = document.getElementById("input_box").value;
        //Display an alert message if nothing entered
        if(taskInput=='')
        {
          alert("INVALID INPUT!! Please Enter an Item to the List...");
        }
        //Else add item to the to do list
        else{
               var listNode = document.getElementById('input_list');
               var liNode=document.createElement("li");
               var txtNode=document.createTextNode(taskInput);
               liNode.appendChild(txtNode);
               listNode.appendChild(liNode);              
            
       //Add a close button to each item
       var myNodelist = document.getElementsByTagName("li");
       for (let i = 0; i < myNodelist.length; i++) {
       // first check if class is already added or not otherwise it will append class again and again
                 if(myNodelist[i].querySelector('.close') == null) {
                 var para = document.createElement("span");
                 var txt = document.createTextNode("Remove");
                 para.className = "close";
                 para.appendChild(txt);
                 myNodelist[i].appendChild(para);
               } 
       document.getElementById("input_box").value = "";
       }
   alert("TO-DO-LIST:: Item successfully added to the List!!");       
}
////////////////////////////////////////////////////////////////////////////
//Remove element from the lists using 'Remove' Icon
var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            alert("Item successfully REMOVED from the List!!"); 
          }
        }  
    
////////////////////////////////////////////////////////////////////////////
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
       if (ev.target.tagName === 'LI') {
               ev.target.classList.toggle('checked');
               
//add 'checked' items to the completed list

               var nodeList = document.getElementById('ct_list');
               var nodeLI=document.createElement("li");
               var nodeTXT=document.createTextNode(taskInput);
               nodeLI.appendChild(nodeTXT);
               nodeList.appendChild(nodeLI);       
  }
// add a close button to each item in the completed list
    var myCompletedlist = document.getElementsByTagName("li");
    var check=-1;
    for (let i = 0; i < myCompletedlist.length; i++) {
    // first check if class is already added or not otherwise it will append class again and again
                 if(myCompletedlist[i].querySelector('.close') == null) {
                 var para = document.createElement("span");
                 var txt = document.createTextNode("Remove");
                 para.className = "close";
                 para.appendChild(txt);
                 myCompletedlist[i].appendChild(para);
                 check=1;
      } 
}
//Condition to avoid printing the below alert message multiple times
if(check==1)
{
  alert("COMPLETED-TASKS-LIST:: Item successfully added to the List!!"); 
}

}, false);
}

console.log("welcome");
//if user adds notes add to the local storage
let addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click",addbtn)
function addbtn(e)
{
let addText=document.getElementById("addText");
let notes=localStorage.getItem("notes");
if(notes==null){
    notesobj=[];
}
else{
    notesobj=JSON.parse(notes);
}

//adding the entered text to the notesobj array
notesobj.push(addText.value);

//adding notes to the local storage
localStorage.setItem("notes",JSON.stringify(notesobj));
console.log(notesobj);
shownotes();//function to show the notes when addText button fired
};
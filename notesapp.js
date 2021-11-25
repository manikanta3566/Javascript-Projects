console.log("welcome");
shownotes();
//if user adds notes add to the local storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addbtn)
function addbtn(e) {
    let addText = document.getElementById("addText");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let myobj={
        title:addTitle.value,
        text:addText.value
    }

    //adding the entered text to the notesobj array
    notesobj.push(myobj);

    //adding notes to the local storage
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addText.value = "";
    addTitle.value = "";
    //console.log(notesobj);
    shownotes();//function to show the notes when addText button fired
};


function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        // console.log(element);
        html += `<div class=" notecard my-2 mx-2 card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">
            ${element.text}</p>
        <button id="${index}" class="btn btn-primary" onclick="deletenote(this.id)">Delete</button>
    </div>
    </div>`;
    });
    let notesEle = document.getElementById("notes");
    if (notesobj.length != 0) {
        notesEle.innerHTML = html;
    }
    else {
        notesEle.innerHTML = `nothing to show ! use Add note to add notes`;
    }
}

//functions to delete notes
function deletenote(index) {
    //console.log("deleting",index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
}

//search input functions
let searchtxt = document.getElementById("searchtxt");
searchtxt.addEventListener("input", search);
function search() {
    let inputval = searchtxt.value.toLowerCase();
    //console.log("input fired",inputval);
    let notecard = document.getElementsByClassName("notecard");
    Array.from(notecard).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        console.log(cardtxt);
    })
}


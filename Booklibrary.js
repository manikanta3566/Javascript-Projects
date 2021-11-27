console.log("hello");

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display{
add(book){
    console.log("added");
    let tablebody=document.getElementById("tablebody");
    let string=` <tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
</tr>`;
tablebody.innerHTML+=string;
}
clear(){
   let form= document.getElementById("libraryform")
form.reset();
}
validate(book){
    if(book.name.length>2 && book.author.length>2){
        return true;
    }
    else{
        return false;
    }
}
show(type,message){
    let messg=document.getElementById("message");
    let boldText;
    if(type==="success"){
        boldText="Success";
    }
    else{
        boldText="Error!"
    }
    messg.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>${boldText}:</strong> ${message}
   
</div>`;
setTimeout(() => {
    messg.innerHTML=" ";
},3000);

}
}





let form = document.getElementById("libraryform");
form.addEventListener("submit", libraryformsubmit);

function libraryformsubmit() {
    console.log("submitted");
    let name=document.getElementById("bookname").value;
    let author=document.getElementById("authorname").value;
let type;
let programming=document.getElementById("programming");
let cooking=document.getElementById("cooking");
let fiction=document.getElementById("fiction");
if(programming.checked){
    type=programming.value;
}
else if(cooking.checked){
    type=cooking.value;
}
else if(friction.checked){
    type=friction.value;
}
let book=new Book(name,author,type);
console.log(book);
let display=new Display();


if(display.validate(book)){
    display.add(book);
    display.clear();
    display.show("success","book is added");
}
else{
display.show("danger","sorry you cannot add this book");
}
}
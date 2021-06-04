// JavaScript for Event listener

// 1
// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
//     console.log("So, What now?");
// })

// 2
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLenght(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.addEventListener('click', toggleDone);
    ul.appendChild(li);
    input.value = "";

// Create Delete button

    var delBtn = document.createElement("button");
    var delX = document.createElement('i');

    delX.classList.add('fas', 'fa-times');
    delBtn.classList.add('custBtn');
    delBtn.appendChild(delX);

    delBtn.addEventListener('click', delItem);
    li.append(delBtn);

// Delete Items

    function delItem(){
    li.remove();
    if(inputLenght() == 0)
    {
        var emptyList = document.querySelector('ul');
        emptyList.style.display = "block";
    }
}

// Toggle line on click

    function toggleDone(){
    li.classList.toggle('done');
}
}






function addListAfterClick(){
    if (inputLenght() > 0){
    createListElement();
    createButtonElement();
    }
}

function addListAfterKeypress(event){
    if (inputLenght() > 0 && event.code === 'Enter') {
    createListElement();
    createButtonElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

const button = document.getElementById("button")
const list = document.getElementById("todolist")
const input= document.getElementById("input")

let store=[]

button.onclick=click



function click(){
    store.push(input.value)
    input.value=''
    showtodo()
}
console.log(store);

function showtodo(){
    list.innerHTML=""
    store.forEach((todo,index) => {
        list.innerHTML += 
        "<li>"
            +todo+
            "<a onclick='edithandle("+index+")'>Edit</a>"+
            "<a onclick='deletehandle("+index+")'>&times | </a></li>";
    });
}

function edithandle(index){
    let newValue =prompt("Enter new todo")
    if (newValue.length !=0){
    store.splice(index,1,newValue)
    showtodo()}
}

function deletehandle(index){
    store.splice(index,1)
    showtodo()
}
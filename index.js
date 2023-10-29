var array = [];
var list = document.getElementById("list");
var input = document.getElementById("user-input");
function check(event) {
    if (event.key == "Enter") {
        addElement();
        document.getElementById("user-input").value = "";
    }
}


function addElement() {
    const newElement = input.value;
    // if (newElement && !array.includes(newElement)) {
    //     array.push(newElement);
        let listItem = document.createElement("li");
        // listItem.textContent = newElement;
        // listItem.innerHTML = `    <input type="checkbox" class="m2"> ${ newElement }<img src="/xmark-solid.svg" alt="" width=18px  class="m1" id="cross"> `;
        listItem.innerHTML = `<input type="radio" id="" class="m2"> ${ newElement }<img src="/xmark-solid.svg" alt="" width=18px  class="m1" id="cross"> `;
        list.appendChild(listItem);
        input.value = ""; 
        // listItem.querySelector("img").addEventListener("click",remove);
        listItem.querySelector(".m1").addEventListener("click",remove);
        function remove(){
            listItem.remove();
            //  if(listItem.style.display!='none'){
            //      listItem.style.display='none';
            //  }
            // listItem.remove();
        }
        
        const imgelement=["book.jpg","/alex-lvrs-2zDw14yCYqk-unsplash.jpg"];
        let i=0;
        listItem.querySelector("#circle").addEventListener("click",toggle);
        // listItem.querySelector(".m2").addEventListener("click",toggle);
        function toggle(){
           i=(i+1)% imgelement.length;
           listItem.src=imgelement[i];
        }
        function swapImage() {
            // Get a reference to the image element
          
            // Check the current image source
            if (listItem.src=='book.jpg') {
              // If the current image is 'image1.jpg', change it to 'image2.jpg'
              listItem.src = '/alex-lvrs-2zDw14yCYqk-unsplash.jpg';
            } else {
              // Otherwise, change it back to 'image1.jpg'
              listItem.src = 'book.jpg';
            }
          }
          
}
// function getinput() {
// let userinput = document.getElementById("user-input").value;

// console.log(userinput);
// todo.push(userinput);
// var arrayDisplay = document.getElementById("output");
// var previousElements = {}; // To keep track of previous elements
// todo.forEach(function (item) {
//     if (!previousElements[item]) {
//         var newElement = document.createElement("div");
//         newElement.textContent = item;
//         arrayDisplay.appendChild(newElement);
//         previousElements[item] = true;
//     }
// });
// // console.log(userinput);
// // console.log(todo.length);
// // console.log("i"+i);
// // document.getElementById("output").textContent=todo[i];
// // while(i<todo.length){
// //     console.log(i+todo[i]);

// //     // output.textContent=todo.join("\n");
// i++;
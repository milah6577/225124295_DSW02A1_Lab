document.addEventListener("DOMContentLoaded", function () {
    let addBtn = document.getElementById("add");
    let removeBtn = document.getElementById("remove");
    let input = document.getElementById("item");
    let list = document.getElementById("list");
    let removedItemsDiv = document.getElementById('removed-items');
    let removeCountDiv = document.getElementById('remove-count');

    let removeCount = 0;
    let removedItems = [];

    function alternatingColours(){
        let list = document.getElementById("list");
        let items = document.getElementById("items");

        for(let i = 0; i< items.length; i++){
            if(i%2 === 0){
                items[i].className = "white";
            }
            else{
                items[i].className = "yellow"
            }

        }
    }
    addBtn.addEventListener("click",function()){
let text = itemsinput.value;
     }

   removeBtn.addEventListener("click", function()){
let 
   }
})
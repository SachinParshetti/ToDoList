
document.addEventListener("DOMContentLoaded",function(){
    

        function Add() {
           let input = document.getElementById("input").value;
            let date = new Date;
            let hours = date.getHours();
            let ampm;
            ampm = (hours >= 12) ? 'PM' : 'AM';
            hours = hours % 12 || 12;
            hours = hours.toString().padStart(2, "0");
            let minutes = date.getMinutes().toString().padStart(2, '0');
            if (input.trim()) {
              let li = document.createElement("li");
              li.className =
                "d-flex justify-content-between border-bottom border-bottom-2 p-2 my-2 overflow-auto";
              li.style.width = '90%'
              li.innerHTML = `${input} (${date.toDateString()} "${hours}:${minutes}${ampm}") <span><button class="btn btn-close btn-sm mx-2" onclick="this.parentElement.parentElement.remove();"></button></span>`;
              document.querySelector("ol").appendChild(li);
              document.getElementById("input").value = "";
            } else {
              alert("Please enter a value");
            }
            
          }
    
    document.getElementById("btn-add").addEventListener("click",function(){
        Add();
    });
    document.getElementById("input").addEventListener("keydown",function(e){
        if (e.key === 'Enter') 
         Add();

      
       
           
    });

   
});
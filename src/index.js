document.addEventListener("DOMContentLoaded", () => {
    //event listerner on form listeninf for an event and trigger and action(event handler)
    document.querySelector("form").addEventListener("submit", (e) =>{
     //prevents page from loading every single time
      e.preventDefault();
      //read value from testBox by targeting it specifically and take the value
      const valueFromInput = e.target.new_task_description.value;
      //get the list id
      const ulList = document.getElementById("tasks")
    
  //appends a paragraph to a list
      const newParagraphForEachToDo =  ulList.appendChild(document.createElement("p"));
  
      //appends the input from the user to the paragraph 
      newParagraphForEachToDo.append(valueFromInput)
    })

});

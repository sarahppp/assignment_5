// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function(){

   let form = document.getElementById("launchForm"); 
   form.addEventListener("submit", function(event){

      let pilotName = document.querySelector("input[name=pilotName]"); 
      let copilotName = document.querySelector("input[name=copilotName").value; 
      let fuelLevel = document.querySelector("input[name=fuelLevel").value; 
      let cargoMass = document.querySelector("input[name=cargoMass").value; 
      fuelLevel = Number(fuelLevel); 
      cargoMass = Number(cargoMass); 

      if (pilotName.value === "" || copilotName === "" || fuelLevel === "" || cargoMass === ""){
         alert("All fields are required"); 
         event.preventDefault(); 
    };

      let updatedHtml = `
      <div  id="faultyItems">
                <ol>
                    <li id="pilotStatus">${pilotName.value} Ready</li>
                    <li id="copilotStatus">${copilotName} Ready</li>
                    <li id="fuelStatus">Fuel level high enough for launch</li>
                    <li id="cargoStatus">Cargo mass low enough for launch</li>
                </ol>
            </div>
      `  
      let faultyItems = document.getElementById("faultyItems"); 
      faultyItems.innerHTML = updatedHtml; 
     
      
      if (fuelLevel < 10000 || cargoMass > 10000){
         faultyItems.style.visibility = "visible";
 

      }

   });  
}); 

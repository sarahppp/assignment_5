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
    // if (pilotName.includes(nonletters)){
      //    alert("That is not an appropriate name for a pilot.")
      //    event.preventDefault(); 
      // }; '`', '~', '!', '@', "#", '$', '%', '^', '7', '*', "(", ')', '-', "_", '+', '=']; 
      // let integers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
   
async function fetchTarget () {
   try{   
      let response = await fetch('https://handlers.education.launchcode.org/static/planets.json'); 
      let json = await response.json();

      let missionTarget = document.getElementById("missionTarget"); 
      let index = Math.floor(Math.random()*json.length);  
      missionTarget.innerHTML = `
               <h2>Mission Destination</h2>
          <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
           </ol>
          <img src="${json[index].image}">`
   } catch(err){ 
         console.log(err); 
   }
};

// function onlyAlphabet(input) {
//    let letters = /^[a-zA-Z]+$/; 
//    if(input.match(letters)){
//       return true
//    }; 
// }; 

window.addEventListener("load", function(){
   fetchTarget(); 

   let form = document.getElementById("launchForm"); 

   form.addEventListener("submit", function(event){


      let pilotName = document.querySelector("input[name=pilotName]").value; 
      let copilotName = document.querySelector("input[name=copilotName").value; 
      let fuelLevel = document.querySelector("input[name=fuelLevel").value; 
      let cargoMass = document.querySelector("input[name=cargoMass").value; 
      let launchStatus = document.getElementById("launchStatus"); 
      fuelLevel = Number(fuelLevel); 
      cargoMass = Number(cargoMass); 
      let pilotNames = [pilotName, copilotName]; 
      let letters = /^[a-zA-Z]+$/;
      let numbers = /^[0-9]+$/; 
      
      let updatedHtml = `
         <ol>
             <li id="pilotStatus">Pilot ${pilotName} Ready</li>
             <li id="copilotStatus">Co-pilot ${copilotName} Ready</li>
             <li id="fuelStatus">Fuel level high enough for launch</li>
             <li id="cargoStatus">Cargo mass low enough for launch</li>
         </ol>
         `  
      let faultyItems = document.getElementById("faultyItems"); 
      faultyItems.innerHTML = updatedHtml;
     
      if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === ""){
         alert("All fields are required"); 
         launchStatus.innerText = "Awaiting Information Before Launch"; 
         faultyItems.style.visibility = "hidden"; 
         event.preventDefault(); 
       } else if (pilotName.match(numbers)){        
          alert("That name is not recognized");
          launchStatus.innerText = "Awaiting Information Before Launch"; 
          event.preventDefault(); 
       } else if (copilotName.match(numbers)){        
         alert("That name is not recognized");
         launchStatus.innerText = "Awaiting Information Before Launch"; 
         event.preventDefault(); 
      }  else if (fuelLevel < 10000){
         faultyItems.style.visibility = "visible";
         let fuelStatus = document.querySelector("#fuelStatus"); 
         fuelStatus.innerText = 'There\'s not enough fuel for the journey';
         launchStatus.innerText = "Shuttle not ready for launch";   
         launchStatus.style = "color: red";
         event.preventDefault(); 
      } else if(cargoMass > 10000){
         faultyItems.style.visibility = "visible"; 
         let cargoStatus = document.querySelector('#cargoStatus'); 
         cargoStatus.innerText = `There's too much in the cargo hold.`
         launchStatus.innerText = "Shuttle not ready for launch";   
         launchStatus.style = "color: red";
         event.preventDefault(); 
      } else {
         launchStatus.style = "color: green"; 
         launchStatus.innerText = "Shuttle is ready for launch"; 
         faultyItems.style.visibility = "visible"; 
         event.preventDefault();  
      }; 
   });  
}); 

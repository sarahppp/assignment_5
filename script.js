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
      let nonletters = ['`', '~', '!', '@', "#", '$', '%', '^', '7', '*', "(", ')', '-', "_", '+', '=']; 

      if (pilotName.value === "" || copilotName === "" || fuelLevel === "" || cargoMass === ""){
         alert("All fields are required"); 
         event.preventDefault(); 
    };
      // if (pilotName.includes(nonletters)){
      //    alert("That is not an appropriate name for a pilot.")
      //    event.preventDefault(); 
      // }; 
      let updatedHtml = `
                <ol>
                    <li id="pilotStatus">Pilot ${pilotName} Ready</li>
                    <li id="copilotStatus">Co-pilot ${copilotName} Ready</li>
                    <li id="fuelStatus">Fuel level high enough for launch</li>
                    <li id="cargoStatus">Cargo mass low enough for launch</li>
                </ol>
            </div>
      `  
      let faultyItems = document.getElementById("faultyItems"); 
      faultyItems.innerHTML = updatedHtml;
      event.preventDefault();  
     
      
      if (fuelLevel < 10000){
         faultyItems.style.visibility = "visible";
         let fuelStatus = document.querySelector("#fuelStatus"); 
         fuelStatus.innerText = 'There\'s not enough fuel for the journey';
         launchStatus.innerText = "Shuttle not ready for launch";   
         launchStatus.style = "color: red";
      } 
      

      if(cargoMass > 10000){
         faultyItems.style.visibility = "visible"; 
         let cargoStatus = document.querySelector('#cargoStatus'); 
         cargoStatus.innerText = `There's too much in the cargo hold.`
         launchStatus.innerText = "Shuttle not ready for launch";   
         launchStatus.style = "color: red";
      } else {
         launchStatus.style = "color: green"; 
         launchStatus.innerText = "Shuttle is ready for launch"; 
      };

   });  
}); 

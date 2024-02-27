    


function generateName(inputtedNames){
  let noCopies = inputtedNames[Math.floor(Math.random() * 10)];
  while(noCopies == document.getElementById("randomName").innerText){
    noCopies = inputtedNames[Math.floor(Math.random() * 10)];
  }
  document.getElementById("randomName").innerText = noCopies;
}







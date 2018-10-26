var rover = {
 roverDirection: "N", ejeX: 2, ejeY: 2
}


function turnLeft(){
  console.log(rover)
  if(rover.roverDirection === "N") return rover.roverDirection = "W"
  
  if(rover.roverDirection === "E") return rover.roverDirection = "N"
  
  if(rover.roverDirection === "S") return rover.roverDirection = "E"
  
  if(rover.roverDirection === "W") return rover.roverDirection = "S"
  
  console.log("turnLeft was called!");
}

function turnRight(){
  console.log(rover)
  if(rover.roverDirection === "N") return rover.roverDirection = "E"
  
  if(rover.roverDirection === "E") return rover.roverDirection = "S"
  if(rover.roverDirection === "S") return rover.roverDirection = "W"
  
  if(rover.roverDirection === "W") return rover.roverDirection = "N"
  
  console.log("turnRight was called!", rover);
}

function moveForward(direction){
  switch(direction){
  case 'N':
  console.log("The actual position is: "+ rover.ejeX +","+ rover.ejeY);
    rover.ejeY = rover.ejeY -1
  console.log("The final position is: "+ rover.ejeX+ ","+ rover.ejeY);
    //return rover.ejeY
  if (rover.ejeY === 0) console.log("You can't move anymore to North")
    break;
  case 'E':
  console.log("The actual position is: "+ rover.ejeX +","+ rover.ejeY);
    rover.ejeX = rover.ejeX +1
  console.log("The final position is: "+ rover.ejeX+ ","+ rover.ejeY);
  if (rover.ejeX === 10) console.log("You can't move anymore to East")
    //return rover.ejeY
    break;
  case 'S':
  console.log("The actual position is: "+ rover.ejeX +","+ rover.ejeY);
    rover.ejeY = rover.ejeY +1
  console.log("The final position is: "+ rover.ejeX+ ","+ rover.ejeY);
  if (rover.ejeY === 10) console.log("You can't move anymore to South")
  //return rover.ejeY
    break;
  case 'W':
  console.log("The actual position is: "+ rover.ejeX +","+ rover.ejeY);
    rover.ejeX = rover.ejeX -1
  console.log("The final position is: "+ rover.ejeX+ ","+ rover.ejeY);
  if (rover.ejeX === 0) console.log("You can't move anymore to West")
  //return rover.ejeY
    break;
  
console.log("moveForward was called");
}
}

function iteracion4(commands){
  //var cadenaComandos = ['r', 'f', 'f', 'r', 'f', 'f', 'l', 'f', 'r', 'f', 'f']
  var cadenaComandos = ['r', 'f', 'l']
    for (var i=0; i < cadenaComandos.length; i++){
      console.log(cadenaComandos[i]);
      if (cadenaComandos[i]==='r') turnRight(); console.log("New direction is: "+rover.roverDirection)
      //console.log("The actual direction is: "+rover.roverDirection)
        
      if (cadenaComandos[i]==='l') turnLeft(); console.log("New direction is: "+rover.roverDirection)
        
      if (cadenaComandos[i]==='f') moveForward()
        console.log("The actual direction is: "+rover.roverDirection)
        console.log("The new location of Rover is: ("+rover.ejeX+","+rover.ejeY+")")
    }
}
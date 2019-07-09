
// Mars Rover default props

var marsRover = {
  direction: "N",
  x: 0,
  y: 0,
  logBook: []
};



//section 2 - Turning the Mars Rover

// Turning the Mars Rover Left
function turnLeft(marsRover){
  switch(marsRover.direction) {
    case "N":
      marsRover.direction = "W";
      break;
  
    case "W":
    marsRover.direction = "S";
      break;
  
    case "S":
      marsRover.direction = "E";
      break;
  
    case "E":
      marsRover.direction = "N";
    break;  
  
  }  
  console.log("turnLeft was called! Mars Rovers direction is: " + marsRover.direction)
  }


  // Turning the Mars Rover Right

function turnRight(marsRover){
  switch(marsRover.direction) {
    case "N":
      marsRover.direction = "E";
      break;
  
    case "E":
      marsRover.direction = "S";
      break;
  
    case "S":
      marsRover.direction = "W";
      break;
  
    case "W":
      marsRover.direction = "N";
      break;  
  
  }
  
  console.log("turnRight was called! Mars Rovers direction is: " + marsRover.direction)
  }

//section 3 - Moving the Mars Rover
// Moving the Mars Rover Forward

function moveForward(marsRover) {
  switch(marsRover.direction) {
    case "N":
      marsRover.y-=1; 
      break;
      
    case "E":
    marsRover.x+=1; 
      break;
  
    case "S":
    marsRover.y+=1;
      break;
  
    case "W":
    marsRover.x-=1; 
      break;  

}

console.log("moveForward was called! Mars Rovers position is: " + marsRover.x + "," + marsRover.y)
}

//section 4 - Commands
// Commands for Mars Rover

var commands = ["r","f","r","f","f","f","f","f","l","f","f"]

for (var i = 0; i <= commands.length; i++) 
    {
    switch(commands[i]) {
    case "f":
      moveForward(marsRover);
    marsRover.logBook.push(marsRover.x + marsRover.y);
    break;
  
    case "r":
      turnRight(marsRover);
    break;
  
    case "l":
      turnLeft(marsRover);
    break; 
  }

console.log(marsRover.logBook);

}
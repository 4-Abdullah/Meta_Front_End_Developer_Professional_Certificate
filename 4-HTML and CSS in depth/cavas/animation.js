let canvas = document.getElementById("my_canvas");
let context = canvas.getContext("2d");

const speed = 4;
let position = 0;
let moveSpeed = speed;
let radius = 40;

function moveBall(){
    // canvas.onclick = function(event) {
        // const clickX = event.clientX;
        // const clickY = event.clientY;
        // alert("You clicked the button!");
        // if(position + radius > 640){
            if(position + radius > 640){
               
            moveSpeed = -speed;
        }else if(position - radius <0){
            moveSpeed = speed;
        }
        position += moveSpeed;
    //   }
    
}

function drawBall(){
    context.clearRect(0, 0, 640, 480);

    context.fillStyle = "#62687f"
    context.beginPath()
    context.arc(position, 50, radius, 0, 2 * Math.PI);
    context.fill();
}


function animate(){
    
    moveBall()
    drawBall()
    window.requestAnimationFrame(animate)
}

window.requestAnimationFrame(animate);
// Get DOM elements
// const tank = document.getElementById('my_canvas');
// const gameBoard = canvas.getContext("2d");

// // Set tank position and movement speed
// let tankX = 0;
// let tankY = 0;
// const tankSpeed = 5;

// // Store projectiles
// const projectiles= [];

// // Function to move the tank
// function moveTank(direction){
//   if (direction === 'left') {
//     tankX -= tankSpeed;
//   } else if (direction === 'right') {
//     tankX += tankSpeed;
//   } else if (direction === 'up') {
//     tankY -= tankSpeed;
//   } else if (direction === 'down') {
//     tankY += tankSpeed;
//   }

//   // Prevent tank from moving outside the game board
//   if (tankX < 0) {
//     tankX = 0;
//   } else if (tankX + tank.offsetWidth > gameBoard.offsetWidth) {
//     tankX = gameBoard.offsetWidth - tank.offsetWidth;
//   }
  
//   if (tankY < 0) {
//     tankY = 0;
//   } else if (tankY + tank.offsetHeight > gameBoard.offsetHeight) {
//     tankY = gameBoard.offsetHeight - tank.offsetHeight;
//   }

//   // Update tank position
//   tank.style.left = `${tankX}px`;
//   tank.style.top = `${tankY}px`;
// }

// // Function to shoot a projectile
// function shootProjectile() {
//   const projectile = document.createElement('div');
//   projectile.className = 'projectile';
//   projectile.style.bottom = `${tank.offsetHeight}px`;
//   projectile.style.left = `${tankX + tank.offsetWidth / 2 - 5}px`;
//   gameBoard.appendChild(projectile);

//   // Add the projectile to the list
//   projectiles.push(projectile);
// }

// // Function to move the projectiles
// function moveProjectiles() {
//   projectiles.forEach((projectile) => {
//     const top = parseInt(projectile.style.bottom);
//     if (top >= gameBoard.offsetHeight) {
//       // Remove projectile from the DOM and the list
//       projectile.remove();
//       projectiles.splice(projectiles.indexOf(projectile), 1);
//     } else {
//       // Move the projectile up
//       projectile.style.bottom = `${top + 5}px`;
//     }
//   });
// }

// // Keyboard event listener for tank movement and shooting
// document.addEventListener('keydown', function (event) {
//   if (event.code === 'ArrowLeft') {
//     moveTank('left');
//   } else if (event.code === 'ArrowRight') {
//     moveTank('right');
//   } else if (event.code === 'ArrowUp') {
//     moveTank('up');
//   } else if (event.code === 'ArrowDown') {
//     moveTank('down');
//   } else if (event.code === 'Space') {
//     shootProjectile();
//   }
// });

// // Game loop
// function gameLoop() {
//   moveProjectiles();
//   requestAnimationFrame(gameLoop);
// }

// // Start the game loop
// gameLoop();
// function drawBall(){
//         context.clearRect(0, 0, 640, 480);
    
//         context.fillStyle = "#62687f"
//         context.beginPath()
//         context.arc(position, 50, radius, 0, 2 * Math.PI);
//         context.fill();
//     }
    
    
//     function animate(){
        
//         moveBall()
//         drawBall()
//         window.requestAnimationFrame(animate)
//     }
    
//     window.requestAnimationFrame(animate);
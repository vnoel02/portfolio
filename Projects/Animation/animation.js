var canvas = document.getElementById("animation");
var c = canvas.getContext("2d");


// lightning animation

var frameWidth = 400; 
var frameHeight = 400; 
var totalFrames = 4; 
var currentFrame = 0; 
var frameRate = 500; 

//  Define the animation loop function
function animate() {
   // Clear the canvas
   c.clearRect(0, 0, canvas.width, canvas.height);
   
  //  // Draw the current frame of the sprite sheet
   var img = new Image();
   img.onload = function() {
       drawAnim(img, 20,170)
       drawAnim(img, 300,100)

       drawAnim(img, 500, 170)
       drawAnim(img, 700, 90)


       drawAnim(img, 900, 170)
   };

   img.src = "tile" + currentFrame.toString().padStart(3, '0') + ".png"; // Path to your tile.png files
   
   
   
   // Move to the next frame
   currentFrame = (currentFrame + 1) % totalFrames;

   // Request the next frame of animation
   setTimeout(animate, frameRate);
}

function drawAnim(img, x, y) {
  c.drawImage(img, x, y, frameWidth, frameHeight);

}

animate()
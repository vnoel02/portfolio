var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");


// back hill
c.beginPath();
c.moveTo(0, 400);
// 450 450 1200 700
// c.quadraticCurveTo(canvas.clientWidth / 2, canvas.clientHeight - hillHeight, canvas.clientWidth, canvas.clientHeight);
c.quadraticCurveTo(200, -50, 700, canvas.clientHeight);
c.lineTo(0,700)
c.fillStyle = 'darkgreen'; // Greenish color for the hill
c.fill();

// back hill #2
c.beginPath();
c.moveTo(600, 700);
// 450 450 1200 700
// c.quadraticCurveTo(canvas.clientWidth / 2, canvas.clientHeight - hillHeight, canvas.clientWidth, canvas.clientHeight);
c.quadraticCurveTo(900, -50, canvas.clientWidth, 400);
c.lineTo(1200, 700);
c.fillStyle = 'darkgreen'; // Greenish color for the hill
c.fill();


// main hill
var hillHeight = 750;
var hillWidth = canvas.clientWidth;

c.beginPath();
c.moveTo(305, canvas.clientHeight);
// 450 450 1200 700
// c.quadraticCurveTo(canvas.clientWidth / 2, canvas.clientHeight - hillHeight, canvas.clientWidth, canvas.clientHeight);
c.quadraticCurveTo(650, -50, 1000, canvas.clientHeight);
c.fillStyle = '#8CC84B';
c.fill();



// clouds
const drawGrayCloud = (x, y) => {
    c.beginPath();
    c.arc(x, y, 60, Math.PI * 0.5, Math.PI * 1.5);
    c.arc(x + 70, y - 60, 70, Math.PI * 1, Math.PI * 1.85);
    c.arc(x + 152, y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
    c.arc(x + 200, y, 60, Math.PI * 1.5, Math.PI * 0.5);
    c.moveTo(x + 200, y + 60);
    c.lineTo(x, y + 60);
    c.fillStyle = 'gray';
    c.fill()
}

const drawDarkCloud = (x, y) => {
    c.beginPath();
    c.arc(x, y, 60, Math.PI * 0.5, Math.PI * 1.5);
    c.arc(x + 70, y - 60, 70, Math.PI * 1, Math.PI * 1.85);
    c.arc(x + 152, y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
    c.arc(x + 200, y, 60, Math.PI * 1.5, Math.PI * 0.5);
    c.moveTo(x + 200, y + 60);
    c.lineTo(x, y + 60);
    c.fillStyle = 'darkgray';
    c.fill()
}



let startX = 50;
let startY = 100;
let startX2 = 200;
let startY2 = 150;
for (let i=0; i<4; i++) {
    drawGrayCloud(startX,startY);
    drawDarkCloud(startX2,startY2);
    startX += 350;
    startX2 += 350;
}

// lightning

// const drawLightning = (x, y) => {
//     c.beginPath();
//     c.lineWidth = 5;
//     c.moveTo(x, y);
//     c.lineTo(x - 50, y + 50);
//     c.lineTo(x, y + 50);
//     c.lineTo(x - 50, y + 100);
//     c.lineTo(x + 10, y + 100);
//     c.lineTo(x - 50, y + 250);
//     c.moveTo(x - 5, y + 150);
//     c.lineTo(x + 50, y + 150);
//     c.lineTo(x, y + 350);
//     c.strokeStyle = "yellow";
//     c.stroke();
// }

// drawLightning(100, 150);
// drawLightning(800, 150);
// drawLightning(1000, 150);


// house
c.beginPath();
c.moveTo(650, 350);
c.lineTo(550, 400);
c.lineTo(750, 400);
c.fillStyle="red";
c.fill();

c.beginPath();
c.rect(550, 400, 200, 100);
c.fillStyle = "beige"
c.fill();

c.beginPath();
c.rect(575, 420, 40, 40);
c.fillStyle = "lightblue";
c.fill();

c.beginPath();
c.rect(680, 420, 40, 40);
c.fillStyle = "lightblue";
c.fill();

c.beginPath();
c.rect(632, 440, 30, 60);
c.fillStyle = "brown"
c.fill();

c.beginPath();
c.moveTo(75, 50)
c.arc(640, 470, 5, 0, Math.PI * 2, true)
c.fillStyle = '#FFD700'; 
c.fill();


//rain
const rain = (x, y) => {
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x-20, y+50);
    c.lineWidth = 1;
    c.strokeStyle = "blue";
    c.stroke();
    c.fill();
}

for (let j = 0; j < 200; j++) {
    let rainX = (canvas.width / 30) * j;
    let rainY = Math.random() * canvas.height; 
    rain(rainX, rainY);
}


//Caption
c.font = '40px arial';
c.fillStyle = "#FFFFFF";
c.fillText("On a rainy day...", 10, 50);




// background
c.globalCompositeOperation = 'destination-over'
c.fillStyle = "darkblue";
c.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
c.fillRect(25, 25, 100, 100);


// Variables for Sun Position and Background Color
let sunX = 100; // Initial x-position of the sun
let sunY = 100; // Initial y-position of the sun
let bgColorTop, bgColorBottom; // Variables for gradient background color

// Variables for Environmental Factors
let treeHeight = 50; // Initial tree height, simulating deforestation
let smokeOpacity = 150; // Initial opacity for pollution smoke effect
let deforestationSpeed = 0.1; // Speed at which trees "shrink" (deforestation)
let pollutionSpeed = 0.2; // Speed of smoke opacity change, representing pollution

// Variables for Icebergs and Water Level
let icebergSize1 = 100; // Initial size of first iceberg
let icebergSize2 = 80; // Initial size of second iceberg
let icebergMeltingSpeed = 0.2; // Speed at which icebergs melt
let waterLevel = 500; // Initial water level, represents rising sea levels
let waterIncreaseRate = 0.03; // Rate at which water level rises

function setup() {
    createCanvas(800, 600); // Sets up the canvas size for the animation
    bgColorTop = color(135, 206, 250); // Initial color for the top part of the sky
    bgColorBottom = color(255, 153, 51); // Initial color for the bottom part of the sky
}

function draw() {
    drawSky(); // Draws the sky with a gradient that changes over time
    animateSun(); // Moves the sun across the sky to simulate day/night
    drawWater(); // Draws the water below the icebergs, rising gradually
    drawIcebergs(); // Draws and shrinks the icebergs to represent melting
    drawTrees(); // Draws the trees, which shrink over time due to deforestation
    drawPollution(); // Draws smoke to simulate pollution levels increasing
}

// Function to draw the sky gradient
function drawSky() {
    // Adjusts sky colors over time to simulate day progression and environmental change
    for (let i = 0; i < height; i++) {
        let inter = map(i, 0, height, 0, 1);
        let c = lerpColor(bgColorTop, bgColorBottom, inter);
        stroke(c);
        line(0, i, width, i);
    }
}

// Function to animate the sun's movement
function animateSun() {
    sunX += 0.5; // Moves the sun horizontally across the screen
    if (sunX > width) sunX = 0; // Resets the sun's position when it goes off-screen
    fill(255, 204, 0);
    ellipse(sunX, sunY, 50, 50); // Draws the sun as a yellow circle
}

// Function to draw rising water levels
function drawWater() {
    waterLevel -= waterIncreaseRate; // Gradually decreases y-coordinate to simulate rising water
    fill(0, 0, 255);
    rect(0, waterLevel, width, height - waterLevel); // Draws the water as a blue rectangle
}

// Function to draw and melt icebergs
function drawIcebergs() {
    icebergSize1 -= icebergMeltingSpeed; // Reduces size of iceberg 1 to simulate melting
    icebergSize2 -= icebergMeltingSpeed; // Reduces size of iceberg 2
    fill(200);
    ellipse(200, waterLevel - icebergSize1 / 2, icebergSize1, icebergSize1); // Draws iceberg 1
    ellipse(600, waterLevel - icebergSize2 / 2, icebergSize2, icebergSize2); // Draws iceberg 2
}

// Function to draw shrinking trees
function drawTrees() {
    treeHeight -= deforestationSpeed; // Decreases tree height to represent deforestation
    fill(34, 139, 34);
    rect(100, height - treeHeight, 20, treeHeight); // Draws a green rectangle for the tree
    rect(700, height - treeHeight, 20, treeHeight); // Draws a second tree
}

// Function to draw pollution smoke
function drawPollution() {
    smokeOpacity += pollutionSpeed; // Increases opacity over time to simulate pollution buildup
    fill(105, 105, 105, smokeOpacity);
    ellipse(400, 100, 80, 80); // Draws smoke as a grey circle
}


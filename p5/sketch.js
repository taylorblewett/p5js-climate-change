let sunX = 100;
let sunY = 100;
let bgColorTop, bgColorBottom;
let treeHeight = 50;
let smokeOpacity = 150;
let deforestationSpeed = 0.1;
let pollutionSpeed = 0.2;
let icebergSize1 = 100;  // Iceberg 1 size
let icebergSize2 = 80;   // Iceberg 2 size
let icebergMeltingSpeed = 0.2;  // Slower melting speed
let waterLevel = 500;  // Initial water level
let waterIncreaseRate = 0.03;  // Slower water increase rate

function setup() {
  createCanvas(800, 600);
  bgColorTop = color(135, 206, 250);  // Initial sky blue color
  bgColorBottom = color(255, 153, 51);  // Initial bottom orange color
}

function draw() {
  drawSky();  // Sky gradually turning red, but slower
  animateSun();
  drawWater();  // Draw the water below the icebergs
  drawIcebergs();  // Slower melting icebergs
  animateDeforestation();  // Only 3 trees now
  animatePollution();  // Smoke growing larger, more gradually
}

function drawSky() {
  // Map total iceberg size to sky color transition, slower transition
  let totalIcebergSize = icebergSize1 + icebergSize2;
  let tempFactor = map(totalIcebergSize, 180, 0, 0, 1);  // 180 is the sum of initial iceberg sizes
  let currentTopColor = lerpColor(bgColorTop, color(255, 0, 0), tempFactor * 0.5);  // Slower color transition
  let currentBottomColor = lerpColor(bgColorBottom, color(255, 0, 0), tempFactor * 0.5);  // Slow ground transition too
  
  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(currentTopColor, currentBottomColor, inter);
    stroke(c);
    line(0, i, width, i);
  }
}

function animateSun() {
  fill(255, 204, 0);
  noStroke();
  ellipse(sunX, sunY, 100, 100);
  sunX += 1;
  if (sunX > width) {
    sunX = 100;
  }
}

function drawWater() {
  fill(0, 119, 190);  // Blue color for water
  noStroke();
  rect(0, waterLevel, width, height - waterLevel);  // Water rectangle at the bottom

  // Increase the water level as icebergs melt
  if (icebergSize1 > 0 || icebergSize2 > 0) {
    waterLevel = min(waterLevel + waterIncreaseRate, height);  // Gradually increase water level
  }
}

function drawIcebergs() {
  fill(240);  // Color for icebergs

  if (icebergSize1 > 0) {
    // Iceberg 1 (moved further left)
    triangle(100, 400, 200, 500, 100 - icebergSize1, 500);
  }

  if (icebergSize2 > 0) {
    // Iceberg 2 (moved further left)
    triangle(250, 450, 350, 550, 250 - icebergSize2, 550);
  }

  // Slower melting icebergs
  icebergSize1 = max(icebergSize1 - icebergMeltingSpeed, 0);
  icebergSize2 = max(icebergSize2 - icebergMeltingSpeed, 0);
}

function animateDeforestation() {
  // Tree 1
  if (treeHeight > 0) {
    fill(34, 139, 34);
    triangle(350, 450, 320, 550, 380, 550);  // Tree leaves
    fill(139, 69, 19);
    rect(340, 550, 20, treeHeight);  // Tree trunk
  }
  
  // Tree 2
  if (treeHeight > 0) {
    fill(34, 139, 34);
    triangle(450, 450, 420, 550, 480, 550);  // Tree leaves
    fill(139, 69, 19);
    rect(440, 550, 20, treeHeight);  // Tree trunk
  }

  // Tree 3
  if (treeHeight > 0) {
    fill(34, 139, 34);
    triangle(550, 450, 520, 550, 580, 550);  // Tree leaves
    fill(139, 69, 19);
    rect(540, 550, 20, treeHeight);  // Tree trunk
  }

  treeHeight = max(treeHeight - deforestationSpeed, 0);  // Gradually shrink all trees
}

function animatePollution() {
  let totalIcebergSize = icebergSize1 + icebergSize2;
  let tempFactor = map(totalIcebergSize, 180, 0, 0, 1);  // Same factor for sky and smoke size

  fill(150);
  rect(650, 400, 100, 200);
  fill(100);
  ellipse(700, 380, 40, 100);

  smokeOpacity = min(smokeOpacity + pollutionSpeed, 255);
  
  // Smoke grows even larger, gradually
  fill(120, 120, 120, smokeOpacity);
  ellipse(700, 300, 80 + tempFactor * 200, 40 + tempFactor * 100);  // Smoke puff 1 grows larger
  ellipse(720, 260, 100 + tempFactor * 200, 60 + tempFactor * 100);  // Smoke puff 2 grows
  ellipse(740, 220, 120 + tempFactor * 200, 80 + tempFactor * 100);  // Smoke puff 3 grows
}

function keyPressed() {
  if (key === '1') {
    deforestationSpeed = 0.2;
    pollutionSpeed = 0.4;
    icebergMeltingSpeed = 0.5;  // Increase melting speed with key press
  } else if (key === '2') {
    deforestationSpeed = 0.05;
    pollutionSpeed = 0.1;
    icebergMeltingSpeed = 0.1;  // Slow down melting speed
  } else if (key === '3') {
    deforestationSpeed = 0.1;
    pollutionSpeed = 0.2;
    icebergMeltingSpeed = 0.2;  // Default slower melting speed
  }
}

# p5js-climate-change

## Project Overview
This project is an interactive climate change visualisation built using the p5.js library, aimed at raising awareness about the progressive impact of climate change on our environment. The visualisation illustrates several key environmental factors affected by climate change, such as the melting of icebergs, rising sea levels, shrinking forest coverage, and increasing pollution. Through this simulation, users can observe the long-term effects of global warming on natural ecosystems over time, offering an engaging and impactful way to comprehend the urgency of climate action.

## Features
Animated Sun and Sky: The sun animates across the sky from sunrise to sunset, cycling through day and night. Over time, the sky color changes from bright blue to a duller, more polluted air, representing the degradation of air quality and the gradual warming of the atmosphere due to greenhouse gas emissions.

Melting Icebergs: The icebergs in the water are programmed to shrink gradually, simulating the melting of polar ice caps. This shrinking effect demonstrates the impact of rising global temperatures on polar regions and serves as a visual cue for glacial melting and its repercussions on sea levels.

Pollution and Deforestation: Dark smoke particles are released into the air to signify pollution from industrial activities and fossil fuel combustion. Meanwhile, the tree height gradually decreases over time, illustrating the impact of deforestation and land use changes. Together, these elements visually represent the dual challenges of air pollution and forest depletion, which exacerbate climate change and biodiversity loss.

## File Structure
The project is organised into three main files:

index.html: This is the HTML file that serves as the backbone of the webpage. It includes links to the p5.js library, as well as to style.css and sketch.js, allowing the browser to render the visualisation correctly.

style.css: This CSS file provides minimal styling for the HTML elements on the page, ensuring a clean and centered layout that allows users to focus on the visualisation.

sketch.js: This JavaScript file contains all of the p5.js code used to create the climate change visualisation. Within sketch.js, various functions are defined to control the behaviors of the sun, sky, icebergs, water, pollution, and trees, ensuring each element of the scene responds dynamically to simulated environmental changes.

## Code Architecture
The main p5.js functions and the core logic of the visualisation are structured as follows:

setup(): The setup() function initialises the canvas, sets up the starting colors for the sky and water, and defines the initial sizes of the environmental elements like icebergs and trees.

draw(): This is the main loop function that runs continuously, updating the scene at each frame. Within draw(), individual functions are called to manage each aspect of the environment (sun, sky, water, icebergs, smoke, and trees), ensuring a seamless and synchronised animation.

Supporting Functions:

drawSky(): Alters the sky colour over time, gradually transitioning from a clear blue to a hazy, polluted shade to reflect atmospheric warming and pollution.
animateSun(): Moves the sun across the canvas, modulating its position and size to signify different times of day and environmental states.
drawIcebergs(): Gradually reduces the size of the icebergs over time, representing melting due to increasing temperatures.
drawSmoke(): Generates smoke particles that rise and dissipate, symbolising air pollution.
drawTrees(): Decreases tree height, representing the effects of deforestation.

## How to Run
To view the climate change visualisation on your local machine, follow these steps:

Clone this repository to your local machine by running the following command in your terminal:

## Copy code
git clone https://github.com/taylorblewett/p5js-climate-change.git
Navigate into the project folder:

## Copy code
cd p5js-climate-change
Open the index.html file in your web browser to start the visualisation. You can open this file directly by double clicking or dragging it into a browser window.

## Requirements
This project is built using p5.js, a JavaScript library designed for creative coding. The library is linked from a Content Delivery Network (CDN) in index.html, so you do not need to install any additional dependencies. Simply opening the HTML file in a browser will allow the visualisation to run as intended.

## Future Improvements
If given more time, the project could be expanded with interactive elements such as user controls to adjust pollution levels and tree growth. I would have incorporated water level rising and better timing of objects disappearring gradually. Additionally, real-time data feeds on climate indicators could be integrated using APIs to make the visualisation more dynamic and reflective of current global conditions.

## License
This project is open source and licensed under the MIT License, allowing free use, modification, and distribution. 

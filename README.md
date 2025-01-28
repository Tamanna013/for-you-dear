# For You, Dear 🌸🌻
![Project Screenshot](./screenshot.png)

A heartfelt project that combines creativity, interactive design, and sentimental elements. This repository is a gift website, designed with love, featuring draggable notes and personalized messages paired with images.

Table of Contents<br>
-- Overview<br>
-- Features<br>
-- File Structure<br>
-- Detailed Explanation of Files<br>
-- Steps to Run Locally<br>
-- Technologies Used<br>
-- Credits<br>

## Overview

"For You, Dear" is a fun, interactive project showcasing draggable paper cards that reveal heartfelt messages and images. It's designed to offer a personalized and interactive experience for someone special. This project leverages HTML, CSS, and JavaScript to create a smooth, visually appealing interface.

## Features
-- Draggable Notes: Users can drag and rearrange the notes freely.<br>
-- Custom Fonts: Unique fonts for a handwritten, personalized look.<br>
-- Hover Effects: Subtle hover animations for a polished touch.<br>
-- Responsive Design: Optimized for desktop and mobile devices.<br>
-- Interactive Messages: Each note contains meaningful text and paired images to convey emotions.<br>

## File Structure
Root Directory:<br>
-- index.html: The main HTML file containing the structure of the webpage.<br>
-- styles.css: The CSS file responsible for styling the webpage, including fonts, colors, and layout.<br>
-- script.js: The JavaScript file adding interactivity, such as drag-and-drop functionality and animations.<br>
-- Rest are just images used in the project.<br>

## Detailed Explanation of Files

### 1. index.html<br>
This is the primary file that defines the structure of the webpage. Key elements include:<br>
<u>Head Section: </u><br>
Imports Google Fonts (Caveat, Oswald, and Playfair Display). Links the styles.css file for styling. Includes a title, "For you dear 🌸🌻".<br>
<u>Body Section: </u><br>
Contains multiple `<div class="paper image">` elements, each representing a draggable paper card. Each card has a `<p>` tag for the text message. An `<img>` tag to display an associated image.<br>

### 2. styles.css<br>
This file defines the visual appearance of the website. Key sections include:<br>
A. <u>General Styling: </u><br>
body styled with a black background and a centered layout. Background images and hover effects are implemented for a polished look.<br>
B. <u>Paper Cards: </u><br>
`.paper` class styles each note with a shadow, padding, and rotation for an organic, handwritten feel. `.paper:hover` enhances the shadow for an interactive hover effect.<br>
C. <u>Fonts and Colors:</u><br>
Custom fonts (Caveat for a handwritten look, Playfair Display for elegance). Text colors and shadows for a vivid and readable design.<br>

### 3. script.js<br>
This file handles the functionality of draggable notes. It:<br>
-- Implements mouse and touch event listeners.<br>
-- Tracks drag-and-drop movement for each paper card.<br>
-- Updates the z-index dynamically to ensure the dragged note appears on top.<br>

Key logic includes:<br>
-- handleMove: Calculates the position and rotation of each card during a drag.<br>
-- init: Adds event listeners to make each card draggable and rotatable.<br>

<u>How It Works: </u>The webpage loads with several draggable cards. Each card has a unique message and image. Users can click and drag cards around the screen, rearranging them as desired. Subtle hover effects enhance the user experience.<br>

## Steps to Run Locally

Clone the repository: git clone https://github.com/Tamanna013/for-you-dear.git <br>
Navigate to the project directory: cd for-you-dear <br>
Open index.html in your browser to view the project. <br>

## Technologies Used

-- HTML5: For structure.<br>
-- CSS3: For styling and animations.<br>
-- JavaScript: For interactivity.<br>

## Credits
Created with love by Tamanna (Tamanna013) 🌸💜<br>
Reference: 


## Website Performance Optimization portfolio project

### How to Run
1. Open Indext.html in your browser.

2. Go to https://github.com/excelandaccess/mobile-portfolio-master.git to view or download

### Minify resource
Used http://www.minifier.org/ to minify css and js files

###Items updated
1. Index.html
  * Inlined style.css since referenced just once
  * Move Google analytics to bottom and added async for rendering
  * Added media="jprint" for print.css
  * referenced css, js files to minified version 
  * Inlined font-face

2. js\__perfmatters.js__ - minified

3. css\__print.css__ - minified

4. views\__pizza.html__
  * referenced css, jpg, png files to minified version
  * added viewpoint meta tag

5. views\__main.js__
  * changed # pizza iterations from 200 to 50
  * updated function __updatePositions__
    - changed querySelectorAll to getElementsByClassName
    - added transform

6. __project-2048.html__, __project-mobile.html__, __project-webperf.html__
  * Inlined style.css since referenced just once
  * Move Google analytics to bottom and added async for rendering
  * Added media="jprint" for print.css
  * referenced css, js files to minified version 
  * minified pics

7. views\images\
  * minified picture files

8. views\css\
  * minified files
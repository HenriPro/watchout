/* 
Init() place the dots
New location generation
Transform dots position;


Make it so that the enemies move to a new random location every second.

Make a differently-colored dot to represent the player. Make it draggable.
Detect when a enemy touches you.
Keep track of the user's score, and display it.
*/

// create a user dot
// create motion &&
// track the dots && the user
// figure out collisions
// time for score
// high score 

// Permanent
  const width = 900;
  const height = 800;
  const $highScore = document.getElementsByClassName("highscore");
  const $currScore = document.getElementsByClassName("current");
  const $collisionCount = document.getElementsByClassName("collisions");

  const svgContainer = d3.select(".board")
                          .append("svg")
                          .attr("width", width)
                          .attr("height", height)
                          .style("fill", "blue");

  const randomLocationGen = function(numOfLocations) {
    let locations = [];
    for (let i = 0; i < numOfLocations; i++) {
      let obj = {};
      obj.x = Math.floor(Math.random() * width);
      obj.y = Math.floor(Math.random() * height);
      locations.push(obj);
    }
    return locations;
  };

  // INIT Conditions
  let enemyCount = 10;
  let score = 0;
  let playing = true;

  let ticker = setInterval( function() {
    score++;
    moveEnemy();
  }, 2000);


  while (!playing) {
    clearInterval(ticker);
  }





  var enemies = randomLocationGen(enemyCount);


   //Draw the Circle
  var enemyDots = svgContainer.selectAll("circle")
                        .data(enemies)
                        .enter()
                        .append("circle")
                        .attr("class", "enemy")
                        .attr("cx", function(d) { return d.x; })
                        .attr("cy", function(d) { return d.y; })
                        .attr("r", 10);


var moveEnemy = function() {
  // svgContainer.selectAll("enemy")
  //                 .transition()
  //                 .duration(1000)
  //                 .ease("linear")
  //                 .attr("cx", function(d) { return d.x; })
  //                 .attr("cy", function(d) { return d.y; });
  enemyDots.transition()
    .duration(1000)
    .style("fill", "red")
    .ease("linear")
    .attr("cx", function(d) { return Math.floor(Math.random() * width); })
    .attr("cy", function(d) { return Math.floor(Math.random() * height); });

};






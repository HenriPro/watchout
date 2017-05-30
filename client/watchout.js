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
                          .attr("height", height);

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


  var drag = d3.behavior.drag()
                //.on("dragstart", function() { circle.style("fill", "red"); })
                .on("drag", function() {
                                         playerDot.attr("cx", d3.event.x)
                                               .attr("cy", d3.event.y); 
                                        });
                //.on("dragend")

  var playerDot = svgContainer.selectAll("player")
                              .data([{ x : (width / 2), y : (height /2), r : 10}])
                              .enter()
                              .append("svg:circle")
                              .attr("class", "class")
                              .attr("class", "player")
                              .attr("cx", function(d) { return d.x; })
                              .attr("cy", function(d) { return d.y; })
                              .attr("r", function(d) { return d.r; })
                              .call(drag)
                              .style("fill", "orange");



   //Draw the Circle
  var enemyDots = svgContainer.selectAll("circle")
                        .data(randomLocationGen(enemyCount))
                        .enter()
                        .append("circle")
                        .attr("class", "enemy")
                        .attr("cx", function(d) { return d.x; })
                        .attr("cy", function(d) { return d.y; })
                        .attr("r", 10)
                        .style("fill", "blue");


  var moveEnemy = function() {
    enemyDots.transition()
      .duration(1000)
      .ease("linear")
      .attr("cx", function(d) { return Math.floor(Math.random() * width); })
      .attr("cy", function(d) { return Math.floor(Math.random() * height); });

  };






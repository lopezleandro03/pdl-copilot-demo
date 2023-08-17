// Set up the canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// Set up the snake
let snake = [{ x: 10, y: 10 }];
let dx = 10;
let dy = 0;

// Set up the food
let food = { x: 0, y: 0 };
spawnFood();

// Set up the game loop
let score = 0;
setInterval(gameLoop, 100);

function gameLoop() {
  // Move the snake
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);

  // Check for collision with food
  if (head.x === food.x && head.y === food.y) {
    spawnFood();
    score += 10;
    document.getElementById("score").textContent = "Score: " + score;
  } else {
    snake.pop();
  }

  // Check for collision with walls
  if (head.x < 0 || head.x >= canvasWidth || head.y < 0 || head.y >= canvasHeight) {
    gameOver();
    return;
  }

  // Check for collision with self
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      gameOver();
      return;
    }
  }

  // Draw the game
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.fillStyle = "green";
  snake.forEach((segment) => {
    ctx.fillRect(segment.x, segment.y, 10, 10);
  });
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, 10, 10);
}

function spawnFood() {
  food.x = Math.floor(Math.random() * canvasWidth / 10) * 10;
  food.y = Math.floor(Math.random() * canvasHeight / 10) * 10;
}

function gameOver() {
  alert("Game over!");
  location.reload();
}

// Set up keyboard controls
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      dx = -10;
      dy = 0;
      break;
    case "ArrowRight":
      dx = 10;
      dy = 0;
      break;
    case "ArrowUp":
      dx = 0;
      dy = -10;
      break;
    case "ArrowDown":
      dx = 0;
      dy = 10;
      break;
  }
});
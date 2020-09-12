if (!localStorage.getItem('SnakeScore')) {
    localStorage.setItem('SnakeScore', 0)
}
let highscore = localStorage.getItem('SnakeScore')
document.getElementById("highscore").textContent = 'Highscore: ' + highscore
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const scale = 10
const rows = canvas.height / scale
const columns = canvas.width / scale
var isPaused = false
var firstPaused = true
var snake
var interval


function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

function setup(difficulty = 75, bricksNumber = 50) {
    snake = new Snake()
    fruit = new Fruit()
    brick = new Brick()
    brick.count = bricksNumber
    brick.positionArr = new Array(bricksNumber).fill([0, 0])
    brick.changePoitions()
    fruit.pickLocation(brick, snake)
    interval = window.setInterval(() => {
        if (isPaused || firstPaused) { return }
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        fruit.draw()
        brick.draw()
        snake.update()
        snake.draw()
        snake.checkEat(fruit, brick)
        snake.checkCollision()
        snake.checkBrickCollision(brick)
        document.querySelector('#score')
            .innerText = 'Score: ' + snake.total
    }, difficulty)
}

var easy = document.getElementById('easy')
var medium = document.getElementById('medium')
var hard = document.getElementById('hard')

function startGame(difficulty, bricksNumber) {
    firstPaused = false
    document.getElementById("game-heading-div").style.display = 'none'
    document.getElementById("score").style.marginBottom = '0rem'
    let highscore = localStorage.getItem('SnakeScore')
    document.getElementById("highscore").textContent = 'Highscore: ' + highscore
    setup(difficulty, bricksNumber)
}


window.addEventListener('keydown', ((evt) => {
    if (firstPaused) { return }
    if ((evt.key.indexOf('Arrow') != -1 || evt.key == ' ') && isInViewport(canvas)) {
        evt.preventDefault()
    }
    const direction = evt.key.replace('Arrow', '')
    isPaused = false
    if (!snake) { return }
    snake.changeDirection(direction)
    if (direction === ' ') {
        document.getElementById("game-heading-div").style.display = 'block'
        document.getElementById("score").style.marginBottom = '-11rem'
        isPaused = !isPaused
    }
}))

function restart() {
    document.getElementById("game-heading-div").style.display = 'block'
    document.getElementById("score").style.marginBottom = '-11rem'
    let highscore = localStorage.getItem('SnakeScore')
    document.getElementById("highscore").textContent = 'Highscore: ' + highscore
    firstPaused = true
    clearTimeout(interval)
}
    

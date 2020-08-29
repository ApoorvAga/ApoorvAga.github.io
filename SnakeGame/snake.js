function Snake() {
    this.x = 200
    this.y = 200
    this.xVel = scale
    this.yVel = 0
    this.total = 0
    this.tail = []

    this.update = function() {
        for (let i = 0; i < this.tail.length-1; i++) {
            this.tail[i] = this.tail[i+1]
        }
        this.tail[this.total - 1] = { x: this.x, y: this.y }
        this.x += this.xVel
        this.y += this.yVel

        if (this.x >= columns*scale) {
            this.x = 0
        }
        if (this.y >= rows * scale) {
            this.y = 0
        }
        if (this.x < 0) {
            this.x = (columns-1) * scale
        }
        if (this.y < 0) {
            this.y = (rows-1) * scale
        }
    }

    this.draw = function() {
        ctx.fillStyle = '#fff'
        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale)
        }
        ctx.fillRect(this.x, this.y, scale, scale)
    }

    this.changeDirection = function(direction) {
        switch (direction) {
            case 'Up':
                if (this.yVel === scale) { break }
                this.xVel = 0
                this.yVel = -scale
                break
            case 'Down':
                if (this.yVel === -scale) { break }
                this.xVel = 0
                this.yVel = scale
                break
            case 'Left':
                if (this.xVel === scale) { break }
                this.xVel = -scale
                this.yVel = 0
                break
            case 'Right':
                if (this.xVel === -scale) { break }
                this.xVel = scale
                this.yVel = 0
                break
        }
    }

    this.checkEat = function(fruit, brick) {
        if (this.x === fruit.x && this.y === fruit.y) {
            fruit.pickLocation(brick, this)
            this.total++
            let score = localStorage.getItem('SnakeScore')
            if (this.total > score) {
                localStorage.setItem('SnakeScore', this.total)
            }
        }
    }

    this.checkCollision = function() {
        for (let i = 0; i < this.tail.length; i++) {
            if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                restart()
            }
        }
    }

    this.checkBrickCollision = function(brick) {
        var vm = this
        brick.positionArr.forEach((position) => {
            if (vm.x == position[0] && vm.y == position[1]) {
                restart()
            }
        })
    }
}
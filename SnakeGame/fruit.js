function Fruit() {
    this.x
    this.y

    this.pickLocation = function (brick, snake) {
        var vm = this

        vm.x = (Math.floor(Math.random() *
            columns - 1) + 1) * scale
        vm.y = (Math.floor(Math.random() *
            rows - 1) + 1) * scale

        brick.positionArr.forEach((position) => {
            if (vm.x == position[0] && vm.y == position[1]) {
                vm.pickLocation(brick, snake)
            }
        })

        snake.tail.forEach((position) => {
            if (vm.x == position.x && vm.y == position.y) {
                vm.pickLocation(brick, snake)
            }
        })
    }

    this.draw = function () {
        ctx.fillStyle = "#4cafab"
        ctx.fillRect(this.x, this.y, scale, scale)
    }
}
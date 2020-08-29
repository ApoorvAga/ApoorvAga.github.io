function Brick() {
    this.count = 50
    this.positionArr = new Array(this.count).fill([0, 0])

    this.changePoitions = function() {
        for (let i = 0; i < this.positionArr.length; i++) {
            let x = (Math.floor(Math.random() *
                columns - 1) + 1) * scale
            let y = (Math.floor(Math.random() *
                rows - 1) + 1) * scale
            
            this.positionArr[i] = [x, y]
        }
    }

    this.draw = function () {
        this.positionArr.forEach((position) => {
            ctx.fillStyle = "#eb5b34"
            ctx.fillRect(position[0], position[1], scale, scale)
        })
    }
}
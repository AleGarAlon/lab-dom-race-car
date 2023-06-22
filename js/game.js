class Game {
    constructor(){
        this.startScreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById("game-end")
        this.height = 600
        this.width = 500
        this.player = new Player(this.gameScreen)

        this.obstacles = []
        this.animateId

    }


    start() {
        this.gameScreen.style.width = `${this.width}px`
        this.gameScreen.style.height = `${this.height}px`
    
        this.startScreen.style.display = 'none'
        this.gameScreen.style.display = 'block'
    
        this.gameLoop()
      }
    
      gameLoop() {
        this.update()
        if (this.animateId % 144 === 0) {
            this.obstacles.push(new Obstacle(this.gameScreen))
          }
      
        
        this.animateId = requestAnimationFrame(() => this.gameLoop())
        
      }
    
      update() {
        this.player.move()
        const obstaclesToKeep = []
        this.obstacles.forEach(obstacle => {
      obstacle.move()
        
        })
    }
}


class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })
    }
    update(state){
        database.ref("/").update({gameState:state})
    }
    start(){
        if (gameState === 0){
            player=new Player()
            player.getCount()
            form = new Form()
            form.display()

        
        }
    }

play(){
    form.hide()
    textSize(40)
    text("gameStart",150,100)
    Player.getPlayerInfo()
    var displayPosition = 130
    for(var plr in allPlayers){
        console.log(plr)
        console.log(allPlayers[plr].name)
        console.log(displayPosition)
displayPosition+=50
textSize(30)
text(allPlayers[plr].name + ":"+ allPlayers[plr].distance, 200,displayPosition)
    }
}



}
class Form{
constructor (){
this.input = createInput("Name")
this.button = createButton("Play")
this.greeting= createElement("H3")
}
display(){
   
   this.input.position(200,160)
    this.button.position(250,200)
this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
     player.name =this.input.value()
    playerCount = playerCount+1
    player.index=playerCount
    player.update()
    player.updateCount(playerCount)
    this.greeting.html("hello "+ player.name)
    this.greeting.position(250,160)

})

}
hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
}


}
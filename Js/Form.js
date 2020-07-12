class Form{
    constructor(){
      this.input= createInput("Name")
      this.button= createButton("Start")
      this.restart= createButton("restart")
      this.greeting= createElement('h2')
    }
    hide(){
this.greeting.hide();
this.button.hide();

this.input.hide();
    }
    display(){
      var Title=createElement('h1')  
      Title.html("Need for Speed")
      Title.position(displayWidth/2,50)
      this.input.position(displayWidth/2,displayHeight/2);
      this.restart.position(displayWidth/7,100);
      this.button.position(displayWidth/2+50,displayHeight/2+30)
      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
           player.name= this.input.value();
          Playercount+=1;
          player.index=Playercount;
          player.Update();
          player.Updatecount(Playercount);
        
         this.greeting.html("Hello"+player.name)
         this.greeting.position(displayWidth/2,displayHeight/2);
         
      })
      this.restart.mousePressed(()=>{
        game.Update(0);
       player.Updatecount(0);
      })
    }
}
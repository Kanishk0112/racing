class Player{
    constructor(){
this.name=null;
this.distance=0;
this.index=null;

    }
    getcount(){
        var countref=database.ref('Playercount')
        countref.on('value',function (data){
            Playercount=data.val();

        })

    }
    Updatecount(count){
        database.ref('/').update({
            Playercount:count
        })
        }
        
        Update(){
            var playerindex="Players/Player"+ this.index    
        database.ref(playerindex).set({
            name:this.name,distance:this.distance
        })
        

        }    
        static playerinfo(){
            var inforef=database.ref("Players");
            inforef.on("value",(data)=>{
                playerinfo= data.val();
            });

        }
    }

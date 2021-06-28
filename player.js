class PLAYER{
    constructor(){
    
    }
    getCount(){
        database.ref("playerCount").on("value",function(data){
        playerCount=data.val();
        });
        }
        updateCount(count){
        database.ref("/").update({playerCount:count});
        }
        
}
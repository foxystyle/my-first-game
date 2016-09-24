Event = {}


Event.Time = {}

Event.Time.currentTime = 0;

Event.Time.pass = function(){
  setInterval(()=>{
    Event.Time.currentTime++;
  }, 100)
}


Event.Danger = {}

Event.Danger.spawn = function(){

  setInterval(()=>{
    var NPC = function(){
      this.image = null;
      this.x = null;
      this.y = 0;
    }
    var npc = new NPC;

    npc.x = Action.random(0, 15);

    var canvas = document.getElementById('canvas');
    var id = new Date().getTime();

    var dangerElement = '<div id="'+id+'" style="left: '+npc.x * 50+'px" class="danger"></div>';

    canvas.innerHTML += dangerElement;


    var refreshId = setInterval(()=>{
      npc.y++;

      var element = document.getElementById(id);
      element.style.top = npc.y * 50 + "px";

      if (npc.x === Character.x && npc.y === Character.y) {

        Character.x = -100;
        var body = document.querySelector('body');
        body.innerHTML += `
          <div class="cover">

            <div class="center">
              <form>
                <h1>Game over</h1>

                <h2>Score: ${Event.Time.currentTime}<h2>

                <input class="btn" type="submit" value="Retry">
              </form>
            </div>

          </div>
        `;

        console.log('CHAR: '+Character.x+', '+Character.y+' - NPC: '+npc.x+', '+npc.y);
      }

      if (npc.y > 11) {
        npc = null;
        canvas.removeChild(element);
        clearInterval(refreshId);
      }
    }, 100)


  }, 300);//setInterval


}//spawn

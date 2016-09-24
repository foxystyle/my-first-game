window.onload = function(){

  Stage.define(1)
       .then(Field.init)
       .then(Field.build)
       .then(Character.init)
       .then(Event.Time.pass)
       .then(Event.Danger.spawn)

}

document.onkeydown = function(e){

  Controller.detectKey(e.key)
            .then(Controller.triggerAction)

}

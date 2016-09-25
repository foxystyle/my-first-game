var Movement = {}

Movement.up = function(){
  if (Character.y === 1 || Character.y === 0) return;
  Character.y -= 1;
  var character = Character.element();
  var top = character.style.top;
      top = (+top.slice(0, -2))-50;
      console.log(top);
      top = top + "px";
  character.style.top = top;
}

Movement.down = function(){
  if (Character.y === 11) return;
  Character.y += 1;
  var character = Character.element();
  var top = character.style.top;
      top = (+top.slice(0, -2))+50;
      top = top + "px";
  character.style.top = top;
}

Movement.left = function(){
  if (Character.x === 0) return;
  Character.x -= 1;
  var character = Character.element();
  var left = character.style.left;
      left = (+left.slice(0, -2))-50;
      left = left + "px";
  character.style.left = left;
}

Movement.right = function(){
  if (Character.x === 15) return;
  Character.x += 1;
  var character = Character.element();
  var left = character.style.left;
      left = (+left.slice(0, -2))+50;
      left = left + "px";
  character.style.left = left;
}

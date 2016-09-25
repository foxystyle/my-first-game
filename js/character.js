var Character = {}

Character.x = 5;
Character.y = 7;

Character.element = function(){
  return document.getElementById('char');
}

Character.init = function(){

  canvas = document.getElementById('canvas');

  var x = 5,
      y = 7;

  var matchingPosition = document.querySelectorAll(
    'div[data-x="'+x+'"][data-y="'+y+'"]'
  );

  canvas.innerHTML += '<div id="char" style="top: 350px; left: 250px"></div>';

  Character.element();

}

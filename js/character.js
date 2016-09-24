var Character = {}

Character.x = 0;
Character.y = 0;

Character.element = function(){
  return document.getElementById('char');
}

Character.init = function(){

  canvas = document.getElementById('canvas');

  var x = 0,
      y = 0;

  var matchingPosition = document.querySelectorAll(
    'div[data-x="'+x+'"][data-y="'+y+'"]'
  );

  canvas.innerHTML += '<div id="char"></div>';

  Character.element();

}

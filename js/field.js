var Field = {}

Field.init = function(resolved){
  return new Promise((resolve,reject)=>{

      var canvas = {
        element : document.getElementById('canvas'), // 800 x 600 ~ 16 x 12
        width : document.getElementById('canvas').clientWidth, // 800  ~ 16
        height : document.getElementById('canvas').clientHeight // 600 ~ 12
      }

      var grid = {
        element : '<div class="grid"></div>' // 50
      }


      grid.element = function(x,y){
        return '<div class="grid" data-x="'+x+'" data-y="'+y+'">'+x+', '+y+'</div>'
      }

      var toAppend = (canvas.width / 50) * (canvas.height / 50);

      var xBuffer = -1;
      var yCounter = -1,
          yBuffer = 0;

      for (var i = 0; i < toAppend; i++) {
        yCounter++;
        xBuffer++;
        if (yCounter / 16 === 1) {
          yBuffer++;
          yCounter = 0;
        }
        if (xBuffer / 16 === 1) {
          xBuffer = 0;
        }
        //canvas.element.innerHTML += grid.element(xBuffer,yBuffer);
      }//for

      var toResolve = {}
      resolve(toResolve);

  });//promise
}//init


Field.build = (resolved) => {
  return new Promise((resolve, reject)=>{
    var toResolve = {};
    resolve(toResolve);
  });
}

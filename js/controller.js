var Controller = {}

Controller.detectKey = (e)=>{
  return new Promise((resolve, reject)=>{
    resolve(e);
  });
}//detectKey

Controller.triggerAction = (key)=>{
  console.log(Character);
  switch (key) {
    case 'ArrowUp':
      Movement.up()
      break;
    case 'ArrowDown':
      Movement.down();
      break;
    case 'ArrowLeft':
      Movement.left();
      break;
    case 'ArrowRight':
      Movement.right();
      break;
    default:

  }
}//triggerAction

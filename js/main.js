
function drawEyes(ctx) {
  let edgeColor = "#000000"
  leftEye = new Eye(100, 100, 80, 50,  Math.PI * .5, 0, Math.PI * 2, edgeColor); 
  leftEye.draw(ctx); 
  rightEye = new Eye(300, 100, 80, 50,  Math.PI * .5, 0, Math.PI * 2, edgeColor); 
  rightEye.draw(ctx); 
}
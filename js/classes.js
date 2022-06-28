class Eye {
  constructor(x, y, radiusX, radiusY, rotation, startAngle, endAngle, edgeColor) {
    this.x = x
    this.y = y;
    this.radiusX = radiusX;
    this.radiusY = radiusY;
    this.rotation = rotation;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.edgeColor = edgeColor;
    this.eyeBallX = 0;
    this.eyeBallY = 0;


  }


  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.edgeColor;
    ctx.ellipse(this.x, this.y, this.radiusX, this.radiusY, this.rotation, this.startAngle, this.endAngle)
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();

    this.internalEllipse = ctx.ellipse(this.x, this.y, this.radiusX - this.radiusX * 0.2, this.radiusY - this.radiusY * 0.2, this.rotation, this.startAngle, this.endAngle)
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    this.eyeBall = ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

  }

  followMouse() {

    setInterval(moveEyeBall(), 20)


  }

  function moveEyeBall()
  {
    
  }
}
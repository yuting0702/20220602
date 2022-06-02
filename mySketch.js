function setup() 
{
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() 
{
	background(0)
	noFill()
	
	for(var x=0;x<width;x=x+50)
	  	{	
	for(var y=0;y<height;y=y+50)
			{	 
  var a = map(mouseX,0,width,0,50);
				
	stroke("#00f5d4")
	rectMode(CENTER);
	rect(x+50,y,30+a)
				
	stroke("#ba181b")
	ellipse(x+50,y,30+a)
				
  stroke("#ffea00")  //背景三角形（不動）
	triangle(x+50, y, x, y+100, x+100, y+100)
}
}
}
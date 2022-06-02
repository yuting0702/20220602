var colors = "064789-427aa1-ebf2fa-679436-a5be00".split("-").map(a=>"#"+a)
class Ball{
	constructor(args){ //預設值(工廠)
		this.r=args.r || 100
		// this.p={x:random(width),y:random(height)}
		this.p=args.p || {x:width/2,y:height/2}
		this.v=this.v || {x:random(-2,2),y:random(-2,2)}
		this.a = args.a || {x:0,y:0}
		this.color = random(colors)
		this.mode = random(["happy","bad"])
		this.rid = random(10000)
	}
	draw(){
		
		push()
			translate(this.p.x, this.p.y)
			fill(this.color)
			noStroke()
			ellipse( 0,0, this.r);
		if(this.mode=="bad"){
			fill(255)
			arc(0,0,this.r/2,this.r/2,0,PI)
		fill(0)
			arc(0,0,this.r/3,this.r/3,0,PI)
		}
		else
		{
			fill(255)
			ellipse(0,0,this.r/2,this.r/2)
		fill(0)
			ellipse(0,0,this.r/3,this.r/3)
		}
			stroke(this.color)
			strokeWeight(4)
			
		noFill()
		for(var j=0;j<8;j++){
			beginShape()
				rotate(PI/4)
				for(var i=0;i<30;i+=5){
					vertex(this.r/2+i*2,sin(i/5+frameCount/10+this.rid)*10) 
				}
			endShape()
		}
		
		pop()
		}
	update(){
		this.p.x=this.p.x+this.v.x
		this.p.y+=this.v.y
		this.v.x+=this.a.x
		this.v.y+=this.a.y
		// ball.p.x=ball.p.x+ball.v.x
		// ball.p.y+=ball.v.y
		if(this.mode=="happy"){
			this.p.y+=sin(frameCount/(10+this.rid/100))*5
		}
		if(this.mode=="crazy"){			
			this.v.x+=random(-5,5)
			this.v.y+=random(-5,5)
		}
		this.v.x*=0.99
		this.v.y*=0.99
		if(this.p.y>height){
			this.v.y=-abs(this.v.y)
		}
	}
	escape(){
		this.v.x=random(-10,10)
	}
	setHappy(){
		this.mode="happy"
	}
	isBallInRange(){
		let d=dist(mouseX,mouseY,this.p.x,this.p.y)
		if(d<this.r){
			return true
		}else{
			return false
		}
	}
	setMode(mode){
		this.mode=mode
	}
}
var ball
var balls=[]
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for(var i=0;i<50;i++){
		ball = new Ball({
			r: random(100),
			p:{x:random(width),y:random(height)}
		})
		balls.push(ball)
	}
}

function draw() {
	background(0);
	for(let ball of balls){
		// let ball = balls[i];
		ball.draw()
		ball.update()
		if(ball.isBallInRange())
		{
			// ball.color="#41f25e"
			ball.setMode("crazy")
		}
		
// 		fill(ball.color)
// 		circle(ball.p.x, ball.p.y , ball.r);
		
// 		ball.p.x=ball.p.x+ball.v.x
// 		ball.p.y+=ball.v.y
	}
}

function mousePressed(){
	ball = new Ball({
			r: random(100),
			p:{x:mouseX,y:mouseY}
		})
		balls.push(ball)
	for(let ball of balls){
		ball.setHappy() //把所有ball都改為happy模式，眼睛都會變圓圈
		ball.escape()
	}
}

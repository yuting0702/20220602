var colors = "ff0000-ff8700-ffd300-deff0a-a1ff0a-0aff99-0aefff-147df5-580aff-be0aff".split("-").map(a=>"#"+a)
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
blendMode(SCREEN);
	fill(colors[int(frameCount/3)%colors.length]);
	ellipse(random(0,width),random(0,height),random(20,100));
}
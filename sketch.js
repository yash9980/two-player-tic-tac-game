let map = [[0,0,0],[0,0,0],[0,0,0]]
let w;

function setup() {
  createCanvas(400, 400);
w = width / 3;
for(let i = 0; i < 3; i++) for(let j = 0; j < 3; j++) rect(i*w , j*w, w, w);
}

let turn = -1;
let isWinner = false;
function mousePressed() {
if(isWinner) return;
turn *= -1;
if(map[int(mouseX / w)][int(mouseY / w)] == 0) {
map[int(mouseX / w)][int(mouseY / w)] = turn;
  
if(turn == 1) fill(color(255,0,0));
if(turn == -1) fill(color(0,0,255));
rect(int(mouseX / w) * w, int(mouseY / w) * w,w,w);
}else turn *= -1;
  let potentialWinner = checkForWinner();
if(potentialWinner != 0) {
isWinner = true;
textSize(32);
  fill(200);
if(potentialWinner == 1) text("Winner is red" , width/2 -w/2, height/2);
else text("Winner is blue" , width/2 -w/2, height/2);
 }
}

function checkForWinner() {
for(let i = 0; i < 3; i++) {
let player = map[i][0];
let found = true;
if(map[i][1] != player || map[i][2] != player) found = false;
  if(found) return player;
}
  for(let i = 0; i < 3; i++) {
let player = map[0][i];
let found = true;
if(map[1][i] != player || map[2][i] != player) found = false;
if(found) return player;
  }
let player = map[0][0];
let found = true;
if(map[1][1] != player || map[2][2] != player) found = false;
if(found) return player;
  player = map[2][0];
found = true;
if(map[1][1] != player || map[0][2] != player) found = false;
if(found) return player;
return 0;
}
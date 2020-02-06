function setup() {
  createCanvas(690, 500);
}

function draw() {
  background(0);
  stroke(255);
  
  // the quick brown fox jumps over the lazy dog
  
  printT(20, 20);
  printH(80, 20);
  printE(150, 20);
  
  printQ(240, 20);
  printU(290, 20);
  printI(360, 20);
  printC(400, 20);
  printK(460, 20);
  
  printB(20, 140);
  printR(80, 140);
  printO(140, 140);
  printW(200, 140);
  printN(280, 140);
  
  printF(370, 140);
  printO(430, 140);
  printX(490, 140);
  
  printJ(20, 260);
  printU(80, 260);
  printM(150, 260);
  printP(230, 260);
  printS(290, 260);
  
  printO(360, 260);
  printV(420, 260);
  printE(500, 260);
  printR(560, 260);
  
  printT(20, 380);
  printH(80, 380);
  printE(150, 380);
  
  printL(240, 380);
  printA(300, 380);
  printZ(370, 380);
  printY(420, 380);
  
  printD(510, 380);
  printO(570, 380);
  printG(630, 380);
}

function printA(x, y) {
  line(x, y, x+50, y);
  line(x+10, y, x+10, y+100);
  line(x+20, y, x+20, y+100);
  line(x+50, y, x+50, y+100);
  line(x+20, y+50, x+50, y+50);
  line(x, y+100, x+30, y+100);
  line(x+40, y+100, x+60, y+100);    
}
  
function printB(x, y) {  
  line(x, y, x+40, y);
  line(x+10, y, x+10, y+100);
  line(x+20, y, x+20, y+100);
  line(x+40, y, x+40, y+40);
  line(x+20, y+40, x+50, y+40);
  line(x+50, y+40, x+50, y+100);
  line(x, y+100, x+50, y+100); 
}
  
function printC(x, y) {
  line(x, y, x+50, y);
  line(x, y, x, y+100);
  line(x+10, y, x+10, y+100);
  line(x, y+100, x+50, y+100);
  line(x+50, y, x+50, y+20);
  line(x+50, y+100, x+50, y+80);
}
  
function printD(x, y) {
  line(x, y, x+50, y);
  line(x, y+100, x+50, y+100);
  line(x+20, y, x+20, y+100);
  line(x+10, y, x+10, y+100);
  line(x+50, y, x+50, y+100);
}
  
function printE(x, y) {
  line(x, y, x+50, y);
  line(x, y+100, x+50, y+100);
  line(x+20, y+50, x+40, y+50);
  line(x+10, y, x+10, y+100);
  line(x+20, y, x+20, y+100);
  line(x+50, y, x+50, y+20);
  line(x+40, y+40, x+40, y+60);
  line(x+50, y+100, x+50, y+80);
}
  
function printF(x, y) { 
  line(x, y, x+50, y);
  line(x+20, y+40, x+40, y+40);
  line(x, y+100, x+20, y+100);
  line(x+10, y, x+10, y+100);
  line(x+20, y, x+20, y+100);
  line(x+50, y, x+50, y+20);
  line(x+40, y+30, x+40, y+50);
  line(x, y+100, x+30, y+100);
}
  
function printG(x, y) {
  line(x, y, x+40, y);
  line(x, y+100, x+40, y+100);
  line(x+20, y+40, x+40, y+40);
  line(x, y, x, y+100);
  line(x+10, y, x+10, y+100);
  line(x+20, y+30, x+20, y+50);
  line(x+40, y, x+40, y+20);
  line(x+40, y+40, x+40, y+100);
}
  
function printH(x, y) { 
  line(x, y, x+30, y);
  line(x+40, y, x+60, y);
  line(x, y+100, x+30, y+100);
  line(x+40, y+100, x+60, y+100);
  line(x+10, y, x+10, y+100);
  line(x+20, y, x+20, y+100);
  line(x+50, y, x+50, y+100);
  line(x+20, y+40, x+50, y+40);
}
  
function printI(x, y) {  
  line(x, y, x+30, y);
  line(x, y+100, x+30, y+100);
  line(x+10, y, x+10, y+100);
  line(x+20, y, x+20, y+100);
}

function printJ(x,y) { 
  line(x+10, y, x+50, y);
  line(x, y+100, x+35, y+100);
  line(x, y+50, x+10, y+50);
  line(x, y+50, x, y+100);
  line(x+25, y, x+25, y+100);
  line(x+35, y, x+35, y+100);
}
  
function printK(x, y) {
  line(x, y, x+20, y);
  line(x+30, y, x+50, y);
  line(x, y+100, x+20, y+100);
  line(x+40, y+100, x+60, y+100);
  line(x+20, y+40, x+50, y+40);
  line(x+10, y, x+10, y+100);
  line(x+20, y, x+20, y+100);
  line(x+40, y, x+40, y+40);
  line(x+50, y+40, x+50, y+100);
}
  
function printL(x, y) {
  line(x, y, x+30, y);
  line(x+10, y, x+10, y+100);
  line(x+20, y, x+20, y+100);
  line(x, y+100, x+50, y+100);
  line(x+50, y+100, x+50, y+80);
}
  
function printM(x, y) {
  line(x, y, x+40, y);
  line(x+40, y+10, x+60, y+10);
  line(x, y+100, x+20, y+100);
  line(x+30, y+100, x+50, y+100);
  line(x+60, y+100, x+70, y+100);
  line(x+10, y, x+10, y+100);
  line(x+20, y, x+20, y+100);
  line(x+40, y, x+40, y+100);
  line(x+60, y+10, x+60, y+100);
}
  
function printN(x, y) {
  line(x, y, x+50, y);
  line(x, y+100, x+20, y+100);
  line(x+40, y+100, x+60, y+100);
  line(x+10, y, x+10, y+100);
  line(x+20, y, x+20, y+100);
  line(x+50, y, x+50, y+100);
}
  
function printO(x, y) {
  line(x, y, x+50, y);
  line(x+10, y+100, x+50, y+100);
  line(x+10, y, x+10, y+100);
  line(x+20, y, x+20, y+100);
  line(x+50, y, x+50, y+100);
}
  
function printP(x, y) {
  line(x, y, x+50, y);
  line(x, y+100, x+30, y+100);
  line(x+20, y+50, x+50, y+50);
  line(x+10, y, x+10, y+100);
  line(x+20, y, x+20, y+100);
  line(x+50, y, x+50, y+50);
}
  
function printQ(x, y) {
  line(x, y, x+40, y);
  line(x, y+100, x+40, y+100);
  line(x+20, y+70, x+50, y+70);
  line(x, y, x, y+100);
  line(x+10, y, x+10, y+100);
  line(x+40, y, x+40, y+100);
  line(x+50, y+70, x+50, y+90);
}
  
function printR(x, y) {
  line(x, y, x+50, y);
  line(x, y+100, x+20, y+100);
  line(x+30, y+100, x+50, y+100);
  line(x+10, y, x+10, y+100);
  line(x+20, y, x+20, y+100);
  line(x+20, y+40, x+50, y+40);
  line(x+50, y, x+50, y+40);
  line(x+40, y+40, x+40, y+100);
}
  
function printS(x, y) {
  line(x, y, x+40, y);
  line(x, y+40, x+40, y+40);
  line(x, y+100, x+40, y+100);
  line(x, y, x, y+40);
  line(x+40, y+40, x+40, y+100);
  line(x+10, y, x+10, y+40);
  line(x, y+100, x, y+80);
  line(x+40, y, x+40, y+20);
}
  
function printT(x, y) {
  line(x, y, x+50, y);
  line(x+10, y+100, x+40, y+100);
  line(x, y, x, y+20);
  line(x+50, y, x+50, y+20);
  line(x+20, y, x+20, y+100);
  line(x+30, y, x+30, y+100);
}
  
function printU(x, y) {
  line(x, y, x+20, y);
  line(x+40, y, x+60, y);
  line(x+10, y+100, x+60, y+100);
  line(x+10, y, x+10, y+100);
  line(x+20, y, x+20, y+100);
  line(x+50, y, x+50, y+100);
}
  
function printV(x, y) {
  line(x, y, x+20, y);
  line(x+50, y, x+70, y);
  line(x+10, y, x+10, y+60);
  line(x+20, y, x+20, y+80);
  line(x+60, y, x+60, y+60);
  line(x+10, y+60, x+20, y+60);
  line(x+50, y+60, x+60, y+60);
  line(x+20, y+80, x+30, y+80);
  line(x+50, y+60, x+50, y+80);
  line(x+50, y+80, x+40, y+80);
  line(x+30, y+80, x+30, y+100);
  line(x+40, y+80, x+40, y+100);
  line(x+30, y+100, x+40, y+100);
}
  
function printW(x, y) {
  line(x, y, x+20, y);
  line(x+30, y, x+50, y);
  line(x+60, y, x+70, y);
  line(x+10, y, x+10, y+100);
  line(x+20, y, x+20, y+100);
  line(x+40, y, x+40, y+100);
  line(x+60, y, x+60, y+90);
  line(x+10, y+100, x+40, y+100);
  line(x+40, y+90, x+60, y+90);
}
  
function printX(x, y) {
  line(x+10, y, x+30, y);
  line(x+40, y, x+60, y);
  line(x+40, y+40, x+40, y+50);
  line(x, y+100, x+20, y+100);
  line(x+50, y+100, x+70, y+100);
  line(x+20, y, x+20, y+40);
  line(x+30, y, x+30, y+40);
  line(x+50, y, x+50, y+40);
  line(x+20, y+40, x+50, y+40);
  line(x+10, y+50, x+60, y+50);
  line(x+10, y+50, x+10, y+100);
  line(x+20, y+50, x+20, y+100);
  line(x+60, y+50, x+60, y+100);
}
  
function printY(x, y) {
  line(x, y, x+20, y);
  line(x+40, y, x+60, y);
  line(x+10, y+50, x+50, y+50);
  line(x, y+60, x+20, y+60);
  line(x+10, y+100, x+50, y+100);
  line(x+10, y, x+10, y+50);
  line(x+20, y, x+20, y+50);
  line(x+10, y+60, x+10, y+100);
  line(x+20, y+60, x+20, y+100);
  line(x+50, y, x+50, y+100);
}
  
function printZ(x, y) {
  line(x, y, x+40, y);
  line(x, y, x, y+20);
  line(x+40, y, x+40, y+30);
  line(x+30, y+30, x+40, y+30);
  line(x+30, y+30, x+30, y+40);
  line(x+30, y+40, x+10, y+40);
  line(x+10, y+40, x+10, y+50);
  line(x+10, y+50, x, y+50);
  line(x, y+50, x, y+100);
  line(x+10, y+50, x+10, y+100);
  line(x+40, y+80, x+40, y+100);
  line(x, y+100, x+40, y+100);
}

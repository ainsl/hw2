function setup() {
  createCanvas(600, 380);
}

function draw() {
  background(254, 172, 226);
  
  printA(20, 20);
  printB(90, 20);
  printC(150, 20);
  printD(210, 20);
  printE(270, 20);
  printF(330, 20);
  printG(390, 20);
  printH(440, 20);
  printI(510, 20);
  
  printJ(20, 140);
  printK(80, 140);
  printL(150, 140);
  printM(210, 140);
  printN(290, 140);
  printO(350, 140);
  printP(410, 140);
  printQ(470, 140);
  printR(530, 140);
  
  printS(20, 260);
  printT(80, 260);
  printU(140, 260);
  printV(210, 260);
  printW(290, 260);
  printX(360, 260);
  printY(440, 260);
  printZ(510, 260);
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

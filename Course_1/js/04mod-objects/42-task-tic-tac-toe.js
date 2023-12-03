/* Ниже реализована игра Крестики-нолики.
https://www.youtube.com/watch?v=4Vo84i9a8BU
Напишите свою реализацию игры
*/

console.log('%cКрестики/нолики', 'color:#555;font-size:1.4rem'); 
console.log('%cУсловия: по очереди в консоли', 'color:#555;font-size:0.5rem'); 
console.log('%cвызывайте ход типа next(1,1)', 'color:#555;font-size:0.5rem'); 
 
let field = [
  [null, null, null],  
  [null, null, null],  
  [null, null, null],  
]
 
function showField(f){
  function symbolDraw(symbol){
    if( !symbol ){
        return '▒';
    } 
    return symbol;
  }
 
  let result = `     x1  x2  x3 
   ╔═══╦═══╦═══╗
y1 ║ ${symbolDraw(f[0][0])} ║ ${symbolDraw(f[0][1])} ║ ${symbolDraw(f[0][2])} ║
   ╠═══╬═══╬═══╣
y2 ║ ${symbolDraw(f[1][0])} ║ ${symbolDraw(f[1][1])} ║ ${symbolDraw(f[1][2])} ║
   ╠═══╬═══╬═══╣
y3 ║ ${symbolDraw(f[2][0])} ║ ${symbolDraw(f[2][1])} ║ ${symbolDraw(f[2][2])} ║
   ╚═══╩═══╩═══╝
`;
  console.log(result);
}
 
let isPlus = true;
 
function chechWin(){
  const f = field;  
/*
  0  1  2
0 1
1    1
2       1
*/
  //по горизонтали
  if( f[0][0] && f[0][0] == f[0][1] && f[0][1] == f[0][2]) return f[0][0];
  if( f[1][0] && f[1][0] == f[1][1] && f[1][1] == f[1][2]) return f[1][0];
  if( f[2][0] && f[2][0] == f[2][1] && f[2][1] == f[2][2]) return f[2][0];
 
  //по вертикали
  if( f[0][0] && f[0][0] == f[1][0] && f[1][0] == f[2][1]) return f[0][0];
  if( f[0][1] && f[0][1] == f[1][1] && f[1][1] == f[2][1]) return f[0][1];
  if( f[0][2] && f[0][2] == f[1][2] && f[1][2] == f[2][2]) return f[0][2];
 
  //по диагонали
  if( f[0][2] && f[0][2] == f[1][1] && f[1][1] == f[2][0]) return f[0][2];
  if( f[0][0] && f[0][0] == f[1][1] && f[1][1] == f[2][2]) return f[0][0];
 
  //если нет выстроенных в ряд
  return false;
}
 
function nextMove(x,y, symbol = '+'){
    console.clear();
    field[y-1][x-1] = symbol;
    showField(field);
}
function next(x, y){
    if( !field[y-1][x-1] ){
        nextMove(x, y, isPlus ? '+' : 'o');
    } else {
        console.log('Сюда ходить нельзя :)');
        return;
    }   
 
    let win;
    if(win = chechWin()){
       console.log(`%cПобеда '${win}'! 5сек..`,'color:#468a5d;font-size:1.2rem');
       setTimeout(start, 5000)
    }
    isPlus = !isPlus;
}
 
 
//Пример игры 
// next(1,3);// x = 1, y = 3
// next(2,2);// x = 2, y = 2
// next(3,1);// x = 2, y = 2
// next(2,1);// x = 2, y = 1
// next(1,1);// x = 1, y = 1
// next(2,3);// x = 2, y = 1
 
function start(){
    console.clear();
    field = [
        [null, null, null],  
        [null, null, null],  
        [null, null, null],  
      ];
    showField(field);
}
//start();
 
 
// console.log(`     x1  x2  x3 
//    ╔═══╦═══╦═══╗
// y1 ║ ▒ ║ ▒ ║ ▒ ║
//    ╠═══╬═══╬═══╣
// y2 ║ ▒ ║ ▒ ║ ▒ ║
//    ╠═══╬═══╬═══╣
// y3 ║ ▒ ║ ▒ ║ ▒ ║
//    ╚═══╩═══╩═══╝
// `)
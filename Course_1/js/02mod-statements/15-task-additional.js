/* Используя while выведите все числа от 1 до 20  */
let i = 1;
while(i < 20){
   console.log(i++);
}

/* Выведите все нечётные числа от 1 до 20  */
i = 1;
while(i < 20){
  console.log(i);
  i += 2;
}

/* Выведите квадраты всех чисел от 1 до 20  */
i = 1;
while(i < 20){
   console.log(i * i);
   i++;
}

/*Дана константа LEVEL=5. Построить пирамиду из символа ^ с количеством уровней равным LEVEL. Каждый уровень содержит на два символа больше предыдущего уровня. Например, 

^
^^^
^^^^^
^^^^^^^
^^^^^^^^^
*/
{
const LEVEL = 5;
let result = '';
let chars = '^^'
let k = 0;
while(k < LEVEL){   
  
   result += '^'
   let i = 0;
   while(i < k){
     result += chars;   
     i++;
   }
   result += '\n';

   k++;
}
console.log(result);
}
/*
    ^
   ^^^
  ^^^^^
 ^^^^^^^
^^^^^^^^^
*/
{
   const LEVEL = 5;
   let result = '';
   let chars = '^^'
   let k = 0;
   let spaceCount = Math.floor((LEVEL * 2 - 1)/2); //макс кол-во пробелов
   console.log(spaceCount );

   while(k < LEVEL){   
     
      let space = '';
      let j = 0;
      while( j < spaceCount){
         space += ' ';
         j++
      }
      spaceCount--;

      result += space + '^'
      let i = 0;
      while(i < k){
        result += chars;   
        i++;
      }
      result += '\n';
   
      k++;
   }
   console.log(result);
   }



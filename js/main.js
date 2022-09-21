// let fruits = [ 'apple', 15 , True ,  a => a , {a : "hello"} , ['s']];

// for(let fruit of fruits ){
//     console.log(fruit);
// }

// let arr = ["asasac", "greatedsfsf", "summe"];
// let count = [];

// let obj = {
//      a  : 'a',
//      b  : 'b',
//      c  : 'c',
//      d  : 'd'
// };

// let str = 'a'

// function chekobj(c, d){
//         let arr = Object.keys(c)
//         if(arr.includes(d)) {
//           return true ;
//         }
//         return false ;
//     }
// console.log(chekobj(obj,str));


// let arr = [ 5, 7, 3 , 4 , 5 , 6];

// let count = 0;
// let sum = 0;
// arr.forEach(element => {
//  count += element
//  sum ++;
// });
// console.log(count / sum);

// function averich(arr){
//  let sum = 0;
//   for(let value of arr ){
//     // console.log(value);
//     sum += value;
   
//   } 
//   console.log(sum / arr.length);
// }

// averich(arr ); 

// let arr = [ 3, 7, 3 , 4 , 7, 6]; 

//  arr.forEach(element => {
 
//   count = element;
//     if(element == count){
//       console.log(element);
//     }
  
//  });

//1 - masala berilgan sonni teskarisiga chiqaruvchi funksiya 

// let dot = +prompt('istalgan xonali son kiriting ');
// function sumCount(num){
//  let strNumber = '' + num;
//  let reversed = strNumber.split('')

//     if(reversed[0] == '-'){
//         reversed.splice(0 , 1)
//         return -Number(reversed.reverse().join(''))
//     }else {
//         return Number(reversed.reverse().join(""))
//     }

// }

// alert( ` Avval kiritgan soningiz : ${dot}  ||  Natija : ${sumCount(dot)}`   )





// isPalindrom  Palindrom bo`lgan son yoki stringni aniqlovchi funksiya

// let dot = prompt('kiritilgan qiymatni palindrom yoki palindrom emasligiga tekshirish qiymat kiriting : ');
// function sumCount(num){

//  let  string = [...num].reverse().join("");
//    if(string === num){
//       return true ;
//    }
  
//     return false ;
// }

//  alert(sumCount(dot) ) ; 



//  massiv elementlarni  yig`indisini hosil qilgan qo`shiluvchilarni massivdagi indexlarini aniqlash 

// let arr = [3,2,4];
// let num = 7;


// for (let i = 0; i < arr.length; i++) {
//    for (let j = 0; j < arr.length; j++) {
//       let res = arr[i] + arr[j] ;
//       if (res == num && i!=j) {
//          alert(i + " " + j)
//       }
      
//    }
   
// }



// 7 -  masala


// let count = 2112;

// function sumDigits(n){
//     let numArr = n.toString().split("");

//     let sum = numArr.reduce(function(a, b){
//         return parseInt(a) + parseInt(b);
//     }, 0);
    
//     console.log(sum); 
// }
// sumDigits(count)


// move to zeros
// function pushZerosToEnd(arr, n) 
// { 
//     let count = 0; 
//     for (let i = 0; i < n; i++) 
//         if (arr[i] != 0) 
//             arr[count++] = arr[i]; 
//     while (count < n) 
//         arr[count++] = 0; 
// } 
// let massiv = [] ;
// let arr = [ 0, 0, 2, 7, 0, 6, 0, 9]; 
// let n = arr.length; 
// pushZerosToEnd(arr, n); 
// for (let i = 0; i < n; i++) {
//      massiv.push(arr[i]);
// }
//      console.log(massiv);


// reverse  array string 
  
// let arr = [ 'banana', 'apple' , ' lemon', ' orange'];
// let array1 = [] ;

//  function array(dot) {
//     for (let i = 0; i < dot.length; i++) {
//         return array1.push(dot[i].split('').reverse().join(''));
//     }
        
//  }
//  array(arr)
 

let arr = [ 'banana', 'apple' , ' lemon', ' orange'];

let array1 = [] ;

for (let i = arr.length; i > 0; i--) {
  let sum = arr[i - 1];
  let add = "";

  for (let i = sum.length - 1; i >= 0; i--) {
    add += sum[i];
  }

  array1.push(add);

}

console.log(array1);
            
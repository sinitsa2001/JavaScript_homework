
/*
1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 : а =2 и с = 2
d = b++; alert(d);           // 1 : d =1 декремент (отображение данных происходит раньше чем прибавляется единица)
c = (2+ ++a); alert(c);      // 5 :(к 2 прибавляется 3 ( а (которая имеет значение 2 после первого примера) прибавляетя единица((2) + (2+1))
d = (2+ b++); alert(d);      // 4 : ( к 2 прибавляется 2 ( b после примера имеет значение 2, но увеличивается уже после вывода на экран))
alert(a);                    // 3 : а имеет значение 3 после двух примеров
alert(b);                    // 3 : имеет значение 3 после двух примеров
Почему код даёт именно такие результаты?



2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); результат 5 (1 + (2*2))


6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
7. *Сравнить null и 0. Попробуйте объяснить результат.
8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
*/

    /*3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.*/
var a = (-5);
var b = (1);
console.log((a > 0 && b > 0 ) ? a-b : (a <0 && b <0) ? a*b : a+b );

 /*4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.*/
 
 var a = parseFloat((Math.random()*15).toFixed(0));
  alert (a);
  switch (a) {
       case 0:
           document.write('0, ');
        case 1:
           document.write('1, ');  
        case 2:
           document.write('2, '); 
        case 3:
            document.write('3, ');
        case 4:
           document.write('4, ');
        case 5:
           document.write('5, ');
        case 6:
           document.write('6, ');
        case 7:
           document.write('7, ');
        case 8:
           document.write('8, ');
        case 9:
           document.write('9, ');
        case 10:
           document.write('10, ');
        case 11:
           document.write('11, ');
        case 12:
           document.write('12, ');
        case 13:
           document.write('13, ');
        case 14:
           document.write('14, ');
        case 15:
           document.write('15');
           break;
       default:
           document.write ('Число в не заданом диапазоне')
           break;
   }



    //5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
//var a = parseInt(prompt('Input digit 1: '));
//var b = parseInt(prompt('Input digit 1: '));

function plus(a,b){
    res = a+b;
    return res;
}
function minus(a,b){
    return a-b;
    
}
function div (a,b){
    if (b ==0){
        alert('не делим на ноль');
    }
    return a/b;
}
function multiply(a,b){
    return a*b;
}
document.write ('plus' + plus(2,5));
document.write('minus' + minus(4,1));
document.write('div'+div(9,1));
document.write('multiply' +multiply(4,4));

/*
6. 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/
arg1 = prompt(' Первый агрумент:  ');
arg2 = prompt('Второй аргумент:  ');
operation = prompt('Введите знак операции: ')
function mathOperation(arg1, arg2, operation){

    switch (operation) {
        case '+':
        alert('plus' + plus(arg1, arg2));
           // break;
        case'-':
        alert('minus' + minus(arg1,arg2));
       // break;
        case'/':
        alert('div'+div(arg1,arg2));
       // break;
        case '*':
        alert('multiply' +multiply(arg1,arg2));
    default:
        alert('no ' );
        break;
}
//mathOperation(4,6);
//arg1 = 2;
//arg2 = 5;
}

/* 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
*/ 
function power(val, pow){
if (pow ==1){
return val;
}
if (pow == 0){
return 1;
}
if (pow >0){
var temp = val * power(val, pow-1);
console.log (temp);
return(temp);
}
else if (pow <0){
return(1/val) * (power (val, pow +1));
}
}
var a = parseFloat(prompt('Введи число: '));
var b = parseInt(prompt('Введи степень   '));
alert('Результат = '+ power (a,b));

   
const numberMax = document.querySelector('.number-max');
const numberSquare = document.querySelector('.number-square');
const numberContrast = document.querySelector('.number-contrast');
const equationSquare = document.querySelector('.equation-square');
const buttonMax = document.querySelector('.button-max');
const buttonSquare = document.querySelector('.button-square');
const buttonContrast = document.querySelector('.button-contrast');
const button = document.querySelector('.button');

//Определить какое из трех введенных пользователем чисел максимальное и вывести его на экран.
buttonMax.addEventListener('click', function(){
    var a = parseInt(prompt("Введите первое число",""));
    var b = parseInt(prompt("Введите второе число",""));
    var c = parseInt(prompt("Введите третье число",""));

    if(a>b && a>c){
        numberMax.innerHTML = a + ' - максимальное число';
    }else if(b>a && b>c){
        numberMax.innerHTML = b + ' - максимальное число';
    }else {
        numberMax.innerHTML = c + ' - максимальное число';
    }
});
//Составить программу, позволяющую напечатать квадраты натуральных чисел от 1 до 20
buttonSquare.addEventListener('click', function(){
    var numbers = '';
    for(var i=1; i<=20; i++){
        numbers += i + '&sup2; = ' + i*i + '; ';
    }
    numberSquare.innerHTML = numbers;
});
//Ввести два целых числа, если первое число больше чем второе - вывести сообщение в консоль, 
//иначе вывести сообщение на страницу HTML
buttonContrast.addEventListener('click', function(){
    var zFirst = parseInt(prompt("Введите целое число",""));
    var zSecond= parseInt(prompt("Введите второе целое число",""));

    if(zFirst>zSecond){
        console.log('Первое число больше второго!');
    }else if(zFirst==zSecond){
        numberContrast.innerHTML = 'Первое число равно второму!';
    }else {
        numberContrast.innerHTML = 'Первое число меньше второго!';
    }
});

//Корни квадратного уравнения
button.addEventListener('click', function(){
    
    var a = parseInt(prompt("Введите a",""));
    var b = parseInt(prompt("Введите b",""));
    var c = parseInt(prompt("Введите c",""));

    var x1, x2;

    var d = b*b - 4*a*c;
    console.log(d);
    
    if(d>0){
        x1 = (-b+Math.sqrt(d))/(2*a);
        x2 = (-b-Math.sqrt(d))/(2*a);
        equationSquare.innerHTML = `D = ${d}<br>x<sub>1</sub>=${x1} x<sub>2</sub>=${x2}`;
    }else if(d==0){
        x1 = -b/(2*a);
        equationSquare.innerHTML = `D = ${d}<br>x=${x1}`;
    }else{
        equationSquare.innerHTML = `D = ${d}<br>корней нет`;
    }
});



/*
Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log. Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.*/

let a = 0.1 + 0.2 + 0.033;
let b = 0.33334;
let precision = 4;

let aNormalized = Math.round(
    a * Math.pow(10, precision)
);

let bNormalized = Math.round(
    b * Math.pow(10, precision)    
);

console.log(aNormalized);
console.log(bNormalized);
console.log('Первое число больше', aNormalized > bNormalized);
console.log('Первое число меньше', aNormalized < bNormalized);
console.log('Первое число больше или равно', aNormalized >= bNormalized);
console.log('Первое число меньше или равно', aNormalized <= bNormalized);
console.log('Числа равные', aNormalized === bNormalized);
console.log('Числа не равны', aNormalized !== bNormalized);

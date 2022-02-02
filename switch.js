let fruit = 'Арбуз';

switch (fruit) {
    case 'Яблоко':
        console.log('Это яблоко');
        break;
    case 'Банан':
        console.log('Это Банан');
        break;
    case 'Арбуз':
    case 'Клубника':
    case 'Вишня':
        console.log('Это ягода, а не фрукт');
        break;
    default:
        console.log('Я не знаю такого');
        break;   
}
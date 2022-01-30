// кол-во подьездов
let entrances = 4;
// кол-во этажей
let floors = 9;
// кол-во квартир на этаже
let flatsPerFloor = 4;

let flatsPerEntrance = floors * flatsPerFloor;
console.log('Квартир в подьезде', flatsPerFloor);

let  flats = entrances * flatsPerEntrance;
console.log('Всего квартир в доме', flats);
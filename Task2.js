//Модуль 9 задание 2
//Распарсить входной XML

let humanArray = new Array();  //массив людей - пока пустой
let result = {                 //объект на выходе 
  list: humanArray};

/* Этап 1. Подготовка данных */
// JSON, который мы будем парсить
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

/* Этап 2. Получение данных */
const parseObjest = JSON.parse(jsonString);
const parseAarray = parseObjest.list;

/* Этап 3. Запись данных в результирующий объект */
parseAarray.forEach(eachHuman => {    // пробегаем по массиву
   let currentHuman = {                // текущий человек
     name: eachHuman.name,
     age: eachHuman.age, 
     prof: eachHuman.prof 
   }
   humanArray.push(currentHuman);        //заносим тек. чела в массив
});

console.log(result); 

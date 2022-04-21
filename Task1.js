//Модуль 9 задание 1
//Распарсить входной XML


let studentArray = new Array();  //массив студентов, пока пустой
let result = {                   //объект на выходе 
  list: studentArray};
const parser = new DOMParser();


// XML, который мы будем парсить
const xmlString = `             
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
 `;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

xmlDOM.querySelectorAll("student").forEach(student => {   // пробегаем по массиву
    const ageNode  = student.querySelector("age");
    const profNode  = student.querySelector("prof");
    const nameNode1  = student.querySelector("first");
    const nameNode2  = student.querySelector("second");
    const nameNode  = student.querySelector("name");
    const langAttr  = nameNode.getAttribute("lang");

    let studentCurrent = {                  // текущий студент
      name: nameNode1.textContent + " " + nameNode2.textContent,
      age: Number(ageNode.textContent),
      prof: profNode.textContent,
      lang: langAttr,
    };

    studentArray.push(studentCurrent);    //добавляем студента в массив
});

console.log(result);
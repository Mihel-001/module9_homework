// опрос Local Storage
let page = localStorage.getItem('page');
let limit = localStorage.getItem('limit');
if (page != null && limit != null ){
let savingUrl = 'https://picsum.photos/v2/list?page=' + page + '&limit=' + limit + '';
useRequest(savingUrl, displayResult);
};

const btnStart = document.querySelector('.btnCheck');
const resultNode = document.querySelector(".result");

btnStart.addEventListener('click', () =>{
    const inputPage = document.querySelector('.input1').value;
    const inputLimit = document.querySelector('.input2').value;
    let inputError = 0;   
    
  if (isNaN(inputPage) == true || inputPage < 1 || inputPage >10) { 
    inputError = inputError + 1;
     };
  if (isNaN(inputLimit) == true || inputLimit < 1 || inputLimit >10) { 
    inputError = inputError + 10;
      };
  switch (inputError){
    case 1: console.log("inputPage out of range !");
            resultNode.innerHTML = "Номер страницы вне диапазона от 1 до 10 !";
            break;
    case 10: console.log("inputLimit out of range !");
             resultNode.innerHTML = "Лимит вне диапазона от 1 до 10 !";  
             break;
    case 11: console.log("all inputs out of range !");
             resultNode.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10 !";  
             break;
    case 0: console.log("all inputs ok");
            let resultUrl = `https://picsum.photos/v2/list?page=${inputPage}&limit=${inputLimit}`;
            // вызов функций запроса и вывода результата
            useRequest(resultUrl, displayResult);
            // запись успешного запроса в Local storage
            localStorage.setItem('page', inputPage);
            localStorage.setItem('limit', inputLimit);
            break;
    default: console.log("Something wrong.....")
  }
});  

// функция запроса картинок
function useRequest(url, callback)  {  
  let xhr = new XMLHttpRequest();
  xhr.open('GET',url);
  xhr.send();
  xhr.onload = function() {
     if (xhr.status != 200) { 
         console.log('Статус ответа: ', xhr.status);
     } else {
           console.log('Результат: ', JSON.parse(xhr.response));
           const result = JSON.parse(xhr.response);
           if (callback) {
            callback(result);
          }           
      };
  };
}

// функция вывода картинок
function displayResult(apiData) {
let cards = '';
apiData.forEach(item => {
const cardBlock = `
  <div class="card">
    <img
      src="${item.download_url}"
      class="card-image"
    />
    <p>${item.author}</p>
  </div>
`;
cards = cards + cardBlock;
});
resultNode.innerHTML = cards;
}




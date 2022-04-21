const btnStart = document.querySelector('.btnCheck');
const resultNode = document.querySelector(".result");
console.log(btnStart);
btnStart.addEventListener('click', () =>{
  const inputValue = document.querySelector('input').value;
  if (inputValue >= 1 && inputValue <= 10) { 
      let url1 = `https://picsum.photos/v2/list/?limit=${inputValue}`;
      useRequest(url1, displayResult);
  // Если число вне диапазона от 1 до 10   
  } else {
    resultNode.innerHTML = "Число вне диапазона от 1 до 10 ! Попробуйте ещё раз.";
    };

});

// функция запроса
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

// функция вывода 
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

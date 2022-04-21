const btnStart = document.querySelector('.btnCheck');
const resultNode = document.querySelector(".result");

btnStart.addEventListener('click', () =>{
    const inputValue1 = document.querySelector('.input1').value;
    const inputValue2 = document.querySelector('.input2').value;
   // Проверка диапазона чисел
   if (inputValue1 >= 100 && inputValue1 <= 300 && inputValue2 >= 100 && inputValue2 <= 300) { 
      let urlCurrent = `https://picsum.photos/${inputValue1}/${inputValue2}`;
      console.log('request:', urlCurrent);
      //вызов функции запроса и вывода
      useRequest(urlCurrent, displayResult); 
   // Если число вне диапазона 
   } else {
     resultNode.innerHTML = "одно из чисел вне диапазона от 100 до 300 !!!";
   };
});

// функция запроса Fetch
  function useRequest(url, callback)  {  
    fetch(url)
      .then((response) => {
        console.log('response: ', response);
        if (callback) {
           callback(response);
        };           
      })
      .catch(() => {console.log('error')});
    }  
   
// функция вывода картинки
function displayResult(apiData) {
  const cardBlock = `
      <div>
        <img
          src="${apiData.url}"
          class="card-image"
        />
      </div>
    `;
  resultNode.innerHTML = cardBlock;
}

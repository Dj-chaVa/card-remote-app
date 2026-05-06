const weatherForm=document.getElementById("weather-form")//const→今回はHTMLの要素を変数として保存している
const cityInput=document.getElementById("city-input")
const weatherResults=document.getElementById("weather-results")

weatherForm.addEventListener("submit",(e)=>{//addEventListener("○○"→○○というイベントが起きたら実行する、index.html２２行目のフォームを送信するイベントで実行される
  //(e)=>{実行する中身}
  e.preventDefault()//{eが起こったらpreventDefault(処理を止める)を実行する}
  getWeather(cityInput.value)


})



const getWeather=(city)=>{
  fetch(`https://api.weatherapi.com/v1/current.json?key=8121ae91fd9a4d0185822410260204&q=${city}&aqi=no`)
.then(response=>response.json())
   .then(jsonData=>weatherResults.innerHTML=`
                    <div class="results-country">${jsonData.location.country}</div>
                    <div class="results-city">${jsonData.location.name}</div>
                    <div class="results-temp">${jsonData.current.temp_c}<span>°C</span></div>
                    <div class="results-condition">
                      <img src="https:${jsonData.current.condition.icon}"alt="icon">
                      <span>${jsonData.current.condition.text}</span> <!--//jsonData→APIからの全部のデータ、.current現在の天気データ、text→天気の状態の文字。.毎に箱を開けていく感じ-->
                    </div>
     ` 
    )
   }
   
   




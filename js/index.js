let findInPut = document.getElementById("find")
var y = findInPut.value
let c = new Date()
console.log(c.getDate());
let a =c.getMonth()
let d = c.getDay()
const monthName = ["January","February","March","April","May","June","July","August","September","OCTOBER","NOVEMBER","DECEMBER"]
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(monthName[a]);
console.log(days[d]);
function gitloc(z) {
    if (z != "") {
      fetch(`https://api.weatherapi.com/v1/forecast.json?key=983273eca7034074bb160348230808&q=${z}&days=3`).then((data)=>{
        data.json().then((value)=>{
            console.log(value);
            console.log(value.forecast.forecastday[0].day.avgtemp_c+" c");
            showdata(value);
        })
    })
    }
    else{
      fetch(`https://api.weatherapi.com/v1/forecast.json?key=983273eca7034074bb160348230808&q=cairo&days=3`).then((data)=>{
        data.json().then((value)=>{
            console.log(value);
            console.log(value.forecast.forecastday[0].day.condition.text);
            showdata(value);
        })
    })
    }
}
 gitdata("")

function gitdata(y) {
    if (y != "") {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=983273eca7034074bb160348230808&q=${y}&days=3`).then((data)=>{
            data.json().then((value)=>{
                console.log(value);
                console.log(value.forecast.forecastday[0].day.avgtemp_c+" c");
                showdata(value);
            })
        })
    }
    else{
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=983273eca7034074bb160348230808&q=cairo&days=3`).then((data)=>{
            data.json().then((value)=>{
                console.log(value.forecast.forecastday[0].date[5],value.forecast.forecastday[0].date[6]);
                console.log(value.forecast.forecastday[0].day.condition.text);
                showdata(value);
                console.log(value.forecast.forecastday[0].day.condition.icon);
            })
        })
    }
}
document.getElementById("find").addEventListener("keyup",() => {
    var y = findInPut.value
    gitloc(y)
    gitdata(y)
    gitloc(y)
})
function showdata(y) {
    temp = `<div class="card " style="width: 33.33% ; background-color: #323544; color: #bfc1c8;">
    <div class="card-header fs-6" style="background-color: #2d303d;">
      ${days[d]}
      <samp class="position-absolute end-0 mx-3"
        >${c.getDate()} ${monthName[a]}</samp
      >
    </div>
    <ul class="ps-3 body-card list-group-flush ">
      <li class="list-group-item">
        <p class="city">${y.location.name}</p>
        <p class="celsius-num text-white">
          ${y.current.temp_c}<samp class="celsius">o</samp>C
          <img src="https:${y.forecast.forecastday[0].day.condition.icon}" class="ms-3 w-25" alt="">
        </p>
        <p class="clear1 text-info">${y.current.condition.text}</p>
        <div class="footer">
          <div class="row">
            <div class="col-md-4">
              <i class="fa-solid  fa-umbrella"
                ><samp>20%</samp></i
              >
            </div>
            <div class="col-md-4">
              <i class="fa-solid  fa-wind"
                ><samp>18km/h</samp></i
              >
            </div>
            <div class="col-md-4">
              <i class="fa-regular  fa-compass"
                ><samp>East</samp></i
              >
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="card text-center" style="width: 33.33%; background-color: #2d303d;color: #bfc1c8 !important; ">
            <div class="card-header fs-6" style="background-color: #323544;" >
              <p class="mb-0">${days[d+1]}</p>
            </div>
            <ul class="list-group list-group-flush">
            <img src="https:${y.forecast.forecastday[1].day.condition.icon}" class="m-auto mt-2 icon2 " alt="">
                
                <p class="fs-3 mb-0 text-white mt-3">${y.forecast.forecastday[1].day.maxtemp_c} <samp class="celsius1">o</samp>C</p>
                <p class="fs-6 text-white mt-0">${y.forecast.forecastday[1].day.mintemp_c} <samp class="celsius2">o</samp>C</p>
                <p class="clear1 text-info mt-2 mb-4">${y.forecast.forecastday[1].day.condition.text}</p>
              </li>
            </ul>
          </div>
          <div class="card text-center" style="width: 33.33% ; background-color: #323544; color: #bfc1c8 !important;">
            <div class="card-header  fs-6" style="background-color: #2d303d;">
              <p class="mb-0">${days[d+2]}</p>
            </div>
            <ul class="list-group list-group-flush" >
              <li class="list-group-item body-card ">
              <img src="https:${y.forecast.forecastday[2].day.condition.icon}" class="m-auto icon2 " alt="">
                <p class="fs-3 text-white mb-0 mt-3">${y.forecast.forecastday[2].day.maxtemp_c} <samp class="celsius1">o</samp>C</p>
                <p class="fs-6 text-white mt-0">${y.forecast.forecastday[2].day.mintemp_c} <samp class="celsius2">o</samp>C</p>
                <p class="clear1 text-info mt-2 mb-4">${y.forecast.forecastday[2].day.condition.text}</p>
              </li>
            </ul>
          </div>`
  document.getElementById("data-display").innerHTML = temp
}

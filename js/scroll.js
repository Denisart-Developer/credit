/*================TAB(calculator)==================*/
const calculatorBtn1 = document.querySelector('.calculator__tab-1');
const calculatorBtn2 = document.querySelector('.calculator__tab-2');
const tab1 = document.querySelector('.calculator__body-tab-1');
const tab2 = document.querySelector('.calculator__body-tab-2');

calculatorBtn1.addEventListener("click", function(){
  calculatorBtn1.classList.add("active");
  calculatorBtn2.classList.add("no-active");
  tab1.classList.add("active");
  tab2.classList.add("no-active");
})
calculatorBtn2.addEventListener("click", function(){
  calculatorBtn1.classList.remove("active");
  calculatorBtn2.classList.remove("no-active");
  tab1.classList.remove("active");
  tab2.classList.remove("no-active");
})
/*======================SCROLL====================*/


const body = document.querySelector('body');
let calculator = document.querySelector('.calculator');



window.addEventListener('scroll', () => {
  const windowsScrollTop = window.pageYOffset;
  console.log(windowsScrollTop);
  if(windowsScrollTop> 150){
    calculator.classList.add("active");
  }
  if(windowsScrollTop> 2654){
    calculator.classList.add("active-bottom");
  }
  if(windowsScrollTop < 2654){
    calculator.classList.remove("active-bottom");
  }
  if(windowsScrollTop < 150){
    calculator.classList.remove("active");
  }
})
/*==================Calculator==================*/
const summa = document.getElementById('calculator-summa');
const day = document.getElementById('calculator-day');
const sliderSumma = document.getElementById('myRange');
const sliderDay = document.getElementById('myRange-2');
const creditSumma = document.getElementById('credit-summa');
const creditSumma2 = document.getElementById('credit-summa2');
const creditDay = document.getElementById('credit-day');
const creditDay2 = document.getElementById('credit-day2');
const creditRate = document.getElementById('credit-rate');
const creditRate2 = document.getElementById('credit-rate2');
const creditOver = document.getElementById('credit-over');
const creditOver2 = document.getElementById('credit-over2');
const creditTotal = document.getElementById('credit-total');
const creditTotal2 = document.getElementById('credit-total2');
const calculatorCh = document.querySelector(".calculator");
const creditBtn = document.getElementById("credit-btn");



calculatorCh.addEventListener('input', function(){
  
  
  
  if((summa.value !== "") & (day.value != "")){
    const summaVals = parseInt(summa.value);
    const rate = parseFloat(creditRate.innerHTML);
    const rate2 = parseFloat(creditRate2.innerHTML);
    const dayVal = parseInt(day.value);
    const total = (summaVals / 100 * rate) * dayVal;
    const total2 = (summaVals / 100 * rate2) * dayVal;
    creditOver.innerHTML = total;
    creditOver2.innerHTML = total2;
    const result = total + summaVals;
    const result2 = total2 + summaVals;
    creditTotal.innerHTML = result;
    creditTotal2.innerHTML = result2;
  }
  
})

sliderSumma.addEventListener('input', function(){
  summa.value = sliderSumma.value;
  creditSumma.innerHTML = summa.value;
  creditSumma2.innerHTML = summa.value;
  creditBtn.innerHTML = "Получить " + summa.value + " грн";
})

summa.addEventListener('input', function(){
  const summaVal = summa.value;
  const summaMax = summa.max;
  sliderSumma.value = summa.value;
  
  if(parseInt(summaVal) > parseInt(summaMax)){
    creditSumma.innerHTML = summa.max;
    creditSumma2.innerHTML = summa.max;
    summa.value = summa.max;
    creditBtn.innerHTML = "Получить " + summa.value + " грн";
  }else{
    creditSumma.innerHTML = summa.value;
    creditSumma2.innerHTML = summa.value;
    creditBtn.innerHTML = "Получить " + summa.value + " грн";
  }
  
  
})
summa.addEventListener('change', function(){
  const summaVal = summa.value;
  const summaMin = summa.min;
  
  if((parseInt(summaMin) > parseInt(summaVal)) || (summa.value == "")){
    creditSumma.innerHTML = summa.min;
    creditSumma2.innerHTML = summa.min;
    summa.value = summa.min;
    const summaVals = parseInt(summa.value);
    const rate = parseFloat(creditRate.innerHTML);
    const rate2 = parseFloat(creditRate2.innerHTML);
    const dayVal = parseInt(day.value);
    const total = (summaVals / 100 * rate) * dayVal;
    const total2 = (summaVals / 100 * rate2) * dayVal;
    creditOver.innerHTML = total;
    creditOver2.innerHTML = total2;
    const result = total + summaVals;
    const result2 = total2 + summaVals;
    creditTotal.innerHTML = result;
    creditTotal2.innerHTML = result2;
    creditBtn.innerHTML = "Получить " + summa.value + " грн";
  }
})
sliderDay.addEventListener('input', function(){
  day.value = sliderDay.value;
  creditDay.innerHTML = day.value;
  creditDay2.innerHTML = day.value;
  
})
day.addEventListener('change', function(){
  const dayMin = day.min;
  const dayVal = day.value;

  if((parseInt(dayMin) > parseInt(dayVal)) || (day.value == "")){
    creditDay.innerHTML = day.min;
    creditDay2.innerHTML = day.min;
    day.value = day.min;
    const summaVals = parseInt(summa.value);
    const rate = parseFloat(creditRate.innerHTML);
    const rate2 = parseFloat(creditRate2.innerHTML);
    const dayVal = parseInt(day.value);
    const total = (summaVals / 100 * rate) * dayVal;
    const total2 = (summaVals / 100 * rate2) * dayVal;
    creditOver.innerHTML = total;
    creditOver2.innerHTML = total2;
    const result = total + summaVals;
    const result2 = total2 + summaVals;
    
    creditTotal.innerHTML = result;
    creditTotal2.innerHTML = result2;
  }
})
day.addEventListener('input', function(){
  const dayVal = day.value;
  const dayMax = day.max;
  sliderDay.value = day.value;
  
  
 if(parseInt(dayVal) > parseInt(dayMax)){
    creditDay.innerHTML = day.max;
    creditDay2.innerHTML = day.max;
    day.value = day.max;
    
  }else{
    creditDay.innerHTML = day.value;
    creditDay2.innerHTML = day.value;
    
  }
  
})
/*==============rating-advanced===========*/
const rating1 = document.getElementById("rating-1");
const meter1 = document.getElementById("meter-1");

const something1 = parseFloat(rating1.innerHTML);
const total1 = 5;
const percent1 = something1*100/total1;

document.getElementById('meter-1').style.width = percent1 + '%';
if((percent1 < 50) & (percent1 > 30)){
  document.getElementById('meter-1').style.backgroundColor = "rgb(250, 235, 29)";
  
}

if(percent1 < 30){
  document.getElementById('meter-1').style.backgroundColor = "rgb(230, 62, 40)";
  
}

const rating2 = document.getElementById("rating-2");
const meter2 = document.getElementById("meter-2");

const something2 = parseFloat(rating2.innerHTML);
const total2 = 5;
const percent2 = something2*100/total2;

document.getElementById('meter-2').style.width = percent2 + '%';
if((percent2 < 50) & (percent2 > 30)){
  document.getElementById('meter-2').style.backgroundColor = "rgb(250, 235, 29)";
  
}

if(percent2 < 30){
  document.getElementById('meter-2').style.backgroundColor = "rgb(230, 62, 40)";
  
}

const rating3 = document.getElementById("rating-3");
const meter3 = document.getElementById("meter-3");

const something3 = parseFloat(rating3.innerHTML);
const total3 = 5;
const percent3 = something3*100/total3;

document.getElementById('meter-3').style.width = percent3 + '%';
if((percent3 < 50) & (percent3 > 30)){
  document.getElementById('meter-3').style.backgroundColor = "rgb(250, 235, 29)";
  
}

if(percent3 < 30){
  document.getElementById('meter-3').style.backgroundColor = "rgb(230, 62, 40)";
  
}

const rating4 = document.getElementById("rating-4");
const meter4 = document.getElementById("meter-4");

const something4 = parseFloat(rating4.innerHTML);
const total4 = 5;
const percent4 = something4*100/total4;

document.getElementById('meter-4').style.width = percent4 + '%';
if((percent4 < 50) & (percent4 > 30)){
  document.getElementById('meter-4').style.backgroundColor = "rgb(250, 235, 29)";
  
}

if(percent4 < 30){
  document.getElementById('meter-4').style.backgroundColor = "rgb(230, 62, 40)";
  
}
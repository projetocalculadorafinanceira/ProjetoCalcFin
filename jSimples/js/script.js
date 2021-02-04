'use strict'

const calcular = document.querySelector('.getCalc');

function calcFv(pv,time,rate){
  const resultFv = pv*(1+(time*rate));
  document.getElementById('result').textContent = `FV = ${resultFv.toFixed(4)} `;
}

function calcPv(fv,time,rate){
  const resultPv = fv / (1+(rate*time));
  document.getElementById('result').textContent = `PV = ${resultPv.toFixed(4)} `;
}

function calcTime(fv,pv,rate){
  const resultTime = ((fv/pv)-1)/rate;
  document.getElementById('result').textContent = `Time = ${resultTime.toFixed(4)} `;
}

function calcRate(fv,pv,time){
  const resultRate = (((fv/pv)-1)/time)*100;
  document.getElementById('result').textContent = `Rate = ${resultRate.toFixed(4)}% `;
}

calcular.addEventListener('click',function(){
  const fv = document.querySelector('.fv').value;
  const pv = document.querySelector('.pv').value;
  const time = document.querySelector('.time').value;
  const rate = document.querySelector('.rate').value;

  if(fv === '' && pv === '' && time === '' && rate === ''){
    alert('You must fill the blanks')
  } else if (fv === ''){
    calcFv(pv,time,rate);
  } else if (pv === ''){
    calcPv(fv,time,rate);
  } else if(time === ''){
    calcTime(fv,pv,rate);
  } else if(rate === ''){
    calcRate(fv,pv,time);
  }
  
});






'use strict'

const calcular = document.querySelector('.getCalc');

function calcFv(pv,time,rate){
  const resultFv = pv*((1+parseFloat(rate))**time);
  document.getElementById('result').textContent = `FV = ${Math.round(resultFv.toFixed(4))}`;
}

function calcPv(fv,time,rate){
  const resultPv = fv/((1+parseFloat(rate))**time);
  document.getElementById('result').textContent = `PV = ${Math.round(resultPv.toFixed(4))}`;
}

function calcTime(fv,pv,rate){
  const log1 = fv/pv;
  const log2 = (1+parseFloat(rate));
  const time = Math.log(log1)/Math.log(log2);
  document.getElementById('result').textContent = `Time: = ${Math.round(time.toFixed(4))}`;
}

function calcRate(fv,pv,time){
  const step1 = fv/pv;
  const step2 = Math.pow(step1,1/time);
  const step3 = step2-1;
  document.getElementById('result').textContent = `Rate: = ${step3.toFixed(4)*100}%`;
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
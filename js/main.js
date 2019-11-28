
'use strict'
{
  document.getElementById('btn').addEventListener('click',() => {
    const output = document.getElementById('output');

    output.textContent = null;

    const fizzNum = document.querySelector('input[name="text1"]');
    const buzzNum = document.querySelector('input[name="text2"]');

    const fizz = parseFloat(fizzNum.value);
    const buzz = parseFloat(buzzNum.value);

    if (Number.isInteger(fizz, buzz)){
      for (let i = 1; i <= 100; i++) {
        if (i % fizzNum.value === 0 && i % buzzNum.value === 0) {
          const p = document.createElement('p');
          p.textContent = 'FizzBuzz'+ i;
          output.appendChild(p);
        }else if (i % fizzNum.value === 0) {
          const p = document.createElement('p');
          p.textContent = 'Fizz'+ i;
          output.appendChild(p);
        }else if (i % buzzNum.value === 0) {
          const p = document.createElement('p');
          p.textContent = 'Buzz'+ i;
          output.appendChild(p);
        }
      }
    }else {
      const p = document.createElement('p');
      p.textContent = '整数値を入力してください';
      output.appendChild(p);
    }
  });
  
}
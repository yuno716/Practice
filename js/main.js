
'use strict'
{
  document.getElementById('btn').addEventListener('click',() => {
    const fizzNum = document.querySelector('input[name="text1"]');
    const buzzNum = document.querySelector('input[name="text2"]');

    const Num = parseFloat(fizzNum.value, buzzNum.value);
    // const fizz = parseFloat(fizzNum.value);
    // const buzz = parseFloat(buzzNum.value);

    if (Number.isInteger(Num)){
      for (let i = 1; i <= 100; i++) {
        if (i % fizzNum.value === 0 && i % buzzNum.value === 0) {
          const p = document.createElement('p');
          p.textContent = 'FizzBuzz'+ i;
          document.body.appendChild(p);
        }else if (i % fizzNum.value === 0) {
          const p = document.createElement('p');
          p.textContent = 'Fizz'+ i;
          document.body.appendChild(p);
        }else if (i % buzzNum.value === 0) {
          const p = document.createElement('p');
          p.textContent = 'Buzz'+ i;
          document.body.appendChild(p);
        }
      }
    }else {
      const p = document.createElement('p');
      p.textContent = '整数値を入力してください';
      document.body.appendChild(p);
    }
  });
  
}
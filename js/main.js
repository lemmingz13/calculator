let input = document.querySelector('.input');
const btnPlus = document.querySelector('.btn-plus'),
      btnMinus = document.querySelector('.btn-minus'),
      btnTimes = document.querySelector('.btn-times'),
      btnDivide = document.querySelector('.btn-divide'),
      btn1 = document.querySelector('.btn1'),
      btn2 = document.querySelector('.btn2'),
      btn3 = document.querySelector('.btn3'),
      btn4 = document.querySelector('.btn4'),
      btn5 = document.querySelector('.btn5'),
      btn6 = document.querySelector('.btn6'),
      btn7 = document.querySelector('.btn7'),
      btn8 = document.querySelector('.btn8'),
      btn9 = document.querySelector('.btn9'),
      btn0 = document.querySelector('.btn0'),
      btnEqual = document.querySelector('.btn-equal'),
      btnDot = document.querySelector('.btn-dot'),
      btnC = document.querySelector('.btn-c');

const btnAll = document.querySelectorAll('.btn');

let result = '';

let equal = 0;

input.oninput = () => btnNoActive();

function btnNoActive() {
    btnAll.forEach((el) => {
        el.classList.remove('btn_active');
        el.classList.remove('btn_noactive');
    });
};

btnPlus.onclick = () => {
    if(result.length > 0 || input.value) {
        result += input.value;
        result += '+';
        input.value = '';
        btnPlus.classList.add('btn_active');
        btnMinus.classList.add('btn_noactive');
        btnTimes.classList.add('btn_noactive');
        btnDivide.classList.add('btn_noactive');
        btnEqual.classList.add('btn_noactive');
    }
    
};
btnMinus.onclick = () => {
    if(result.length > 0 || input.value) {
        result += input.value;
        result += '-';
        input.value = '';
        btnPlus.classList.add('btn_noactive');
        btnMinus.classList.add('btn_active');
        btnTimes.classList.add('btn_noactive');
        btnDivide.classList.add('btn_noactive');
        btnEqual.classList.add('btn_noactive');
    }
};
btnTimes.onclick = () => {
    if(result.length > 0 || input.value) {
        result += input.value;
        result += '*';
        input.value = '';
        btnPlus.classList.add('btn_noactive');
        btnMinus.classList.add('btn_noactive');
        btnTimes.classList.add('btn_active');
        btnDivide.classList.add('btn_noactive');
        btnEqual.classList.add('btn_noactive');
    }
};
btnDivide.onclick = () => {
    if(result.length > 0 || input.value) {
        result += input.value;
        result += '/';
        input.value = '';
        btnPlus.classList.add('btn_noactive');
        btnMinus.classList.add('btn_noactive');
        btnTimes.classList.add('btn_noactive');
        btnDivide.classList.add('btn_active');
        btnEqual.classList.add('btn_noactive');
    }
};
btn1.onclick = () => {
    btnNoActive();
    input.value += 1;
};

btn2.onclick = () => {
    btnNoActive();
    input.value += 2;
};

btn3.onclick = () => {
    btnNoActive();
    input.value += 3;
};

btn4.onclick = () => {
    btnNoActive();
    input.value += 4;
};

btn5.onclick = () => {
    btnNoActive();
    input.value += 5;
};

btn6.onclick = () => {
    btnNoActive();
    input.value += 6;
};

btn7.onclick = () => {
    btnNoActive();
    input.value += 7;
};

btn8.onclick = () => {
    btnNoActive();
    input.value += 8;
};

btn9.onclick = () => {
    btnNoActive();
    input.value += 9;
};

btn0.onclick = () => {
    btnNoActive();
    input.value += 0;
};

btnDot.onclick = () => {
    btnNoActive();
    input.value += '.';
}

btnEqual.onclick = () => {
    result += input.value;
    input.value = '';
    input.value = eval(result);
    result = '';
    equal++;
};

btnC.onclick = () => {
    input.value = '';
    result = '';
    btnNoActive();
};

let q = '';

document.addEventListener('keydown', (ev) => {
    if(ev.key == '1') {
        btnNoActive();
        input.value += 1;
        btn1.classList.add('btn_active2');
        setTimeout(() => btn1.classList.remove('btn_active2'), 100);
    } else if(ev.key == '2') {
        btnNoActive();
        input.value += 2;
        btn2.classList.add('btn_active2');
        setTimeout(() => btn2.classList.remove('btn_active2'), 100);
    } else if(ev.key == '3') {
        btnNoActive();
        input.value += 3;
        btn3.classList.add('btn_active2');
        setTimeout(() => btn3.classList.remove('btn_active2'), 100);
    } else if(ev.key == '4') {
        btnNoActive();
        input.value += 4;
        btn4.classList.add('btn_active2');
        setTimeout(() => btn4.classList.remove('btn_active2'), 100);
    } else if(ev.key == '5') {
        btnNoActive();
        input.value += 5;
        btn5.classList.add('btn_active2');
        setTimeout(() => btn5.classList.remove('btn_active2'), 100);
    } else if(ev.key == '6') {
        btnNoActive();
        input.value += 6;
        btn6.classList.add('btn_active2');
        setTimeout(() => btn6.classList.remove('btn_active2'), 100);
    } else if(ev.key == '7') {
        btnNoActive();
        input.value += 7;
        btn7.classList.add('btn_active2');
        setTimeout(() => btn7.classList.remove('btn_active2'), 100);
    } else if(ev.key == '8') {
        btnNoActive();
        input.value += 8;
        btn8.classList.add('btn_active2');
        setTimeout(() => btn8.classList.remove('btn_active2'), 100);
    } else if(ev.key == '9') {
        btnNoActive();
        input.value += 9;
        btn9.classList.add('btn_active2');
        setTimeout(() => btn9.classList.remove('btn_active2'), 100);
    } else if(ev.key == '0') {
        btnNoActive();
        input.value += 0;
        btn0.classList.add('btn_active2');
        setTimeout(() => btn0.classList.remove('btn_active2'), 100);
    } else if(ev.key == 'Enter') {
        result += input.value;
        input.value = '';
        input.value = eval(result);
        result = '';
        equal++;
        btnEqual.classList.add('btn_active2');
        setTimeout(() => btnEqual.classList.remove('btn_active2'), 100);
    } else if(ev.key == 'Backspace') {
        q = input.value;
        input.value = q.slice(0, q.length - 1);
    }
});


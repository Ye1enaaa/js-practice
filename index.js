function changeThis(){
    let x = 5;
    let y = 6;
    z = x + y;
    document.getElementById('head').innerHTML='Hello Dear';
}

function changeDate(){
    let date = new Date();
    let year= date.setFullYear(2023, 12, 1);
    document.getElementById('date').innerHTML= date;
}

function addMe(){
    let firstNum = parseInt(document.getElementById('fNum').value);
    let secondNum =parseInt(document.getElementById('sNum').value);
    let result = firstNum + secondNum;
    document.getElementById('result').innerHTML = result;
}

function subtractMe(){
    let firstNum = parseInt(document.getElementById('fNum').value);
    let secondNum =parseInt(document.getElementById('sNum').value);
    let result = firstNum - secondNum;
    document.getElementById('result').innerHTML = result;
}

function multiplyMe(){
    let firstNum = parseInt(document.getElementById('fNum').value);
    let secondNum =parseInt(document.getElementById('sNum').value);
    let result = firstNum * secondNum;
    document.getElementById('result').innerHTML = result;
}

function divideMe(){
    let firstNum = parseInt(document.getElementById('fNum').value);
    let secondNum =parseInt(document.getElementById('sNum').value);
    let result = firstNum / secondNum;
    document.getElementById('result').innerHTML = result;
}

function randomNumberGen(){
    let rndomGen = Math.floor(Math.random()*10);

    document.getElementById('randomGen').innerHTML= rndomGen;
}

function yes(){
    let yes = document.getElementById('yes').value;
    document.getElementById('welcome').innerHTML = 'Welcome'
}

function no(){
    let no = document.getElementById('no').value;
    document.getElementById('welcome').innerHTML = 'Sorry'
}


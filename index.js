function changeThis(){
    let x = 5;
    let y = 6;
    z = x + y;
    document.getElementById('head').innerHTML='Hello Dear';
}

function changeDate(){
    const date = new Date('2023-12-1');
    document.getElementById('date').innerHTML=date;
}

function addMe(){
    let firstNum = parseInt(document.getElementById('fNum').value);
    let secondNum =parseInt(document.getElementById('sNum').value);
    let result = firstNum + secondNum;
    console.log(result);
    document.getElementById('result').innerHTML = result;
}
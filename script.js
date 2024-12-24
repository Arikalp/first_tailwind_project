
function addNumbers(num1, num2) {
      let result = num1 + num2;
      document.getElementById('result').innerText = 'Result: ' + result;
    }

function mulNum(num1, num2)
{
    let result = num1 * num2;
    document.getElementById('result').innerText = 'Result: ' + result;
}

function subNum(num1, num2)
{
    let result = num1 - num2;
    document.getElementById('result').innerText = 'Result: ' + result;
}

function divNum(num1,num2) 
{

    if(num2 == 0)
    {
        document.getElementById('result').innerText = 'Result: Division by zero is not allowed';
        return;
    }
    let result = num1 / num2;
    document.getElementById('result').innerText = 'Result: ' + result;
}

function main()
{

    var num1 = parseFloat(document.getElementById('num1').value) || 0;
    var num2 = parseFloat(document.getElementById('num2').value) || 0;

    var ch=document.getElementById('operator').value;
    if(ch=='+')
    {
        document.getElementById('button').innerText='Add';
        addNumbers(num1,num2);
    }
    else if(ch=='-')
    {
        document.getElementById('button').innerText='Subtract';
        subNum(num1,num2);
    }
    else if(ch=='*')
    {
        document.getElementById('button').innerText='Multiply';
        mulNum(num1 , num2);
    }
    else if(ch=='/')
    {
        document.getElementById('button').innerText='Divide';
        divNum(num1,num2);
    }
    else
    {
        document.getElementById('button').innerText='Invalid Operator';
        document.getElementById('result').innerText = 'Result: Invalid Operator';
    }
}
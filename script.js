function checkEvenOdd(){
    var number = document.getElementById("numberInput").value;
    number = parseFloat(number);
    if (number % 2 === 0)
    {
        result = "The number " + number + " is Even.";
    }
    else
    {
        result = "The number " + number + " is Odd.";
    }
    document.getElementById("result").innerHTML = result;
}
function getNumber(num){
    var num1 = document.getElementById("inp");
    num1.value += num;
}

function clearInp(){
    var num1 = document.getElementById("inp");
    num1.value = "";
}

function result(){
    var num1 = document.getElementById("inp");
    num1.value = eval(num1.value);
}
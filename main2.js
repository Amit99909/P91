function multiply(){
   var num1 =localStorage.getItem("p1");
    var num2 =localStorage.getItem("p2");
    document.getElementById("name1").innerHTML=num1;
    document.getElementById("name2").innerHTML=num2;
    document.getElementById("qt").innerHTML=num1;
    document.getElementById("at").innerHTML=num2;
    var p1_score =0,p2_score=0;
    document.getElementById("score1").innerHTML=p1_score;
    document.getElementById("score2").innerHTML=p2_score;
}

function send() {
    number1 =document.getElementById("number1").value;
    number2 =document.getElementById("number2").value;    
    answer = parseInt(number1)*parseInt(number2);
    qn = "<h4>"+number1+" X "+number2+"<h4>";
    input = "<br>Answer :<input type='text' id='input_text_box'>";
    check ="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = qn+input+check;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value ="";
    document.getElementById("number2").value ="";
}
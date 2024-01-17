var mark1=Number(prompt("Enter your math marks"))
var mark2=Number(prompt("Enter your bio marks"))
var mark3=Number(prompt("Enter your eng marks"))
var mark4=Number(prompt("Enter your che marks"))
var mark5=Number(prompt("Enter your phy marks"))
var obtainmarks=mark1+mark2+mark3+mark4+mark5
console.log(obtainmarks)
var totalmarks=500
var percentage=obtainmarks*100/totalmarks
alert(percentage)
var prect=prompt("Enter your precentage")
if(prect>=60&&prect<70){
    alert("B Grade")
}
else if(prect>=70&&prect<80){
    alert("A Grade")
}
else if(prect>=80&&prect<90){
    alert("A1 Grade")
}
else if(prect===90){
    alert("2nd position")
}
else if(prect>90){
    alert("1st position")
}

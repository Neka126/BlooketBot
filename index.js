var auto = false;
var getAnswers = function(id){
var d = document.getElementsByClassName("styles__answersHolder___1EiBB-camelCase");
var d2 = d[0];
var a1 = d2.children[0].children[0].children[0];
var a2 = d2.children[1].children[0].children[0];
var a3 = d2.children[2].children[0].children[0];
var a4 = d2.children[3].children[0].children[0];
var a = ["",a1,a2,a3,a4]
$.getJSON("https://api.blooket.com/api/games?gameId="+id,function(data){
for(var i=0;i<data.questions.length;i++)
if(document.getElementsByClassName("styles__questionText___1mqO1-camelCase")[0].innerHTML.includes(data.questions[i].question)){
if(a[1].innerHTML.includes(data.questions[i].correctAnswers)){a[1].click()}else
if(a[2].innerHTML.includes(data.questions[i].correctAnswers)){a[2].click()}else
if(a[3].innerHTML.includes(data.questions[i].correctAnswers)){a[3].click()}else
if(a[4].innerHTML.includes(data.questions[i].correctAnswers)){a[4].click()}

}
})
setTimeout(function(){document.getElementsByClassName("arts__regularBody___3lHde-camelCase")[0].click();setTimeout(function(){if(auto===true){getAnswers(id)}},1600)},3200);
setTimeout(function(){if(document.getElementsByClassName("styles__background___206nQ-camelCase")!=[]){document.getElementsByClassName("styles__background___206nQ-camelCase")[0].click()}},100);
setTimeout(function(){document.getElementsByClassName("styles__choice1___ob1sd-camelCase")[0].click()},1400);

setTimeout(function(){document.getElementsByClassName("arts__regularBody___3lHde-camelCase")[0].click()},1500);
setTimeout(function(){document.getElementsByClassName("arts__regularBody___3lHde-camelCase")[0].click();},1600);
setTimeout(function(){if(auto===true){getAnswers(id)}},1800);
}

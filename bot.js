var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
var neka = {Blooket:{}}
neka.Blooket.auto = false;
neka.Blooket.getAnswers = function(id){
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
setTimeout(function(){if(document.getElementsByClassName("arts__regularBody___3lHde-camelCase")[0]){document.getElementsByClassName("arts__regularBody___3lHde-camelCase")[0].click();setTimeout(function(){if(neka.Blooket.auto===true){getAnswers(id)}},1600);}},3200);
setTimeout(function(){if(document.getElementsByClassName("styles__background___206nQ-camelCase")!=[]){document.getElementsByClassName("styles__background___206nQ-camelCase")[0].click()}},900);
setTimeout(function(){if(document.getElementsByClassName("styles__chest___3wN6v-camelCase")[0]){document.getElementsByClassName("arts__regularBody___3lHde-camelCase")[0].click()}},1000);
setTimeout(function(){if(document.getElementsByClassName("arts__regularBody___3lHde-camelCase")[0]){document.getElementsByClassName("arts__regularBody___3lHde-camelCase")[0].click();}},1500);
setTimeout(function(){if(neka.Blooket.auto===true){getAnswers(id)}},1600);
}

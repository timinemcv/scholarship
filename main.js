let error=document.getElementById("error")
let First=document.getElementById("First")
let lastName=document.getElementById("lastName")
let Last=document.getElementById("Last")
let error1=document.getElementById("error1")
let error2=document.getElementById("error2")
let error3=document.getElementById("error3")
let error4=document.getElementById("error4")
let error5=document.getElementById("error5")
let error6a=document.getElementById("error6a")
let error7=document.getElementById("error7")
let error8=document.getElementById("error8")
let error9=document.getElementById("error9")
let error10=document.getElementById("error10")
let error11=document.getElementById("error11")
let error12=document.getElementById("error12")
let error13=document.getElementById("error13")
let error14=document.getElementById("error14")
let error15=document.getElementById("error15")
let error16=document.getElementById("error16")
let error17=document.getElementById("error17")
let error18=document.getElementById("error18")
let error19=document.getElementById("error19")
let error20=document.getElementById("error20")
let error21=document.getElementById("error21")
let error22=document.getElementById("error22")
let error23=document.getElementById("error23")
let sex=document.getElementsByName("sex")
let religion=document.getElementsByName("religion")
// let status1=document.getElementsByName("status1")
let mess=document.getElementById("mess")
let mess1=document.getElementById("mess1")
let mess2=document.getElementById("mess2")
let mess3=document.getElementById("mess3")
let mess4=document.getElementById("mess4")
let digits=document.getElementById("digits")
let selectOption=document.getElementById("selectOption")
let selectOption1=document.getElementById("selectOption1")
let selectOption4=document.getElementById("selectOption4")
let selectOption5=document.getElementById("selectOption5")
let selectOption6=document.getElementById("selectOption6")
let selectOption7=document.getElementById("selectOption7")
let selectOption8=document.getElementById("selectOption8")
let selectOption9=document.getElementById("selectOption9")
let scoreA=document.getElementById("scoreA")
let scoreB=document.getElementById("scoreB")
let score=document.getElementById("score")
let score1=document.getElementById("score1")
let score2=document.getElementById("score2")
let score3=document.getElementById("score3")
let score4=document.getElementById("score4")
let score5=document.getElementById("score5")
let score6=document.getElementById("score6")
let message=document.getElementById("message")
let btn_proceed=document.getElementById("btn_proceed")
let todayDate;
let currentYear;
let dob;
let old;
let yrs
let Continentpoint=0
let agepoint=0
let xValues 
let yValues
let barColors
let gradepoint=0
let totalpoint=0
let scorepoint=0




btn_proceed.addEventListener("click", () => { 
validateInputs();
})


function validateInputs() {
    if(First.value==""){
        error.innerHTML="Can't be empty"
    }else{
        error.innerHTML="";
    }if(lastName.value==""){
        error23.innerHTML="Can't be empty"
    }else{
        error23.innerHTML="";
    }if(Last.value==""){
        error22.innerHTML="Can't be empty"
    }else{
        error22.innerHTML="";
    }
    if(sex[0].checked=="" && sex[1].checked==""){
        error1.innerHTML="Choose an option"
    }else{
        error1.innerHTML="";
    }if(religion[0].checked=="" && religion[1].checked=="" && religion[2].checked==""){
        error2.innerHTML="Choose an option"
    }else{
        error2.innerHTML="";
    }if(mess.value==""){
        error3.innerHTML="please fill the box"
    }else{
        error3.innerHTML="";
    }if(digits.value==""){
        error4.innerHTML="please fill the box"
    }else{
        error4.innerHTML="";
    }if(mess1.value==""){
        error5.innerHTML="please fill the box"
    }else{
        error5.innerHTML="";
    }if(mess2.value==""){
        error6a.innerHTML="please fill the box"
    }
    else{
        error6a.innerHTML="";
    }if(mess3.value==""){
        error7.innerHTML="please fill the box"
    }else{
        error7.innerHTML="";
    }if(selectOption.value==""){
        error8.innerHTML="select an option"
    }else{
        error8.innerHTML="";
    }
    if(selectOption1.value==""){
        error10.innerHTML="select an option"
    }else{
        error10.innerHTML="";
    }if(scoreA.value==""){
        error14.innerHTML="select an option"
    }else{
        error14.innerHTML="";
    }if(scoreB.value==""){
        error15.innerHTML="select an option"
    }else{
        error15.innerHTML="";
    }if(score1.value==""){
        error16.innerHTML="select an option"
    }else{
        error16.innerHTML="";
    }if(score2.value==""){
        error17.innerHTML="select an option"
    }else{
        error17.innerHTML="";
    }if(score3.value==""){
        error18.innerHTML="select an option"
    }else{
        error18.innerHTML="";
    }if(score4.value==""){
        error19.innerHTML="select an option"
    }else{
        error19.innerHTML="";
    }if(score5.value==""){
        error20.innerHTML="select an option"
    }else{
        error20.innerHTML="";
    }if(score6.value==""){
        error21.innerHTML="select an option"
    }else{
        error21.innerHTML="";}
    if(First.value != "" && lastName.value != "" && Last.value != "" && sex.checked !="" && religion.checked !="" && mess.value !="" && mess1.value !="" && mess2.value !="" && mess3.value !="" && selectOption.value !="" && selectOption1.value !="" && scoreA.value !=="" && scoreB.value !=="" && score1.value !=="" && score2.value !=="" &&  score3.value !=="" && score4.value !=="" && score5.value !=="" && score6.value !="" && digits.value !=""){
        ageSection()
    }
  }
  function ageSection(){
    todayDate= new Date()
    currentYear=todayDate.getFullYear()
    old=new Date(mess2.value)
    yrs=old.getFullYear()
    dob=currentYear - yrs;
    if(dob >= 18 && dob <=24){
        agepoint +=100
    }else if(dob >= 25 && dob <=30){
        agepoint +=80
    }else if(dob >=32 && dob <=36){
        agepoint +=50
    }else if(dob >=36 && dob <=40){
        agepoint +=30
    }else if(dob >=40){
        agepoint +=10
    }else{
        agepoint +=0
    }
    Continent()
  } 
  function Continent(){
    if(selectOption.value=="Africa"){
        Continentpoint +=50;
    }else if(selectOption.value=="Asia"){
        Continentpoint +=40
    }else if(selectOption.value=="South"){
        Continentpoint +=30
    }else if(selectOption.value=="North"){
        Continentpoint +=20
    }else{
        Continentpoint +=0
    }
    gradeSection()
}
  function gradeSection(){
    let grade1=Number(scoreA.value)
    let grade2=Number(scoreB.value)
    let grade3=Number(score1.value)
    let grade4=Number(score2.value)
    let grade5=Number(score3.value)
    let grade6=Number(score4.value)
    let grade7=Number(score5.value)
    let grade8=Number(score6.value)

let average=(grade1 + grade2 + grade3 + grade4 + grade5 + grade6 + grade7 + grade8)/8
if(average>=90 && average<=100){
scorepoint += 150
}else if(average>=85 && average<=89){
    scorepoint += 140
}else if(average>=75 && average<=84){
    scorepoint += 120
}else if(average>=65 && average<=74){
    scorepoint += 100
}else if(average>=60 && average<=64){
    scorepoint += 80
}else if(average>=50 && average<=59){
    scorepoint += 50
}else if(average>=40 && average<=49){
    scorepoint += 20
}else{scorepoint+=0}

totalsection()
}
function totalsection(){
totalpoint=agepoint+Continentpoint+scorepoint
if(totalpoint >= 180){

xValues = ["age", "grade", "continent"];
yValues = [agepoint,Continentpoint,scorepoint];
barColors = ["#b91d47", "#00aba8","#2b5797"];

new Chart("myChart", {
  type:"pie",data: { labels: xValues, datasets:
     [{ backgroundColor: barColors,data: yValues
    }]  }, options: { title: {display: true,text: "Grade ranking"}
  }
});
message.innerHTML="Congratulations...We've successfully grant you Scholarship"
}else{
message.innerHTML="You are NOT qualify for the scholarship"}


}
let subjectList = ['Select','Geography','F.mathematics','Yoruba','Commerce','Art','Social Studies','Economics', 'Biology', 'Chemistry', 'Physics', 'Government','Accounting','Banking and Finance'];


function subjectsdropdown1(){
    let firstOption = new Set();
    subjectList.forEach((i)=>firstOption.add(i));
    let firstList = [...firstOption];

    selectOption4.innerHTML = '';
    firstList.forEach(item => {
        let options = document.createElement('option');
        options.textContent = item;
        selectOption4.appendChild(options);
    });
    selectOption4.addEventListener('change', ()=>{
        let dropdown1 = selectOption4.value
        subjectsdropdown2(firstList, dropdown1);
    })
}

function subjectsdropdown2(data,choose){
    let filterSubjectList = data.filter(r => r != choose);
    let secondOption = new Set();
    filterSubjectList.forEach(r => secondOption.add(r));
    let secondList = [...secondOption];

    selectOption5.innerHTML = '';
    secondList.forEach(item => {
        let option = document.createElement('option');
        option.textContent = item;
        selectOption5.appendChild(option);
    });
    
    selectOption5.addEventListener('change', ()=>{
        let dropdown2=selectOption5.value;
        subjectsdropdown3(secondList,dropdown2);
    })
}

function subjectsdropdown3(data,choose){
    let filterSubjectList = data.filter(r => r != choose);
    let ThirdOption = new Set();
    filterSubjectList.forEach(r => ThirdOption.add(r));
    let ThirdList = [...ThirdOption];

    selectOption6.innerHTML = '';
    ThirdList.forEach(item => {
        let option = document.createElement('option');
        option.textContent = item;
        selectOption6.appendChild(option);
    });
    
    selectOption6.addEventListener('change', ()=>{
        let dropdown3=selectOption6.value;
        subjectsdropdown4(ThirdList,dropdown3);
    })  
} 
function subjectsdropdown4(data,choose){
    let filterSubjectList = data.filter(r => r != choose);
    let FourthOption = new Set();
    filterSubjectList.forEach(r => FourthOption.add(r));
    let FourthList = [...FourthOption];

    selectOption7.innerHTML = '';
    FourthList.forEach(item => {
        let option = document.createElement('option');
        option.textContent = item;
        selectOption7.appendChild(option);
    });
    
    selectOption7.addEventListener('change', ()=>{
        let dropdown4=selectOption7.value;
        subjectsdropdown5(FourthList,dropdown4);
    })
    
}
function subjectsdropdown5(data,choose){
    let filterSubjectList = data.filter(r => r != choose);
    let FifthOption = new Set();
    filterSubjectList.forEach(r => FifthOption.add(r));
    let FifthList = [...FifthOption];

    selectOption8.innerHTML = '';
    FifthList.forEach(item => {
        let option = document.createElement('option');
        option.textContent = item;
        selectOption8.appendChild(option);
    });
    
    selectOption8.addEventListener('change', ()=>{
        let dropdown5=selectOption8.value;
        subjectsdropdown6(FifthList,dropdown5);
    })
    
}function subjectsdropdown6(data,choose){
    let filterSubjectList = data.filter(r => r != choose);
    let SixthOption = new Set();
    filterSubjectList.forEach(r => SixthOption.add(r));
    let SixthList = [...SixthOption];

    selectOption9.innerHTML = '';
    SixthList.forEach(item => {
        let option = document.createElement('option');
        option.textContent = item;
        selectOption9.appendChild(option);
    });
    
    
}

window.onload=subjectsdropdown1()

const addForm = document.getElementById("addForm"),
histories = document.getElementById("histories"),
recordName = document.getElementById("recordName"),
recordValue = document.getElementById("recordValue"),
income = document.getElementById("income"),
minus = document.getElementById("minus"),
balance = document.getElementById("balance"),
recordValues = document.getElementsByClassName("record_value"),
recordNames = document.getElementsByClassName("record_name");

let recordObj = JSON.parse(localStorage.getItem("Record")) || {}; // 반드시 "||" 앞에 유무체크 원하는 값을 입력해야 함

function totalIncome(){
    let incomeValue = 0;
    let minusValue = 0;
    let total = 0;
    for(let i=0 ; i< recordValues.length ; i++){
        if(parseInt(recordValues[i].innerHTML) >= 0){
        incomeValue += parseInt(recordValues[i].innerHTML) ;
        income.innerHTML = `₩${incomeValue}`;
        }
        else{
        minusValue += parseInt(recordValues[i].innerHTML);
        minus.innerHTML = `₩${-minusValue}`;
        }
    }
    total = incomeValue + minusValue;
    balance.innerHTML = `₩${total}`;
    save();
}

function handleSubmit(e){
    e.preventDefault();
    const div = document.createElement("div"),
    span1 = document.createElement("span"),
    span2 = document.createElement("span");
    div.id = "record";
    div.className = "record";
    span1.id = "recordName";
    span1.className = "record_name";
    span1.innerHTML = recordName.value;
    span2.id = "recordValue";
    span2.className = "record_value";
    div.appendChild(span1);
    if(recordValue.value < 0){
        div.style.borderRight = "solid 4px #C0392B";
        span2.innerHTML = recordValue.value;
        div.appendChild(span2);

    }
    else{
        span2.innerHTML = `+${recordValue.value}`;
        div.appendChild(span2);
    } // 양수와 음수에 따른 표기 구별
    histories.appendChild(div);
    recordName.value = "";
    recordValue.value = null; //내역 추가
    totalIncome()
}

function save(){
    for(let i=0 ; i< recordValues.length ; i++){
        recordObj[recordNames[i].innerHTML] = parseInt(recordValues[i].innerHTML);
    }
    localStorage.setItem("Record", JSON.stringify(recordObj));
    
} // localStorage화 

function load(){
    let savedNames = Object.keys(recordObj);
    let savedValues = [];
    console.log(Object.keys(recordObj).length)
    for(let i=0 ; i < Object.keys(recordObj).length ; i++){ // 오브젝트는 그 자체로 length가 없음 그래서 배열로 변환하여 length측정.
        savedValues.push(recordObj[Object.keys(recordObj)[i]]) // 저장되어있는 오브젝트 모든 값을 불러오기
        const div = document.createElement("div"),
    span = document.createElement("span");
    span1 = document.createElement("span"),
    span2 = document.createElement("span"),
    div.id = "record";
    div.className = "record";
    span.id = "deleteBtn";
    span.className = "delete-btn";
    span.innerHTML = "✖";
    span1.id = "recordName";
    span1.className = "record_name";
    span1.innerHTML = savedNames[i];
    span2.id = "recordValue";
    span2.className = "record_value";
    div.appendChild(span);
    div.appendChild(span1);
    if(savedValues[i] < 0){
        div.style.borderRight = "solid 4px #C0392B";
        span2.innerHTML = savedValues[i];
        div.appendChild(span2);
    }
    else{
        span2.innerHTML = `+${savedValues[i]}`;
        div.appendChild(span2);
    } // 양수와 음수에 따른 표기 구별
    histories.appendChild(div);
    recordName.value = "";
    recordValue.value = null; //내역 추가
    totalIncome()
    } 
    
}

function remove(){

}

function init(){
    load()
    addForm.addEventListener("submit", handleSubmit);

}

init();
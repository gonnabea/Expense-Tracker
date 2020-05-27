const addForm = document.getElementById("addForm"),
histories = document.getElementById("histories"),
recordName = document.getElementById("recordName"),
recordValue = document.getElementById("recordValue"),
income = document.getElementById("income"),
minus = document.getElementById("minus"),
balance = document.getElementById("balance")

function totalIncome(){
    const recordValues = document.getElementsByClassName("record_value");
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

function init(){
    addForm.addEventListener("submit", handleSubmit);

}

init();
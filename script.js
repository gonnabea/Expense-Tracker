const addForm = document.getElementById("addForm"),
histories = document.getElementById("histories"),
recordName = document.getElementById("recordName"),
recordValue = document.getElementById("recordValue");

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
    span2.className = "record.value";
    if(recordValue.value < 0){
        div.style.borderRight = "solid 4px #C0392B";
        span2.innerHTML = recordValue.value;
    }
    else{
        span2.innerHTML = `+${recordValue.value}`;
    } // 양수와 음수에 따른 표기 구별
    div.appendChild(span1);
    div.appendChild(span2);
    histories.appendChild(div);
    recordName.value = "";
    recordValue.value = null; //내역 추가
}

function init(){
    addForm.addEventListener("submit", handleSubmit);
}

init();
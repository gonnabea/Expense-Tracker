const addForm = document.getElementById("addForm"),
histories = document.getElementById("histories")

function handleSubmit(e){
    e.preventDefault();
    const recordName = e.target[0].value,
    recordValue = e.target[1].value;
    const div = document.createElement("div"),
    span1 = document.createElement("span"),
    span2 = document.createElement("span");
    div.id = "record";
    div.className = "record";
    span1.id = "recordName";
    span1.className = "record_name";
    span1.innerHTML = recordName;
    span2.id = "recordValue";
    span2.className = "record.value";
    span2.innerHTML = recordValue;
    div.appendChild(span1);
    div.appendChild(span2);
    histories.appendChild(div);
}

function init(){
    addForm.addEventListener("submit", handleSubmit);
}

init();
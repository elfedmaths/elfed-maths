function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + Math.ceil(min);
}

function addRow(quest, ans){
    if (localStorage.getItem("quest-data") === null) {
        var data = [];
    }else{
        var data = JSON.parse(localStorage.getItem('quest-data'));
    }
    data.push([quest, ans]);
    try {
        localStorage["quest-data"] = JSON.stringify(data);
    } catch (e) {
        alert("Error when writing to Local Storage\n" + e);
    }
}

function clearData(){
    localStorage.clear();
}

function fetchData(){
    if (localStorage.getItem("quest-data") === null) {
        var data = [];
    }else{
        var data = JSON.parse(localStorage.getItem('quest-data'));
    }
    return data;
}
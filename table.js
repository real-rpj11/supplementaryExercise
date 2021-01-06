var mountains = [{
    Name: "Kilimanjaro",
    Height: 5895,
    Place: "Tanzania"
}, {
    Name: "Everest",
    Height: 8848,
    Place: "Nepal"
}, {
    Name: "Mayon",
    Height: 2463,
    Place: "Philippines"
}, {
    Name: "Denali",
    Height: 6190,
    Place: "USA"
}, ];

function tableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function makeTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}


let table = document.querySelector("table");
let data = Object.keys(mountains[0]);
tableHead(table, data);
makeTable(table, mountains);
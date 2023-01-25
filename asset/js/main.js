const addElementBtn = document.getElementById("addElementBtn");
const createTableBtn = document.getElementById("createTableBtn");
const generateOutputBtn = document.getElementById("generateOutput");
let arr = [];

addElementBtn.addEventListener("click", () => {
    let inputArr = document.getElementById("display");
    let input = document.getElementById("input");
    inputArr.innerHTML = "Input array => ";

    let inputString = String(input.value);
    if(inputString.includes(",")){
        arr = inputString.split(",");
        console.log(arr)
    }
    else if(inputString.includes(" ")){
        arr = inputString.split(" ");
        console.log(arr)
    }
    else{
        arr = [];
        console.log(arr)
    }
   
    inputArr.innerHTML += "[" + arr + "]";
})


createTableBtn.addEventListener("click", () => {
    let maxArr = 0;
    for (let i = 0; i < arr.length; i++) {
        maxArr = Math.max(maxArr, arr[i]);
    } 
    for (let row = 0; row <= maxArr; row++) {
        let rows = document.getElementById("inputTable").insertRow(row);
        for (let col = 0; col < arr.length; col++) {
            rows.insertCell(col);
        }
    } 
    let table = document.getElementById("inputTable");
    for (let col = 0; col < arr.length; col++) {
        for (let row = maxArr; row > maxArr - arr[col]; row--) {
            table.rows[row].cells[col].style.backgroundColor = "yellow";
        }
    }
})

generateOutputBtn.addEventListener("click", () => {
    let maxArr = 0;
    for (let i = 0; i < arr.length; i++) {
        maxArr = Math.max(maxArr, arr[i]);
    }
    for (let row = 0; row <= maxArr; row++) {
        let rows = document.getElementById("outputTable").insertRow(row);
        for (let col = 0; col < arr.length; col++) {
             rows.insertCell(col);
        }
    }
    
    let table = document.getElementById("outputTable");
    for (let col = 0; col < arr.length; col++) {
        for (let row = maxArr; row > maxArr - arr[col]; row--) {
            table.rows[row].cells[col].style.backgroundColor = "#FFFF00";
        }
    }

    let left = [];
    let right = [];
    left[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        left[i] = Math.max(left[i - 1], arr[i]);
    }
    right[arr.length - 1] = arr[arr.length - 1]; 
    for (let i = arr.length - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], arr[i]);
    }
    let result = 0;
    for (let col = 0; col < arr.length; col++) {
        let count = 0;
        let row = Math.max(left[col], right[col]) - arr[col];
        while (count < Math.min(left[col], right[col]) - arr[col]) {
            table.rows[row].cells[col].style.backgroundColor = "#1ca3ec";
            row--;
            count++;
        }
        result += Math.min(left[col], right[col]) - arr[col]; 
    }
    let resultArr = document.getElementById("output");
    resultArr.innerHTML += result + " Units";
})
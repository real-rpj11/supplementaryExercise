console.log("3. Reversing an Array");
var arr = ["Resonance", "Nectar", "Work It", "Volcano", "Punch"];
console.log("Original Array", arr);

function reverseArray() {
    console.log("reverseArray Function", arr.reverse());
}

function reverseArrayInPlace() {
    console.log("reverseArrayInPlace Function", arr.reverse());
}

reverseArray();
reverseArrayInPlace();
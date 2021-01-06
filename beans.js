var word = "Birthday";
console.log("2. Bean Counting\nWORD: ", word);

function countBs(word) {
    var count = 0;
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) == "B") {
            count += 1;
        }
    }
    return count;
}
console.log("Number of B: " + countBs(word));

var str = "Blingbing";
console.log("WORD: ", str);

function countChar(str, char) {
    var length1 = str.length;
    var regexp = new RegExp(char, "g");
    var length2 = str.replace(regexp, "").length;

    return length1 - length2;
}
console.log("Number of i: " + countChar(str, "i"));
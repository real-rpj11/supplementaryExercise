//Looping a triangle
function triangleHash() {
    console.log("1. Looping a triangle")
    let hash = '';
    for (i = 0; i <= 7; i++) {
        for (j = 1; j <= i; j++) {
            hash += '#';
        }
        hash += '\n';
    }
    console.log(hash);
}
triangleHash()
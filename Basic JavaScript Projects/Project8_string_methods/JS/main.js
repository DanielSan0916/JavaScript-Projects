// Using the .concat() method
function full_sentence(){
    var part1 = "The quick brown fox";
    var part2 = "jumps over the lazy dog.";
    var part3 = "This is a classic example of a pangram.";
    var Whole_sentence = part1.concat(part2, part3);
    document.getElementById("StringMethod").innerHTML = Whole_sentence;
}

// Using the .slice() method
function slice_Method() {
    var sentence = "The quick brown fox jumps over the lazy dog.";
    var section = sentence.slice(16, 19);
    document.getElementById("Slice").innerHTML = section;
}

// Using the .toString() method
function string_Method() {
    var number = 999;
    document.getElementById("ToString").innerHTML = number.toString();
}

// Using the .toPrecision() method
function precision_Method() {
    var myNumber = 123456789;
    document.getElementById("SpecificLength").innerHTML = num.toPrecision(5);
} 
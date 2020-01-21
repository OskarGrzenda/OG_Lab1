//Spaces
function wordCount(word) {
    var count = word.replace(/\s/g, "").length;
    return count;
}
var myCount = wordCount("Test 1");
console.log(myCount);
//Combine both function created in 1 and 2, into one function which accepts an
//optional parameter, so character count on input string can include or exclude spaces.
function str_len_both(value, spaces) {
    if (spaces === void 0) { spaces = false; }
    var num;
    if (spaces) {
        num = value.replace(/\s+/, "").length;
    }
    else {
        num = value.length;
    }
    return num;
}
console.log("Function combined: String length with spaces and all is:" + str_len_both("test 1", false));
console.log("Function combined: String length with spaces not included in the count: " + str_len_both("test 1", true));
console.log("Function combined: String length with spaces and all is, not setting spaces parameter so will default to false: " + str_len_both("test 1"));

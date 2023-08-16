function convertDoubleSpaceToSingle(str) {
    // your code here
    let r = str.split("  ");
    r = r.join(" ");
    return r;
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

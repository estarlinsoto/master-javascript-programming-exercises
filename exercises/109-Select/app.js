// Write your function here
const select = (arr, obj) => {
    let nuevo = {};
    arr.forEach((e) => {
        if(obj[e]) {
            nuevo[e] = obj[e]
        }
    })
    return nuevo

}
// Write your function here
const removeElement = (arr, item) => {
    let r = arr.filter(x => x !== item)
    return r;
}
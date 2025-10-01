export function arraystr(array) {
    let str = ''
    for (let i in array) {
        str += `${array[i]} `
    }
    return str
}
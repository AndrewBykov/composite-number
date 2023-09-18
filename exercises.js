
function checkNumber(a) {
    
    let arr = [1,2,3,4,5,6,7,8,9].filter(item => a % item == 0).length
    arr
    return arr <= 2 ? `Это просто число: ${arr} делителя` : `Это составное число: ${arr} делителя`
    
}

const res = checkNumber(67)

console.log(res)












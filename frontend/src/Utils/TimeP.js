export const formatTiempo = (difH = 0, difM = 0) => {
    let str = Date()
    let arr = str.split(" ")
    let diflocal = str[28] + str[29] + str[30]
    diflocal = parseInt(diflocal)
    arr = arr.splice(0,5)
    arr[4] = arr[4].split(":")
    arr = arr.flat()
    //arr = arr.splice(1,6)
    if(arr[1]==="Jan") arr[1] = "01"
    if(arr[1]==="Feb") arr[1] = "02"
    if(arr[1]==="Mar") arr[1] = "03"
    if(arr[1]==="Apr") arr[1] = "04"
    if(arr[1]==="May") arr[1] = "05"
    if(arr[1]==="Jun") arr[1] = "06"
    if(arr[1]==="Jul") arr[1] = "07"
    if(arr[1]==="Aug") arr[1] = "08"
    if(arr[1]==="Sep") arr[1] = "09"
    if(arr[1]==="Oct") arr[1] = "10"
    if(arr[1]==="Nov") arr[1] = "11"
    if(arr[1]==="Dec") arr[1] = "12"
    arr[4] = parseInt(arr[4]) + difH - diflocal
    arr[5] = parseInt(arr[5]) + difM
    if(arr[4]>24) arr[4] = arr[4] - 24
    if(arr[5]>60) {arr[5] = arr[5] - 60; arr[4] = arr[4] + 1}
    if(arr[4]<10) arr[4] = "0" + arr[4]
    if(arr[5]<10) arr[5] = "0" + arr[5]
    arr[4] = arr[4].toString()
    arr[5] = arr[5].toString()
    if(difH<=-12) arr[2] = parseInt(arr[2]) - 1 
    if(difH>=12) arr[2] = parseInt(arr[2]) + 1 
    arr[2] = arr[2].toString()
    return [arr, `${arr[4]}:${arr[5]}:${arr[6]}`, `${arr[0]} ${arr[2]}/${arr[1]}/${arr[3]}`]
}
const parseArgs = () => {
let arr = process.argv
    arr.forEach(item => {
        if (item.includes("--")){
            console.log(item +" is " + arr[arr.indexOf(item)+1])
        }
    })
}

parseArgs();